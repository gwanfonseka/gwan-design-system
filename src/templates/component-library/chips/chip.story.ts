import Chip, { CHIP_EDGE_STYLE, CHIP_VARIANT, type IChip } from "@/components/chip";
import { action, defineStory, enumOf, text } from "@/playground";

export default defineStory<IChip>({
  name: "Chip",
  component: Chip,
  args: { label: "Design" },
  argTypes: {
    label: {
      description: "Text in the chip.",
      control: text(),
      required: true,
      group: "Content",
    },
    variant: {
      description: "Filled background or outline only.",
      control: enumOf(CHIP_VARIANT, "CHIP_VARIANT"),
      defaultValue: CHIP_VARIANT.SOLID,
      group: "Appearance",
    },
    edges: {
      description: "Corner style.",
      control: enumOf(CHIP_EDGE_STYLE, "CHIP_EDGE_STYLE"),
      defaultValue: CHIP_EDGE_STYLE.ROUNDED,
      group: "Appearance",
    },
    onClear: {
      description: "Called from the chip's × button. Remove the chip from your list here.",
      control: action(),
      required: true,
      group: "Events",
    },
    className: {
      description: "Extra classes on the chip.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
