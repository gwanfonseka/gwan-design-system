import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Breadcrumb, { BREADCRUMB_SEPARATOR } from "./index";

const icon = <svg data-testid="icon" />;

describe("Breadcrumb", () => {
  it("links earlier items and marks only the last as the current page", () => {
    render(
      <Breadcrumb
        items={[
          { label: "Home", href: "/", icon },
          { label: "Plain" },
          { label: "Here", href: "/here", icon },
        ]}
      />,
    );
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByText("Plain")).not.toHaveAttribute("aria-current");
    expect(screen.getByText("Plain").className).toContain("text-muted-fg");
    expect(screen.queryByRole("link", { name: "Here" })).not.toBeInTheDocument();
    expect(screen.getByText("Here").closest("[aria-current]")).toHaveAttribute("aria-current", "page");
    expect(screen.getAllByTestId("icon")).toHaveLength(2);
  });

  it("draws a dot between items with the dot separator", () => {
    const { container } = render(
      <Breadcrumb separator={BREADCRUMB_SEPARATOR.DOT} items={[{ label: "A", href: "/" }, { label: "B" }]} />,
    );
    expect(container.querySelector(".rounded-full.bg-muted-fg")).not.toBeNull();
  });
});
