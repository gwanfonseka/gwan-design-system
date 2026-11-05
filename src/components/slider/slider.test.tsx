import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Slider from "./index";

describe("Slider", () => {
  it("labels a single thumb directly", () => {
    render(<Slider label="Volume" value={10} onChange={() => {}} />);
    expect(screen.getByRole("slider", { name: "Volume" })).toBeInTheDocument();
    expect(screen.queryByRole("group")).not.toBeInTheDocument();
  });

  it("labels the two thumbs of a range as a group", () => {
    render(<Slider label="Price" value={[20, 80]} onChange={() => {}} />);
    expect(screen.getByRole("group", { name: "Price" })).toBeInTheDocument();
    expect(screen.getByRole("slider", { name: "Minimum value" })).toHaveValue("20");
    expect(screen.getByRole("slider", { name: "Maximum value" })).toHaveValue("80");
  });

  it("has no group name without a label", () => {
    render(<Slider value={[20, 80]} onChange={() => {}} />);
    expect(screen.getByRole("group")).not.toHaveAttribute("aria-labelledby");
  });

  it("keeps the low thumb below the high one", () => {
    const onChange = vi.fn();
    render(<Slider value={[20, 80]} step={5} onChange={onChange} />);
    const low = screen.getByRole("slider", { name: "Minimum value" });
    fireEvent.change(low, { target: { value: "30" } });
    expect(onChange).toHaveBeenLastCalledWith([30, 80]);
    fireEvent.change(low, { target: { value: "95" } });
    expect(onChange).toHaveBeenLastCalledWith([75, 80]);
  });

  it("lifts the thumb being dragged above the other", () => {
    render(<Slider value={[50, 50]} onChange={() => {}} />);
    const low = screen.getByRole("slider", { name: "Minimum value" });
    const high = screen.getByRole("slider", { name: "Maximum value" });
    expect(low.style.zIndex).toBe("20");
    fireEvent.mouseDown(high);
    expect(high.style.zIndex).toBe("20");
    expect(low.style.zIndex).toBe("10");
    fireEvent.mouseDown(low);
    expect(low.style.zIndex).toBe("20");
    fireEvent.touchStart(high);
    expect(high.style.zIndex).toBe("20");
    fireEvent.touchStart(low);
    expect(low.style.zIndex).toBe("20");
  });
});
