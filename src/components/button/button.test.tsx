import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button, { BUTTON_EDGE_STYLE, BUTTON_VARIANTS } from "./index";

describe("Button", () => {
  it.each([
    [BUTTON_VARIANTS.PRIMARY, "bg-primary-200"],
    [BUTTON_VARIANTS.SECONDARY, "bg-surface"],
    [BUTTON_VARIANTS.TERTIARY, "border-border"],
  ])("disables the %s variant", (variant, className) => {
    const onClick = vi.fn();
    render(<Button label="Go" variant={variant} disabled onClick={onClick} />);
    const button = screen.getByRole("button", { name: "Go" });
    expect(button).toBeDisabled();
    expect(button.className).toContain(className);
    expect(button.className).toContain("cursor-not-allowed");
  });

  it.each([
    [BUTTON_EDGE_STYLE.SQUARED, "rounded-none"],
    [BUTTON_EDGE_STYLE.PILL, "rounded-full"],
    [BUTTON_EDGE_STYLE.ROUNDED, "rounded-lg"],
  ])("applies the %s edge style", (edges, className) => {
    render(<Button label="Go" edges={edges} onClick={() => {}} />);
    expect(screen.getByRole("button").className).toContain(className);
  });
});
