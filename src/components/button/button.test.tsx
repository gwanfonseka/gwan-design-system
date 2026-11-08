import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button, { BUTTON_EDGE_STYLE, BUTTON_VARIANTS } from "./index";
import userEvent from "@testing-library/user-event";
import { BUTTON_SIZE } from "./index";

describe("Button", () => {
  it.each([
    [BUTTON_VARIANTS.PRIMARY, "bg-primary-200"],
    [BUTTON_VARIANTS.SECONDARY, "bg-surface"],
    [BUTTON_VARIANTS.TERTIARY, "border-border"],
  ])("disables the %s variant", (variant, className) => {
    const onClick = vi.fn();
    render(<Button label="Go" variant={variant} disabled onClick={onClick} />);
    const button = screen.getByRole("button", { name: "Go" });
    expect(button).toBeDisabled();
    expect(button.className).toContain(className);
    expect(button.className).toContain("cursor-not-allowed");
  });

  it.each([
    [BUTTON_EDGE_STYLE.SQUARED, "rounded-none"],
    [BUTTON_EDGE_STYLE.PILL, "rounded-full"],
    [BUTTON_EDGE_STYLE.ROUNDED, "rounded-lg"],
  ])("applies the %s edge style", (edges, className) => {
    render(<Button label="Go" edges={edges} onClick={() => {}} />);
    expect(screen.getByRole("button").className).toContain(className);
  });
});

it("Button fires onClick and respects variant, size, and disabled", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  render(
    <Button
      label="Save"
      onClick={onClick}
      variant={BUTTON_VARIANTS.TERTIARY}
      size={BUTTON_SIZE.LG}
      edges={BUTTON_EDGE_STYLE.PILL}
    />,
  );
  const button = screen.getByRole("button", { name: "Save" });
  expect(button.className).toContain("rounded-full");
  expect(button.className).toContain("text-base");
  await user.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);

  render(<Button label="Nope" onClick={onClick} disabled />);
  expect(screen.getByRole("button", { name: "Nope" })).toBeDisabled();
});

describe("Button as a link", () => {
  it("renders a link when given href", () => {
    render(<Button label="Pricing" href="/pricing" />);
    const link = screen.getByRole("link", { name: "Pricing" });
    expect(link).toHaveAttribute("href", "/pricing");
    expect(link).not.toHaveAttribute("rel");
    expect(link.className).toContain("inline-block");
  });

  it("adds a safe rel to links that open a new tab", () => {
    render(<Button label="Docs" href="https://gwan.dev" target="_blank" />);
    expect(screen.getByRole("link", { name: "Docs" })).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("keeps a rel it was given", () => {
    render(<Button label="Docs" href="https://gwan.dev" target="_blank" rel="me" />);
    expect(screen.getByRole("link", { name: "Docs" })).toHaveAttribute("rel", "me");
  });

  it("passes the click event so a router can take over", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn((e: React.MouseEvent) => e.preventDefault());
    render(<Button label="Pricing" href="/pricing" onClick={onClick} />);
    await user.click(screen.getByRole("link", { name: "Pricing" }));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("drops href and the handler when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button label="Pricing" href="/pricing" disabled onClick={onClick} />);
    const link = screen.getByText("Pricing").closest("a")!;
    expect(link).not.toHaveAttribute("href");
    expect(link).toHaveAttribute("aria-disabled", "true");
    await user.click(link);
    expect(onClick).not.toHaveBeenCalled();
  });
});

describe("Button accessibility", () => {
  it("names an icon-only button with aria-label", () => {
    render(<Button aria-label="Close" leftIcon={<svg />} onClick={() => {}} />);
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  it("names an icon-only link with aria-label", () => {
    render(<Button aria-label="Home" leftIcon={<svg />} href="/" />);
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  });

  it("shows a pointer on an enabled primary button", () => {
    render(<Button label="Go" onClick={() => {}} />);
    expect(screen.getByRole("button").className).toContain("cursor-pointer");
  });
});
