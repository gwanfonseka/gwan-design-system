import Skeleton, { SKELETON_VARIANT, type ISkeleton } from "@/components/skeleton";
import { defineStory, enumOf, options, range, text } from "@/playground";

export default defineStory<ISkeleton>({
  name: "Skeleton",
  component: Skeleton,
  args: { variant: SKELETON_VARIANT.TEXT, lines: 3, width: "16rem" },
  argTypes: {
    variant: {
      description: "Shape: text lines, a circle (e.g. an avatar) or a rectangle (e.g. an image).",
      control: enumOf(SKELETON_VARIANT, "SKELETON_VARIANT"),
      defaultValue: SKELETON_VARIANT.RECT,
      group: "Appearance",
    },
    lines: {
      description: "Number of lines for the text variant.",
      control: range(1, 6),
      defaultValue: 1,
      group: "Appearance",
      visible: (args) => args.variant === SKELETON_VARIANT.TEXT,
    },
    width: {
      description: "Width as a CSS length, or a number of pixels.",
      control: options(["4rem", "8rem", "16rem", "100%"]),
      type: "string | number",
      group: "Appearance",
    },
    height: {
      description: "Height as a CSS length, or a number of pixels.",
      control: options(["1rem", "4rem", "8rem"]),
      type: "string | number",
      group: "Appearance",
      visible: (args) => args.variant !== SKELETON_VARIANT.TEXT,
    },
    className: {
      description: "Extra classes on the skeleton.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
