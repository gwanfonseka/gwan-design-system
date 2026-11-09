import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { setGaEnv } from "@/test/ga-env";
import CssOutput from "./css-output";

const CSS = ":root { --primary: #111; }";

describe("CssOutput", () => {
  beforeEach(() => {
    setGaEnv("G-PROD123");
    window.gtag = vi.fn();
  });

  it("copies the theme CSS and sends copy_theme_css", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
    render(<CssOutput cssOutput={CSS} />);

    await userEvent.click(screen.getByRole("button", { name: "Copy CSS" }));

    expect(writeText).toHaveBeenCalledWith(CSS);
    expect(window.gtag).toHaveBeenCalledWith("event", "copy_theme_css");
    expect(screen.getByRole("button", { name: "Copied!" })).toBeInTheDocument();
  });

  it("does not send an event when the copy fails or analytics is off", async () => {
    const writeText = vi.fn().mockRejectedValue(new Error("denied"));
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
    const { rerender } = render(<CssOutput cssOutput={CSS} />);

    await userEvent.click(screen.getByRole("button", { name: "Copy CSS" }));
    expect(window.gtag).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Copy CSS" })).toBeInTheDocument();

    writeText.mockResolvedValue(undefined);
    setGaEnv(undefined);
    rerender(<CssOutput cssOutput={CSS} />);
    await userEvent.click(screen.getByRole("button", { name: "Copy CSS" }));
    expect(window.gtag).not.toHaveBeenCalled();
  });
});
