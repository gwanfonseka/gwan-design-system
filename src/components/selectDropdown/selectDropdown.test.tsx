import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { mockRect, setViewport } from "../../test/helpers";
import { FORM_ELEMENT_EDGE_STYLE, FORM_ELEMENT_SIZE } from "../input";
import SelectDropdown, { type ISelectDropdownOption } from "./index";

const OPTIONS: ISelectDropdownOption[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

function renderSelect(
  props: Partial<React.ComponentProps<typeof SelectDropdown>> = {},
) {
  const onChange = vi.fn();
  const result = render(
    <SelectDropdown
      options={OPTIONS}
      value=""
      onChange={onChange}
      label="Fruit"
      placeholder="Pick a fruit"
      {...props}
    />,
  );
  return { ...result, onChange };
}

function listbox() {
  return screen.getByRole("listbox");
}

function anchor(container: HTMLElement) {
  return container.querySelector(".relative") as HTMLElement;
}

describe("SelectDropdown", () => {
  it("keeps the visible label in sync with value, including unknown values", () => {
    const { rerender, onChange } = renderSelect({ value: "banana" });
    const input = screen.getByRole("combobox", { name: "Fruit" });
    expect(input).toHaveValue("Banana");

    rerender(
      <SelectDropdown options={OPTIONS} value="apple" onChange={onChange} label="Fruit" />,
    );
    expect(input).toHaveValue("Apple");

    rerender(
      <SelectDropdown options={OPTIONS} value="missing" onChange={onChange} label="Fruit" />,
    );
    expect(input).toHaveValue("missing");

    rerender(
      <SelectDropdown
        options={[{ label: "Plain" }]}
        value="Plain"
        onChange={onChange}
        label="Fruit"
      />,
    );
    expect(input).toHaveValue("Plain");
  });

  it("exposes combobox semantics, defaults, required marker, and error text", () => {
    renderSelect({ required: true, isError: true, errorMessage: "Choose one" });
    const input = screen.getByRole("combobox", { name: "Fruit *" });
    expect(input).toHaveAttribute("aria-expanded", "false");
    expect(input).toHaveAttribute("aria-haspopup", "listbox");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-required", "true");
    expect(input).toHaveAttribute("placeholder", "Pick a fruit");
    expect(screen.getByRole("alert")).toHaveTextContent("Choose one");
    expect(input.id).toBe("gwan-select-fruit");
  });

  it("does not render an alert when there is no error message", () => {
    renderSelect({ isError: true });
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("opens and closes from click, and does not open when disabled", async () => {
    const user = userEvent.setup();
    const { rerender, onChange } = renderSelect();
    const input = screen.getByRole("combobox");
    await user.click(input);
    expect(input).toHaveAttribute("aria-expanded", "true");
    expect(screen.getAllByRole("option").map((o) => o.textContent)).toEqual([
      "Apple",
      "Banana",
      "Cherry",
    ]);
    await user.click(input);
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    rerender(
      <SelectDropdown options={OPTIONS} value="" onChange={onChange} label="Fruit" disabled />,
    );
    await user.click(screen.getByRole("combobox"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("selects with the mouse and reports the option value", async () => {
    const user = userEvent.setup();
    const { onChange } = renderSelect({ value: "apple" });
    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Cherry" }));
    expect(onChange).toHaveBeenCalledWith("cherry");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveFocus();
  });

  it("uses the label as the value when an option has no value", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <SelectDropdown
        label="Fruit"
        options={[{ label: "Plain" }]}
        value=""
        onChange={onChange}
      />,
    );
    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Plain" }));
    expect(onChange).toHaveBeenCalledWith("Plain");
  });

  it("resets highlight and search when the menu closes, and highlights the selection on reopen", async () => {
    const user = userEvent.setup();
    renderSelect({ value: "banana", searchable: true });
    const input = screen.getByRole("combobox");
    await user.click(input);

    const search = screen.getByPlaceholderText("Search...");
    await user.type(search, "che");
    expect(screen.getByRole("option", { name: "Cherry" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Apple" })).not.toBeInTheDocument();
    await user.keyboard("{ArrowDown}");
    expect(input).toHaveAttribute("aria-activedescendant", "gwan-select-fruit-listbox-opt-0");

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    expect(input).toHaveFocus();

    await user.click(input);
    const reopened = screen.getByPlaceholderText("Search...");
    expect(reopened).toHaveValue("");
    expect(screen.getAllByRole("option")).toHaveLength(3);
    // Reopen highlights the controlled selection (Banana), not the previous search highlight.
    expect(input).toHaveAttribute("aria-activedescendant", "gwan-select-fruit-listbox-opt-1");
  });

  it("clears search and highlight after a selection, then highlights the new value on reopen", async () => {
    const user = userEvent.setup();
    const { onChange, rerender } = renderSelect({ value: "apple", searchable: true });
    await user.click(screen.getByRole("combobox"));
    await user.type(screen.getByPlaceholderText("Search..."), "ban");
    await user.click(screen.getByRole("option", { name: "Banana" }));
    expect(onChange).toHaveBeenCalledWith("banana");

    rerender(
      <SelectDropdown
        options={OPTIONS}
        value="banana"
        onChange={onChange}
        label="Fruit"
        searchable
      />,
    );
    await user.click(screen.getByRole("combobox"));
    expect(screen.getByPlaceholderText("Search...")).toHaveValue("");
    expect(screen.getByRole("combobox")).toHaveAttribute(
      "aria-activedescendant",
      "gwan-select-fruit-listbox-opt-1",
    );
  });

  it("drops the highlight when the search query changes, and filters locally without onSearch", async () => {
    const user = userEvent.setup();
    renderSelect({ value: "apple", searchable: true });
    const input = screen.getByRole("combobox");
    await user.click(input);
    expect(input).toHaveAttribute("aria-activedescendant", "gwan-select-fruit-listbox-opt-0");

    await user.type(screen.getByPlaceholderText("Search..."), "A");
    expect(input).not.toHaveAttribute("aria-activedescendant");
    expect(screen.getByRole("option", { name: "Apple" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Banana" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Cherry" })).not.toBeInTheDocument();
  });

  it("shows the empty message and a loading state", async () => {
    const user = userEvent.setup();
    const { rerender, onChange } = renderSelect({
      searchable: true,
      emptyMessage: "Nothing here",
      options: [],
    });
    await user.click(screen.getByRole("combobox"));
    expect(screen.getByText("Nothing here")).toBeInTheDocument();

    rerender(
      <SelectDropdown
        options={[]}
        value=""
        onChange={onChange}
        label="Fruit"
        searchable
        isLoading
      />,
    );
    expect(screen.getByText("Loading…")).toBeInTheDocument();
  });

  it("debounces onSearch and does not filter locally while a search handler is provided", () => {
    vi.useFakeTimers();
    const onSearch = vi.fn();
    renderSelect({ searchable: true, onSearch, debounce: 300, value: "apple" });
    fireEvent.click(screen.getByRole("combobox"));
    vi.advanceTimersByTime(0);
    const search = screen.getByPlaceholderText("Search...");
    fireEvent.change(search, { target: { value: "zz" } });
    expect(screen.getByRole("option", { name: "Apple" })).toBeInTheDocument();
    expect(onSearch).not.toHaveBeenCalled();
    vi.advanceTimersByTime(299);
    expect(onSearch).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("zz");
  });

  it("navigates with arrows, selects with Enter, and clamps the highlight", async () => {
    const user = userEvent.setup();
    const { onChange } = renderSelect({ value: "apple" });
    const input = screen.getByRole("combobox");
    input.focus();
    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-activedescendant", "gwan-select-fruit-listbox-opt-0");

    await user.keyboard("{ArrowDown}{ArrowDown}{ArrowDown}");
    expect(input).toHaveAttribute("aria-activedescendant", "gwan-select-fruit-listbox-opt-2");
    await user.keyboard("{ArrowUp}");
    expect(input).toHaveAttribute("aria-activedescendant", "gwan-select-fruit-listbox-opt-1");
    await user.keyboard("{Enter}");
    expect(onChange).toHaveBeenCalledWith("banana");
  });

  it("opens with ArrowUp, Space, and Enter", async () => {
    const user = userEvent.setup();
    const { unmount } = renderSelect();
    screen.getByRole("combobox").focus();
    await user.keyboard("{ArrowUp}");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    unmount();

    const second = renderSelect();
    screen.getByRole("combobox").focus();
    await user.keyboard(" ");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    second.unmount();

    renderSelect();
    screen.getByRole("combobox").focus();
    await user.keyboard("{Enter}");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("selects the highlighted option with Space", async () => {
    const user = userEvent.setup();
    const { onChange } = renderSelect({ value: "cherry" });
    screen.getByRole("combobox").focus();
    await user.keyboard("{Enter} ");
    expect(onChange).toHaveBeenCalledWith("cherry");
  });

  it("inserts a space into the search query", async () => {
    const user = userEvent.setup();
    renderSelect({ searchable: true, value: "" });
    await user.click(screen.getByRole("combobox"));
    const search = screen.getByPlaceholderText("Search...");
    await user.type(search, "a b");
    expect(search).toHaveValue("a b");
  });

  it("moves the highlight on mouse enter and closes on an outside press", async () => {
    const user = userEvent.setup();
    renderSelect({ value: "apple" });
    const input = screen.getByRole("combobox");
    await user.click(input);
    fireEvent.mouseEnter(screen.getByRole("option", { name: "Cherry" }));
    expect(input).toHaveAttribute("aria-activedescendant", "gwan-select-fruit-listbox-opt-2");
    expect(screen.getByRole("option", { name: "Cherry" })).toHaveClass("bg-surface-raised");

    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("marks the selected option and places the panel below when there is room", async () => {
    const user = userEvent.setup();
    const { container } = renderSelect({ value: "banana" });
    mockRect(anchor(container), { top: 20, bottom: 60, left: 0, right: 200 });
    await user.click(screen.getByRole("combobox"));
    const box = listbox();
    expect(box.className).toContain("top-full");
    expect(box.className).toContain("mt-1");
    expect(box.className).not.toContain("bottom-full");
    expect(within(box).getByRole("option", { name: "Banana" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(within(box).getByRole("option", { name: "Apple" })).toHaveAttribute(
      "aria-selected",
      "false",
    );
  });

  it("opens upward when the panel would not fit below and there is more room above", async () => {
    const user = userEvent.setup();
    const { container } = renderSelect({ value: "apple" });
    // 3 options * 40 = 120. spaceBelow must be < 120 and top > spaceBelow.
    setViewport(1024, 768);
    mockRect(anchor(container), { top: 400, bottom: 700, left: 0, right: 200 });
    await user.click(screen.getByRole("combobox"));
    const box = listbox();
    expect(box.className).toContain("bottom-full");
    expect(box.className).toContain("mb-1");
    expect(box.className).not.toContain("top-full");
  });

  it("stays downward when there is not enough room above either", async () => {
    const user = userEvent.setup();
    const { container } = renderSelect({ value: "apple" });
    mockRect(anchor(container), { top: 40, bottom: 700, left: 0, right: 200 });
    await user.click(screen.getByRole("combobox"));
    expect(listbox().className).toContain("top-full");
  });

  it("includes the search row in the placement height", async () => {
    const user = userEvent.setup();
    const { container } = renderSelect({ searchable: true, value: "apple" });
    // height = min(120+52, 320) = 172. spaceBelow 150 < 172, top 500 > 150.
    mockRect(anchor(container), { top: 500, bottom: 618, left: 0, right: 200 });
    await user.click(screen.getByRole("combobox"));
    expect(listbox().className).toContain("bottom-full");
  });

  it("applies size and edge classes", async () => {
    const user = userEvent.setup();
    const { rerender, onChange } = renderSelect({
      size: FORM_ELEMENT_SIZE.SM,
      edges: FORM_ELEMENT_EDGE_STYLE.SQUARED,
    });
    const input = screen.getByRole("combobox");
    expect(input.className).toContain("text-xs");
    expect(input.className.split(/\s+/)).not.toContain("rounded");
    expect(input.className.split(/\s+/)).not.toContain("false");
    await user.click(input);
    expect(screen.getByRole("listbox").className.split(/\s+/)).not.toContain("false");
    expect(screen.getByRole("listbox").className.split(/\s+/)).not.toContain("rounded");

    rerender(
      <SelectDropdown
        options={OPTIONS}
        value=""
        onChange={onChange}
        label="Fruit"
        size={FORM_ELEMENT_SIZE.MD}
        edges={FORM_ELEMENT_EDGE_STYLE.ROUNDED}
      />,
    );
    expect(screen.getByRole("combobox").className.split(/\s+/)).toContain("rounded");
  });
});
