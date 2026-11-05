import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StatCard, { STAT_TREND } from "./index";

describe("StatCard", () => {
  it("shows no trend line without a trend", () => {
    render(<StatCard label="Users" value={12} trendLabel="4%" />);
    expect(screen.queryByText(/4%/)).not.toBeInTheDocument();
  });

  it("needs a label to show the trend", () => {
    const { container } = render(<StatCard label="Users" value={12} trend={STAT_TREND.DOWN} />);
    expect(container.querySelector(".text-xs")).toBeNull();
  });
});
