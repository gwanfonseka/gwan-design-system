import Ellipsis, { type IEllipsis } from "@/components/ellipsis";
import { TOOLTIP_POSITION } from "@/components/tooltip";
import { defineStory, enumOf, options, text } from "@/playground";

export default defineStory<IEllipsis>({
  name: "Ellipsis",
  component: Ellipsis,
  args: { label: "A very long project name that won't fit in the column" },
  argTypes: {
    label: {
      description: "Text to truncate. The full text shows in a tooltip on hover.",
      control: text(),
      required: true,
      group: "Content",
    },
    labelMaxWidth: {
      description: "Width class the text is cut to.",
      control: options(["w-24", "w-32", "w-48", "w-64"]),
      defaultValue: "w-32",
      group: "Appearance",
    },
    tooltipPosition: {
      description: "Side the tooltip opens on.",
      control: enumOf(TOOLTIP_POSITION, "TOOLTIP_POSITION"),
      defaultValue: TOOLTIP_POSITION.RIGHT,
      group: "Appearance",
    },
    tooltipWidth: {
      description: "Width class of the tooltip.",
      control: options(["w-40", "w-60", "w-80"]),
      defaultValue: "w-40",
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
