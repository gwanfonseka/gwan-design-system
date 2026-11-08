import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Drawer, { DRAWER_PLACEMENT, DRAWER_SIZE } from "./index";
import { useState } from "react";

it("Drawer closes from the overlay and the close button", async () => {
  const user = userEvent.setup();
  const onClose = vi.fn();
  const { rerender } = render(
    <Drawer open title="Details" onClose={onClose} placement={DRAWER_PLACEMENT.LEFT} size={DRAWER_SIZE.SMALL}>
      Inside
    </Drawer>,
  );
  expect(screen.getByText("Inside")).toBeInTheDocument();
  expect(document.body.style.overflow).toBe("hidden");
  await user.click(screen.getByRole("button", { name: "Close drawer" }));
  expect(onClose).toHaveBeenCalledTimes(1);
  rerender(
    <Drawer open={false} onClose={onClose} showOverlay={false}>
      Hidden
    </Drawer>,
  );
  expect(document.body.style.overflow).toBe("");
});

describe("Drawer", () => {
  const Harness = ({ showOverlay = true }: { showOverlay?: boolean }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open</button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Edit profile" showOverlay={showOverlay}>
          <input aria-label="Name" />
        </Drawer>
      </>
    );
  };

  it("is a labelled dialog that is out of reach while closed", () => {
    render(<Harness />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    const panel = document.querySelector('[role="dialog"]')!;
    expect(panel).toHaveAttribute("inert");
  });

  it("moves focus in, closes on Escape, and gives focus back", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    const trigger = screen.getByRole("button", { name: "Open" });
    await user.click(trigger);
    const dialog = screen.getByRole("dialog", { name: "Edit profile" });
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(screen.getByRole("button", { name: "Close drawer" })).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("keeps Tab inside while the overlay is shown", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.click(screen.getByRole("button", { name: "Open" }));
    await user.tab();
    expect(screen.getByRole("textbox", { name: "Name" })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole("button", { name: "Close drawer" })).toHaveFocus();
  });
});

describe("Drawer focus trap and sizes", () => {
  it("wraps backwards from the first element", async () => {
    const user = userEvent.setup();
    render(
      <Drawer open onClose={() => {}} title="T">
        <input aria-label="Name" />
      </Drawer>,
    );
    await user.tab({ shift: true });
    expect(screen.getByRole("textbox", { name: "Name" })).toHaveFocus();
  });

  it("leaves Tab alone between elements and without the overlay", async () => {
    const user = userEvent.setup();
    const { rerender } = render(
      <Drawer open onClose={() => {}} title="T">
        <input aria-label="A" />
        <input aria-label="B" />
      </Drawer>,
    );
    await user.tab();
    await user.tab();
    expect(screen.getByRole("textbox", { name: "B" })).toHaveFocus();
    await user.tab({ shift: true });
    expect(screen.getByRole("textbox", { name: "A" })).toHaveFocus();
    rerender(
      <Drawer open onClose={() => {}} title="T" showOverlay={false}>
        <input aria-label="A" />
      </Drawer>,
    );
    expect(screen.getByRole("dialog")).not.toHaveAttribute("aria-modal");
  });

  it("uses a generic name without a title", () => {
    render(
      <Drawer open onClose={() => {}}>
        Body
      </Drawer>,
    );
    expect(screen.getByRole("dialog", { name: "Drawer" })).toBeInTheDocument();
  });

  it.each([
    [DRAWER_PLACEMENT.TOP, "h-72"],
    [DRAWER_PLACEMENT.BOTTOM, "h-72"],
    [DRAWER_PLACEMENT.LEFT, "w-80"],
  ])("sizes a %s drawer", (placement, className) => {
    render(
      <Drawer open onClose={() => {}} placement={placement}>
        Body
      </Drawer>,
    );
    expect(screen.getByRole("dialog").className).toContain(className);
  });
});
