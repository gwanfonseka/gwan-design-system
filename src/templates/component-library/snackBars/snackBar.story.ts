import Snackbar, { SNACK_BAR_TYPE, type ISnackBar } from "@/components/snackBar";
import { defineStory, enumOf, icon, text } from "@/playground";

export default defineStory<ISnackBar>({
  name: "Snackbar",
  component: Snackbar,
  args: { message: "Changes saved", type: SNACK_BAR_TYPE.SUCCESS, icon: "CheckSVG" },
  argTypes: {
    message: {
      description: "Text of the notification.",
      control: text(),
      required: true,
      group: "Content",
    },
    icon: {
      description: "Icon before the message.",
      control: icon(),
      group: "Content",
    },
    type: {
      description: "Semantic colour.",
      control: enumOf(SNACK_BAR_TYPE, "SNACK_BAR_TYPE"),
      defaultValue: SNACK_BAR_TYPE.DEFAULT,
      group: "Appearance",
    },
    className: {
      description: "Extra classes on the snackbar.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
