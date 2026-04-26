import { useState } from "react";
import {
  AVATAR_VARIANT,
  AVATAR_SIZE,
  AVATAR_LABEL_POSITION,
} from "@/components/avatar";
import {
  ColorsSVG,
  CoversSVG,
  DashboardSVG,
  OrdersSVG,
  ProductsSVG,
  SettingsSVG,
  SignOutSVG,
  TemplatesSVG,
} from "@/components/icons";
import MenuBar, { MENU_BAR_VARIANT, MENU_BAR_ITEMS_ALIGN } from "@/components/menuBar";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";

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
    title: "Orders",
    icon: <OrdersSVG />,
    route: "",
    isActive: false,
    isDivider: false,
    onClick: () => {},
  },
  {
    title: "Products",
    icon: <ProductsSVG />,
    route: "",
    isActive: false,
    isDivider: false,
    hasChildren: true,
    children: [
      { title: "Books", route: "", isActive: false },
      { title: "Stickers", route: "", isActive: false },
    ],
  },
  {
    title: "Templates",
    icon: <TemplatesSVG />,
    route: "",
    isActive: false,
    isDivider: false,
    onClick: () => {},
  },
  {
    title: "Covers",
    icon: <CoversSVG />,
    route: "",
    isActive: false,
    isDivider: false,
    onClick: () => {},
  },
  {
    title: "Colors",
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
  },
  {
    title: "Settings",
    icon: <SettingsSVG />,
    route: "",
    isActive: false,
    isDivider: false,
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

const codeExample = `import { MenuBar, MENU_BAR_VARIANT, MENU_BAR_ITEMS_ALIGN, AVATAR_VARIANT, AVATAR_SIZE, AVATAR_LABEL_POSITION } from "gwan-design-system";

// IMenuItem shape (same as NavBar — fully compatible):
// {
//   title: string
//   icon?: ReactNode
//   route: string
//   isActive: boolean
//   isDivider: boolean          // set true for a visual separator, leave title/route empty
//   onClick?: () => void
//   hasChildren?: boolean
//   children?: { title: string; route: string; isActive: boolean }[]
// }

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
    title: "Products",
    icon: <ProductsSVG />,
    route: "",
    isActive: false,
    isDivider: false,
    hasChildren: true,
    children: [
      { title: "Books",    route: "/products/books",    isActive: false },
      { title: "Stickers", route: "/products/stickers", isActive: false },
    ],
  },
  { title: "", route: "", isActive: false, isDivider: true }, // divider
  {
    title: "Sign out",
    icon: <SignOutSVG />,
    route: "",
    isActive: false,
    isDivider: false,
    onClick: handleSignOut,
  },
];

const Example = () => {
  return (
    <MenuBar
      menuItems={menuItems}
      logoShort="/logo-short.png"       // required
      logoLong="/logo.png"              // required
      variant={MENU_BAR_VARIANT.DEFAULT}           // DEFAULT | BORDERED | ELEVATED | TRANSPARENT
      itemsAlign={MENU_BAR_ITEMS_ALIGN.LEFT}       // LEFT | CENTER | RIGHT  (default: LEFT)
      sticky={false}                               // optional, sticks to top of viewport
      onNavigate={(route) => router.push(route)} // optional
      rightSlot={<SearchButton />}      // optional, renders in the right slot
      isLoading={false}                 // optional, shows shimmer when true
      className=""                      // optional, extra wrapper class

      // Avatar (all optional — omit isAvatarVisible or set false to hide)
      isAvatarVisible={true}
      avatarName="John Doe"
      avatarEmail="john.doe@email.com"
      avatarImage="/avatar.png"
      avatarType={AVATAR_VARIANT.IMAGE_WITH_FULL} // IMAGE_WITH_FULL | IMAGE_ONLY | INITIALS_WITH_FULL | INITIALS_ONLY
      avatarSize={AVATAR_SIZE.SM}                 // XS | SM | MD | LG | XL  (default: SM)
      avatarLabelPosition={AVATAR_LABEL_POSITION.RIGHT} // LEFT | RIGHT       (default: RIGHT)
    />
  );
};`;

const MenuBarTemplate = () => {
  const [variant, setVariant] = useState<string>(MENU_BAR_VARIANT.DEFAULT);
  const [itemsAlign, setItemsAlign] = useState<string>(MENU_BAR_ITEMS_ALIGN.LEFT);
  const [avatarSize, setAvatarSize] = useState<string>(AVATAR_SIZE.MD);
  const [avatarLabelPosition, setAvatarLabelPosition] = useState<string>(
    AVATAR_LABEL_POSITION.LEFT,
  );

  const variantOptions = Object.values(MENU_BAR_VARIANT).map((v) => ({
    value: v,
    label: v,
  }));
  const itemsAlignOptions = Object.values(MENU_BAR_ITEMS_ALIGN).map((v) => ({
    value: v,
    label: v,
  }));
  const avatarSizeOptions = Object.values(AVATAR_SIZE).map((v) => ({
    value: v,
    label: v,
  }));
  const avatarLabelPositionOptions = Object.values(AVATAR_LABEL_POSITION).map(
    (v) => ({ value: v, label: v }),
  );

  const renderPlayground = () => (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg overflow-hidden border border-border">
        <MenuBar
          menuItems={menuItems}
          logoShort="/images/logo_short.png"
          logoLong="/images/logo.png"
          variant={variant as MENU_BAR_VARIANT}
          itemsAlign={itemsAlign as MENU_BAR_ITEMS_ALIGN}
          isAvatarVisible={true}
          avatarName="John Doe"
          avatarEmail="john.doe@email.com"
          avatarImage="/images/profile_picture.png"
          avatarType={AVATAR_VARIANT.IMAGE_WITH_FULL}
          avatarSize={avatarSize as AVATAR_SIZE}
          avatarLabelPosition={avatarLabelPosition as AVATAR_LABEL_POSITION}
        />
        <div className="p-4">
          <SampleBody />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
        <SelectDropdown
          label="Variant"
          value={variant}
          options={variantOptions}
          onChange={(val) => setVariant(val as string)}
          className="w-full sm:w-40"
        />
        <SelectDropdown
          label="Items align"
          value={itemsAlign}
          options={itemsAlignOptions}
          onChange={(val) => setItemsAlign(val as string)}
          className="w-full sm:w-40"
        />
        <SelectDropdown
          label="Avatar size"
          value={avatarSize}
          options={avatarSizeOptions}
          onChange={(val) => setAvatarSize(val as string)}
          className="w-full sm:w-32"
        />
        <SelectDropdown
          label="Avatar label"
          value={avatarLabelPosition}
          options={avatarLabelPositionOptions}
          onChange={(val) => setAvatarLabelPosition(val as string)}
          className="w-full sm:w-40"
        />
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

const SampleBody = () => (
  <div className="flex flex-col gap-4">
    <div className="h-32 rounded-xl border border-white/10 bg-teal-500/20" />
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-xl border border-white/10 bg-violet-500/20 h-24" />
      <div className="rounded-xl border border-white/10 bg-amber-500/20 h-24" />
      <div className="rounded-xl border border-white/10 bg-sky-500/20 h-24" />
    </div>
  </div>
);

export default MenuBarTemplate;
