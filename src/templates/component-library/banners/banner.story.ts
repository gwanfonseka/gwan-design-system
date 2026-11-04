import Banner, { type IBanner } from "@/components/banner";
import { defineStory, image, options, text } from "@/playground";

export default defineStory<IBanner>({
  name: "Banner",
  component: Banner,
  layout: "fullwidth",
  args: {
    title: "Ship faster with Gwan",
    subTitle: "Pre-styled, typed components for Next.js.",
    backgroundImage: "/images/hero.png",
  },
  argTypes: {
    title: {
      description: "Headline.",
      control: text(),
      defaultValue: "",
      group: "Content",
    },
    subTitle: {
      description: "Supporting line under the headline.",
      control: text(),
      defaultValue: "",
      group: "Content",
    },
    contentPlacement: {
      description: "Which half of the banner holds the text.",
      control: options(["left", "right"]),
      defaultValue: "left",
      group: "Appearance",
    },
    backgroundImage: {
      description: "Image URL, drawn to cover the banner.",
      control: image(),
      defaultValue: "",
      group: "Appearance",
    },
    backgroundColor: {
      description: "Background class, used behind or instead of the image.",
      control: options(["", "bg-primary-100", "bg-surface-raised", "bg-accent"], "select"),
      defaultValue: "",
      group: "Appearance",
    },
    titleClassName: {
      description: "Extra classes on the headline.",
      control: text("e.g. text-white"),
      defaultValue: "",
      group: "Advanced",
    },
    subTitleClassName: {
      description: "Extra classes on the supporting line.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
    className: {
      description: "Extra classes on the banner.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
