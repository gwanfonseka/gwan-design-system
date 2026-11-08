import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";
import TextLink from "./index";

it("renders a link with extra classes", () => {
  render(<TextLink href="/docs" className="extra">Docs</TextLink>);
  const link = screen.getByRole("link", { name: "Docs" });
  expect(link).toHaveAttribute("href", "/docs");
  expect(link).not.toHaveAttribute("rel");
  expect(link.className).toContain("extra");
});

it("adds a safe rel to links that open a new tab", () => {
  render(<TextLink href="https://gwan.dev" target="_blank">Docs</TextLink>);
  expect(screen.getByRole("link")).toHaveAttribute("rel", "noopener noreferrer");
});

it("keeps a rel it was given", () => {
  render(<TextLink href="https://gwan.dev" target="_blank" rel="me">Docs</TextLink>);
  expect(screen.getByRole("link")).toHaveAttribute("rel", "me");
});

it("passes the click event so a router can take over", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn((e: React.MouseEvent) => e.preventDefault());
  render(<TextLink href="/docs" onClick={onClick}>Docs</TextLink>);
  await user.click(screen.getByRole("link"));
  expect(onClick).toHaveBeenCalledOnce();
});
