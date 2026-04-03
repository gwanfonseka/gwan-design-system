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
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";

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

const codeExample = `import { NavBar, AVATAR_VARIANT } from "gwan-design-system";

const menuItems = [
  {
    title: "Dashboard",
    icon: <DashboardSVG />,
    route: "/dashboard",
    isActive: true,
    isDivider: false,
    onClick: () => router.push("/dashboard"),
  },
  {
    title: "Settings",
    icon: <SettingsSVG />,
    route: "/settings",
    isActive: false,
    isDivider: false,
    onClick: () => router.push("/settings"),
  },
  {
    title: "", // divider
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
    onClick: handleSignOut,
  },
];

// Next.js
import { useRouter } from "next/navigation";
const router = useRouter();

// React Router
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

const Example = () => {
  return (
    <div className="flex h-screen">
      <NavBar
        menuItems={menuItems}
        logoShort="/logo-short.png"
        logoLong="/logo.png"
        avatarName="John Doe"
        avatarEmail="john.doe@email.com"
        avatarImage="/avatar.png"
        avatarType={AVATAR_VARIANT.IMAGE_WITH_FULL}
        menuWidthClass="w-[20rem]"
        menuHeightClass="h-screen"
        menuBackgroundColor="bg-surface-raised"
        isLoading={false}
        onNavigate={(route) => router.push(route)} // or navigate(route) for React Router
      />
      <main className="flex-1 p-6">
        {/* Page content */}
      </main>
    </div>
  );
};`;

const NavBars = () => {
  const renderPlayground = () => (
    <div className="flex flex-row items-start border border-border rounded-lg overflow-hidden">
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
        menuBackgroundColor="bg-surface-raised"
        isLoading={false}
      />
      <div className="flex-1 p-4 text-muted-fg text-sm">Rest of the content</div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default NavBars;
