import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Input, { FORM_ELEMENT_SIZE } from "./index";

const pasteInto = (input: HTMLElement, text: string) => {
  const event = createEvent.paste(input, { clipboardData: { getData: () => text } });
  fireEvent(input, event);
  return event;
};

describe("Input", () => {
  it("has no id or error link without a label or id", () => {
    render(<Input value="" onChange={() => {}} isError errorMessage="Required" />);
    const input = screen.getByRole("textbox");
    expect(input).not.toHaveAttribute("id");
    expect(screen.getByRole("alert")).not.toHaveAttribute("id");
  });

  it.each([
    [FORM_ELEMENT_SIZE.SM, true, "pr-7"],
    [FORM_ELEMENT_SIZE.MD, true, "pr-8"],
    [FORM_ELEMENT_SIZE.SM, false, "pr-2.5"],
    [FORM_ELEMENT_SIZE.MD, false, "pr-3"],
  ])("leaves room for the clear control at size %s (onClear: %s)", (size, clearable, className) => {
    render(<Input value="" onChange={() => {}} size={size} onClear={clearable ? () => {} : undefined} />);
    expect(screen.getByRole("textbox").className).toContain(className);
  });

  describe("number fields", () => {
    const pressed = (key: string, min?: number) => {
      render(<Input value="" type="number" min={min} onChange={() => {}} />);
      return !fireEvent.keyDown(screen.getByRole("spinbutton"), { key });
    };

    it("blocks the keys a number can't contain", () => {
      expect(pressed("e")).toBe(true);
    });

    it("allows minus without a positive minimum, and digits always", () => {
      expect(pressed("-")).toBe(false);
    });

    it("blocks minus when the minimum is zero or more", () => {
      expect(pressed("-", 0)).toBe(true);
    });

    it("allows minus with a negative minimum", () => {
      expect(pressed("-", -5)).toBe(false);
    });

    it("blocks pasted text with those characters", () => {
      render(<Input value="" type="number" onChange={() => {}} />);
      expect(pasteInto(screen.getByRole("spinbutton"), "1e5").defaultPrevented).toBe(true);
    });

    it("blocks a pasted minus only with a non-negative minimum", () => {
      const { rerender } = render(<Input value="" type="number" min={0} onChange={() => {}} />);
      expect(pasteInto(screen.getByRole("spinbutton"), "-5").defaultPrevented).toBe(true);
      rerender(<Input value="" type="number" min={-10} onChange={() => {}} />);
      expect(pasteInto(screen.getByRole("spinbutton"), "-5").defaultPrevented).toBe(false);
    });
  });

  it("leaves keys and paste alone on text fields, and forwards onPaste and onKeyDown", () => {
    const onPaste = vi.fn();
    const onKeyDown = vi.fn();
    render(<Input value="" onChange={() => {}} onPaste={onPaste} onKeyDown={onKeyDown} />);
    const input = screen.getByRole("textbox");
    expect(fireEvent.keyDown(input, { key: "e" })).toBe(true);
    expect(pasteInto(input, "1e5").defaultPrevented).toBe(false);
    expect(onPaste).toHaveBeenCalledTimes(1);
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });
});
