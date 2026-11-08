import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProgressBar, { PROGRESS_BAR_SIZE, PROGRESS_BAR_TYPE } from "./index";

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

it("ProgressBar clamps and exposes the progressbar role", () => {
  render(
    <ProgressBar
      value={150}
      max={50}
      type={PROGRESS_BAR_TYPE.SUCCESS}
      size={PROGRESS_BAR_SIZE.LARGE}
      label="Upload"
      showValue
    />,
  );
  expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "150");
  expect(screen.getByText("100%")).toBeInTheDocument();
});
