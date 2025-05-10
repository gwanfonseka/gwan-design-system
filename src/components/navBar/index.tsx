import Image from "next/image";
import Avatar, { AVATAR_VARIANT } from "../avatar";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevLeftSVG, ChevRightSVG } from "../icons";
import Tooltip, { TOOLTIP_POSITION } from "../tooltip";

export interface IMenuItem {
  title: string;
  icon?: ReactNode;
  route: string;
  isActive: boolean;
  isDivider: boolean;
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
}

const NavBar = ({
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
}: INavBar) => {
  const router = useRouter();
  const [isActiveMenuItem, setIsActiveMenuItem] = useState<string>("");
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(isCollapsed);
  const [isMenuItemsCollapsed, setIsMenuITemsCollapsed] =
    useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);
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
    setIsActiveMenuItem(menu.title);
    router.push(menu.route);
  };

  return (
    <div
      className={`transition-[width] duration-300 ease-in-out ${
        isMenuCollapsed ? collapsedClass : menuWidthClass
      } ${menuHeightClass}`}
    >
      <div
        className={`w-full h-full flex flex-col gap-4 p-4 ${menuBackgroundColor}`}
      >
        <div className="flex flex-col gap-4">
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
          <div className="relative">
            <Avatar
              name={avatarName}
              email={avatarEmail}
              variant={
                isMenuItemsCollapsed ? AVATAR_VARIANT.IMAGE_ONLY : avatarType
              }
              image={avatarImage}
            />
            <span
              onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
              className={`cursor-pointer w-8 h-8 rounded-full ${menuBackgroundColor} border border-neutral-300 absolute -right-8 flex items-center justify-center text-black`}
            >
              <div className="size-5">
                {isMenuCollapsed ? <ChevRightSVG /> : <ChevLeftSVG />}
              </div>
            </span>
          </div>
        </div>
        <div className="border-neutral-300 border-b"></div>
        <div className="flex flex-col gap-1">
          {menuItems.map((item, index) => {
            if (!item.isDivider) {
              return (
                <div
                  key={`menu_item_${index + 1}`}
                  className={`flex flex-row gap-4 items-center p-4 rounded-lg hover:cursor-pointer hover:bg-white hover:bg-opacity-35 hover:rounded-lg ${
                    isActiveMenuItem === item.title ? activeClass : ""
                  }`}
                  onClick={() => handleClick(item)}
                  onMouseEnter={() => setShowTooltip(index)}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  <div className="w-6 h-6 ml-1 relative">
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
                    <span className="text-nowrap">{item.title}</span>
                  )}
                </div>
              );
            }

            return (
              <div
                key={`menu_item_${index + 1}`}
                className="border-neutral-300 border-b my-3"
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
