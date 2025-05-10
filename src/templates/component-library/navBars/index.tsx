import { AVATAR_VARIANT } from "@/components/avatar";
import {
  ColorsSVG,
  CoversSVG,
  DashboardSVG,
  OrdersSVG,
  ProductsSVG,
  SignOutSVG,
  TemplatesSVG,
} from "@/components/icons";
import NavBar from "@/components/navBar";

const menuItems = [
  {
    title: "Dashboard",
    icon: <DashboardSVG />,
    route: "",
    isActive: true,
    isDivider: false,
  },
  {
    title: "Manage orders",
    icon: <OrdersSVG />,
    route: "",
    isActive: false,
    isDivider: false,
  },
  {
    title: "Manage products",
    icon: <ProductsSVG />,
    route: "",
    isActive: false,
    isDivider: false,
  },
  {
    title: "Manage templates",
    icon: <TemplatesSVG />,
    route: "",
    isActive: false,
    isDivider: false,
  },
  {
    title: "Manage covers",
    icon: <CoversSVG />,
    route: "",
    isActive: false,
    isDivider: false,
  },
  {
    title: "Manage colors",
    icon: <ColorsSVG />,
    route: "",
    isActive: false,
    isDivider: false,
  },
  {
    title: "",
    route: "",
    isActive: false,
    isDivider: true,
  },
  {
    title: "Sign out",
    icon: <SignOutSVG />,
    route: "",
    isActive: false,
    isDivider: false,
  },
];

const NavBars = () => {
  return (
    <div className="flex flex-row items-start border border-neutral-200">
      <NavBar
        menuItems={menuItems}
        logoShort="/images/logo_short.png"
        logoLong="/images/logo.png"
        avatarName="John Doe"
        avatarEmail="john.doe@email.com"
        avatarImage="/images/profile_picture.png"
        avatarType={AVATAR_VARIANT.IMAGE_WITH_FULL}
        menuWidthClass="w-[20rem]"
        menuHeightClass="h-[80vh]"
        menuBackgroundColor="bg-primary-100"
      />
      <div className="flex-1 p-4">Rest of the content</div>
    </div>
  );
};

export default NavBars;
