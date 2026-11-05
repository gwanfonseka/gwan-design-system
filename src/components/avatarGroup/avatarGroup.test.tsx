import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AvatarGroup from "./index";

const people = ["Ann Lee", "Bo Chen", "Cy Roy"].map((name) => ({ name, email: `${name}@x.dev` }));

describe("AvatarGroup", () => {
  it("lists the hidden people in a tooltip while hovering the +N bubble", () => {
    render(<AvatarGroup items={people} max={1} />);
    const bubble = screen.getByText("+2").parentElement!;
    const tooltip = screen.getByText("Cy Roy").closest(".absolute")!;
    expect(tooltip.className).toContain("hidden");
    fireEvent.mouseEnter(bubble);
    expect(tooltip.className).toContain("block");
    fireEvent.mouseLeave(bubble);
    expect(tooltip.className).toContain("hidden");
  });

  it("shows no bubble when everyone fits", () => {
    render(<AvatarGroup items={people} max={3} />);
    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument();
  });
});
