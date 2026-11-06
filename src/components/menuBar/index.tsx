"use client";

import Avatar, {
  AVATAR_VARIANT,
  AVATAR_SIZE,
  AVATAR_LABEL_POSITION,
} from "../avatar";
import { FC, Fragment, ReactNode, useEffect, useRef, useState, type HTMLAttributes, type KeyboardEvent, type MouseEvent as ReactMouseEvent } from "react";
import { flushSync } from "react-dom";
import { ChevDownSVG, MenuSVG, CrossSVG } from "../icons";
import type { IMenuItem, ISubMenuItem } from "../navBar";

export enum MENU_BAR_VARIANT {
  DEFAULT = "DEFAULT",
  BORDERED = "BORDERED",
  ELEVATED = "ELEVATED",
  TRANSPARENT = "TRANSPARENT",
}

export enum MENU_BAR_ITEMS_ALIGN {
  LEFT = "LEFT",
  CENTER = "CENTER",
  RIGHT = "RIGHT",
}

type MenuBarSharedProps = {
  menuItems: IMenuItem[];
  /** Alt text for logoShort. */
  logoAlt?: string;
  logoShortWidth?: number;
  logoShortHeight?: number;
  /** Names the navigation for screen readers. */
  "aria-label"?: string;
  /** Renders items without children as real links to their route. onNavigate still handles plain clicks. */
  itemsAsLinks?: boolean;
  sticky?: boolean;
  variant?: MENU_BAR_VARIANT;
  itemsAlign?: MENU_BAR_ITEMS_ALIGN;
  className?: string;
  menuItemTextClass?: string;
  isLoading?: boolean;
  onNavigate?: (route: string) => void;
  rightSlot?: ReactNode;
};

type LogoImageProps = {
  logo?: undefined;
  logoShort: string;
  logoLong: string;
};

type LogoSlotProps = {
  /** Replaces the logo images. Accepts text or any element, including a link. */
  logo: ReactNode;
  logoShort?: string;
  logoLong?: string;
};

type AvatarVisibleProps = {
  isAvatarVisible: true;
  avatarName: string;
  avatarEmail?: string;
  avatarImage: string;
  avatarType: AVATAR_VARIANT;
  avatarSize?: AVATAR_SIZE;
  avatarLabelPosition?: AVATAR_LABEL_POSITION;
};

type AvatarHiddenProps = {
  isAvatarVisible?: false;
  avatarName?: string;
  avatarEmail?: string;
  avatarImage?: string;
  avatarType?: AVATAR_VARIANT;
  avatarSize?: AVATAR_SIZE;
  avatarLabelPosition?: AVATAR_LABEL_POSITION;
};

export type IMenuBar = MenuBarSharedProps &
  (LogoImageProps | LogoSlotProps) &
  (AvatarVisibleProps | AvatarHiddenProps);

const variantClass: Record<MENU_BAR_VARIANT, string> = {
  [MENU_BAR_VARIANT.DEFAULT]: "bg-surface border-b border-border",
  [MENU_BAR_VARIANT.BORDERED]: "bg-surface border border-border rounded-lg",
  [MENU_BAR_VARIANT.ELEVATED]: "bg-surface shadow-md",
  [MENU_BAR_VARIANT.TRANSPARENT]: "bg-transparent",
};

// Width reserved for the "More" button
const MORE_BTN_WIDTH = 88;

const MenuBar: FC<IMenuBar> = ({
  menuItems,
  logo,
  logoShort,
  logoLong,
  logoAlt = "logo",
  logoShortWidth = 36,
  logoShortHeight = 36,
  "aria-label": ariaLabel,
  itemsAsLinks = false,
  isAvatarVisible = false,
  avatarName = "",
  avatarEmail = "",
  avatarImage = "",
  avatarType = AVATAR_VARIANT.IMAGE_WITH_FULL,
  avatarSize = AVATAR_SIZE.SM,
  avatarLabelPosition = AVATAR_LABEL_POSITION.RIGHT,
  sticky = false,
  variant = MENU_BAR_VARIANT.DEFAULT,
  itemsAlign = MENU_BAR_ITEMS_ALIGN.LEFT,
  className = "",
  menuItemTextClass = "",
  isLoading = false,
  onNavigate,
  rightSlot,
}) => {
  const [activeItem, setActiveItem] = useState(() => menuItems.find((i) => i.isActive)?.title ?? "");
  const [prevMenuItems, setPrevMenuItems] = useState(menuItems);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Separate from openDropdown: the More panel needs that to stay on "__more__".
  const [expandedOverflow, setExpandedOverflow] = useState<string | null>(null);
  const [rovingId, setRovingId] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(menuItems.length);

  const navRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Click-outside closes all dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Overflow calculation: measure items and available container width
  useEffect(() => {
    const calculate = () => {
      const container = itemsContainerRef.current;
      if (!container) return;

      // Drop refs for items that unmounted. Done here, not during render.
      itemRefs.current = itemRefs.current.slice(0, menuItems.length);

      const available = container.offsetWidth;
      const items = itemRefs.current;
      let used = 0;
      let count = 0;

      for (let i = 0; i < items.length; i++) {
        const w = items[i]!.offsetWidth;
        // If this item would push us past the threshold where we'd need a "More"
        // button, stop — unless it's the last item and everything else fits.
        const isLast = i === items.length - 1;
        const threshold = isLast ? available : available - MORE_BTN_WIDTH;
        if (used + w <= threshold) {
          used += w;
          count++;
        } else {
          break;
        }
      }

      setVisibleCount(count);
    };

    const observer = new ResizeObserver(calculate);
    if (itemsContainerRef.current) observer.observe(itemsContainerRef.current);
    // Run once after mount so initial widths are measured
    calculate();

    return () => observer.disconnect();
  }, [menuItems, isLoading]);

  const handleItemClick = (item: IMenuItem, isOverflow = false) => {
    setActiveItem(item.title);
    if (item.hasChildren) {
      if (isOverflow) setExpandedOverflow(expandedOverflow === item.title ? null : item.title);
      else setOpenDropdown(openDropdown === item.title ? null : item.title);
      return;
    }
    setOpenDropdown(null);
    setMobileOpen(false);
    item.onClick?.();
    onNavigate?.(item.route);
  };

  const handleSubItemClick = (sub: ISubMenuItem) => {
    setOpenDropdown(null);
    setExpandedOverflow(null);
    setMobileOpen(false);
    onNavigate?.(sub.route);
  };

  const activeItemStyle = "text-primary-default";
  const inactiveItemStyle = "text-muted-fg hover:text-foreground";

  // text-shadow simulates bold weight without changing the text's layout width
  const stableText = (title: string, isActive: boolean) => (
    <span style={isActive ? { textShadow: "0 0 0.45px currentColor, 0 0 0.45px currentColor" } : {}}>
      {title}
    </span>
  );

  const alignClass: Record<MENU_BAR_ITEMS_ALIGN, string> = {
    [MENU_BAR_ITEMS_ALIGN.LEFT]: "justify-start",
    [MENU_BAR_ITEMS_ALIGN.CENTER]: "justify-center",
    [MENU_BAR_ITEMS_ALIGN.RIGHT]: "justify-end",
  };

  const visibleItems = menuItems.slice(0, visibleCount);
  const overflowItems = menuItems
    .slice(visibleCount)
    .filter((i) => !i.isDivider);
  const hasOverflow = overflowItems.length > 0;

  // Clicks override the highlight until the parent passes a new menuItems array.
  if (menuItems !== prevMenuItems) {
    setPrevMenuItems(menuItems);
    setActiveItem(menuItems.find((i) => i.isActive)?.title ?? "");
  }

  // Keep roving tabindex on a visible item. Arrows update rovingId directly;
  // this only repairs it when the menu or the overflow set changes.
  const rovingTitles = menuItems
    .slice(0, visibleCount)
    .filter((item) => !item.isDivider)
    .map((item) => item.title);
  if (hasOverflow) rovingTitles.push("__more__");
  if (!rovingId || !rovingTitles.includes(rovingId)) {
    const active = menuItems.find((item) => item.isActive && !item.isDivider);
    const next = active && rovingTitles.includes(active.title) ? active.title : (rovingTitles[0] ?? "");
    if (next !== rovingId) setRovingId(next);
  }

  const topLevelButtons = () => {
    const buttons: HTMLElement[] = [];
    for (const child of itemsContainerRef.current!.children) {
      if (!child.classList.contains("relative")) continue;
      buttons.push(child.querySelector<HTMLElement>("a, button")!);
    }
    return buttons;
  };

  const focusTop = (button: HTMLElement) => {
    const id = button.dataset.menubarItem;
    if (id) setRovingId(id);
    button.focus();
  };

  const panelButtons = (panel: Element) => [...panel.querySelectorAll<HTMLElement>("a, button")];

  // A link when itemsAsLinks is on and the item goes somewhere, otherwise a button.
  const renderControl = (
    route: string | undefined,
    onActivate: () => void,
    props: HTMLAttributes<HTMLElement> & { "data-menubar-item"?: string },
    children: ReactNode,
  ) => {
    if (!itemsAsLinks || route === undefined) {
      return <button {...props} onClick={onActivate}>{children}</button>;
    }
    const handleLinkClick = (e: ReactMouseEvent<HTMLAnchorElement>) => {
      // Leave cmd-click and friends to the browser, so a new tab still works.
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (onNavigate) e.preventDefault();
      onActivate();
    };
    return <a {...props} href={route} onClick={handleLinkClick}>{children}</a>;
  };

  // Menubar keyboard: arrows, Home, and End move focus (and wrap); they do not
  // activate. Down/Up open a submenu. Escape closes it and returns focus.
  const handleMenuKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const target = e.target;
    if (!(target instanceof HTMLButtonElement || target instanceof HTMLAnchorElement)) return;
    // Links only activate on Enter natively.
    if (e.key === " " && target instanceof HTMLAnchorElement) {
      e.preventDefault();
      target.click();
      return;
    }
    const tops = topLevelButtons();
    const topIndex = tops.indexOf(target);
    const panel = target.closest("[data-menubar-panel]");
    const inMenu = topIndex === -1 && !!panel;

    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const delta = e.key === "ArrowRight" ? 1 : -1;
      let index = topIndex;
      if (inMenu) {
        const ownerId = (panel as HTMLElement).dataset.menubarOwner;
        index = tops.findIndex((button) => button.dataset.menubarItem === ownerId);
      }
      if (index < 0) index = 0;
      if (openDropdown) setOpenDropdown(null);
      focusTop(tops[(index + delta + tops.length) % tops.length]);
      return;
    }

    if (e.key === "Home" || e.key === "End") {
      e.preventDefault();
      if (inMenu && panel) {
        const buttons = panelButtons(panel);
        (e.key === "Home" ? buttons[0] : buttons[buttons.length - 1])?.focus();
        return;
      }
      if (openDropdown) setOpenDropdown(null);
      focusTop(e.key === "Home" ? tops[0] : tops[tops.length - 1]);
      return;
    }

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (inMenu && panel) {
        const buttons = panelButtons(panel);
        const index = Math.max(0, buttons.indexOf(target));
        const delta = e.key === "ArrowDown" ? 1 : -1;
        buttons[(index + delta + buttons.length) % buttons.length]?.focus();
        return;
      }
      const id = target.dataset.menubarItem;
      if (!id) return;
      const item = id === "__more__" ? undefined : menuItems.find((entry) => entry.title === id);
      const canOpen = id === "__more__" ? hasOverflow : !!item?.hasChildren;
      if (!canOpen) return;
      flushSync(() => setOpenDropdown(id));
      const opened = target.parentElement!.querySelector("[data-menubar-panel]")!;
      const buttons = panelButtons(opened);
      (e.key === "ArrowUp" ? buttons[buttons.length - 1] : buttons[0])?.focus();
      return;
    }

    if (e.key === "Escape") {
      if (!openDropdown) return;
      e.preventDefault();
      const ownerId = (panel as HTMLElement | null)?.dataset.menubarOwner ?? target.dataset.menubarItem;
      flushSync(() => setOpenDropdown(null));
      focusTop(tops.find((button) => button.dataset.menubarItem === ownerId) ?? target);
      return;
    }

    if ((e.key === "Enter" || e.key === " ") && !inMenu) {
      const id = target.dataset.menubarItem;
      if (!id) return;
      const item = id === "__more__" ? undefined : menuItems.find((entry) => entry.title === id);
      const opens = id === "__more__" ? hasOverflow : !!item?.hasChildren;
      if (!opens) return;
      e.preventDefault();
      const willOpen = openDropdown !== id;
      flushSync(() => {
        if (item) setActiveItem(item.title);
        setOpenDropdown(willOpen ? id : null);
      });
      if (!willOpen) return;
      const opened = target.parentElement!.querySelector("[data-menubar-panel]")!;
      panelButtons(opened)[0]?.focus();
    }
  };

  const renderItemButton = (item: IMenuItem, isOverflow = false) => {
    const isActive = activeItem === item.title;
    const isExpanded = (isOverflow ? expandedOverflow : openDropdown) === item.title;
    return (
      <>
        {renderControl(
          item.hasChildren ? undefined : item.route,
          () => handleItemClick(item, isOverflow),
          {
            role: "menuitem",
            "data-menubar-item": item.title,
            tabIndex: isOverflow ? -1 : rovingId === item.title ? 0 : -1,
            "aria-haspopup": item.hasChildren ? "menu" : undefined,
            "aria-expanded": item.hasChildren ? isExpanded : undefined,
            className: `w-full flex flex-row items-center gap-1.5 px-3 py-2 rounded text-sm transition-colors duration-150 cursor-pointer ${
              isOverflow ? "text-left" : ""
            } ${isActive ? activeItemStyle : inactiveItemStyle} ${menuItemTextClass}`,
          },
          <>
            {item.icon && <span className="size-4 shrink-0">{item.icon}</span>}
            <span className={isOverflow ? "flex-1" : ""}>
              {stableText(item.title, isActive)}
            </span>
            {item.hasChildren && (
              <span
                className={`size-3.5 shrink-0 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                <ChevDownSVG />
              </span>
            )}
          </>,
        )}

        {/* Sub-menu dropdown */}
        {item.hasChildren && openDropdown === item.title && !isOverflow && (
          <div
            data-menubar-panel
            data-menubar-owner={item.title}
            role="menu"
            aria-label={item.title}
            className="absolute top-full left-0 mt-1 min-w-44 bg-surface border border-border rounded shadow-lg z-50 py-1"
          >
            {item.children?.map((sub, i) => (
              <Fragment key={i}>
                {renderControl(
                  sub.route,
                  () => handleSubItemClick(sub),
                  {
                    role: "menuitem",
                    tabIndex: -1,
                    className: `block w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 cursor-pointer ${
                      sub.isActive
                        ? "text-primary-default font-medium bg-primary-default/5"
                        : "text-muted-fg hover:text-foreground hover:bg-surface-raised"
                    }`,
                  },
                  sub.title,
                )}
              </Fragment>
            ))}
          </div>
        )}

        {/* Sub-menu for overflow items (nested list, no absolute positioning) */}
        {item.hasChildren && expandedOverflow === item.title && isOverflow && (
          <div role="group" aria-label={item.title} className="ml-3 flex flex-col border-l border-border pl-2 mb-1">
            {item.children?.map((sub, i) => (
              <Fragment key={i}>
                {renderControl(
                  sub.route,
                  () => handleSubItemClick(sub),
                  {
                    role: "menuitem",
                    tabIndex: -1,
                    className: `block w-full text-left px-3 py-2 text-sm rounded transition-colors duration-150 cursor-pointer ${
                      sub.isActive
                        ? "text-primary-default font-medium"
                        : "text-muted-fg hover:text-foreground hover:bg-surface-raised"
                    }`,
                  },
                  sub.title,
                )}
              </Fragment>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <nav
      ref={navRef}
      aria-label={ariaLabel}
      className={`w-full z-50 ${sticky ? "sticky top-0" : ""} ${variantClass[variant]} ${className}`}
    >
      <div className="px-4 h-14 flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          {logo ?? (
            <>
              <img
                src={logoShort}
                alt={logoAlt}
                width={logoShortWidth}
                height={logoShortHeight}
              />
              {/* Decorative: logoShort always shows, so it carries the name. */}
              <img
                src={logoLong}
                alt=""
                className="hidden sm:block h-6 w-auto"
              />
            </>
          )}
        </div>

        {/* Desktop menu items */}
        {!isLoading ? (
          <div
            ref={itemsContainerRef}
            role="menubar"
            aria-orientation="horizontal"
            onKeyDown={handleMenuKeyDown}
            className={`hidden md:flex items-center flex-1 min-w-0 ${alignClass[itemsAlign]}`}
          >
            {visibleItems.map((item, index) => {
              if (item.isDivider) {
                return (
                  <div
                    key={index}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    role="separator"
                    aria-orientation="vertical"
                    className="w-px h-5 bg-border mx-1 shrink-0"
                  />
                );
              }
              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  role="none"
                  className="relative shrink-0"
                >
                  {renderItemButton(item)}
                </div>
              );
            })}

            {/* Hidden items used only for width measurement */}
            {menuItems.slice(visibleCount).map((item, index) => (
              <div
                key={`measure-${visibleCount + index}`}
                ref={(el) => {
                  itemRefs.current[visibleCount + index] = el;
                }}
                className="invisible pointer-events-none absolute shrink-0"
                aria-hidden
              >
                {item.isDivider ? (
                  <div className="w-px h-5 mx-1" />
                ) : (
                  <button
                    tabIndex={-1}
                    className={`flex items-center gap-1.5 px-3 py-2 text-sm ${menuItemTextClass}`}
                  >
                    {item.icon && <span className="size-4">{item.icon}</span>}
                    <span>{item.title}</span>
                    {item.hasChildren && (
                      <span className="size-3.5">
                        <ChevDownSVG />
                      </span>
                    )}
                  </button>
                )}
              </div>
            ))}

            {/* "More" overflow button */}
            {hasOverflow && (
              <div role="none" className="relative shrink-0">
                <button
                  role="menuitem"
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === "__more__"}
                  data-menubar-item="__more__"
                  tabIndex={rovingId === "__more__" ? 0 : -1}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "__more__" ? null : "__more__",
                    )
                  }
                  className={`flex items-center gap-1 px-3 py-2 rounded text-sm transition-colors duration-150 cursor-pointer ${
                    openDropdown === "__more__"
                      ? activeItemStyle
                      : inactiveItemStyle
                  }`}
                >
                  <span>More</span>
                  <span
                    className={`size-3.5 transition-transform duration-200 ${openDropdown === "__more__" ? "rotate-180" : ""}`}
                  >
                    <ChevDownSVG />
                  </span>
                </button>

                {openDropdown === "__more__" && (
                  <div
                    data-menubar-panel
                    data-menubar-owner="__more__"
                    role="menu"
                    aria-label="More"
                    className="absolute top-full right-0 mt-1 min-w-48 bg-surface border border-border rounded shadow-lg z-50 py-1"
                  >
                    {overflowItems.map((item, i) => (
                      <div key={i} role="none" className="px-1">
                        {renderItemButton(item, true)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <MenuBarShimmer />
        )}

        {/* Right slot */}
        <div className="ml-auto flex items-center gap-3 shrink-0">
          {rightSlot}
          {isAvatarVisible && (
            <Avatar
              name={avatarName}
              email={avatarEmail}
              variant={avatarType ?? AVATAR_VARIANT.IMAGE_ONLY}
              image={avatarImage ?? ""}
              size={avatarSize}
              labelPosition={avatarLabelPosition}
            />
          )}
          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden size-8 flex items-center justify-center text-muted-fg hover:text-foreground cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="size-5">
              {mobileOpen ? <CrossSVG /> : <MenuSVG />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu — always shows all items */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-surface px-4 py-2 flex flex-col gap-1">
          {menuItems.map((item, index) => {
            if (item.isDivider) {
              return (
                <div key={index} className="border-b border-border my-1" />
              );
            }
            const isActive = activeItem === item.title;
            return (
              <div key={index}>
                {renderControl(
                  item.hasChildren ? undefined : item.route,
                  () => handleItemClick(item),
                  {
                    className: `w-full flex items-center gap-2 px-3 py-2.5 rounded text-sm transition-colors duration-150 cursor-pointer ${
                      isActive ? activeItemStyle : inactiveItemStyle
                    } ${menuItemTextClass}`,
                  },
                  <>
                    {item.icon && <span className="size-4">{item.icon}</span>}
                    <span className="flex-1 text-left">
                      {stableText(item.title, isActive)}
                    </span>
                    {item.hasChildren && (
                      <span
                        className={`size-3.5 transition-transform duration-200 ${openDropdown === item.title ? "rotate-180" : ""}`}
                      >
                        <ChevDownSVG />
                      </span>
                    )}
                  </>,
                )}
                {item.hasChildren && openDropdown === item.title && (
                  <div className="ml-4 flex flex-col gap-0.5 mt-0.5 mb-1">
                    {item.children?.map((sub, i) => (
                      <Fragment key={i}>
                        {renderControl(
                          sub.route,
                          () => handleSubItemClick(sub),
                          {
                            className: `block w-full text-left px-3 py-2 text-sm rounded transition-colors duration-150 cursor-pointer ${
                              sub.isActive
                                ? "text-primary-default font-medium"
                                : "text-muted-fg hover:text-foreground hover:bg-surface-raised"
                            }`,
                          },
                          sub.title,
                        )}
                      </Fragment>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
};

const MenuBarShimmer = () => (
  <div className="flex items-center gap-2 flex-1 animate-pulse">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="h-4 w-16 bg-surface-raised rounded" />
    ))}
  </div>
);

export default MenuBar;
