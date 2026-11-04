import Badge, { BADGE_SIZE, BADGE_TYPE, BADGE_VARIANT, type IBadge } from "@/components/badge";
import { boolean, defineStory, enumOf, text } from "@/playground";

export default defineStory<IBadge>({
  name: "Badge",
  component: Badge,
  args: { label: "Badge" },
  argTypes: {
    label: {
      description: "Text or count inside the badge. Leave empty with dot on for a dot-only badge.",
      control: text("Badge"),
      type: "string | number",
      group: "Content",
    },
    dot: {
      description: "Adds a status dot before the label, or shows only the dot when there is no label.",
      control: boolean(),
      defaultValue: false,
      group: "Content",
    },
    type: {
      description: "Semantic colour.",
      control: enumOf(BADGE_TYPE, "BADGE_TYPE"),
      defaultValue: BADGE_TYPE.DEFAULT,
      group: "Appearance",
    },
    variant: {
      description: "Filled background or outline only.",
      control: enumOf(BADGE_VARIANT, "BADGE_VARIANT"),
      defaultValue: BADGE_VARIANT.SOLID,
      group: "Appearance",
    },
    size: {
      description: "Padding and text size.",
      control: enumOf(BADGE_SIZE, "BADGE_SIZE"),
      defaultValue: BADGE_SIZE.MEDIUM,
      group: "Appearance",
    },
    className: {
      description: "Extra classes on the badge element.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
