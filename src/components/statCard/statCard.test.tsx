import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StatCard, { STAT_TREND } from "./index";
import States, { STATE_TYPE } from "../state";

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

it("StatCard and State render their copy", () => {
  const { container } = render(
    <>
      <StatCard label="Users" value={12} trend={STAT_TREND.UP} trendLabel="4%" />
      <States type={STATE_TYPE.EMPTY} title="None" subTitle="Nothing yet" />
    </>,
  );
  expect(screen.getByText("Users")).toBeInTheDocument();
  expect(screen.getByText("↑ 4%")).toBeInTheDocument();
  // The built-in illustration is inline SVG, not a file the app would have to host.
  expect(container.querySelector("img")).toBeNull();
  expect(container.querySelector('[aria-hidden="true"] svg')).not.toBeNull();
  expect(screen.getByText("Nothing yet")).toBeInTheDocument();
});
