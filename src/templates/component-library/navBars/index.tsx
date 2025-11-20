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
    onClick: () => {},
  },
  {
    title: "Manage orders",
    icon: <OrdersSVG />,
    route: "",
    isActive: false,
    isDivider: false,
    onClick: () => {},
  },
  {
    title: "Manage products",
    icon: <ProductsSVG />,
    route: "",
    hasChildren: true,
    children: [
      { title: "Books", route: "", isActive: false },
      { title: "Stickers", route: "", isActive: false },
    ],
    isActive: false,
    isDivider: false,
  },
  {
    title: "Manage templates",
    icon: <TemplatesSVG />,
    route: "",
    isActive: false,
    isDivider: false,
    onClick: () => {},
  },
  {
    title: "Manage covers",
    icon: <CoversSVG />,
    route: "",
    hasChildren: true,
    children: [
      { title: "A4 covers", route: "", isActive: false },
      { title: "A3 covers", route: "", isActive: false },
      { title: "B5 covers", route: "", isActive: false },
      { title: "B6 covers", route: "", isActive: false },
    ],
    isActive: false,
    isDivider: false,
  },
  {
    title: "Manage colors",
    icon: <ColorsSVG />,
    route: "",
    isActive: false,
    isDivider: false,
    onClick: () => {},
  },
  {
    title: "",
    route: "",
    isActive: false,
    isDivider: true,
    onClick: () => {},
  },
  {
    title: "Sign out",
    icon: <SignOutSVG />,
    route: "",
    isActive: false,
    isDivider: false,
    onClick: () => {},
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
        isLoading={false}
      />
      <div className="flex-1 p-4">Rest of the content</div>
    </div>
  );
};

export default NavBars;
