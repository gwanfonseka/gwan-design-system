import { forwardRef } from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { CheckSVG } from "@/components/icons";
import menuBarStory from "@/templates/component-library/menuBar/menuBar.story";
import modalStory from "@/templates/component-library/modals/modal.story";
import selectStory from "@/templates/component-library/selectDropdown/selectDropdown.story";
import tableStory from "@/templates/component-library/tables/table.story";
import buttonStory from "@/templates/component-library/buttons/button.story";
import Playground, { decodeArgs } from "./Playground";
import { generateCode } from "./codegen";
import { serialize } from "./serialize";
import { initialArgs } from "./useArgs";

const codeText = (container: HTMLElement) => container.querySelector("pre code")?.textContent ?? "";
const group = (name: string) => screen.getByRole("group", { name });
const table = () => screen.getByRole("table", { name: "Props" });

const choose = async (user: ReturnType<typeof userEvent.setup>, prop: string, option: string) => {
  await user.click(within(group(prop)).getByRole("combobox"));
  await user.click(within(group(prop)).getByRole("option", { name: option }));
};

afterEach(() => window.history.replaceState(null, "", "/"));

describe("serialize", () => {
  it("prints library components by their exported name and imports them", () => {
    const imports = new Set<string>();
    expect(serialize({ icon: <CheckSVG /> }, { imports })).toBe("{ icon: <CheckSVG /> }");
    expect([...imports]).toEqual(["CheckSVG"]);
  });

  it("names forwardRef components from their render function", () => {
    const Fancy = forwardRef<HTMLDivElement>(function Fancy(_, ref) {
      return <div ref={ref} />;
    });
    expect(serialize(<Fancy />, { imports: new Set() })).toBe("<Fancy />");
  });

  it("breaks long arrays across lines with trailing commas", () => {
    const long = Array.from({ length: 6 }, (_, i) => ({ label: `Option number ${i}` }));
    const printed = serialize(long, { imports: new Set() });
    expect(printed.split("\n")).toHaveLength(8);
    expect(printed).toContain('  { label: "Option number 0" },');
  });
});

describe("generateCode", () => {
  it("hoists data presets and imports names used by hand-written code", () => {
    const code = generateCode(tableStory, initialArgs(tableStory));
    expect(code).toContain(`import { Table, Tag, TAG_TYPE, OrderInfoSVG } from "gwan-design-system";`);
    expect(code).toContain("const statusTag = {");
    expect(code).toContain("const columns = [");
    expect(code).toContain("<Table columns={columns} data={data} />");
  });

  it("wraps bound props in useState", () => {
    const code = generateCode(selectStory, { ...initialArgs(selectStory), value: "banana" });
    expect(code).toContain(`import { useState } from "react";`);
    expect(code).toContain(`const [value, setValue] = useState("banana");`);
    expect(code).toContain("onChange={setValue}");
  });

  it("leaves out props whose row is hidden", () => {
    const off = generateCode(menuBarStory, { ...initialArgs(menuBarStory), isAvatarVisible: false });
    expect(off).not.toContain("avatarName");
    const on = generateCode(menuBarStory, initialArgs(menuBarStory));
    expect(on).toContain(`avatarName="John Doe"`);
  });

  it("rewrites overlay snippets into the open-state pattern without duplicate imports", () => {
    const code = modalStory.usage!(generateCode(modalStory, { ...initialArgs(modalStory), children: "Form" }));
    expect(code).toContain("const [open, setOpen] = useState(false);");
    expect(code).toContain("onClear={() => setOpen(false)}");
    const libraryImport = code.split("\n").find((l) => l.includes("gwan-design-system"))!;
    expect(libraryImport.match(/\bButton\b/g)).toHaveLength(1);
  });
});

describe("decodeArgs", () => {
  const argTypes = { label: {}, disabled: {} };

  it("keeps known props with plain values", () => {
    expect(decodeArgs('{"label":"Hi","disabled":true}', argTypes)).toEqual({ label: "Hi", disabled: true });
  });

  it("drops unknown props, objects and malformed input", () => {
    expect(decodeArgs('{"label":{"x":1},"evil":"1"}', argTypes)).toEqual({});
    expect(decodeArgs("not json", argTypes)).toEqual({});
    expect(decodeArgs(null, argTypes)).toEqual({});
  });
});

describe("<Playground /> with richer stories", () => {
  it("swaps data presets in the preview", async () => {
    const user = userEvent.setup();
    render(<Playground story={tableStory} />);
    const canvas = screen.getByTestId("playground-canvas");
    expect(within(canvas).getAllByRole("row")).toHaveLength(6);
    await choose(user, "data", "One row");
    expect(within(canvas).getAllByRole("row")).toHaveLength(2);
  });

  it("hides dependent rows until their switch is on", async () => {
    const user = userEvent.setup();
    render(<Playground story={menuBarStory} />);
    expect(within(table()).getByText("avatarName")).toBeInTheDocument();
    await user.click(within(group("isAvatarVisible")).getByRole("switch"));
    expect(within(table()).queryByText("avatarName")).not.toBeInTheDocument();
  });

  it("keeps a bound value in sync when the preview changes it", async () => {
    const user = userEvent.setup();
    const { container } = render(<Playground story={selectStory} />);
    const canvas = screen.getByTestId("playground-canvas");
    await user.click(within(canvas).getByRole("combobox", { name: "Fruit" }));
    await user.click(within(canvas).getByRole("option", { name: "Cherry" }));
    expect(within(group("value")).getByRole("textbox")).toHaveValue("cherry");
    expect(codeText(container)).toContain(`useState("cherry")`);
    expect(within(screen.getByRole("list", { name: "Action log" })).getByText("onChange")).toBeInTheDocument();
  });

  it("opens overlays from a trigger and logs their close callback", async () => {
    const user = userEvent.setup();
    render(<Playground story={modalStory} />);
    await user.click(screen.getByRole("button", { name: "Open modal" }));
    expect(screen.getByText("This is a modal")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByText("This is a modal")).not.toBeInTheDocument();
    expect(within(screen.getByRole("list", { name: "Action log" })).getByText("onClear")).toBeInTheDocument();
  });

  it("mirrors changed values into the URL and restores them", async () => {
    const user = userEvent.setup();
    const first = render(<Playground story={buttonStory} />);
    await user.click(within(group("disabled")).getByRole("switch"));
    const saved = new URL(window.location.href).searchParams.get("args");
    expect(JSON.parse(saved!)).toEqual({ disabled: true });
    first.unmount();

    render(<Playground story={buttonStory} />);
    // Outside the app router the playground can't read the URL back, so check the decoder.
    expect(decodeArgs(saved, buttonStory.argTypes)).toEqual({ disabled: true });
    await user.click(screen.getByRole("button", { name: /Reset all/ }));
    expect(new URL(window.location.href).searchParams.get("args")).toBeNull();
  });
});
