import Avatar, { AVATAR_LABEL_POSITION, AVATAR_SIZE, AVATAR_VARIANT, type IAvatar } from "@/components/avatar";
import { TOOLTIP_POSITION } from "@/components/tooltip";
import { boolean, defineStory, enumOf, image, SAMPLE_IMAGES, SAMPLE_PERSON, text } from "@/playground";

export default defineStory<IAvatar>({
  name: "Avatar",
  component: Avatar,
  args: {
    name: SAMPLE_PERSON.name,
    email: SAMPLE_PERSON.email,
    image: SAMPLE_IMAGES.avatar,
    variant: AVATAR_VARIANT.IMAGE_WITH_FULL,
  },
  argTypes: {
    name: {
      description: "Person's name. Also used for the initials.",
      control: text(),
      required: true,
      group: "Content",
    },
    email: {
      description: "Shown under the name in the *_WITH_FULL variants, and in the tooltip.",
      control: text(),
      group: "Content",
    },
    image: {
      description: "Profile picture URL, for the IMAGE_* variants.",
      control: image(),
      group: "Content",
    },
    variant: {
      description: "Picture or initials, with or without the name and email beside it.",
      control: enumOf(AVATAR_VARIANT, "AVATAR_VARIANT"),
      type: "AVATAR_VARIANT",
      required: true,
      group: "Appearance",
    },
    size: {
      description: "Avatar diameter and text size.",
      control: enumOf(AVATAR_SIZE, "AVATAR_SIZE"),
      defaultValue: AVATAR_SIZE.LG,
      group: "Appearance",
    },
    showTooltip: {
      description: "Shows the name and email on hover, for the *_ONLY variants.",
      control: boolean(),
      defaultValue: true,
      group: "Behaviour",
    },
    tooltipPosition: {
      description: "Side the tooltip opens on. Defaults to the labelPosition side. Near a screen edge, pick the side with room.",
      control: enumOf(TOOLTIP_POSITION, "TOOLTIP_POSITION"),
      group: "Behaviour",
    },
    labelPosition: {
      description: "Side the name and email sit on.",
      control: enumOf(AVATAR_LABEL_POSITION, "AVATAR_LABEL_POSITION"),
      defaultValue: AVATAR_LABEL_POSITION.RIGHT,
      group: "Appearance",
    },
    isLoading: {
      description: "Shows a loading placeholder instead.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    className: {
      description: "Extra classes on the wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
