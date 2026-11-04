import CircularProgress, {
  CIRCULAR_PROGRESS_SIZE,
  CIRCULAR_PROGRESS_TYPE,
  type ICircularProgress,
} from "@/components/circularProgress";
import { boolean, defineStory, enumOf, range, text } from "@/playground";

export default defineStory<ICircularProgress>({
  name: "CircularProgress",
  component: CircularProgress,
  args: { value: 72 },
  argTypes: {
    value: {
      description: "Percentage complete, 0 to 100.",
      control: range(0, 100),
      required: true,
      group: "Content",
    },
    showLabel: {
      description: "Shows the percentage in the middle.",
      control: boolean(),
      defaultValue: true,
      group: "Content",
    },
    type: {
      description: "Semantic colour.",
      control: enumOf(CIRCULAR_PROGRESS_TYPE, "CIRCULAR_PROGRESS_TYPE"),
      defaultValue: CIRCULAR_PROGRESS_TYPE.DEFAULT,
      group: "Appearance",
    },
    size: {
      description: "Diameter and stroke width.",
      control: enumOf(CIRCULAR_PROGRESS_SIZE, "CIRCULAR_PROGRESS_SIZE"),
      defaultValue: CIRCULAR_PROGRESS_SIZE.MD,
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
