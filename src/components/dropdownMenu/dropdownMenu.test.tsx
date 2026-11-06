import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import DropdownMenu, { DROPDOWN_PLACEMENT } from "./index";

describe("DropdownMenu", () => {
  it("runs an item and closes, draws dividers, and blocks disabled items", async () => {
    const user = userEvent.setup();
    const onEdit = vi.fn();
    const onLocked = vi.fn();
    const { container } = render(
      <DropdownMenu
        trigger={<span>Open</span>}
        items={[
          { label: "Edit", onClick: onEdit },
          { isDivider: true },
          { label: "Locked", onClick: onLocked, disabled: true },
          { label: "No handler" },
        ]}
      />,
    );
    await user.click(screen.getByText("Open"));
    expect(container.querySelector(".border-t")).not.toBeNull();
    await user.click(screen.getByRole("button", { name: "Locked" }));
    expect(onLocked).not.toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "Edit" }));
    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("button", { name: "Edit" })).not.toBeInTheDocument();
  });

  it("closes an item without a handler, and on an outside press", async () => {
    const user = userEvent.setup();
    render(
      <>
        <DropdownMenu trigger={<span>Open</span>} items={[{ label: "No handler" }]} />
        <p>Outside</p>
      </>,
    );
    await user.click(screen.getByText("Open"));
    await user.click(screen.getByRole("button", { name: "No handler" }));
    expect(screen.queryByRole("button", { name: "No handler" })).not.toBeInTheDocument();
    await user.click(screen.getByText("Open"));
    await user.click(screen.getByText("Outside"));
    expect(screen.queryByRole("button", { name: "No handler" })).not.toBeInTheDocument();
  });
});

it("DropdownMenu places the menu and skips a disabled item", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  const { container } = render(
    <DropdownMenu
      placement={DROPDOWN_PLACEMENT.TOP_RIGHT}
      trigger={<button type="button">Open</button>}
      items={[{ label: "Edit", onClick }, { label: "Delete", disabled: true, destructive: true }]}
    />,
  );
  await user.click(screen.getByRole("button", { name: "Open" }));
  expect(container.querySelector(".bottom-full")).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Delete" }));
  expect(onClick).not.toHaveBeenCalled();
  await user.click(screen.getByRole("button", { name: "Edit" }));
  expect(onClick).toHaveBeenCalledTimes(1);
});
