import State, { STATE_TYPE, type IState } from "@/components/state";
import { defineStory, enumOf, image, number, text } from "@/playground";

export default defineStory<IState>({
  name: "State",
  component: State,
  args: {
    type: STATE_TYPE.EMPTY,
    title: "Nothing here yet",
    subTitle: "Add some items to get started.",
    imageWidth: 240,
    imageHeight: 240,
  },
  argTypes: {
    title: {
      description: "Headline under the image.",
      control: text(),
      required: true,
      group: "Content",
    },
    subTitle: {
      description: "Supporting line under the title.",
      control: text(),
      required: true,
      group: "Content",
    },
    type: {
      description: "Built-in illustration (inline SVG in the theme colours). Leave it out and pass stateImage for your own.",
      control: enumOf(STATE_TYPE, "STATE_TYPE"),
      group: "Content",
    },
    stateImage: {
      description: "Your own image URL. Required when type is not set; replaces the built-in illustration otherwise.",
      control: image(),
      group: "Content",
    },
    imageWidth: {
      description: "Illustration width in pixels. Defaults to 526 for stateImage and 160 for the built-in illustration.",
      control: number({ min: 40, max: 600 }),
      group: "Appearance",
    },
    imageHeight: {
      description: "Illustration height in pixels. Defaults to 526 for stateImage and 160 for the built-in illustration.",
      control: number({ min: 40, max: 600 }),
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
