import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Ellipsis from "./index";
import userEvent from "@testing-library/user-event";

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

it("Ellipsis shows its tooltip on hover", async () => {
  const user = userEvent.setup();
  const { container } = render(<Ellipsis label="A very long label" labelMaxWidth="w-8" />);
  const tip = container.querySelector(".z-50")!;
  expect(tip.className).toContain("hidden");
  await user.hover(container.querySelector("p")!);
  expect(tip.className).toContain("block");
});
