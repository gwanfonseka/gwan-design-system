import Spinner, { SPINNER_COLOR, SPINNER_SIZE, type ISpinner } from "@/components/spinner";
import { defineStory, enumOf, text } from "@/playground";

export default defineStory<ISpinner>({
  name: "Spinner",
  component: Spinner,
  args: {},
  argTypes: {
    size: {
      description: "Diameter.",
      control: enumOf(SPINNER_SIZE, "SPINNER_SIZE"),
      defaultValue: SPINNER_SIZE.MD,
      group: "Appearance",
    },
    color: {
      description: "Semantic colour.",
      control: enumOf(SPINNER_COLOR, "SPINNER_COLOR"),
      defaultValue: SPINNER_COLOR.DEFAULT,
      group: "Appearance",
    },
    className: {
      description: "Extra classes on the spinner.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
