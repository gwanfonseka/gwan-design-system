import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Divider, { DIVIDER_ORIENTATION, DIVIDER_VARIANT } from "./index";

it("Divider renders horizontal label and vertical orientation", () => {
  const { rerender } = render(
    <Divider variant={DIVIDER_VARIANT.DASHED} label="Or" />,
  );
  expect(screen.getByText("Or")).toBeInTheDocument();
  const { container } = render(
    <Divider orientation={DIVIDER_ORIENTATION.VERTICAL} variant={DIVIDER_VARIANT.DOTTED} />,
  );
  expect(container.firstElementChild!.className).toContain("border-dotted");
  rerender(<Divider />);
});
