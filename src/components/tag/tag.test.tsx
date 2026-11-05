import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Tag, { TAG_EDGE_STYLE, TAG_TYPE, TAG_VARIANT } from "./index";

describe("Tag", () => {
  it.each([
    [TAG_TYPE.SUCCESS, "bg-success-bg", "border-success"],
    [TAG_TYPE.DANGER, "bg-danger-bg", "border-danger"],
    [TAG_TYPE.WARNING, "bg-warning-bg", "border-warning"],
    [TAG_TYPE.INFO, "bg-accent/10", "border-accent"],
    [TAG_TYPE.DEFAULT, "bg-surface-raised", "border-border"],
  ])("colours %s as solid and outline", (type, solid, outline) => {
    const { rerender } = render(<Tag type={type} label="Label" />);
    expect(screen.getByText("Label").className).toContain(solid);
    rerender(<Tag type={type} label="Label" variant={TAG_VARIANT.OUTLINE} />);
    expect(screen.getByText("Label").className).toContain(outline);
  });

  it.each([
    [TAG_EDGE_STYLE.SQUARED, "rounded-none"],
    [TAG_EDGE_STYLE.PILL, "rounded-full"],
    [TAG_EDGE_STYLE.ROUNDED, "rounded-lg"],
  ])("applies the %s edge style", (edges, className) => {
    render(<Tag type={TAG_TYPE.DEFAULT} label="Label" edges={edges} />);
    expect(screen.getByText("Label").className).toContain(className);
  });
});
