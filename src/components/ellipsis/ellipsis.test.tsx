import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Ellipsis from "./index";

describe("Ellipsis", () => {
  it("shows the full text in a tooltip only while hovering", () => {
    const { container } = render(<Ellipsis label="A long project name" />);
    const root = container.firstElementChild!;
    const tooltip = root.querySelector(".absolute")!;
    expect(tooltip.className).toContain("hidden");
    fireEvent.mouseEnter(root);
    expect(tooltip.className).toContain("block");
    fireEvent.mouseLeave(root);
    expect(tooltip.className).toContain("hidden");
    expect(screen.getAllByText("A long project name")).toHaveLength(2);
  });
});
