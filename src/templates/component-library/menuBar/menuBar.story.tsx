import { AVATAR_LABEL_POSITION, AVATAR_SIZE, AVATAR_VARIANT } from "@/components/avatar";
import Button, { BUTTON_SIZE } from "@/components/button";
import { BellSVG } from "@/components/icons";
import MenuBar, { MENU_BAR_ITEMS_ALIGN, MENU_BAR_VARIANT, type IMenuBar } from "@/components/menuBar";
import {
  action,
  boolean,
  data,
  defineStory,
  enumOf,
  image,
  MENU_ITEMS,
  number,
  SAMPLE_IMAGES,
  SAMPLE_PERSON,
  text,
} from "@/playground";
import type { Args } from "@/playground";

const avatarOn = (args: Args) => args.isAvatarVisible === true;

export default defineStory<IMenuBar>({
  name: "MenuBar",
  component: MenuBar,
  layout: "fullwidth",
  args: {
    menuItems: "Full menu",
    logoShort: SAMPLE_IMAGES.logoShort,
    logoLong: SAMPLE_IMAGES.logo,
    isAvatarVisible: true,
    avatarName: SAMPLE_PERSON.name,
    avatarEmail: SAMPLE_PERSON.email,
    avatarImage: SAMPLE_IMAGES.avatar,
  },
  argTypes: {
    menuItems: {
      description:
        "Top-level items. Items with `hasChildren` open a dropdown; `isDivider` items draw a separator. Items that don't fit move into a More menu.",
      control: data(MENU_ITEMS),
      type: "IMenuItem[]",
      required: true,
      group: "Content",
    },
    logoLong: {
      description: "Full logo shown on wide screens.",
      control: image(),
      required: true,
      group: "Content",
    },
    logoShort: {
      description: "Compact logo shown on narrow screens.",
      control: image(),
      required: true,
      group: "Content",
    },
    rightSlot: {
      description: "Anything to render at the far right, before the avatar.",
      control: data({
        None: undefined,
        Button: <Button label="Upgrade" size={BUTTON_SIZE.SM} onClick={() => {}} />,
        Icon: (
          <span className="size-5 block text-muted-fg">
            <BellSVG />
          </span>
        ),
      }),
      type: "ReactNode",
      defaultValue: "None",
      group: "Content",
    },
    variant: {
      description: "Surface treatment of the bar.",
      control: enumOf(MENU_BAR_VARIANT, "MENU_BAR_VARIANT"),
      defaultValue: MENU_BAR_VARIANT.DEFAULT,
      group: "Appearance",
    },
    itemsAlign: {
      description: "Where the items sit between the logo and the right side.",
      control: enumOf(MENU_BAR_ITEMS_ALIGN, "MENU_BAR_ITEMS_ALIGN"),
      defaultValue: MENU_BAR_ITEMS_ALIGN.LEFT,
      group: "Appearance",
    },
    logoShortWidth: {
      description: "Width of the compact logo in pixels.",
      control: number({ min: 16, max: 96 }),
      defaultValue: 36,
      group: "Appearance",
    },
    logoShortHeight: {
      description: "Height of the compact logo in pixels.",
      control: number({ min: 16, max: 96 }),
      defaultValue: 36,
      group: "Appearance",
    },
    isAvatarVisible: {
      description: "Shows the signed-in user on the right. Turns on the avatar props below.",
      control: boolean(),
      defaultValue: false,
      group: "Appearance",
    },
    avatarName: {
      description: "User's name.",
      control: text(),
      defaultValue: "",
      group: "Appearance",
      visible: avatarOn,
    },
    avatarEmail: {
      description: "User's email, shown under the name.",
      control: text(),
      defaultValue: "",
      group: "Appearance",
      visible: avatarOn,
    },
    avatarImage: {
      description: "Profile picture URL.",
      control: image(),
      defaultValue: "",
      group: "Appearance",
      visible: avatarOn,
    },
    avatarType: {
      description: "Image or initials, with or without the name and email.",
      control: enumOf(AVATAR_VARIANT, "AVATAR_VARIANT"),
      defaultValue: AVATAR_VARIANT.IMAGE_WITH_FULL,
      group: "Appearance",
      visible: avatarOn,
    },
    avatarSize: {
      description: "Avatar size.",
      control: enumOf(AVATAR_SIZE, "AVATAR_SIZE"),
      defaultValue: AVATAR_SIZE.SM,
      group: "Appearance",
      visible: avatarOn,
    },
    avatarLabelPosition: {
      description: "Side of the avatar the name and email sit on.",
      control: enumOf(AVATAR_LABEL_POSITION, "AVATAR_LABEL_POSITION"),
      defaultValue: AVATAR_LABEL_POSITION.RIGHT,
      group: "Appearance",
      visible: avatarOn,
    },
    sticky: {
      description: "Keeps the bar fixed to the top while the page scrolls.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    isLoading: {
      description: "Replaces the items with a loading shimmer.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    onNavigate: {
      description: "Called with an item's route when it's chosen.",
      control: action(),
      type: "(route: string) => void",
      group: "Events",
    },
    className: {
      description: "Extra classes on the bar.",
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

