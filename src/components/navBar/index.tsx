import Avatar, { AVATAR_VARIANT } from "../avatar";
import { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevDownSVG, ChevLeftSVG, ChevRightSVG, DotFillSVG } from "../icons";
import Tooltip, { TOOLTIP_POSITION } from "../tooltip";

export interface ISubMenuItem {
  title: string;
  route: string;
  isActive: boolean;
}

export interface IMenuItem {
  title: string;
  icon?: ReactNode;
  route: string;
  isActive: boolean;
  isDivider: boolean;
  onClick?: () => void;
  hasChildren?: boolean;
  children?: ISubMenuItem[];
}

type NavBarSharedProps = {
  menuItems: IMenuItem[];
  logoShort: string;
  logoLong: string;
  logoShortWidth?: number;
  logoShortHeight?: number;
  logoLongWidth?: number | string;
  menuWidthClass?: string;
  menuHeightClass?: string;
  isCollapsed?: boolean;
  menuBackgroundColor?: string;
  className?: string;
  menuItemTextClass?: string;
  isLoading?: boolean;
  onNavigate?: (route: string) => void;
  tooltipPortalTarget?: HTMLElement | null;
};

type AvatarVisibleProps = {
  isAvatarVisible: true;
  avatarName: string;
  avatarEmail: string;
  avatarImage: string;
  avatarType: AVATAR_VARIANT;
};

type AvatarHiddenProps = {
  isAvatarVisible?: false;
  avatarName?: string;
  avatarEmail?: string;
  avatarImage?: string;
  avatarType?: AVATAR_VARIANT;
};

export type INavBar = NavBarSharedProps &
  (AvatarVisibleProps | AvatarHiddenProps);

const NavBar: FC<INavBar> = ({
  menuItems,
  logoShort,
  logoLong,
  logoShortWidth = 60,
  logoShortHeight = 60,
  logoLongWidth = "60%",
  isAvatarVisible = true,
  avatarName = "",
  avatarEmail = "",
  avatarImage = "",
  avatarType = AVATAR_VARIANT.IMAGE_WITH_FULL,
  menuWidthClass = "w-[20rem]",
  menuHeightClass = "h-[100vh]",
  isCollapsed = false,
  menuBackgroundColor = "bg-primary-100",
  className = "",
  menuItemTextClass = "",
  isLoading = false,
  onNavigate,
  tooltipPortalTarget = null,
}: INavBar) => {
  const [isActiveMenuItem, setIsActiveMenuItem] = useState<string>("");
  const [isActiveSubMenuItem, setIsActiveSubMenuItem] = useState<string>("");
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(isCollapsed);
  const [isMenuItemsCollapsed, setIsMenuITemsCollapsed] =
    useState<boolean>(isCollapsed);
  const [fixedTooltip, setFixedTooltip] = useState<{
    label: string;
    x: number;
    y: number;
  } | null>(null);
  const activeClass = "rounded-lg bg-white/35";
  const collapsedClass = "w-[6rem]";

  useEffect(() => {
    if (menuItems.length > 0) {
      const active = menuItems.find((item) => item.isActive === true);
      setIsActiveMenuItem(active?.title ?? menuItems[0].title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isMenuCollapsed) {
      setTimeout(() => {
        setIsMenuITemsCollapsed(false);
      }, 200);
    } else {
      setIsMenuITemsCollapsed(true);
    }
  }, [isMenuCollapsed]);

  const handleClick = (menu: IMenuItem) => {
    const { hasChildren, title, onClick, route } = menu;

    setIsActiveMenuItem(title);

    if (hasChildren) {
      return;
    }

    if (onClick) {
      setIsActiveSubMenuItem("");
      onClick();
    }
    onNavigate?.(route);
  };

  return (
    <div
      className={`transition-[width] duration-300 ease-in-out ${
        isMenuCollapsed ? collapsedClass : menuWidthClass
      } ${menuHeightClass} ${className}`}
    >
      {fixedTooltip &&
        createPortal(
          <div
            className="fixed z-9999 pointer-events-none w-0 h-0"
            style={{ top: fixedTooltip.y, left: fixedTooltip.x }}
          >
            <Tooltip
              position={TOOLTIP_POSITION.RIGHT}
              label={fixedTooltip.label}
              isVisible={true}
              toolTipWidth="w-fit"
              toolTipClass="text-nowrap"
            />
          </div>,
          tooltipPortalTarget ?? document.body,
        )}
      <div
        className={`w-full h-full flex flex-col gap-4 p-4 ${menuBackgroundColor}`}
      >
        {/* Logo */}
        <div className="flex flex-row gap-2 items-center">
          <img
            src={logoShort}
            alt="logo_short"
            width={logoShortWidth}
            height={logoShortHeight}
          />
          {!isMenuItemsCollapsed && (
            <img
              src={logoLong}
              alt="logo_long"
              width={logoLongWidth}
              className="transition-opacity duration-300"
            />
          )}
        </div>

        {/* Divider + collapse toggle */}
        <div className="relative flex items-center">
          <div className="flex-1 border-white/20 border-b"></div>
          <span
            onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
            className={`cursor-pointer w-8 h-8 rounded-full ${menuBackgroundColor} border border-white/30 absolute -right-8 flex items-center justify-center text-foreground`}
          >
            <div className="size-5">
              {isMenuCollapsed ? <ChevRightSVG /> : <ChevLeftSVG />}
            </div>
          </span>
        </div>

        {/* Menu Items */}
        {!isLoading ? (
          <div className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-1 scrollbar-thin">
            {menuItems.map((item, index) => {
              if (!item.isDivider) {
                return (
                  <div key={`menu_item_${index + 1}`}>
                    <div
                      className={`flex flex-row gap-4 items-center p-4 rounded-lg hover:cursor-pointer hover:bg-white/35 hover:rounded-lg ${
                        isActiveMenuItem === item.title ? activeClass : ""
                      }`}
                      onClick={() => handleClick(item)}
                      onMouseEnter={(e) =>
                        isMenuCollapsed &&
                        setFixedTooltip({
                          label: item.title,
                          x: e.currentTarget.getBoundingClientRect().right,
                          y:
                            e.currentTarget.getBoundingClientRect().top +
                            e.currentTarget.getBoundingClientRect().height / 2,
                        })
                      }
                      onMouseLeave={() => setFixedTooltip(null)}
                    >
                      <div
                        className={`w-6 h-6 ml-1 relative ${menuItemTextClass}`}
                      >
                        {item.icon}
                      </div>
                      {!isMenuItemsCollapsed && (
                        <span
                          className={`text-nowrap flex-1 ${menuItemTextClass}`}
                        >
                          {item.title}
                        </span>
                      )}
                      {item.hasChildren && !isMenuItemsCollapsed && (
                        <div
                          className={`size-5 transform transition-transform duration-300 ${
                            isActiveMenuItem === item.title && item.hasChildren
                              ? "rotate-180"
                              : ""
                          }`}
                        >
                          <ChevDownSVG />
                        </div>
                      )}
                    </div>

                    {/* Sub menu items starts from here if any */}
                    {isActiveMenuItem === item.title && item.hasChildren && (
                      <div className="flex flex-col gap-1 bg-white/15 pt-3 relative -top-2">
                        {item.children?.map((subItem, subIndex) => (
                          <div
                            key={`sub_menu_item_${subIndex + 1}`}
                            className={`flex flex-row gap-4 items-center p-4 h-14 rounded-lg hover:cursor-pointer hover:bg-white/35 hover:rounded-lg ${
                              isActiveSubMenuItem === subItem.title
                                ? activeClass
                                : ""
                            }`}
                            onClick={() => {
                              setIsActiveSubMenuItem(subItem.title);
                              onNavigate?.(subItem.route);
                            }}
                            onMouseEnter={(e) =>
                              isMenuCollapsed &&
                              setFixedTooltip({
                                label: subItem.title,
                                x: e.currentTarget.getBoundingClientRect()
                                  .right,
                                y:
                                  e.currentTarget.getBoundingClientRect().top +
                                  e.currentTarget.getBoundingClientRect()
                                    .height /
                                    2,
                              })
                            }
                            onMouseLeave={() => setFixedTooltip(null)}
                          >
                            <div className="size-6 ml-1 mt-1 relative text-muted-fg">
                              <DotFillSVG />
                            </div>
                            {!isMenuItemsCollapsed && (
                              <span
                                className={`text-nowrap flex-1 ${menuItemTextClass}`}
                              >
                                {subItem.title}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div
                  key={`menu_item_${index + 1}`}
                  className="border-white/20 border-b my-3"
                ></div>
              );
            })}
          </div>
        ) : (
          <NavBarShimmer
            isMenuItemsCollapsed={isMenuItemsCollapsed}
            className="flex-1 overflow-y-auto"
          />
        )}

        {/* Avatar — pinned to bottom */}
        {isAvatarVisible && (
          <div className="mt-auto">
            <Avatar
              name={avatarName}
              email={avatarEmail}
              variant={
                isMenuItemsCollapsed ? AVATAR_VARIANT.IMAGE_ONLY : avatarType
              }
              image={avatarImage}
              isLoading={isLoading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const NavBarShimmer = ({
  isMenuItemsCollapsed,
  className = "",
}: {
  isMenuItemsCollapsed: boolean;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col gap-2 animate-pulse ${className}`}>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex flex-row gap-4 items-center p-4 rounded-lg bg-white/20"
        >
          <div className="w-6 h-6 ml-1 bg-white/30"></div>
          {!isMenuItemsCollapsed && (
            <span className="w-full h-4 bg-white/30 rounded"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavBar;
