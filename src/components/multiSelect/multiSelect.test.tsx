import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import MultiSelect from "./index";

const options = [
  { value: "a", label: "Apple" },
  { value: "b", label: "Banana" },
];

const setup = (props: Partial<React.ComponentProps<typeof MultiSelect>> = {}) => {
  const onChange = vi.fn();
  render(<MultiSelect options={options} value={[]} onChange={onChange} label="Fruit" {...props} />);
  return { onChange, trigger: screen.getByRole("combobox") };
};
const search = () => screen.getByRole("textbox", { name: "Search options" });

describe("MultiSelect", () => {
  it("has a generic id and no name without a label", () => {
    render(<MultiSelect options={options} value={[]} onChange={() => {}} />);
    const trigger = screen.getByRole("combobox");
    expect(trigger.id).toBe("gwan-multiselect");
    expect(trigger).not.toHaveAttribute("aria-labelledby");
  });

  it("adds and removes values", async () => {
    const user = userEvent.setup();
    const { onChange, trigger } = setup({ value: ["a"] });
    await user.click(trigger);
    await user.click(screen.getByRole("option", { name: "Banana" }));
    expect(onChange).toHaveBeenLastCalledWith(["a", "b"]);
    await user.click(screen.getByRole("option", { name: "Apple" }));
    expect(onChange).toHaveBeenLastCalledWith([]);
  });

  it("clears everything from the footer", async () => {
    const user = userEvent.setup();
    const { onChange, trigger } = setup({ value: ["a", "b"] });
    await user.click(trigger);
    await user.click(screen.getByRole("button", { name: "Clear all" }));
    expect(onChange).toHaveBeenCalledWith([]);
  });

  it("filters by search, shows when nothing matches, and clears the search", async () => {
    const user = userEvent.setup();
    const { trigger } = setup();
    await user.click(trigger);
    await user.type(search(), "ban");
    expect(screen.queryByRole("option", { name: "Apple" })).not.toBeInTheDocument();
    await user.type(search(), "zzz");
    expect(screen.getByText("No options found")).toBeInTheDocument();
    await user.click(screen.getByLabelText("Clear search"));
    expect(search()).toHaveValue("");
    expect(screen.getByRole("option", { name: "Apple" })).toBeInTheDocument();
  });

  it("stays open on a press inside and closes on one outside", async () => {
    const user = userEvent.setup();
    const { trigger } = setup();
    await user.click(trigger);
    fireEvent.mouseDown(search());
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    fireEvent.mouseDown(document.body);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("does nothing while disabled", () => {
    const { trigger } = setup({ disabled: true });
    fireEvent.click(trigger);
    fireEvent.keyDown(trigger, { key: "Enter" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  describe("trigger keys", () => {
    it.each(["Enter", " "])("opens with '%s'", (key) => {
      const { trigger } = setup();
      expect(fireEvent.keyDown(trigger, { key })).toBe(false);
      expect(trigger).toHaveAttribute("aria-expanded", "true");
    });

    it("closes with Escape only while open, and ignores other keys", () => {
      const { trigger } = setup();
      expect(fireEvent.keyDown(trigger, { key: "Escape" })).toBe(true);
      expect(fireEvent.keyDown(trigger, { key: "a" })).toBe(true);
      fireEvent.keyDown(trigger, { key: "Enter" });
      expect(fireEvent.keyDown(trigger, { key: "Escape" })).toBe(false);
      expect(trigger).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe("search box keys", () => {
    it("moves with the arrows, stops at the ends, and toggles with Enter", async () => {
      const user = userEvent.setup();
      const { onChange, trigger } = setup();
      await user.click(trigger);
      fireEvent.keyDown(search(), { key: "Enter" });
      expect(onChange).not.toHaveBeenCalled();
      fireEvent.keyDown(search(), { key: "ArrowDown" });
      fireEvent.keyDown(search(), { key: "ArrowDown" });
      fireEvent.keyDown(search(), { key: "ArrowDown" });
      fireEvent.keyDown(search(), { key: "Enter" });
      expect(onChange).toHaveBeenLastCalledWith(["b"]);
      fireEvent.keyDown(search(), { key: "ArrowUp" });
      fireEvent.keyDown(search(), { key: "ArrowUp" });
      fireEvent.keyDown(search(), { key: "Enter" });
      expect(onChange).toHaveBeenLastCalledWith(["a"]);
    });

    it("closes with Escape and ignores other keys", async () => {
      const user = userEvent.setup();
      const { trigger } = setup();
      await user.click(trigger);
      expect(fireEvent.keyDown(search(), { key: "a" })).toBe(true);
      fireEvent.keyDown(search(), { key: "Escape" });
      expect(trigger).toHaveAttribute("aria-expanded", "false");
    });
  });
});
