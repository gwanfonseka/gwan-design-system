import Image from "next/image";
import Avatar, { AVATAR_VARIANT } from "../avatar";
import { FC, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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

export interface INavBar {
  menuItems: IMenuItem[];
  logoShort: string;
  logoLong: string;
  avatarName: string;
  avatarEmail: string;
  avatarImage: string;
  avatarType: AVATAR_VARIANT;
  menuWidthClass?: string;
  menuHeightClass?: string;
  isCollapsed?: boolean;
  menuBackgroundColor?: string;
  className?: string;
  menuItemTextClass?: string;
  isLoading?: boolean;
}

const NavBar: FC<INavBar> = ({
  menuItems,
  logoShort,
  logoLong,
  avatarName,
  avatarEmail,
  avatarImage,
  avatarType,
  menuWidthClass = "w-[20rem]",
  menuHeightClass = "h-[100vh]",
  isCollapsed = false,
  menuBackgroundColor = "bg-primary-100",
  className = "",
  menuItemTextClass = "",
  isLoading = false,
}: INavBar) => {
  const router = useRouter();
  const [isActiveMenuItem, setIsActiveMenuItem] = useState<string>("");
  const [isActiveSubMenuItem, setIsActiveSubMenuItem] = useState<string>("");
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(isCollapsed);
  const [isMenuItemsCollapsed, setIsMenuITemsCollapsed] =
    useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);
  const [showSubTooltip, setShowSubTooltip] = useState<number | null>(null);
  const activeClass = "rounded-lg bg-white bg-opacity-35";
  const collapsedClass = "w-[6rem]";

  useEffect(() => {
    if (menuItems.length > 0) {
      const active = menuItems.find((item) => item.isActive === true);
      setIsActiveMenuItem(active?.title ?? menuItems[0].title);
    }
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
    router.push(route);
  };

  return (
    <div
      className={`transition-[width] duration-300 ease-in-out ${
        isMenuCollapsed ? collapsedClass : menuWidthClass
      } ${menuHeightClass} ${className}`}
    >
      <div
        className={`w-full h-full flex flex-col gap-4 p-4 ${menuBackgroundColor}`}
      >
        <div className="flex flex-col gap-4">
          {/* Logo */}
          <div className="flex flex-row gap-2 items-center">
            <Image src={logoShort} alt="logo_short" width={60} height={60} />
            {!isMenuItemsCollapsed && (
              <Image
                src={logoLong}
                alt="logo_long"
                width={200}
                height={48}
                className="transition-opacity duration-300"
              />
            )}
          </div>

          {/* Avatar */}
          <div className="relative">
            <Avatar
              name={avatarName}
              email={avatarEmail}
              variant={
                isMenuItemsCollapsed ? AVATAR_VARIANT.IMAGE_ONLY : avatarType
              }
              image={avatarImage}
              isLoading={isLoading}
            />
            <span
              onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
              className={`cursor-pointer w-8 h-8 rounded-full ${menuBackgroundColor} border border-neutral-50 absolute -right-8 flex items-center justify-center text-black`}
            >
              <div className="size-5">
                {isMenuCollapsed ? <ChevRightSVG /> : <ChevLeftSVG />}
              </div>
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-neutral-50 border-b"></div>

        {/* Menu Items */}
        {!isLoading ? (
          <div className="flex flex-col gap-1">
            {menuItems.map((item, index) => {
              if (!item.isDivider) {
                return (
                  <div key={`menu_item_${index + 1}`}>
                    <div
                      className={`flex flex-row gap-4 items-center p-4 rounded-lg hover:cursor-pointer hover:bg-white hover:bg-opacity-35 hover:rounded-lg ${
                        isActiveMenuItem === item.title ? activeClass : ""
                      }`}
                      onClick={() => handleClick(item)}
                      onMouseEnter={() => setShowTooltip(index)}
                      onMouseLeave={() => setShowTooltip(null)}
                    >
                      <div
                        className={`w-6 h-6 ml-1 relative ${menuItemTextClass}`}
                      >
                        {item.icon}
                        {isMenuCollapsed && (
                          <Tooltip
                            position={TOOLTIP_POSITION.RIGHT}
                            label={item.title}
                            isVisible={showTooltip === index}
                            toolTipWidth="w-fit"
                            toolTipClass="text-nowrap"
                          />
                        )}
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
                      <div className="flex flex-col gap-1 bg-white bg-opacity-15 pt-3 relative -top-2">
                        {item.children?.map((subItem, subIndex) => (
                          <div
                            key={`sub_menu_item_${subIndex + 1}`}
                            className={`flex flex-row gap-4 items-center p-4 h-14 rounded-lg hover:cursor-pointer hover:bg-white hover:bg-opacity-35 hover:rounded-lg ${
                              isActiveSubMenuItem === subItem.title
                                ? activeClass
                                : ""
                            }`}
                            onClick={() => {
                              setIsActiveSubMenuItem(subItem.title);
                              router.push(subItem.route);
                            }}
                            onMouseEnter={() => setShowSubTooltip(subIndex)}
                            onMouseLeave={() => setShowSubTooltip(null)}
                          >
                            <div className="size-6 ml-2 mt-1 relative text-neutral-600">
                              <DotFillSVG />
                              {isMenuCollapsed && (
                                <Tooltip
                                  position={TOOLTIP_POSITION.RIGHT}
                                  label={subItem.title}
                                  isVisible={showSubTooltip === subIndex}
                                  toolTipWidth="w-fit"
                                  toolTipClass="text-nowrap"
                                />
                              )}
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
                  className="border-neutral-50 border-b my-3"
                ></div>
              );
            })}
          </div>
        ) : (
          <NavBarShimmer isMenuItemsCollapsed={isMenuItemsCollapsed} />
        )}
      </div>
    </div>
  );
};

const NavBarShimmer = ({
  isMenuItemsCollapsed,
}: {
  isMenuItemsCollapsed: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2 animate-pulse">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex flex-row gap-4 items-center p-4 rounded-lg bg-neutral-400"
        >
          <div className="w-6 h-6 ml-1 bg-neutral-200"></div>
          {!isMenuItemsCollapsed && (
            <span className="w-full h-4 bg-neutral-200 rounded"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavBar;
