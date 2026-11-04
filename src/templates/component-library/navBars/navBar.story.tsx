import { AVATAR_VARIANT } from "@/components/avatar";
import NavBar, { type INavBar } from "@/components/navBar";
import {
  action,
  boolean,
  data,
  defineStory,
  enumOf,
  image,
  MENU_ITEMS,
  number,
  options,
  SAMPLE_IMAGES,
  SAMPLE_PERSON,
  text,
} from "@/playground";
import type { Args } from "@/playground";

const avatarOn = (args: Args) => args.isAvatarVisible !== false;

export default defineStory<INavBar>({
  name: "NavBar",
  component: NavBar,
  args: {
    menuItems: "Full menu",
    logoShort: SAMPLE_IMAGES.logoShort,
    logoLong: SAMPLE_IMAGES.logo,
    avatarName: SAMPLE_PERSON.name,
    avatarEmail: SAMPLE_PERSON.email,
    avatarImage: SAMPLE_IMAGES.avatar,
    menuHeightClass: "h-[36rem]",
  },
  remountOn: ["isCollapsed"],
  argTypes: {
    menuItems: {
      description: "Items in the side menu. Items with `hasChildren` expand; `isDivider` items draw a separator.",
      control: data(MENU_ITEMS),
      type: "IMenuItem[]",
      required: true,
      group: "Content",
    },
    logoLong: {
      description: "Full logo shown while the menu is expanded.",
      control: image(),
      required: true,
      group: "Content",
    },
    logoShort: {
      description: "Compact logo shown while the menu is collapsed.",
      control: image(),
      required: true,
      group: "Content",
    },
    isAvatarVisible: {
      description: "Shows the signed-in user at the bottom. Turns on the avatar props below.",
      control: boolean(),
      defaultValue: true,
      group: "Content",
    },
    avatarName: {
      description: "User's name.",
      control: text(),
      defaultValue: "",
      group: "Content",
      visible: avatarOn,
    },
    avatarEmail: {
      description: "User's email.",
      control: text(),
      defaultValue: "",
      group: "Content",
      visible: avatarOn,
    },
    avatarImage: {
      description: "Profile picture URL.",
      control: image(),
      defaultValue: "",
      group: "Content",
      visible: avatarOn,
    },
    avatarType: {
      description: "Image or initials, with or without the name and email.",
      control: enumOf(AVATAR_VARIANT, "AVATAR_VARIANT"),
      defaultValue: AVATAR_VARIANT.IMAGE_WITH_FULL,
      group: "Content",
      visible: avatarOn,
    },
    isCollapsed: {
      description: "Starts collapsed to icons. Read once on mount; the user can still toggle it.",
      control: boolean(),
      defaultValue: false,
      group: "Appearance",
    },
    menuWidthClass: {
      description: "Width class while expanded.",
      control: options(["w-[16rem]", "w-[20rem]", "w-[24rem]"]),
      defaultValue: "w-[20rem]",
      group: "Appearance",
    },
    menuHeightClass: {
      description: "Height class. The default fills the viewport.",
      control: options(["h-[100vh]", "h-[36rem]", "h-full"]),
      defaultValue: "h-[100vh]",
      group: "Appearance",
    },
    menuBackgroundColor: {
      description: "Background class of the menu.",
      control: options(["bg-surface-raised", "bg-surface", "bg-background", "bg-primary-100"]),
      defaultValue: "bg-surface-raised",
      group: "Appearance",
    },
    logoShortWidth: {
      description: "Width of the compact logo in pixels.",
      control: number({ min: 16, max: 120 }),
      defaultValue: 60,
      group: "Appearance",
    },
    logoShortHeight: {
      description: "Height of the compact logo in pixels.",
      control: number({ min: 16, max: 120 }),
      defaultValue: 60,
      group: "Appearance",
    },
    logoLongWidth: {
      description: "Width of the full logo, in pixels or as a CSS length.",
      control: options(["40%", "60%", "80%"]),
      type: "number | string",
      defaultValue: "60%",
      group: "Appearance",
    },
    isLoading: {
      description: "Replaces the items with a loading shimmer.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    tooltipPortalTarget: {
      description: "Element the collapsed-state tooltips render into. Defaults to document.body.",
      control: data({ "document.body": undefined }),
      type: "HTMLElement | null",
      defaultValue: "document.body",
      group: "Behaviour",
    },
    onNavigate: {
      description: "Called with an item's route when it's chosen.",
      control: action(),
      type: "(route: string) => void",
      group: "Events",
    },
    className: {
      description: "Extra classes on the menu.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
    menuItemTextClass: {
      description: "Extra classes on each item's text.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
