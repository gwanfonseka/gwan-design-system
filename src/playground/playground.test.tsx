import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { BUTTON_VARIANTS } from "@/components/button";
import badgeStory from "@/templates/component-library/badge/badge.story";
import buttonStory from "@/templates/component-library/buttons/button.story";
import tagStory from "@/templates/component-library/tags/tag.story";
import Playground from "./Playground";
import { generateCode } from "./codegen";
import { argsReducer, initialArgs } from "./useArgs";

const codeText = (container: HTMLElement) => container.querySelector("pre code")?.textContent ?? "";
const preview = () => screen.getByRole("button", { name: "Label" });

describe("generateCode", () => {
  it("omits defaults and keeps required props", () => {
    expect(generateCode(buttonStory, initialArgs(buttonStory))).toBe(
      `import { Button } from "gwan-design-system";\n\n<Button label="Label" onClick={() => {}} />`,
    );
  });

  it("writes enums by key, icons as elements, and imports both", () => {
    const code = generateCode(buttonStory, {
      ...initialArgs(buttonStory),
      variant: BUTTON_VARIANTS.SECONDARY,
      leftIcon: "ProductsSVG",
      disabled: true,
    });
    expect(code).toContain(`import { Button, ProductsSVG, BUTTON_VARIANTS } from "gwan-design-system";`);
    expect(code).toContain("  leftIcon={<ProductsSVG />}");
    expect(code).toContain("  variant={BUTTON_VARIANTS.SECONDARY}");
    expect(code).toContain("  disabled\n");
  });

  it("always writes required enum props, even unchanged", () => {
    expect(generateCode(tagStory, initialArgs(tagStory))).toContain("type={TAG_TYPE.DEFAULT}");
  });

  it("escapes strings that can't sit in a JSX attribute", () => {
    const code = generateCode(badgeStory, { ...initialArgs(badgeStory), label: 'Say "hi"' });
    expect(code).toContain(`label={"Say \\"hi\\""}`);
  });
});

describe("argsReducer", () => {
  const initial = initialArgs(buttonStory);
  const reduce = argsReducer(initial);

  it("starts from defaults overlaid with story args", () => {
    expect(initial).toMatchObject({ label: "Label", variant: BUTTON_VARIANTS.PRIMARY, disabled: false });
  });

  it("sets values and resets everything", () => {
    const changed = reduce(initial, { type: "set", patch: { label: "X", disabled: true } });
    expect(changed).toMatchObject({ label: "X", disabled: true });
    expect(reduce(changed, { type: "resetAll" })).toEqual(initial);
  });
});

const group = (name: string) => screen.getByRole("group", { name });

const choose = async (user: ReturnType<typeof userEvent.setup>, prop: string, option: string) => {
  await user.click(within(group(prop)).getByRole("combobox"));
  await user.click(within(group(prop)).getByRole("option", { name: option }));
};

describe("<Playground />", () => {
  it("lists every prop with its type, default and required marker", () => {
    render(<Playground story={buttonStory} />);
    const table = screen.getByRole("table", { name: "Props" });
    for (const key of Object.keys(buttonStory.argTypes)) {
      expect(within(table).getByText(key)).toBeInTheDocument();
    }
    expect(within(table).getByText("BUTTON_VARIANTS.PRIMARY")).toBeInTheDocument();
    expect(within(table).getByTitle("Required")).toBeInTheDocument();
  });

  it("updates the preview and code when an enum changes", async () => {
    const user = userEvent.setup();
    const { container } = render(<Playground story={buttonStory} />);
    await choose(user, "variant", "SECONDARY");
    expect(preview().className).toContain("bg-primary-100");
    expect(codeText(container)).toContain("variant={BUTTON_VARIANTS.SECONDARY}");
    expect(screen.getByRole("button", { name: "Reset all (1)" })).toBeEnabled();
  });

  it("uses radios for two-value props", async () => {
    const user = userEvent.setup();
    const { container } = render(<Playground story={buttonStory} />);
    await user.click(within(group("type")).getByRole("radio", { name: "submit" }));
    expect(preview()).toHaveAttribute("type", "submit");
    expect(codeText(container)).toContain(`type="submit"`);
  });

  it("picks an icon by name", async () => {
    const user = userEvent.setup();
    const { container } = render(<Playground story={buttonStory} />);
    await choose(user, "leftIcon", "Products");
    expect(preview().querySelector("svg")).not.toBeNull();
    expect(codeText(container)).toContain("leftIcon={<ProductsSVG />}");
    await choose(user, "leftIcon", "None");
    expect(preview().querySelector("svg")).toBeNull();
  });

  it("logs callbacks in the Actions panel", async () => {
    const user = userEvent.setup();
    render(<Playground story={buttonStory} />);
    await user.click(preview());
    const log = screen.getByRole("list", { name: "Action log" });
    expect(within(log).getByText("onClick")).toBeInTheDocument();
  });

  it("toggles booleans and resets all", async () => {
    const user = userEvent.setup();
    const { container } = render(<Playground story={buttonStory} />);
    await user.click(within(group("disabled")).getByRole("switch"));
    expect(preview()).toBeDisabled();
    expect(codeText(container)).toMatch(/\n {2}disabled\n/);
    await user.click(screen.getByRole("button", { name: "Reset all (1)" }));
    expect(preview()).toBeEnabled();
  });

  it("edits text through the in-house Input, labelled by the prop name", async () => {
    const user = userEvent.setup();
    const { container } = render(<Playground story={badgeStory} />);
    const input = screen.getByRole("textbox", { name: "label" });
    await user.clear(input);
    await user.type(input, "New");
    expect(codeText(container)).toContain(`label="New"`);
  });

  it("has no canvas theme switch; the preview follows the site theme", () => {
    render(<Playground story={tagStory} />);
    expect(screen.queryByRole("radiogroup", { name: "Preview background" })).not.toBeInTheDocument();
    const canvas = screen.getByTestId("playground-canvas");
    expect(canvas).not.toHaveClass("dark");
    expect(canvas).not.toHaveClass("light");
  });

  it("writes required enum props for components like Tag", async () => {
    const user = userEvent.setup();
    const { container } = render(<Playground story={tagStory} />);
    await choose(user, "type", "SUCCESS");
    expect(codeText(container)).toContain("type={TAG_TYPE.SUCCESS}");
    expect(screen.getByText("Label", { selector: "div" }).className).toContain("text-success-fg");
  });
});
