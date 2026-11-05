import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { ThemeProvider } from "./theme-provider";

it("renders its children", () => {
  render(
    <ThemeProvider attribute="class">
      <p>Page</p>
    </ThemeProvider>,
  );
  expect(screen.getByText("Page")).toBeInTheDocument();
});
