import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Modal, { MODAL_SIZE } from "./index";

const Body = () => (
  <>
    <button>First</button>
    <button>Last</button>
  </>
);

describe("Modal", () => {
  it("focuses the close button, then gives focus back when it closes", () => {
    const opener = document.createElement("button");
    document.body.appendChild(opener);
    opener.focus();
    const { unmount } = render(
      <Modal title="Title" onClear={() => {}}>
        Body
      </Modal>,
    );
    expect(screen.getByRole("button", { name: "Close dialog" })).toHaveFocus();
    unmount();
    expect(opener).toHaveFocus();
    opener.remove();
  });

  it("closes on Escape but not other keys", () => {
    const onClear = vi.fn();
    render(
      <Modal title="Title" onClear={onClear}>
        Body
      </Modal>,
    );
    fireEvent.keyDown(window, { key: "a" });
    expect(onClear).not.toHaveBeenCalled();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it("wraps Tab in both directions and leaves it alone in between", async () => {
    const user = userEvent.setup();
    render(
      <Modal title="Title" onClear={() => {}}>
        <Body />
      </Modal>,
    );
    const close = screen.getByRole("button", { name: "Close dialog" });
    const first = screen.getByRole("button", { name: "First" });
    const last = screen.getByRole("button", { name: "Last" });
    await user.tab({ shift: true });
    expect(last).toHaveFocus();
    await user.tab();
    expect(close).toHaveFocus();
    await user.tab();
    expect(first).toHaveFocus();
    await user.tab({ shift: true });
    expect(close).toHaveFocus();
  });

  it("ignores other keys in the focus trap", () => {
    render(
      <Modal title="Title" onClear={() => {}}>
        Body
      </Modal>,
    );
    expect(fireEvent.keyDown(screen.getByRole("dialog"), { key: "a" })).toBe(true);
  });

  it("closes from the close button and the backdrop", async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    const { container } = render(
      <Modal title="Title" onClear={onClear} className="backdrop">
        Body
      </Modal>,
    );
    await user.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(onClear).toHaveBeenCalledTimes(1);
    fireEvent.mouseDown(container.querySelector(".backdrop")!);
    expect(onClear).toHaveBeenCalledTimes(2);
  });

  it("doesn't round the full-size panel", () => {
    render(
      <Modal title="Title" onClear={() => {}} size={MODAL_SIZE.FULL}>
        Body
      </Modal>,
    );
    expect(screen.getByRole("dialog").className).not.toContain("rounded-lg");
  });
});

it("Modal labels the dialog and closes from Escape", () => {
  const onClear = vi.fn();
  render(
    <Modal title="Confirm" onClear={onClear} size={MODAL_SIZE.MEDIUM}>
      <p>Are you sure?</p>
    </Modal>,
  );
  expect(screen.getByRole("dialog", { name: "Confirm" })).toBeInTheDocument();
  fireEvent.keyDown(window, { key: "Escape" });
  expect(onClear).toHaveBeenCalledTimes(1);
});
