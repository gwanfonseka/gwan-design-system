import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Chip, { CHIP_EDGE_STYLE, CHIP_VARIANT } from "./index";
import userEvent from "@testing-library/user-event";

const root = () => screen.getByText("Design").parentElement!;

describe("Chip", () => {
  it.each([
    [CHIP_EDGE_STYLE.SQUARED, "rounded-none"],
    [CHIP_EDGE_STYLE.PILL, "rounded-full"],
    [CHIP_EDGE_STYLE.ROUNDED, "rounded-lg"],
  ])("applies the %s edge style", (edges, className) => {
    render(<Chip label="Design" onClear={() => {}} edges={edges} />);
    expect(root().className).toContain(className);
  });

  it("outlines the outline variant", () => {
    render(<Chip label="Design" onClear={() => {}} variant={CHIP_VARIANT.OUTLINE} />);
    expect(root().className).toContain("border-neutral-700");
  });

  it("falls back to the solid look for an unknown variant from plain JavaScript", () => {
    render(<Chip label="Design" onClear={() => {}} variant={"other" as CHIP_VARIANT} />);
    expect(root().className).toContain("bg-neutral-300");
  });
});

it("Chip calls onClear from the icon", async () => {
  const user = userEvent.setup();
  const onClear = vi.fn();
  const { container } = render(
    <Chip label="Filter" onClear={onClear} variant={CHIP_VARIANT.OUTLINE} edges={CHIP_EDGE_STYLE.PILL} />,
  );
  expect(container.firstElementChild!.className).toContain("rounded-full");
  await user.click(container.querySelector(".cursor-pointer")!);
  expect(onClear).toHaveBeenCalledTimes(1);
});

describe("Chip", () => {
  it("removes from a labelled, keyboard-reachable button", async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    render(<Chip label="Design" onClear={onClear} />);
    await user.tab();
    expect(screen.getByRole("button", { name: "Remove Design" })).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(onClear).toHaveBeenCalledTimes(1);
  });
});
