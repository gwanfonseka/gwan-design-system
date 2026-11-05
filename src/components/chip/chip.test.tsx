import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Chip, { CHIP_EDGE_STYLE, CHIP_VARIANT } from "./index";

const root = () => screen.getByText("Design").parentElement!;

describe("Chip", () => {
  it.each([
    [CHIP_EDGE_STYLE.SQUARED, "rounded-none"],
    [CHIP_EDGE_STYLE.PILL, "rounded-full"],
    [CHIP_EDGE_STYLE.ROUNDED, "rounded-lg"],
  ])("applies the %s edge style", (edges, className) => {
    render(<Chip label="Design" onClear={() => {}} edges={edges} />);
    expect(root().className).toContain(className);
  });

  it("outlines the outline variant", () => {
    render(<Chip label="Design" onClear={() => {}} variant={CHIP_VARIANT.OUTLINE} />);
    expect(root().className).toContain("border-neutral-700");
  });

  it("falls back to the solid look for an unknown variant from plain JavaScript", () => {
    render(<Chip label="Design" onClear={() => {}} variant={"other" as CHIP_VARIANT} />);
    expect(root().className).toContain("bg-neutral-300");
  });
});
