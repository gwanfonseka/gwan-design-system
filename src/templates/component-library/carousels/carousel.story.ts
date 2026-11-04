import Carousel, { type ICarousel } from "@/components/carousel";
import { data, defineStory, options, SAMPLE_IMAGES, text } from "@/playground";

const SLIDES = [
  { title: "Ship faster", subTitle: "Pre-styled components for Next.js.", backgroundImage: SAMPLE_IMAGES.hero },
  { title: "Dark mode built in", subTitle: "Every token has a dark value.", backgroundColor: "bg-primary-100", contentPlacement: "right" as const },
  { title: "Typed end to end", subTitle: "Props, enums and callbacks.", backgroundColor: "bg-surface-raised" },
];

export default defineStory<ICarousel>({
  name: "Carousel",
  component: Carousel,
  layout: "fullwidth",
  args: { slides: "Three slides" },
  argTypes: {
    slides: {
      description: "Slides, each with the same props as Banner.",
      control: data({ "Three slides": SLIDES, "One slide": SLIDES.slice(0, 1) }),
      type: "IBanner[]",
      required: true,
      group: "Content",
    },
    interval: {
      description: "Milliseconds each slide stays before advancing.",
      control: options([2000, 3000, 5000, 8000]),
      type: "number",
      defaultValue: 3000,
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
