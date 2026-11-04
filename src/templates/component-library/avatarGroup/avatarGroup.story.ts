import { AVATAR_SIZE } from "@/components/avatar";
import AvatarGroup, { type IAvatarGroup } from "@/components/avatarGroup";
import { TOOLTIP_POSITION } from "@/components/tooltip";
import { data, defineStory, enumOf, range, SAMPLE_IMAGES, text } from "@/playground";

const TEAM = [
  { name: "John Doe", email: "john@gwan.dev", image: SAMPLE_IMAGES.avatar },
  { name: "Jane Smith", email: "jane@gwan.dev" },
  { name: "Kasun Perera", email: "kasun@gwan.dev", image: SAMPLE_IMAGES.founder },
  { name: "Amara Silva", email: "amara@gwan.dev" },
  { name: "Liam Chen", email: "liam@gwan.dev" },
  { name: "Noah Wright", email: "noah@gwan.dev" },
  { name: "Mia Garcia", email: "mia@gwan.dev" },
];

export default defineStory<IAvatarGroup>({
  name: "AvatarGroup",
  component: AvatarGroup,
  args: { items: "Seven people" },
  argTypes: {
    items: {
      description: "People as { name, email, image? }. Without an image, initials are shown.",
      control: data({ "Seven people": TEAM, "Three people": TEAM.slice(0, 3) }),
      type: "IAvatarGroupItem[]",
      required: true,
      group: "Content",
    },
    max: {
      description: "Avatars shown before the rest collapse into a +N bubble.",
      control: range(1, 8),
      defaultValue: 4,
      group: "Appearance",
    },
    size: {
      description: "Avatar size.",
      control: enumOf(AVATAR_SIZE, "AVATAR_SIZE"),
      defaultValue: AVATAR_SIZE.SM,
      group: "Appearance",
    },
    overflowTooltipPosition: {
      description: "Side the +N bubble's list of hidden names opens on.",
      control: enumOf(TOOLTIP_POSITION, "TOOLTIP_POSITION"),
      defaultValue: TOOLTIP_POSITION.TOP,
      group: "Appearance",
    },
    className: {
      description: "Extra classes on the wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
