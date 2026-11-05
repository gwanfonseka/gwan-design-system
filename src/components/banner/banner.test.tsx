import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Banner from "./index";

it("Banner places the title and applies a background colour", () => {
  const { container, rerender } = render(
    <Banner title="Hello" subTitle="There" backgroundColor="bg-primary-500" contentPlacement="left" />,
  );
  expect(screen.getByText("Hello")).toBeInTheDocument();
  // backgroundColor is applied as a class name, not an inline CSS color.
  expect(container.firstElementChild!.className).toContain("bg-primary-500");
  rerender(<Banner title="Right" contentPlacement="right" />);
  expect(screen.getByText("Right")).toBeInTheDocument();
});
