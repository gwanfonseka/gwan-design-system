import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import TextArea from "./index";

describe("TextArea", () => {
  it("derives its id from the label, and prefers an explicit id", () => {
    const { rerender } = render(<TextArea label="Your message" value="" onChange={() => {}} />);
    expect(screen.getByRole("textbox").id).toBe("gwan-textarea-your-message");
    rerender(<TextArea label="Your message" id="custom" value="" onChange={() => {}} />);
    expect(screen.getByRole("textbox").id).toBe("custom");
    rerender(<TextArea value="" onChange={() => {}} />);
    expect(screen.getByRole("textbox").id).toBe("gwan-textarea");
  });

  it("offers a clear control only with a value", async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    const { container, rerender } = render(<TextArea value="" onChange={() => {}} onClear={onClear} />);
    expect(container.querySelector("svg")).toBeNull();
    rerender(<TextArea value="text" onChange={() => {}} onClear={onClear} />);
    await user.click(container.querySelector("svg")!);
    expect(onClear).toHaveBeenCalledTimes(1);
  });
});
