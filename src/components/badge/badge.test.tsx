import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Badge, { BADGE_SIZE, BADGE_TYPE, BADGE_VARIANT } from "./index";

describe("Badge", () => {
  it.each([
    [BADGE_TYPE.SUCCESS, "bg-success-bg", "border-success", "bg-success"],
    [BADGE_TYPE.DANGER, "bg-danger-bg", "border-danger", "bg-danger"],
    [BADGE_TYPE.WARNING, "bg-warning-bg", "border-warning", "bg-warning"],
    [BADGE_TYPE.INFO, "bg-accent/10", "border-accent", "bg-accent"],
    [BADGE_TYPE.DEFAULT, "bg-surface-raised", "border-border", "bg-muted-fg"],
  ])("colours %s as solid, outline and dot", (type, solid, outline, dot) => {
    const { container, rerender } = render(<Badge type={type} label="Label" />);
    expect(screen.getByText("Label").className).toContain(solid);
    rerender(<Badge type={type} label="Label" variant={BADGE_VARIANT.OUTLINE} />);
    expect(screen.getByText("Label").className).toContain(outline);
    rerender(<Badge type={type} dot />);
    expect(container.firstElementChild!.className).toContain(dot);
  });

  it("sizes a dot-only badge", () => {
    const { container, rerender } = render(<Badge dot size={BADGE_SIZE.SMALL} />);
    expect(container.firstElementChild!.className).toContain("w-2 h-2");
    rerender(<Badge dot />);
    expect(container.firstElementChild!.className).toContain("w-2.5 h-2.5");
    expect(container.textContent).toBe("");
  });

  it("puts the dot beside a label", () => {
    render(<Badge dot label="Live" />);
    expect(screen.getByText("Live").querySelector(".rounded-full")).not.toBeNull();
  });
});

it("Badge shows its label, dot, and size", () => {
  const { container } = render(
    <Badge type={BADGE_TYPE.DANGER} variant={BADGE_VARIANT.OUTLINE} size={BADGE_SIZE.SMALL} label={3} dot />,
  );
  expect(screen.getByText("3")).toBeInTheDocument();
  expect(container.querySelector(".rounded-full")).toBeTruthy();
});
