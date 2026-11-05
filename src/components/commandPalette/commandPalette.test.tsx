import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import CommandPalette from "./index";

const setup = () => {
  const first = vi.fn();
  const second = vi.fn();
  const onClose = vi.fn();
  const items = [
    { id: "a", label: "New project", onSelect: first },
    { id: "b", label: "Settings", onSelect: second },
  ];
  return { first, second, onClose, items };
};
const key = (k: string) => fireEvent.keyDown(document, { key: k });

describe("CommandPalette", () => {
  it("renders nothing and ignores keys while closed", () => {
    const { items, onClose, first } = setup();
    const { container } = render(<CommandPalette open={false} onClose={onClose} items={items} />);
    expect(container).toBeEmptyDOMElement();
    key("Enter");
    expect(first).not.toHaveBeenCalled();
  });

  it("closes on Escape", () => {
    const { items, onClose } = setup();
    render(<CommandPalette open onClose={onClose} items={items} />);
    key("Escape");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("moves with the arrow keys, stops at the ends, and runs the command on Enter", () => {
    const { items, onClose, first, second } = setup();
    render(<CommandPalette open onClose={onClose} items={items} />);
    key("ArrowUp");
    key("ArrowDown");
    key("ArrowDown");
    key("Enter");
    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("goes back up with ArrowUp", () => {
    const { items, onClose, first } = setup();
    render(<CommandPalette open onClose={onClose} items={items} />);
    key("ArrowDown");
    key("ArrowUp");
    key("Enter");
    expect(first).toHaveBeenCalledTimes(1);
  });

  it("shows the empty message and does nothing on Enter when nothing matches", async () => {
    const user = userEvent.setup();
    const { items, onClose } = setup();
    render(<CommandPalette open onClose={onClose} items={items} emptyMessage="Nothing here" />);
    await user.type(screen.getByRole("textbox"), "zzz");
    expect(screen.getByText("Nothing here")).toBeInTheDocument();
    key("Enter");
    expect(onClose).not.toHaveBeenCalled();
  });
});

it("CommandPalette hides while closed and selects a filtered item", async () => {
  const user = userEvent.setup();
  const onClose = vi.fn();
  const onSelect = vi.fn();
  const { rerender } = render(
    <CommandPalette open={false} onClose={onClose} items={[]} />,
  );
  expect(screen.queryByPlaceholderText("Type a command or search...")).not.toBeInTheDocument();
  rerender(
    <CommandPalette
      open
      onClose={onClose}
      placeholder="Find"
      items={[
        { id: "1", label: "Copy", group: "Edit", onSelect },
        { id: "2", label: "Paste", onSelect: vi.fn() },
      ]}
    />,
  );
  await user.type(screen.getByPlaceholderText("Find"), "cop");
  await user.click(screen.getByRole("button", { name: /Copy/ }));
  expect(onSelect).toHaveBeenCalledTimes(1);
});
