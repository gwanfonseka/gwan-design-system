import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import List, { LIST_VARIANT } from "./index";
import userEvent from "@testing-library/user-event";
import { LIST_SIZE } from "./index";

describe("List", () => {
  it.each([
    [LIST_VARIANT.CARD, "bg-surface"],
    [LIST_VARIANT.BORDERED, "border-border"],
  ])("wraps the %s variant", (variant, className) => {
    render(<List variant={variant} items={[{ key: "a", title: "A" }]} />);
    expect(screen.getByRole("list").className).toContain(className);
  });

  it("draws a divider under every row but the last", () => {
    render(<List items={[{ key: "a", title: "A" }, { key: "b", title: "B" }]} />);
    const [first, last] = screen.getAllByRole("listitem");
    expect(first.className).toContain("border-b");
    expect(last.className).not.toContain("border-b");
  });

  it("runs a clickable row on Enter and Space, but not other keys", () => {
    const onClick = vi.fn();
    render(<List items={[{ key: "a", title: "A", onClick }]} />);
    const row = screen.getByRole("button", { name: "A" });
    fireEvent.keyDown(row, { key: "Enter" });
    fireEvent.keyDown(row, { key: " " });
    fireEvent.keyDown(row, { key: "a" });
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("ignores a disabled row", () => {
    const onClick = vi.fn();
    render(<List items={[{ key: "a", title: "A", onClick, disabled: true }]} />);
    const row = screen.getByRole("listitem");
    fireEvent.click(row);
    fireEvent.keyDown(row, { key: "Enter" });
    expect(onClick).not.toHaveBeenCalled();
  });
});

it("List calls the item click handler and skips a disabled item", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  render(
    <List
      variant={LIST_VARIANT.BORDERED}
      size={LIST_SIZE.LG}
      items={[
        { key: "1", title: "Inbox", description: "3 new", onClick },
        { key: "2", title: "Archive", disabled: true, onClick },
      ]}
    />,
  );
  await user.click(screen.getByText("Inbox"));
  expect(onClick).toHaveBeenCalledTimes(1);
  await user.click(screen.getByText("Archive"));
  expect(onClick).toHaveBeenCalledTimes(1);
});

it("List marks a selected row", () => {
  render(<List items={[{ key: "1", title: "Inbox", selected: true }, { key: "2", title: "Archive" }]} />);
  const selected = screen.getByText("Inbox");
  expect(selected.className).toContain("text-primary-default");
  expect(selected.closest("li")).toHaveAttribute("aria-current", "true");
  expect(selected.closest("li")?.className).toContain("bg-surface-raised");
  expect(screen.getByText("Archive").closest("li")).not.toHaveAttribute("aria-current");
});
