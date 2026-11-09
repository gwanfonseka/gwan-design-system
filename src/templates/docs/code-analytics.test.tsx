import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { setGaEnv } from "@/test/ga-env";
import GettingStarted from "./sections/getting-started";
import { Code } from "./primitives";

function copyButtonFor(snippet: string) {
  const code = screen.getByText(snippet);
  const block = code.parentElement?.parentElement;
  if (!block) throw new Error(`no code block for ${snippet}`);
  return within(block).getByRole("button", { name: "Copy" });
}

describe("install command copy", () => {
  const writeText = vi.fn();

  beforeEach(() => {
    setGaEnv("G-PROD123");
    window.gtag = vi.fn();
    writeText.mockReset();
    writeText.mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
  });

  it("sends copy_install_command when the package install snippet is copied", async () => {
    render(<GettingStarted />);
    await userEvent.click(copyButtonFor("npm install gwan-design-system"));
    await vi.waitFor(() => {
      expect(window.gtag).toHaveBeenCalledWith("event", "copy_install_command");
    });
    expect(writeText).toHaveBeenCalledWith("npm install gwan-design-system");
  });

  it("does not send an event for the other install snippets", async () => {
    render(<GettingStarted />);
    await userEvent.click(copyButtonFor("npm install tailwindcss@^4 @tailwindcss/postcss"));
    await userEvent.click(copyButtonFor("npm install next-themes"));
    await vi.waitFor(() => expect(writeText).toHaveBeenCalledTimes(2));
    expect(window.gtag).not.toHaveBeenCalled();
  });

  it("does nothing when the clipboard rejects", async () => {
    writeText.mockReset();
    writeText.mockRejectedValue(new Error("denied"));
    render(<Code event="copy_install_command">npm install gwan-design-system</Code>);
    await userEvent.click(screen.getByRole("button", { name: "Copy" }));
    expect(writeText).toHaveBeenCalled();
    expect(window.gtag).not.toHaveBeenCalled();
  });

  it("does nothing when analytics is off", async () => {
    setGaEnv(undefined);
    render(<Code event="copy_install_command">npm install gwan-design-system</Code>);
    await userEvent.click(screen.getByRole("button", { name: "Copy" }));
    await vi.waitFor(() => expect(writeText).toHaveBeenCalled());
    expect(window.gtag).not.toHaveBeenCalled();
  });
});
