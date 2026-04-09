import { useRef } from "react";
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
        onNavigate={(route) => router.push(route)} // optional, or navigate(route) for React Router
        logoShortWidth={60}       // optional, default 60
        logoShortHeight={60}      // optional, default 60
        logoLongWidth="60%"       // optional, default "60%", accepts number (px) or string
        isAvatarVisible={true}    // optional, default true
        avatarName="John Doe"     // optional, required if isAvatarVisible is true
        avatarEmail="john.doe@email.com" // optional, required if isAvatarVisible is true
        avatarImage="/avatar.png" // optional, required if isAvatarVisible is true
        avatarType={AVATAR_VARIANT.IMAGE_WITH_FULL} // optional, default AVATAR_VARIANT.IMAGE_WITH_FULL
        menuWidthClass="w-[20rem]" // optional, default "w-[20rem]", accepts any Tailwind width class
        menuHeightClass="h-screen" // optional, default "h-[100vh]", accepts any Tailwind height class
        menuBackgroundColor="bg-surface-raised" // optional, default "bg-surface-raised", accepts any Tailwind background color class
        isLoading={false}       // optional, default false. When true, shows skeleton loaders instead of menu items and avatar
      />
      <main className="flex-1 p-6">
        {/* Page content */}
      </main>
    </div>
  );
};`;

const NavBars = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const renderPlayground = () => (
    <div
      ref={containerRef}
      className="relative flex flex-row gap-4 items-stretch border border-border rounded-lg overflow-hidden"
    >
      <NavBar
        menuItems={menuItems}
        logoShort="/images/logo_short.png"
        logoLong="/images/logo.png"
        isAvatarVisible={true}
        avatarName="John Doe"
        avatarEmail="john.doe@email.com"
        avatarImage="/images/profile_picture.png"
        avatarType={AVATAR_VARIANT.IMAGE_WITH_FULL}
        menuWidthClass="w-[20rem]"
        menuHeightClass="h-[80vh]"
        menuBackgroundColor="bg-surface-raised"
        isLoading={false}
        isCollapsed={true}
        logoLongWidth="40%"
      />
      <div className="flex-1 p-4 h-full">
        <SampleBody />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

const SampleBody = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-64 rounded-3xl border border-white/10 bg-teal-500/20" />
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-violet-500/20 h-64" />
        <div className="rounded-3xl border border-white/10 bg-amber-500/20 h-64" />
        <div className=" rounded-3xl border border-white/10 bg-sky-500/20 h-64" />
        <div className="rounded-3xl border border-white/10 bg-rose-500/20 h-64" />
        <div className="rounded-3xl border border-white/10 bg-lime-500/20 h-64" />
      </div>
    </div>
  );
};

export default NavBars;
