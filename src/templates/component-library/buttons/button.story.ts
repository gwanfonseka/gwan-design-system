import Button, {
  BUTTON_EDGE_STYLE,
  BUTTON_SIZE,
  BUTTON_VARIANTS,
  type IButton,
} from "@/components/button";
import { action, boolean, defineStory, enumOf, icon, options, text } from "@/playground";

export default defineStory<IButton>({
  name: "Button",
  component: Button,
  args: { label: "Label" },
  argTypes: {
    label: {
      description: "Text inside the button. Leave empty for an icon-only button.",
      control: text("Label"),
      group: "Content",
    },
    leftIcon: {
      description: "Icon shown before the label.",
      control: icon(),
      group: "Content",
    },
    rightIcon: {
      description: "Icon shown after the label.",
      control: icon(),
      group: "Content",
    },
    variant: {
      description: "Visual emphasis. Use one primary button per view.",
      control: enumOf(BUTTON_VARIANTS, "BUTTON_VARIANTS"),
      defaultValue: BUTTON_VARIANTS.PRIMARY,
      group: "Appearance",
    },
    size: {
      description: "Height, padding and text size. MD matches form element height.",
      control: enumOf(BUTTON_SIZE, "BUTTON_SIZE"),
      defaultValue: BUTTON_SIZE.MD,
      group: "Appearance",
    },
    edges: {
      description: "Corner style.",
      control: enumOf(BUTTON_EDGE_STYLE, "BUTTON_EDGE_STYLE"),
      defaultValue: BUTTON_EDGE_STYLE.ROUNDED,
      group: "Appearance",
    },
    disabled: {
      description: "Blocks clicks and dims the button.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    type: {
      description: "Native button type. Use submit inside a form.",
      control: options(["button", "submit"]),
      defaultValue: "button",
      group: "Behaviour",
    },
    onClick: {
      description: "Called when the button is clicked.",
      control: action(),
      required: true,
      group: "Events",
    },
    className: {
      description: "Extra classes on the button element.",
      control: text("e.g. w-full"),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
