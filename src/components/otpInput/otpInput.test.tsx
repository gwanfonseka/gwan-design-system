import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import OtpInput, { OTP_SIZE } from "./index";
import userEvent from "@testing-library/user-event";

const setup = (value: string, length = 4) => {
  const onChange = vi.fn();
  const onComplete = vi.fn();
  render(<OtpInput value={value} length={length} onChange={onChange} onComplete={onComplete} />);
  const cells = screen.getAllByRole("textbox");
  return { onChange, onComplete, cells };
};

const paste = (cell: HTMLElement, text: string) => {
  const event = createEvent.paste(cell, { clipboardData: { getData: () => text } });
  fireEvent(cell, event);
  return event;
};

describe("OtpInput", () => {
  it("has no group name without a label", () => {
    render(<OtpInput value="" onChange={() => {}} />);
    expect(screen.getByRole("group")).not.toHaveAttribute("aria-labelledby");
  });

  describe("Backspace", () => {
    it("clears a filled cell and stays there", () => {
      const { cells, onChange } = setup("12");
      cells[1].focus();
      fireEvent.keyDown(cells[1], { key: "Backspace" });
      expect(onChange).toHaveBeenCalledWith("1");
      expect(cells[1]).toHaveFocus();
    });

    it("clears the previous cell and moves back from an empty one", () => {
      const { cells, onChange } = setup("12");
      cells[2].focus();
      fireEvent.keyDown(cells[2], { key: "Backspace" });
      expect(onChange).toHaveBeenCalledWith("1");
      expect(cells[1]).toHaveFocus();
    });

    it("does nothing on the first empty cell", () => {
      const { cells, onChange } = setup("");
      fireEvent.keyDown(cells[0], { key: "Backspace" });
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  it("moves with the arrow keys and stops at the ends", () => {
    const { cells } = setup("");
    cells[0].focus();
    fireEvent.keyDown(cells[0], { key: "ArrowLeft" });
    expect(cells[0]).toHaveFocus();
    fireEvent.keyDown(cells[0], { key: "ArrowRight" });
    expect(cells[1]).toHaveFocus();
    fireEvent.keyDown(cells[1], { key: "ArrowLeft" });
    expect(cells[0]).toHaveFocus();
    cells[3].focus();
    fireEvent.keyDown(cells[3], { key: "ArrowRight" });
    expect(cells[3]).toHaveFocus();
  });

  it("ignores other keys", () => {
    const { cells, onChange } = setup("");
    expect(fireEvent.keyDown(cells[0], { key: "a" })).toBe(true);
    expect(onChange).not.toHaveBeenCalled();
  });

  describe("paste", () => {
    it("takes only digits, fills the cells, and completes", () => {
      const { cells, onChange, onComplete } = setup("");
      expect(paste(cells[0], "12-34").defaultPrevented).toBe(true);
      expect(onChange).toHaveBeenCalledWith("1234");
      expect(onComplete).toHaveBeenCalledWith("1234");
      expect(cells[3]).toHaveFocus();
    });

    it("keeps earlier digits when pasting into a later cell, and stops at the last cell", () => {
      const { cells, onChange } = setup("9");
      paste(cells[1], "123456");
      expect(onChange).toHaveBeenCalledWith("9123");
    });

    it("doesn't complete a partial paste", () => {
      const { cells, onChange, onComplete } = setup("");
      paste(cells[0], "12");
      expect(onChange).toHaveBeenCalledWith("12");
      expect(onComplete).not.toHaveBeenCalled();
      expect(cells[2]).toHaveFocus();
    });

    it("ignores text with no digits", () => {
      const { cells, onChange } = setup("");
      paste(cells[0], "abc");
      expect(onChange).not.toHaveBeenCalled();
    });

    it("works without onComplete", () => {
      const onChange = vi.fn();
      render(<OtpInput value="" length={2} onChange={onChange} />);
      paste(screen.getAllByRole("textbox")[0], "12");
      expect(onChange).toHaveBeenCalledWith("12");
    });
  });
});

it("OtpInput fills a digit and reports completion", async () => {
  const user = userEvent.setup();
  const onChange = vi.fn();
  const onComplete = vi.fn();
  const view = render(
    <OtpInput value="" onChange={onChange} onComplete={onComplete} length={4} size={OTP_SIZE.SM} label="Code" />,
  );
  await user.type(screen.getByLabelText("Digit 1 of 4"), "1");
  expect(onChange).toHaveBeenCalledWith("1");
  view.rerender(
    <OtpInput value="123" onChange={onChange} onComplete={onComplete} length={4} label="Code" />,
  );
  await user.type(screen.getByLabelText("Digit 4 of 4"), "4");
  expect(onComplete).toHaveBeenCalledWith("1234");
});
