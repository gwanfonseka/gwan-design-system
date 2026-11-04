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
import type { IMenuItem } from "@/components/navBar";

/** Images under /public that stories can offer as choices. */
export const SAMPLE_IMAGES = {
  logo: "/images/logo.png",
  logoShort: "/images/logo_short.png",
  avatar: "/images/profile_picture.png",
  founder: "/images/founder.png",
  hero: "/images/hero.png",
  empty: "/images/empty_state.png",
  success: "/images/success.png",
};

export const SAMPLE_PERSON = { name: "John Doe", email: "john.doe@email.com" };

const item = (title: string, icon: IMenuItem["icon"], extra: Partial<IMenuItem> = {}): IMenuItem => ({
  title,
  icon,
  route: `/${title.toLowerCase().replace(/\s+/g, "-")}`,
  isActive: false,
  isDivider: false,
  ...extra,
});

const divider: IMenuItem = { title: "", route: "", isActive: false, isDivider: true };

/** Menu shapes shared by NavBar and MenuBar stories. */
export const MENU_ITEMS: Record<string, IMenuItem[]> = {
  "Full menu": [
    item("Dashboard", <DashboardSVG />, { isActive: true }),
    item("Orders", <OrdersSVG />),
    item("Products", <ProductsSVG />, {
      hasChildren: true,
      children: [
        { title: "Books", route: "/products/books", isActive: false },
        { title: "Stickers", route: "/products/stickers", isActive: false },
      ],
    }),
    item("Templates", <TemplatesSVG />),
    item("Covers", <CoversSVG />),
    item("Colors", <ColorsSVG />),
    divider,
    item("Settings", <SettingsSVG />),
    item("Sign out", <SignOutSVG />),
  ],
  "Three items": [
    item("Dashboard", <DashboardSVG />, { isActive: true }),
    item("Orders", <OrdersSVG />),
    item("Settings", <SettingsSVG />),
  ],
  "No icons": [
    item("Home", undefined, { isActive: true }),
    item("Pricing", undefined),
    item("Docs", undefined),
    item("Blog", undefined),
  ],
  Empty: [],
};
