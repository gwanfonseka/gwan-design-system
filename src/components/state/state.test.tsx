import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import State, { STATE_TYPE } from "./index";

const copy = { title: "Title", subTitle: "Sub" };

describe("State", () => {
  it.each([
    [STATE_TYPE.EMPTY, "text-muted-fg"],
    [STATE_TYPE.SUCCESS, "text-success"],
    [STATE_TYPE.ERROR, "text-danger"],
    [STATE_TYPE.LOADING, "animate-spin"],
  ])("draws the built-in %s illustration inline", (type, tone) => {
    const { container } = render(<State type={type} {...copy} />);
    expect(container.querySelector("img")).toBeNull();
    expect(container.querySelector(`.${tone} svg`)).not.toBeNull();
  });

  it("announces only the loading state", () => {
    const { rerender } = render(<State type={STATE_TYPE.LOADING} {...copy} />);
    expect(screen.getByRole("status")).toBeInTheDocument();
    rerender(<State type={STATE_TYPE.EMPTY} {...copy} />);
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("sizes the illustration from the smaller of width and height, defaulting to 160", () => {
    const { container, rerender } = render(<State type={STATE_TYPE.EMPTY} {...copy} />);
    const circle = () => container.querySelector('[aria-hidden="true"]') as HTMLElement;
    expect(circle().style.width).toBe("160px");
    rerender(<State type={STATE_TYPE.EMPTY} {...copy} imageWidth={80} imageHeight={200} />);
    expect(circle().style.width).toBe("80px");
  });

  it("shows a custom image at 526px by default, or the given size", () => {
    const { container, rerender } = render(<State stateImage="/x.png" {...copy} />);
    const img = () => container.querySelector("img")!;
    expect(img()).toHaveAttribute("src", "/x.png");
    expect(img()).toHaveAttribute("width", "526");
    expect(img()).toHaveAttribute("height", "526");
    rerender(<State stateImage="/x.png" {...copy} imageWidth={100} imageHeight={50} />);
    expect(img()).toHaveAttribute("width", "100");
    expect(img()).toHaveAttribute("height", "50");
  });

  it("prefers a custom image over the type's illustration", () => {
    const { container } = render(<State type={STATE_TYPE.EMPTY} stateImage="/x.png" {...copy} />);
    expect(container.querySelector("img")).not.toBeNull();
    expect(container.querySelector('[aria-hidden="true"]')).toBeNull();
  });
});
