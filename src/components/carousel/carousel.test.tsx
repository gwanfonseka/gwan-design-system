import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Carousel from "./index";

const slides = [{ title: "One" }, { title: "Two" }];
const slideOf = (title: string) => screen.getByText(title).closest(".absolute")!;

describe("Carousel", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("advances on the interval and wraps to the first slide", () => {
    render(<Carousel slides={slides} interval={1000} />);
    expect(slideOf("One").className).toContain("opacity-100");
    act(() => vi.advanceTimersByTime(1000));
    expect(slideOf("Two").className).toContain("opacity-100");
    expect(slideOf("One").className).toContain("opacity-0");
    act(() => vi.advanceTimersByTime(1000));
    expect(slideOf("One").className).toContain("opacity-100");
  });

  it("stops its timer when unmounted", () => {
    const { unmount } = render(<Carousel slides={slides} />);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});

it("Carousel shows the first slide", () => {
  render(<Carousel slides={[{ title: "One" }, { title: "Two" }]} interval={60000} />);
  expect(screen.getByText("One")).toBeInTheDocument();
  expect(screen.getByText("Two")).toBeInTheDocument();
});

it("Carousel shows custom slide content", () => {
  render(<Carousel slides={[{ content: <p>Custom</p> }, { title: "Banner" }]} interval={60000} />);
  expect(screen.getByText("Custom")).toBeInTheDocument();
  expect(screen.getByText("Banner")).toBeInTheDocument();
});
