import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Skeleton, { SKELETON_VARIANT } from "./index";

const el = (ui: React.ReactElement) => render(ui).container.firstElementChild as HTMLElement;

describe("Skeleton", () => {
  it("fills the width with a default rectangle", () => {
    const box = el(<Skeleton />);
    expect(box.style.width).toBe("100%");
    expect(box.style.height).toBe("1rem");
  });

  it("takes pixels or CSS lengths for a rectangle", () => {
    const box = el(<Skeleton width={120} height="2rem" />);
    expect(box.style.width).toBe("120px");
    expect(box.style.height).toBe("2rem");
    expect(el(<Skeleton width="50%" height={30} />).style.height).toBe("30px");
  });

  it.each([
    [{}, "40px"],
    [{ width: 24 }, "24px"],
    [{ height: 32 }, "32px"],
    [{ width: "3rem" }, "3rem"],
  ])("draws a square circle for %j", (props, size) => {
    const circle = el(<Skeleton variant={SKELETON_VARIANT.CIRCLE} {...props} />);
    expect(circle.className).toContain("rounded-full");
    expect(circle.style.width).toBe(size);
    expect(circle.style.height).toBe(size);
  });

  it("draws one text line at full width unless told otherwise", () => {
    expect(el(<Skeleton variant={SKELETON_VARIANT.TEXT} />).style.width).toBe("100%");
    expect(el(<Skeleton variant={SKELETON_VARIANT.TEXT} width={80} />).style.width).toBe("80px");
  });

  it("shortens the last of several text lines", () => {
    const lines = el(<Skeleton variant={SKELETON_VARIANT.TEXT} lines={3} />).children;
    expect(lines).toHaveLength(3);
    expect((lines[0] as HTMLElement).style.width).toBe("100%");
    expect((lines[2] as HTMLElement).style.width).toBe("70%");
  });
});

it("Skeleton renders a circle and several text lines", () => {
  const { container, rerender } = render(
    <Skeleton variant={SKELETON_VARIANT.CIRCLE} width={24} />,
  );
  expect(container.firstElementChild).toHaveStyle({ width: "24px", height: "24px" });
  rerender(<Skeleton variant={SKELETON_VARIANT.TEXT} lines={3} />);
  expect(container.querySelectorAll(".animate-pulse")).toHaveLength(3);
});
