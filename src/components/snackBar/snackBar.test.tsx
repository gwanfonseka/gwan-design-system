import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Snackbar, { SNACK_BAR_TYPE } from "./index";
import Spinner, { SPINNER_COLOR, SPINNER_SIZE } from "../spinner";

const root = (message: string) => screen.getByText(message).closest(".border, [class*='border-']")!;

describe("Snackbar", () => {
  it.each([
    [SNACK_BAR_TYPE.SUCCESS, "bg-success-bg"],
    [SNACK_BAR_TYPE.DANGER, "bg-danger-bg"],
    [SNACK_BAR_TYPE.WARNING, "bg-warning-bg"],
    [SNACK_BAR_TYPE.INFO, "bg-accent/10"],
    [SNACK_BAR_TYPE.DEFAULT, "bg-surface"],
  ])("colours the %s type", (type, className) => {
    render(<Snackbar type={type} message="Saved" />);
    expect(root("Saved").className).toContain(className);
  });

  it("falls back to the default look for an unknown type from plain JavaScript", () => {
    render(<Snackbar type={"other" as SNACK_BAR_TYPE} message="Saved" />);
    expect(root("Saved").className).toContain("bg-surface");
  });
});

it("Snackbar and Spinner expose their status text", () => {
  render(
    <>
      <Snackbar type={SNACK_BAR_TYPE.DANGER} message="Failed" />
      <Spinner size={SPINNER_SIZE.LG} color={SPINNER_COLOR.DANGER} />
    </>,
  );
  expect(screen.getByText("Failed")).toBeInTheDocument();
  expect(screen.getByRole("status", { name: "Loading" })).toBeInTheDocument();
});
