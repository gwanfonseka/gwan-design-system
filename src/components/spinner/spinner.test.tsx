import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Spinner, { SPINNER_COLOR, SPINNER_SIZE } from "./index";

describe("Spinner", () => {
  it("announces itself as loading", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it.each(Object.values(SPINNER_SIZE))("renders size %s", (size) => {
    render(<Spinner size={size} />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("uses the primary track for the PRIMARY colour", () => {
    render(<Spinner color={SPINNER_COLOR.PRIMARY} />);
    expect(screen.getByRole("status").className).toContain("border-primary-100");
  });
});
