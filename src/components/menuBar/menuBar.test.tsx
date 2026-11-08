import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { IMenuItem } from "../navBar";
import MenuBar, {
  MENU_BAR_ITEMS_ALIGN,
  MENU_BAR_VARIANT,
} from "./index";
import { AVATAR_LABEL_POSITION, AVATAR_SIZE, AVATAR_VARIANT } from "../avatar";

function item(title: string, extra: Partial<IMenuItem> = {}): IMenuItem {
  return {
    title,
    route: `/${title.toLowerCase()}`,
    isActive: false,
    isDivider: false,
    ...extra,
  };
}

const base = {
  logoShort: "/short.svg",
  logoLong: "/long.svg",
  menuItems: [item("Home", { isActive: true }), item("Settings"), item("Docs")],
};

function renderBar(props: Partial<React.ComponentProps<typeof MenuBar>> = {}) {
  const onNavigate = vi.fn();
  const result = render(<MenuBar {...base} onNavigate={onNavigate} {...props} />);
  return { ...result, onNavigate };
}

function row(container: HTMLElement) {
  return container.querySelector(".min-w-0") as HTMLElement;
}

function visibleLabels(container: HTMLElement) {
  return [...row(container).querySelectorAll("button")]
    .filter((button) => !button.closest("[aria-hidden='true']"))
    .map((button) => button.textContent?.replace(/\s+/g, " ").trim());
}

let restoreWidth: (() => void) | undefined;

afterEach(() => {
  restoreWidth?.();
  restoreWidth = undefined;
});

function mockWidths(available: number, itemWidth: number) {
  restoreWidth?.();
  const desc = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "offsetWidth");
  Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
    configurable: true,
    get() {
      const el = this as HTMLElement;
      if (el.classList.contains("min-w-0")) return available;
      if (el.classList.contains("shrink-0")) return itemWidth;
      return 0;
    },
  });
  restoreWidth = () => {
    if (desc) Object.defineProperty(HTMLElement.prototype, "offsetWidth", desc);
    else delete (HTMLElement.prototype as unknown as { offsetWidth?: number }).offsetWidth;
  };
}

describe("MenuBar", () => {
  it("renders logos, the active item, alignment, variant, and sticky classes", () => {
    mockWidths(1000, 40);
    const { container } = renderBar({
      sticky: true,
      variant: MENU_BAR_VARIANT.ELEVATED,
      itemsAlign: MENU_BAR_ITEMS_ALIGN.CENTER,
      className: "bar",
      logoShortWidth: 48,
      logoShortHeight: 24,
      rightSlot: <span>Slot</span>,
    });
    const nav = screen.getByRole("navigation");
    expect(nav.className).toContain("sticky");
    expect(nav.className).toContain("shadow-md");
    expect(nav.className).toContain("bar");
    expect(row(container).className).toContain("justify-center");
    const logos = screen.getAllByAltText("logo");
    expect(logos[0]).toHaveAttribute("src", "/short.svg");
    expect(logos[0]).toHaveAttribute("width", "48");
    expect(logos[0]).toHaveAttribute("height", "24");
    expect(logos).toHaveLength(1);
    expect(container.querySelector('img[src="/long.svg"]')).toHaveAttribute("alt", "");
    expect(screen.getByText("Slot")).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: "Home" }).className).toContain("text-primary-default");
    expect(screen.getByRole("menuitem", { name: "Settings" }).className).toContain("text-muted-fg");
  });

  it("uses item widths to decide what stays visible and what moves under More", () => {
    mockWidths(250, 100);
    const { container } = renderBar();
    expect(visibleLabels(container)).toEqual(["Home", "More"]);
    expect(row(container).querySelectorAll("[aria-hidden='true']")).toHaveLength(2);
  });

  it("fits every item when the measured row is wide enough", () => {
    mockWidths(1000, 80);
    const { container } = renderBar();
    expect(visibleLabels(container)).toEqual(["Home", "Settings", "Docs"]);
    expect(screen.queryByRole("menuitem", { name: "More" })).not.toBeInTheDocument();
  });

  it("collapses every item into More when nothing fits beside the overflow control", async () => {
    mockWidths(80, 100);
    const user = userEvent.setup();
    const { container, onNavigate } = renderBar();
    expect(visibleLabels(container)).toEqual(["More"]);
    await user.click(screen.getByRole("menuitem", { name: "More" }));
    await user.click(screen.getByRole("menuitem", { name: "Docs" }));
    expect(onNavigate).toHaveBeenCalledWith("/docs");
    expect(screen.queryByRole("menuitem", { name: "Docs" })).not.toBeInTheDocument();
  });

  it("drops dividers from the overflow list and still measures them", () => {
    mockWidths(180, 100);
    const { container } = renderBar({
      menuItems: [item("Home"), item("", { isDivider: true, title: "" }), item("Docs")],
    });
    // First item does not fit beside More (100 > 180-88), so both real items overflow.
    expect(visibleLabels(container)).toEqual(["More"]);
    expect(row(container).querySelectorAll("[aria-hidden='true']").length).toBeGreaterThanOrEqual(2);
  });

  it("calls onClick and onNavigate for a leaf, and only toggles a parent with children", async () => {
    mockWidths(1000, 40);
    const user = userEvent.setup();
    const onClick = vi.fn();
    const { onNavigate } = renderBar({
      menuItems: [
        item("Home"),
        item("Products", {
          hasChildren: true,
          onClick,
          children: [
            { title: "Shoes", route: "/shoes", isActive: true },
            { title: "Hats", route: "/hats", isActive: false },
          ],
        }),
      ],
    });
    await user.click(screen.getByRole("menuitem", { name: "Products" }));
    expect(onClick).not.toHaveBeenCalled();
    expect(onNavigate).not.toHaveBeenCalled();
    expect(screen.getByRole("menuitem", { name: "Shoes" }).className).toContain("text-primary-default");
    await user.click(screen.getByRole("menuitem", { name: "Hats" }));
    expect(onNavigate).toHaveBeenCalledWith("/hats");
    expect(screen.queryByRole("menuitem", { name: "Hats" })).not.toBeInTheDocument();
  });

  it("closes a submenu on an outside press", async () => {
    mockWidths(1000, 40);
    const user = userEvent.setup();
    renderBar({
      menuItems: [
        item("Products", {
          hasChildren: true,
          children: [{ title: "Shoes", route: "/shoes", isActive: false }],
        }),
      ],
    });
    await user.click(screen.getByRole("menuitem", { name: "Products" }));
    expect(screen.getByRole("menuitem", { name: "Shoes" })).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole("menuitem", { name: "Shoes" })).not.toBeInTheDocument();
  });

  it("shows the avatar and a loading shimmer instead of items", () => {
    mockWidths(1000, 40);
    const { rerender, onNavigate } = renderBar({
      isAvatarVisible: true,
      avatarName: "Ada Lovelace",
      avatarEmail: "ada@example.com",
      avatarImage: "",
      avatarType: AVATAR_VARIANT.INITIALS_WITH_FULL,
      avatarSize: AVATAR_SIZE.SM,
      avatarLabelPosition: AVATAR_LABEL_POSITION.RIGHT,
    });
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument();
    expect(screen.getByText("ada@example.com")).toBeInTheDocument();

    rerender(<MenuBar {...base} onNavigate={onNavigate} isLoading />);
    expect(screen.queryByRole("menuitem", { name: "Home" })).not.toBeInTheDocument();
    expect(document.querySelectorAll(".animate-pulse .bg-surface-raised")).toHaveLength(4);
  });

  it("opens the mobile menu with every item, including children", async () => {
    mockWidths(1000, 40);
    const user = userEvent.setup();
    const { container, onNavigate } = renderBar({
      menuItems: [
        item("Home"),
        item("Products", {
          hasChildren: true,
          children: [{ title: "Shoes", route: "/shoes", isActive: false }],
        }),
      ],
    });
    const hamburger = container.querySelector("button.md\\:hidden") as HTMLElement;
    await user.click(hamburger);
    expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Products" }));
    await user.click(screen.getByRole("button", { name: "Shoes" }));
    expect(onNavigate).toHaveBeenCalledWith("/shoes");
  });

  it("activates the focused item with Enter and Space", async () => {
    mockWidths(1000, 40);
    const user = userEvent.setup();
    const onClick = vi.fn();
    const { onNavigate } = renderBar({
      menuItems: [item("Home", { isActive: true }), item("Settings", { onClick })],
    });
    const settings = screen.getByRole("menuitem", { name: "Settings" });
    settings.focus();
    await user.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onNavigate).toHaveBeenCalledWith("/settings");
    expect(settings.className).toContain("text-primary-default");

    const home = screen.getByRole("menuitem", { name: "Home" });
    home.focus();
    await user.keyboard(" ");
    expect(home.className).toContain("text-primary-default");
    expect(onNavigate).toHaveBeenCalledWith("/home");
  });

  it("moves focus with arrows, Home, and End, wraps, and does not activate", async () => {
    mockWidths(1000, 40);
    const user = userEvent.setup();
    renderBar({
      menuItems: [item("Home", { isActive: true }), item("Settings"), item("Docs")],
    });
    const home = screen.getByRole("menuitem", { name: "Home" });
    const settings = screen.getByRole("menuitem", { name: "Settings" });
    const docs = screen.getByRole("menuitem", { name: "Docs" });
    expect(home).toHaveAttribute("tabindex", "0");
    expect(settings).toHaveAttribute("tabindex", "-1");
    expect(docs).toHaveAttribute("tabindex", "-1");

    home.focus();
    await user.keyboard("{ArrowDown}{ArrowUp}");
    expect(home).toHaveFocus();

    await user.keyboard("{ArrowRight}");
    expect(settings).toHaveFocus();
    expect(settings).toHaveAttribute("tabindex", "0");
    expect(home).toHaveAttribute("tabindex", "-1");
    await user.keyboard("{ArrowRight}");
    expect(docs).toHaveFocus();
    await user.keyboard("{ArrowRight}");
    expect(home).toHaveFocus();
    await user.keyboard("{ArrowLeft}");
    expect(docs).toHaveFocus();
    await user.keyboard("{Home}");
    expect(home).toHaveFocus();
    await user.keyboard("{End}");
    expect(docs).toHaveFocus();

    expect(home.className).toContain("text-primary-default");
    expect(settings.className).not.toContain("text-primary-default");
    expect(docs.className).not.toContain("text-primary-default");
  });

  it("does not wrap focus from the last item back to the first", async () => {
    mockWidths(1000, 40);
    const user = userEvent.setup();
    const { container } = renderBar();
    const docs = screen.getByRole("menuitem", { name: "Docs" });
    const home = screen.getByRole("menuitem", { name: "Home" });
    docs.focus();
    await user.tab();
    expect(document.activeElement).not.toBe(home);
    expect(document.activeElement).toBe(container.querySelector("button.md\\:hidden"));
    home.focus();
    await user.tab({ shift: true });
    expect(document.activeElement).not.toBe(docs);
  });

  it("opens, navigates, and closes a submenu and the More menu from the keyboard", async () => {
    mockWidths(1000, 40);
    const user = userEvent.setup();
    const view = renderBar({
      menuItems: [
        item("Products", {
          hasChildren: true,
          children: [
            { title: "Shoes", route: "/shoes", isActive: false },
            { title: "Hats", route: "/hats", isActive: false },
          ],
        }),
        item("Docs"),
      ],
    });
    const products = screen.getByRole("menuitem", { name: "Products" });
    products.focus();
    await user.keyboard("{ArrowDown}");
    const shoes = screen.getByRole("menuitem", { name: "Shoes" });
    const hats = screen.getByRole("menuitem", { name: "Hats" });
    expect(shoes).toHaveFocus();
    await user.keyboard("{ArrowDown}");
    expect(hats).toHaveFocus();
    await user.keyboard("{ArrowDown}");
    expect(shoes).toHaveFocus();
    await user.keyboard("{ArrowUp}");
    expect(hats).toHaveFocus();
    await user.keyboard("{Home}");
    expect(shoes).toHaveFocus();
    await user.keyboard("{End}");
    expect(hats).toHaveFocus();
    await user.keyboard("{ArrowRight}");
    expect(screen.queryByRole("menuitem", { name: "Hats" })).not.toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: "Docs" })).toHaveFocus();
    await user.keyboard("{ArrowLeft}");
    expect(products).toHaveFocus();

    await user.keyboard("{Enter}");
    expect(screen.getByRole("menuitem", { name: "Shoes" })).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("menuitem", { name: "Shoes" })).not.toBeInTheDocument();
    expect(products).toHaveFocus();
    view.unmount();

    mockWidths(80, 100);
    renderBar();
    const more = screen.getByRole("menuitem", { name: "More" });
    more.focus();
    await user.keyboard("{Enter}");
    expect(screen.getByRole("menuitem", { name: "Home" })).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("menuitem", { name: "Home" })).not.toBeInTheDocument();
    expect(more).toHaveFocus();
  });

  it("recalculates visible items when the menu changes", () => {
    mockWidths(250, 100);
    const { container, rerender, onNavigate } = renderBar();
    expect(visibleLabels(container)).toEqual(["Home", "More"]);
    rerender(
      <MenuBar
        {...base}
        onNavigate={onNavigate}
        menuItems={[item("Only")]}
      />,
    );
    // A single item is compared against the full row width, so it stays visible.
    expect(visibleLabels(container)).toEqual(["Only"]);
  });
});

describe("MenuBar after loading", () => {
  it("measures its items once loading ends", () => {
    mockWidths(80, 100);
    const { rerender } = renderBar({ isLoading: true });
    expect(screen.queryByRole("menuitem", { name: "More" })).not.toBeInTheDocument();
    rerender(<MenuBar {...base} />);
    expect(screen.getByRole("menuitem", { name: "More" })).toBeInTheDocument();
  });
});

describe("MenuBar details", () => {
  const products = item("Products", {
    hasChildren: true,
    children: [
      { title: "Shoes", route: "/shoes", isActive: true },
      { title: "Hats", route: "/hats", isActive: false },
    ],
  });

  it("does nothing on mount while loading", () => {
    mockWidths(1000, 40);
    renderBar({ isLoading: true });
    expect(screen.queryByRole("menubar")).not.toBeInTheDocument();
  });

  it("copes with no items", () => {
    mockWidths(1000, 40);
    renderBar({ menuItems: [] });
    expect(screen.getByRole("menubar")).toBeEmptyDOMElement();
  });

  it("closes a parent's submenu on a second click", async () => {
    mockWidths(1000, 40);
    const user = userEvent.setup();
    renderBar({ menuItems: [products] });
    const button = screen.getByRole("menuitem", { name: "Products" });
    await user.click(button);
    expect(screen.getByRole("menuitem", { name: "Shoes" })).toBeInTheDocument();
    await user.click(button);
    expect(screen.queryByRole("menuitem", { name: "Shoes" })).not.toBeInTheDocument();
  });

  it("toggles More with the mouse", async () => {
    mockWidths(80, 100);
    const user = userEvent.setup();
    renderBar();
    const more = screen.getByRole("menuitem", { name: "More" });
    await user.click(more);
    expect(screen.getByRole("menu")).toBeInTheDocument();
    await user.click(more);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("shows a parent's children inside More, and navigates from them", async () => {
    mockWidths(80, 100);
    const user = userEvent.setup();
    const { onNavigate } = renderBar({ menuItems: [products, item("Docs")] });
    await user.click(screen.getByRole("menuitem", { name: "More" }));
    await user.click(screen.getByRole("menuitem", { name: "Products" }));
    expect(screen.getByRole("menuitem", { name: "Shoes" }).className).toContain("text-primary-default");
    expect(screen.getByRole("menuitem", { name: "Hats" }).className).toContain("text-muted-fg");
    await user.click(screen.getByRole("menuitem", { name: "Hats" }));
    expect(onNavigate).toHaveBeenCalledWith("/hats");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("collapses a parent inside More on a second click, keeping More open", async () => {
    mockWidths(80, 100);
    const user = userEvent.setup();
    renderBar({ menuItems: [products, item("Docs")] });
    await user.click(screen.getByRole("menuitem", { name: "More" }));
    const parent = screen.getByRole("menuitem", { name: "Products" });
    await user.click(parent);
    expect(parent.querySelector(".rotate-180")).not.toBeNull();
    await user.click(parent);
    expect(screen.queryByRole("menuitem", { name: "Shoes" })).not.toBeInTheDocument();
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("copes with a parent that has no children list, in the row and in More", async () => {
    mockWidths(1000, 40);
    const user = userEvent.setup();
    const empty = item("Empty", { hasChildren: true });
    const view = renderBar({ menuItems: [empty] });
    await user.click(screen.getByRole("menuitem", { name: "Empty" }));
    expect(screen.getByRole("menuitem", { name: "Empty" })).toBeInTheDocument();
    view.unmount();
    mockWidths(80, 100);
    renderBar({ menuItems: [empty, item("Docs")] });
    await user.click(screen.getByRole("menuitem", { name: "More" }));
    await user.click(screen.getByRole("menuitem", { name: "Empty" }));
    expect(screen.getByRole("menuitem", { name: "Empty" })).toBeInTheDocument();
  });

  it("defaults the avatar when plain JavaScript passes null for its props", () => {
    mockWidths(1000, 40);
    const props = { isAvatarVisible: true, avatarName: "Ada", avatarEmail: "a@x.dev", avatarType: null, avatarImage: null };
    const { container } = render(<MenuBar {...base} {...(props as object)} />);
    // IMAGE_ONLY shows no name label, and an empty image falls back to initials.
    expect(screen.queryByText("Ada", { selector: "p.font-semibold" })).not.toBeInTheDocument();
    expect(container.querySelector('img[src="null"]')).toBeNull();
  });

  describe("mobile menu", () => {
    const toggle = (container: HTMLElement) => container.querySelector("button.md\\:hidden") as HTMLElement;

    it("draws dividers and icons, closes from the toggle, and marks the active sub-item", async () => {
      mockWidths(1000, 40);
      const user = userEvent.setup();
      const { container, onNavigate } = renderBar({
        menuItems: [
          item("Home", { icon: <svg data-testid="icon" /> }),
          item("", { isDivider: true }),
          products,
        ],
      });
      await user.click(toggle(container));
      const panel = container.querySelector(".md\\:hidden.border-t") as HTMLElement;
      expect(panel.querySelector(".border-b")).not.toBeNull();
      expect(panel.querySelector('[data-testid="icon"]')).not.toBeNull();
      const parent = [...panel.querySelectorAll("button")].find((b) => b.textContent?.includes("Products"))!;
      await user.click(parent);
      const sub = (name: string) => [...panel.querySelectorAll("button")].find((b) => b.textContent === name)!;
      expect(sub("Shoes").className).toContain("text-primary-default");
      expect(sub("Hats").className).toContain("text-muted-fg");
      await user.click(sub("Hats"));
      expect(onNavigate).toHaveBeenCalledWith("/hats");
      expect(container.querySelector(".md\\:hidden.border-t")).toBeNull();
    });

    it("copes with a parent with no children list", async () => {
      mockWidths(1000, 40);
      const user = userEvent.setup();
      const { container } = renderBar({ menuItems: [item("Empty", { hasChildren: true })] });
      await user.click(toggle(container));
      const panel = container.querySelector(".md\\:hidden.border-t") as HTMLElement;
      await user.click(panel.querySelector("button")!);
      expect(panel.querySelectorAll("button")).toHaveLength(1);
    });
  });

  describe("keyboard edges", () => {
    const bar = () => screen.getByRole("menubar");
    const key = (el: Element, k: string) => fireEvent.keyDown(el, { key: k });

    it("ignores keys on anything but a button", () => {
      mockWidths(1000, 40);
      renderBar();
      expect(key(bar(), "ArrowRight")).toBe(true);
    });

    it("closes an open submenu when Home moves away", async () => {
      mockWidths(1000, 40);
      const user = userEvent.setup();
      renderBar({ menuItems: [item("Docs"), products] });
      const button = screen.getByRole("menuitem", { name: "Products" });
      await user.click(button);
      key(button, "Home");
      expect(screen.queryByRole("menuitem", { name: "Shoes" })).not.toBeInTheDocument();
      expect(screen.getByRole("menuitem", { name: "Docs" })).toHaveFocus();
    });

    it("opens a submenu at its last item with ArrowUp", () => {
      mockWidths(1000, 40);
      renderBar({ menuItems: [products] });
      key(screen.getByRole("menuitem", { name: "Products" }), "ArrowUp");
      expect(screen.getByRole("menuitem", { name: "Hats" })).toHaveFocus();
    });

    it("opens More with ArrowDown, and leaves plain items alone", () => {
      mockWidths(80, 100);
      renderBar();
      key(screen.getByRole("menuitem", { name: "More" }), "ArrowDown");
      expect(screen.getByRole("menu")).toBeInTheDocument();
    });

    it("does nothing on ArrowDown, Enter or Space on a leaf", () => {
      mockWidths(1000, 40);
      renderBar();
      const home = screen.getByRole("menuitem", { name: "Home" });
      key(home, "ArrowDown");
      expect(key(home, " ")).toBe(true);
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });

    it("ignores Escape with nothing open", () => {
      mockWidths(1000, 40);
      renderBar();
      expect(key(screen.getByRole("menuitem", { name: "Home" }), "Escape")).toBe(true);
    });

    it("closes from the top-level button with Escape", async () => {
      mockWidths(1000, 40);
      const user = userEvent.setup();
      renderBar({ menuItems: [products] });
      const button = screen.getByRole("menuitem", { name: "Products" });
      await user.click(button);
      key(button, "Escape");
      expect(screen.queryByRole("menuitem", { name: "Shoes" })).not.toBeInTheDocument();
      expect(button).toHaveFocus();
    });

    it("closes an open parent with Enter, and More with Space", async () => {
      mockWidths(1000, 40);
      const user = userEvent.setup();
      const view = renderBar({ menuItems: [products] });
      const button = screen.getByRole("menuitem", { name: "Products" });
      key(button, "Enter");
      expect(screen.getByRole("menuitem", { name: "Shoes" })).toHaveFocus();
      key(button, "Enter");
      expect(screen.queryByRole("menuitem", { name: "Shoes" })).not.toBeInTheDocument();
      view.unmount();
      mockWidths(80, 100);
      renderBar();
      const more = screen.getByRole("menuitem", { name: "More" });
      await user.click(more);
      key(more, " ");
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });

    it("tolerates keys from the hidden measuring row", async () => {
      mockWidths(80, 100);
      const user = userEvent.setup();
      const { container } = renderBar();
      await user.click(screen.getByRole("menuitem", { name: "More" }));
      const hidden = container.querySelector("[aria-hidden] button")!;
      key(hidden, "ArrowDown");
      key(hidden, "Enter");
      key(hidden, "ArrowRight");
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
      await user.click(screen.getByRole("menuitem", { name: "More" }));
      key(hidden, "Escape");
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });

    it("skips an item with no focusable children", () => {
      mockWidths(1000, 40);
      renderBar({ menuItems: [item("Empty", { hasChildren: true })] });
      const button = screen.getByRole("menuitem", { name: "Empty" });
      key(button, "ArrowDown");
      expect(button).toBeInTheDocument();
      key(button, "Enter");
      expect(button).toBeInTheDocument();
    });
  });

  describe("accessibility", () => {
    it("names and tracks the mobile menu button", async () => {
      const user = userEvent.setup();
      renderBar();
      const toggle = screen.getByRole("button", { name: "Open menu" });
      expect(toggle).toHaveAttribute("aria-expanded", "false");
      await user.click(toggle);
      expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
    });

    it("gives the menubar the roles it needs", async () => {
      mockWidths(1000, 40);
      const user = userEvent.setup();
      renderBar({
        menuItems: [
          item("Home"),
          item("", { isDivider: true }),
          item("Products", { hasChildren: true, children: [{ title: "Shoes", route: "/shoes", isActive: false }] }),
        ],
      });
      expect(screen.getByRole("separator")).toHaveAttribute("aria-orientation", "vertical");
      const home = screen.getByRole("menuitem", { name: "Home" });
      expect(home).not.toHaveAttribute("aria-haspopup");
      expect(home.parentElement).toHaveAttribute("role", "none");
      const products = screen.getByRole("menuitem", { name: "Products" });
      expect(products).toHaveAttribute("aria-haspopup", "menu");
      expect(products).toHaveAttribute("aria-expanded", "false");
      await user.click(products);
      expect(products).toHaveAttribute("aria-expanded", "true");
      expect(screen.getByRole("menu", { name: "Products" })).toBeInTheDocument();
      expect(screen.getByRole("menuitem", { name: "Shoes" })).toBeInTheDocument();
    });

    it("groups a parent's children inside the More menu", async () => {
      mockWidths(100, 40);
      const user = userEvent.setup();
      renderBar({
        menuItems: [
          item("Home"),
          item("Docs"),
          item("Team"),
          item("Products", { hasChildren: true, children: [{ title: "Shoes", route: "/shoes", isActive: false }] }),
        ],
      });
      const more = screen.getByRole("menuitem", { name: "More" });
      expect(more).toHaveAttribute("aria-expanded", "false");
      await user.click(more);
      expect(screen.getByRole("menu", { name: "More" })).toBeInTheDocument();
      await user.click(screen.getByRole("menuitem", { name: "Products" }));
      expect(screen.getByRole("group", { name: "Products" })).toBeInTheDocument();
    });

    it("labels the nav", () => {
      renderBar({ "aria-label": "Main" });
      expect(screen.getByRole("navigation", { name: "Main" })).toBeInTheDocument();
    });
  });

  describe("logo", () => {
    it("renders the logo slot instead of the images", () => {
      render(
        <MenuBar
          menuItems={base.menuItems}
          logo={<a href="#top">GWAN</a>}
        />,
      );
      expect(screen.getByRole("link", { name: "GWAN" })).toHaveAttribute("href", "#top");
      expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });

    it("uses logoAlt for the compact logo", () => {
      renderBar({ logoAlt: "Acme" });
      expect(screen.getByAltText("Acme")).toHaveAttribute("src", "/short.svg");
    });
  });

  describe("itemsAsLinks", () => {
    const shoes = { title: "Shoes", route: "/shoes", isActive: false };
    const parent = item("Products", { hasChildren: true, children: [shoes] });

    it("renders items as links and leaves parents as buttons", () => {
      mockWidths(1000, 40);
      renderBar({ itemsAsLinks: true, menuItems: [item("Home"), parent] });
      expect(screen.getByRole("menuitem", { name: "Home" }).tagName).toBe("A");
      expect(screen.getByRole("menuitem", { name: "Home" })).toHaveAttribute("href", "/home");
      expect(screen.getByRole("menuitem", { name: "Products" }).tagName).toBe("BUTTON");
    });

    it("hands plain clicks to onNavigate instead of the browser", () => {
      mockWidths(1000, 40);
      const { onNavigate } = renderBar({ itemsAsLinks: true });
      const notPrevented = fireEvent.click(screen.getByRole("menuitem", { name: "Docs" }));
      expect(notPrevented).toBe(false);
      expect(onNavigate).toHaveBeenCalledWith("/docs");
    });

    it("lets the browser follow the link without onNavigate", () => {
      mockWidths(1000, 40);
      const onClick = vi.fn();
      render(<MenuBar {...base} itemsAsLinks menuItems={[item("Docs", { onClick, route: "#docs" })]} />);
      const notPrevented = fireEvent.click(screen.getByRole("menuitem", { name: "Docs" }));
      expect(notPrevented).toBe(true);
      expect(onClick).toHaveBeenCalledOnce();
    });

    it.each([["metaKey"], ["ctrlKey"], ["shiftKey"], ["altKey"]])("leaves %s clicks to the browser", (modifier) => {
      mockWidths(1000, 40);
      const { onNavigate } = renderBar({ itemsAsLinks: true });
      const notPrevented = fireEvent.click(screen.getByRole("menuitem", { name: "Docs" }), { [modifier]: true });
      expect(notPrevented).toBe(true);
      expect(onNavigate).not.toHaveBeenCalled();
    });

    it("renders children as links in dropdowns, More and the mobile menu", async () => {
      mockWidths(1000, 40);
      const user = userEvent.setup();
      const { unmount } = renderBar({ itemsAsLinks: true, menuItems: [parent] });
      await user.click(screen.getByRole("menuitem", { name: "Products" }));
      expect(screen.getByRole("menuitem", { name: "Shoes" })).toHaveAttribute("href", "/shoes");
      await user.click(screen.getByRole("button", { name: "Open menu" }));
      expect(screen.getByRole("link", { name: "Shoes" })).toHaveAttribute("href", "/shoes");
      unmount();

      mockWidths(100, 40);
      renderBar({ itemsAsLinks: true, menuItems: [item("Home"), item("Docs"), item("Team"), parent] });
      await user.click(screen.getByRole("menuitem", { name: "More" }));
      await user.click(screen.getByRole("menuitem", { name: "Products" }));
      expect(screen.getByRole("menuitem", { name: "Shoes" })).toHaveAttribute("href", "/shoes");
    });

    it("moves between links with the arrow keys and activates with Space", () => {
      mockWidths(1000, 40);
      const { onNavigate } = renderBar({ itemsAsLinks: true });
      const home = screen.getByRole("menuitem", { name: "Home" });
      home.focus();
      fireEvent.keyDown(home, { key: "ArrowRight" });
      const settings = screen.getByRole("menuitem", { name: "Settings" });
      expect(settings).toHaveFocus();
      fireEvent.keyDown(settings, { key: " " });
      expect(onNavigate).toHaveBeenCalledWith("/settings");
    });
  });
});
