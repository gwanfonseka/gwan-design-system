import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { AVATAR_VARIANT } from "../avatar";
import NavBar, { type IMenuItem } from "./index";

const item = (title: string, extra: Partial<IMenuItem> = {}): IMenuItem => ({
  title,
  route: `/${title.toLowerCase()}`,
  isActive: false,
  isDivider: false,
  ...extra,
});

const parent = item("Products", {
  hasChildren: true,
  children: [{ title: "Books", route: "/books", isActive: false }],
});

const base = { logoShort: "/s.png", logoLong: "/l.png", isAvatarVisible: false as const };

const setup = (props: Partial<React.ComponentProps<typeof NavBar>> = {}) => {
  const onNavigate = vi.fn();
  const view = render(
    <NavBar {...base} menuItems={[item("Home"), parent, item("Docs")]} onNavigate={onNavigate} {...props} />,
  );
  return { ...view, onNavigate };
};

const row = (title: string) => screen.getByText(title).parentElement!;
const toggle = (container: HTMLElement) => container.querySelector(".-right-8") as HTMLElement;

describe("NavBar", () => {
  it("copes with no items", () => {
    setup({ menuItems: [] });
    expect(screen.queryByText("Home")).not.toBeInTheDocument();
  });

  it("highlights the first item when none is active", () => {
    setup();
    expect(row("Home").className).toContain("bg-white/35 ");
    expect(row("Docs").className).not.toMatch(/ rounded-lg bg-white\/35/);
  });

  it("highlights the active item", () => {
    setup({ menuItems: [item("Home"), item("Docs", { isActive: true })] });
    expect(row("Docs").className).toMatch(/rounded-lg bg-white\/35/);
  });

  it("navigates from a leaf and calls its onClick", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const { onNavigate } = setup({ menuItems: [item("Home", { onClick }), item("Docs")] });
    await user.click(screen.getByText("Home"));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onNavigate).toHaveBeenCalledWith("/home");
    await user.click(screen.getByText("Docs"));
    expect(onNavigate).toHaveBeenLastCalledWith("/docs");
  });

  it("works without onNavigate", async () => {
    const user = userEvent.setup();
    render(<NavBar {...base} menuItems={[item("Home"), item("Docs")]} />);
    await user.click(screen.getByText("Docs"));
    expect(row("Docs").className).toMatch(/rounded-lg bg-white\/35/);
  });

  it("expands a parent without navigating, and navigates from its sub-item", async () => {
    const user = userEvent.setup();
    const { onNavigate, container } = setup();
    expect(screen.queryByText("Books")).not.toBeInTheDocument();
    await user.click(screen.getByText("Products"));
    expect(onNavigate).not.toHaveBeenCalled();
    expect(container.querySelector(".rotate-180")).not.toBeNull();
    await user.click(screen.getByText("Books"));
    expect(onNavigate).toHaveBeenCalledWith("/books");
    expect(row("Books").className).toMatch(/rounded-lg bg-white\/35/);
  });

  it("works with a sub-item and no onNavigate, and a parent with no children list", async () => {
    const user = userEvent.setup();
    render(<NavBar {...base} menuItems={[parent, item("Empty", { hasChildren: true })]} />);
    await user.click(screen.getByText("Empty"));
    await user.click(screen.getByText("Products"));
    await user.click(screen.getByText("Books"));
    expect(row("Books").className).toMatch(/rounded-lg bg-white\/35/);
  });

  it("collapses to icons from the toggle and expands again after the transition", async () => {
    const user = userEvent.setup();
    const { container } = setup();
    await user.click(toggle(container));
    expect(screen.queryByText("Docs")).not.toBeInTheDocument();
    await user.click(toggle(container));
    await waitFor(() => expect(screen.getByText("Docs")).toBeInTheDocument());
  });

  it("starts collapsed with isCollapsed", () => {
    setup({ isCollapsed: true });
    expect(screen.queryByText("Docs")).not.toBeInTheDocument();
  });

  describe("tooltips while collapsed", () => {
    const iconRow = (container: HTMLElement, index: number) =>
      container.querySelectorAll(".hover\\:cursor-pointer")[index] as HTMLElement;

    it("shows an item's title on hover and hides it when the pointer leaves", () => {
      const { container } = setup({ isCollapsed: true });
      fireEvent.mouseEnter(iconRow(container, 0));
      expect(screen.getByText("Home")).toBeInTheDocument();
      fireEvent.mouseLeave(iconRow(container, 0));
      expect(screen.queryByText("Home")).not.toBeInTheDocument();
    });

    it("shows a sub-item's title too", async () => {
      const user = userEvent.setup();
      const { container } = setup({ isCollapsed: true, menuItems: [parent] });
      await user.click(iconRow(container, 0));
      const sub = iconRow(container, 1);
      fireEvent.mouseEnter(sub);
      expect(screen.getByText("Books")).toBeInTheDocument();
      fireEvent.mouseLeave(sub);
      expect(screen.queryByText("Books")).not.toBeInTheDocument();
    });

    it("shows no tooltip while expanded", async () => {
      const user = userEvent.setup();
      const { container } = setup({ menuItems: [parent] });
      await user.click(screen.getByText("Products"));
      fireEvent.mouseEnter(iconRow(container, 0));
      fireEvent.mouseEnter(iconRow(container, 1));
      expect(document.body.querySelector(".fixed.z-9999")).toBeNull();
    });

    it("renders into tooltipPortalTarget when given", () => {
      const target = document.createElement("div");
      document.body.appendChild(target);
      const { container } = setup({ isCollapsed: true, tooltipPortalTarget: target });
      fireEvent.mouseEnter(iconRow(container, 0));
      expect(target.textContent).toContain("Home");
      target.remove();
    });
  });

  it("draws dividers", () => {
    const { container } = setup({ menuItems: [item("Home"), item("", { isDivider: true })] });
    expect(container.querySelector("hr, .border-b.my-3")).not.toBeNull();
  });

  it("shows a shimmer while loading, with short rows when collapsed", () => {
    const { container, rerender } = setup({ isLoading: true });
    expect(screen.queryByText("Home")).not.toBeInTheDocument();
    expect(container.querySelector(".animate-pulse span")).not.toBeNull();
    rerender(<NavBar {...base} menuItems={[item("Home")]} isLoading isCollapsed />);
    expect(container.querySelector(".animate-pulse")).not.toBeNull();
  });

  it("reduces the avatar to its image while collapsed", () => {
    const person = {
      isAvatarVisible: true as const,
      avatarName: "Ada Lovelace",
      avatarEmail: "ada@x.dev",
      avatarImage: "/a.png",
      avatarType: AVATAR_VARIANT.IMAGE_WITH_FULL,
    };
    const { unmount } = render(<NavBar {...base} {...person} menuItems={[item("Home")]} />);
    expect(screen.getAllByText("ada@x.dev").length).toBeGreaterThan(0);
    unmount();
    const { container } = render(<NavBar {...base} {...person} menuItems={[item("Home")]} isCollapsed />);
    expect(container.querySelector(".font-semibold")).toBeNull();
  });
});

const menuItem = {
  title: "Home",
  route: "/home",
  isActive: true,
  isDivider: false,
};

it("NavBar shows the active item and navigates", async () => {
  const user = userEvent.setup();
  const onNavigate = vi.fn();
  render(
    <NavBar
      menuItems={[menuItem, { ...menuItem, title: "Docs", route: "/docs", isActive: false }]}
      logoShort="/s.svg"
      logoLong="/l.svg"
      isAvatarVisible={false}
      onNavigate={onNavigate}
    />,
  );
  expect(screen.getByAltText("logo_short")).toBeInTheDocument();
  await user.click(screen.getByText("Docs"));
  expect(onNavigate).toHaveBeenCalledWith("/docs");
  await new Promise((resolve) => setTimeout(resolve, 250));
});
