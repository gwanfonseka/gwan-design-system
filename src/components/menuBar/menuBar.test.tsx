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
    expect(logos[1]).toHaveAttribute("src", "/long.svg");
    expect(screen.getByText("Slot")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Home" }).className).toContain("text-primary-default");
    expect(screen.getByRole("button", { name: "Settings" }).className).toContain("text-muted-fg");
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
    expect(screen.queryByRole("button", { name: "More" })).not.toBeInTheDocument();
  });

  it("collapses every item into More when nothing fits beside the overflow control", async () => {
    mockWidths(80, 100);
    const user = userEvent.setup();
    const { container, onNavigate } = renderBar();
    expect(visibleLabels(container)).toEqual(["More"]);
    await user.click(screen.getByRole("button", { name: "More" }));
    await user.click(screen.getByRole("button", { name: "Docs" }));
    expect(onNavigate).toHaveBeenCalledWith("/docs");
    expect(screen.queryByRole("button", { name: "Docs" })).not.toBeInTheDocument();
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
    await user.click(screen.getByRole("button", { name: "Products" }));
    expect(onClick).not.toHaveBeenCalled();
    expect(onNavigate).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Shoes" }).className).toContain("text-primary-default");
    await user.click(screen.getByRole("button", { name: "Hats" }));
    expect(onNavigate).toHaveBeenCalledWith("/hats");
    expect(screen.queryByRole("button", { name: "Hats" })).not.toBeInTheDocument();
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
    await user.click(screen.getByRole("button", { name: "Products" }));
    expect(screen.getByRole("button", { name: "Shoes" })).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole("button", { name: "Shoes" })).not.toBeInTheDocument();
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
    expect(screen.queryByRole("button", { name: "Home" })).not.toBeInTheDocument();
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
    expect(screen.getAllByRole("button", { name: "Home" }).length).toBeGreaterThan(1);
    const productButtons = screen.getAllByRole("button", { name: "Products" });
    await user.click(productButtons[productButtons.length - 1]);
    await user.click(screen.getAllByRole("button", { name: "Shoes" }).at(-1)!);
    expect(onNavigate).toHaveBeenCalledWith("/shoes");
  });

  /**
   * TODAY there is no roving tabindex. Enter and Space activate the focused
   * button through native button behaviour. Arrow keys, Home, End, and Escape
   * do not move focus, change the active item, or close a submenu.
   * Suspected a11y gap — locked so a refactor does not invent a different model.
   */
  it("activates the focused item with Enter and Space only", async () => {
    mockWidths(1000, 40);
    const user = userEvent.setup();
    const onClick = vi.fn();
    const { onNavigate } = renderBar({
      menuItems: [item("Home", { isActive: true }), item("Settings", { onClick })],
    });
    const settings = screen.getByRole("button", { name: "Settings" });
    settings.focus();
    await user.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onNavigate).toHaveBeenCalledWith("/settings");
    expect(settings.className).toContain("text-primary-default");

    const home = screen.getByRole("button", { name: "Home" });
    home.focus();
    await user.keyboard(" ");
    expect(home.className).toContain("text-primary-default");
    expect(onNavigate).toHaveBeenCalledWith("/home");
  });

  it("does not move focus or the active item with arrows, Home, or End", async () => {
    mockWidths(1000, 40);
    const user = userEvent.setup();
    renderBar({
      menuItems: [item("Home", { isActive: true }), item("Settings"), item("Docs")],
    });
    const home = screen.getByRole("button", { name: "Home" });
    const docs = screen.getByRole("button", { name: "Docs" });
    home.focus();
    await user.keyboard("{ArrowDown}{ArrowUp}{ArrowRight}{ArrowLeft}{Home}{End}");
    expect(document.activeElement).toBe(home);
    expect(home.className).toContain("text-primary-default");
    expect(docs.className).not.toContain("text-primary-default");

    docs.focus();
    await user.keyboard("{ArrowDown}{End}{Home}");
    expect(document.activeElement).toBe(docs);
    expect(home.className).toContain("text-primary-default");
  });

  it("does not wrap focus from the last item back to the first", async () => {
    mockWidths(1000, 40);
    const user = userEvent.setup();
    const { container } = renderBar();
    const docs = screen.getByRole("button", { name: "Docs" });
    const home = screen.getByRole("button", { name: "Home" });
    docs.focus();
    await user.tab();
    expect(document.activeElement).not.toBe(home);
    expect(document.activeElement).toBe(container.querySelector("button.md\\:hidden"));
    home.focus();
    await user.tab({ shift: true });
    expect(document.activeElement).not.toBe(docs);
  });

  it("leaves a submenu and the More menu open when Escape is pressed", async () => {
    mockWidths(1000, 40);
    const user = userEvent.setup();
    const view = renderBar({
      menuItems: [
        item("Products", {
          hasChildren: true,
          children: [{ title: "Shoes", route: "/shoes", isActive: false }],
        }),
      ],
    });
    const products = screen.getByRole("button", { name: "Products" });
    products.focus();
    await user.keyboard("{Enter}");
    expect(screen.getByRole("button", { name: "Shoes" })).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.getByRole("button", { name: "Shoes" })).toBeInTheDocument();
    expect(products).toHaveFocus();
    view.unmount();

    mockWidths(80, 100);
    renderBar();
    const more = screen.getByRole("button", { name: "More" });
    more.focus();
    await user.keyboard("{Enter}");
    expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
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
