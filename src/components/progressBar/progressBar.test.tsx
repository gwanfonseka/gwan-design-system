import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProgressBar from "./index";

describe("ProgressBar", () => {
  it("shows no header without a label or value", () => {
    const { container } = render(<ProgressBar value={40} />);
    expect(container.querySelector(".justify-between")).toBeNull();
  });

  it("shows the value without a label", () => {
    render(<ProgressBar value={40} showValue />);
    expect(screen.getByText("40%")).toBeInTheDocument();
  });

  it("only animates stripes", () => {
    const { rerender } = render(<ProgressBar value={40} animated />);
    expect(screen.getByRole("progressbar").className).not.toContain("animate-");
    rerender(<ProgressBar value={40} animated striped />);
    expect(screen.getByRole("progressbar").className).toContain("animate-");
  });
});
