import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ContextMenu from "./index";

const open = () => fireEvent.contextMenu(screen.getByText("Area"), { clientX: 30, clientY: 40 });

describe("ContextMenu", () => {
  it("opens at the cursor on right-click and blocks the browser menu", () => {
    render(<ContextMenu items={[{ label: "Edit" }]}>Area</ContextMenu>);
    expect(screen.queryByRole("button", { name: "Edit" })).not.toBeInTheDocument();
    expect(fireEvent.contextMenu(screen.getByText("Area"), { clientX: 30, clientY: 40 })).toBe(false);
    const panel = screen.getByRole("button", { name: "Edit" }).parentElement!;
    expect(panel.style.left).toBe("30px");
    expect(panel.style.top).toBe("40px");
  });

  it("runs an item and closes, with or without a handler", async () => {
    const user = userEvent.setup();
    const onEdit = vi.fn();
    render(<ContextMenu items={[{ label: "Edit", onClick: onEdit }, { label: "Plain" }]}>Area</ContextMenu>);
    open();
    await user.click(screen.getByRole("button", { name: "Edit" }));
    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("button", { name: "Edit" })).not.toBeInTheDocument();
    open();
    await user.click(screen.getByRole("button", { name: "Plain" }));
    expect(screen.queryByRole("button", { name: "Plain" })).not.toBeInTheDocument();
  });

  it("draws dividers, icons, and disabled and destructive items", async () => {
    const user = userEvent.setup();
    const onLocked = vi.fn();
    const { container } = render(
      <ContextMenu
        items={[
          { label: "Icon", icon: <svg data-testid="icon" /> },
          { isDivider: true },
          { label: "Locked", disabled: true, onClick: onLocked },
          { label: "Delete", destructive: true },
        ]}
      >
        Area
      </ContextMenu>,
    );
    open();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(container.querySelector(".border-t")).not.toBeNull();
    const locked = screen.getByRole("button", { name: "Locked" });
    expect(locked.className).toContain("cursor-not-allowed");
    await user.click(locked);
    expect(onLocked).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Delete" }).className).toContain("text-danger");
  });

  it("stays open on a press inside and closes on one outside", () => {
    render(
      <>
        <ContextMenu items={[{ label: "Edit" }]}>Area</ContextMenu>
        <p>Outside</p>
      </>,
    );
    fireEvent.mouseDown(screen.getByText("Outside"));
    open();
    fireEvent.mouseDown(screen.getByRole("button", { name: "Edit" }));
    expect(screen.getByRole("button", { name: "Edit" })).toBeInTheDocument();
    fireEvent.mouseDown(screen.getByText("Outside"));
    expect(screen.queryByRole("button", { name: "Edit" })).not.toBeInTheDocument();
  });
});

it("ContextMenu opens on a context event", () => {
  const onClick = vi.fn();
  render(
    <ContextMenu items={[{ label: "Rename", onClick }]}>
      <span>Target</span>
    </ContextMenu>,
  );
  fireEvent.contextMenu(screen.getByText("Target"));
  fireEvent.click(screen.getByRole("button", { name: "Rename" }));
  expect(onClick).toHaveBeenCalledTimes(1);
});
