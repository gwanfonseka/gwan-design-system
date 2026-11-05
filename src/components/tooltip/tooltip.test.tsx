import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Tooltip, { TOOLTIP_POSITION } from "./index";

const bubble = () => screen.getByText("Tip").parentElement!;

describe("Tooltip", () => {
  it.each([
    [TOOLTIP_POSITION.TOP, "bottom-full"],
    [TOOLTIP_POSITION.BOTTOM, "top-full"],
    [TOOLTIP_POSITION.LEFT, "right-full"],
    [TOOLTIP_POSITION.RIGHT, "left-full"],
  ])("positions itself %s", (position, className) => {
    render(<Tooltip label="Tip" position={position} isVisible />);
    expect(bubble().className).toContain(className);
  });

  it("adds no position for an unknown value from plain JavaScript", () => {
    render(<Tooltip label="Tip" position={"other" as TOOLTIP_POSITION} isVisible />);
    expect(bubble().className).not.toContain("undefined");
    expect(bubble().className).not.toMatch(/(bottom|top|left|right)-full/);
  });
});

it("Tooltip stays hidden until isVisible", () => {
  const { container, rerender } = render(
    <Tooltip position={TOOLTIP_POSITION.TOP} label="Hint" isVisible={false} />,
  );
  expect(container.firstElementChild!.className).toContain("hidden");
  rerender(<Tooltip position={TOOLTIP_POSITION.BOTTOM} label="Hint" isVisible />);
  expect(container.firstElementChild!.className).toContain("block");
  expect(screen.getByText("Hint")).toBeInTheDocument();
});
