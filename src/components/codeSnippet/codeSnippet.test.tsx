import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import * as highlight from "@/lib/highlight";
import CodeSnippet from "./index";

const CODE = `import { Button } from "gwan-design-system";\n\n<Button label="Hi" />`;

describe("CodeSnippet", () => {
  it("highlights the code without changing its text", async () => {
    const { container } = render(<CodeSnippet code={CODE} />);
    const code = container.querySelector("pre code")!;
    expect(code.textContent).toBe(CODE);
    await waitFor(() => expect(code.querySelector("span[style]")).not.toBeNull(), { timeout: 5000 });
    expect(code.textContent).toBe(CODE);
    expect(screen.getByRole("button", { name: "Copy code" })).toBeInTheDocument();
  });
});

describe("CodeSnippet copy button", () => {
  afterEach(() => vi.useRealTimers());

  it("copies the code, confirms, and goes back to Copy", async () => {
    vi.useFakeTimers({ toFake: ["setTimeout"] });
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
    render(<CodeSnippet code={CODE} />);
    fireEvent.click(screen.getByRole("button", { name: "Copy code" }));
    await act(async () => {});
    expect(writeText).toHaveBeenCalledWith(CODE);
    expect(screen.getByText("Copied!")).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(2000));
    expect(screen.getByText("Copy")).toBeInTheDocument();
  });

  it("logs an error and stays on Copy when the clipboard refuses", async () => {
    const error = vi.spyOn(console, "error").mockImplementation(() => {});
    const writeText = vi.fn().mockRejectedValue(new Error("denied"));
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
    render(<CodeSnippet code={CODE} />);
    fireEvent.click(screen.getByRole("button", { name: "Copy code" }));
    await act(async () => {});
    expect(error).toHaveBeenCalled();
    expect(screen.getByText("Copy")).toBeInTheDocument();
  });

  it("stays as plain text if the highlighter fails to load", async () => {
    vi.spyOn(highlight, "loadHighlighter").mockRejectedValue(new Error("offline"));
    const { container } = render(<CodeSnippet code={CODE} />);
    await act(async () => {});
    expect(container.querySelector("pre code")!.textContent).toBe(CODE);
  });

  it("ignores the highlighter finishing after unmount", async () => {
    let finish = () => {};
    vi.spyOn(highlight, "loadHighlighter").mockReturnValue(
      new Promise((resolve) => {
        finish = () => resolve({} as never);
      }),
    );
    const { unmount } = render(<CodeSnippet code={CODE} />);
    unmount();
    await act(async () => finish());
  });
});
