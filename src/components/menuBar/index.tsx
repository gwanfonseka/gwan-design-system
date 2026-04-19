"use client";

import Avatar, {
  AVATAR_VARIANT,
  AVATAR_SIZE,
  AVATAR_LABEL_POSITION,
} from "../avatar";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
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
  logoShort: string;
  logoLong: string;
  logoShortWidth?: number;
  logoShortHeight?: number;
  sticky?: boolean;
  variant?: MENU_BAR_VARIANT;
  itemsAlign?: MENU_BAR_ITEMS_ALIGN;
  className?: string;
  menuItemTextClass?: string;
  isLoading?: boolean;
  onNavigate?: (route: string) => void;
  rightSlot?: ReactNode;
};

type AvatarVisibleProps = {
  isAvatarVisible: true;
  avatarName: string;
  avatarEmail: string;
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
  logoShort,
  logoLong,
  logoShortWidth = 36,
  logoShortHeight = 36,
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
  const [activeItem, setActiveItem] = useState<string>("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(menuItems.length);

  const navRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Reset item refs when menu changes
  itemRefs.current = itemRefs.current.slice(0, menuItems.length);

  useEffect(() => {
    const active = menuItems.find((i) => i.isActive);
    setActiveItem(active?.title ?? "");
  }, [menuItems]);

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

      const available = container.offsetWidth;
      const items = itemRefs.current;
      let used = 0;
      let count = 0;

      for (let i = 0; i < items.length; i++) {
        const w = items[i]?.offsetWidth ?? 0;
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
  }, [menuItems]);

  const handleItemClick = (item: IMenuItem) => {
    if (item.isDivider) return;
    setActiveItem(item.title);
    if (item.hasChildren) {
      setOpenDropdown(openDropdown === item.title ? null : item.title);
      return;
    }
    setOpenDropdown(null);
    setMobileOpen(false);
    item.onClick?.();
    onNavigate?.(item.route);
  };

  const handleSubItemClick = (sub: ISubMenuItem) => {
    setOpenDropdown(null);
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

  const renderItemButton = (item: IMenuItem, isOverflow = false) => {
    const isActive = activeItem === item.title;
    return (
      <>
        <button
          onClick={() => handleItemClick(item)}
          className={`w-full flex flex-row items-center gap-1.5 px-3 py-2 rounded text-sm transition-colors duration-150 cursor-pointer ${
            isOverflow ? "text-left" : ""
          } ${isActive ? activeItemStyle : inactiveItemStyle} ${menuItemTextClass}`}
        >
          {item.icon && <span className="size-4 shrink-0">{item.icon}</span>}
          <span className={isOverflow ? "flex-1" : ""}>
            {stableText(item.title, isActive)}
          </span>
          {item.hasChildren && (
            <span
              className={`size-3.5 shrink-0 transition-transform duration-200 ${
                openDropdown === item.title ? "rotate-180" : ""
              }`}
            >
              <ChevDownSVG />
            </span>
          )}
        </button>

        {/* Sub-menu dropdown */}
        {item.hasChildren && openDropdown === item.title && !isOverflow && (
          <div className="absolute top-full left-0 mt-1 min-w-44 bg-surface border border-border rounded shadow-lg z-50 py-1">
            {item.children?.map((sub, i) => (
              <button
                key={i}
                onClick={() => handleSubItemClick(sub)}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 cursor-pointer ${
                  sub.isActive
                    ? "text-primary-default font-medium bg-primary-default/5"
                    : "text-muted-fg hover:text-foreground hover:bg-surface-raised"
                }`}
              >
                {sub.title}
              </button>
            ))}
          </div>
        )}

        {/* Sub-menu for overflow items (nested list, no absolute positioning) */}
        {item.hasChildren && openDropdown === item.title && isOverflow && (
          <div className="ml-3 flex flex-col border-l border-border pl-2 mb-1">
            {item.children?.map((sub, i) => (
              <button
                key={i}
                onClick={() => handleSubItemClick(sub)}
                className={`w-full text-left px-3 py-2 text-sm rounded transition-colors duration-150 cursor-pointer ${
                  sub.isActive
                    ? "text-primary-default font-medium"
                    : "text-muted-fg hover:text-foreground hover:bg-surface-raised"
                }`}
              >
                {sub.title}
              </button>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <nav
      ref={navRef}
      className={`w-full z-50 ${sticky ? "sticky top-0" : ""} ${variantClass[variant]} ${className}`}
    >
      <div className="px-4 h-14 flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <img
            src={logoShort}
            alt="logo"
            width={logoShortWidth}
            height={logoShortHeight}
          />
          <img
            src={logoLong}
            alt="logo"
            className="hidden sm:block h-6 w-auto"
          />
        </div>

        {/* Desktop menu items */}
        {!isLoading ? (
          <div
            ref={itemsContainerRef}
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
              <div className="relative shrink-0">
                <button
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
                  <div className="absolute top-full right-0 mt-1 min-w-48 bg-surface border border-border rounded shadow-lg z-50 py-1">
                    {overflowItems.map((item, i) => (
                      <div key={i} className="px-1">
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
                <button
                  onClick={() => handleItemClick(item)}
                  className={`w-full flex items-center gap-2 px-3 py-2.5 rounded text-sm transition-colors duration-150 cursor-pointer ${
                    isActive ? activeItemStyle : inactiveItemStyle
                  } ${menuItemTextClass}`}
                >
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
                </button>
                {item.hasChildren && openDropdown === item.title && (
                  <div className="ml-4 flex flex-col gap-0.5 mt-0.5 mb-1">
                    {item.children?.map((sub, i) => (
                      <button
                        key={i}
                        onClick={() => handleSubItemClick(sub)}
                        className={`w-full text-left px-3 py-2 text-sm rounded transition-colors duration-150 cursor-pointer ${
                          sub.isActive
                            ? "text-primary-default font-medium"
                            : "text-muted-fg hover:text-foreground hover:bg-surface-raised"
                        }`}
                      >
                        {sub.title}
                      </button>
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
