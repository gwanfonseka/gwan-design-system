import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Card from "./index";

describe("Card", () => {
  it("renders a plain body without slots", () => {
    const { container } = render(<Card>Body</Card>);
    expect(container.querySelector(".border-b, .border-t")).toBeNull();
    expect(screen.getByText("Body")).toBeInTheDocument();
  });

  it("separates a header on its own", () => {
    const { container } = render(<Card header="Title">Body</Card>);
    expect(screen.getByText("Title").className).toContain("border-b");
    expect(container.querySelector(".border-t")).toBeNull();
  });

  it("separates a footer on its own", () => {
    const { container } = render(<Card footer="Actions">Body</Card>);
    expect(screen.getByText("Actions").className).toContain("border-t");
    expect(container.querySelector(".border-b")).toBeNull();
  });
});
