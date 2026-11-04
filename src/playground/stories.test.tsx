import { act, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Playground from "./Playground";
import { generateCode } from "./codegen";
import { initialArgs } from "./useArgs";
import type { AnyStory, ArgTypeBase } from "./types";

const modules = import.meta.glob<{ default: AnyStory }>(
  "/src/templates/component-library/**/*.story.{ts,tsx}",
  { eager: true },
);
const stories = Object.entries(modules).map(([path, m]) => [path.split("/").slice(-2).join("/"), m.default] as const);

describe("every story", () => {
  it("is found", () => {
    expect(stories.length).toBeGreaterThan(10);
  });

  describe.each(stories)("%s", (_, story) => {
    const argTypes = story.argTypes as Record<string, ArgTypeBase & { required?: boolean }>;

    it("renders without hitting the error boundary and lists its visible props", () => {
      render(<Playground story={story} />);
      expect(screen.queryByText(/This combination threw/)).not.toBeInTheDocument();
      const table = screen.getByRole("table", { name: "Props" });
      const args = initialArgs(story);
      for (const [key, a] of Object.entries(argTypes)) {
        if (a.visible && !a.visible(args)) continue;
        expect(within(table).getByText(key, { selector: "label" })).toBeInTheDocument();
      }
    });

    it("generates code that imports and renders the component", () => {
      const generated = generateCode(story, initialArgs(story));
      const code = story.usage ? story.usage(generated) : generated;
      expect(code).toMatch(new RegExp(`import \\{[^}]*\\b${story.name}\\b`));
      expect(code).toContain(`<${story.name}`);
      expect(code).not.toContain("<Component");
    });

    it("keeps every default consistent with its control", () => {
      for (const [key, a] of Object.entries(argTypes)) {
        const { control, defaultValue } = a;
        if (defaultValue === undefined) continue;
        if (control.kind === "enum") expect(Object.values(control.enumObj), key).toContain(defaultValue);
        if (control.kind === "options") expect(control.options, key).toContain(defaultValue);
        if (control.kind === "data") expect(Object.keys(control.presets), key).toContain(defaultValue);
      }
    });

    it("survives toggling every boolean", async () => {
      render(<Playground story={story} />);
      for (const sw of within(screen.getByRole("table", { name: "Props" })).queryAllByRole("switch")) {
        await act(async () => sw.click());
      }
      expect(screen.queryByText(/This combination threw/)).not.toBeInTheDocument();
    });
  });
});
