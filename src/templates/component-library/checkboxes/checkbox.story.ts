import Checkbox, { CHECKBOX_EDGE_STYLE, CHECKBOX_SIZE, type ICheckbox } from "@/components/checkbox";
import { action, boolean, defineStory, enumOf, text } from "@/playground";

export default defineStory<ICheckbox>({
  name: "Checkbox",
  component: Checkbox,
  args: { label: "Remember me", checked: false },
  bindings: [{ prop: "checked", event: "onChange" }],
  argTypes: {
    label: {
      description: "Text next to the box. Clicking it toggles the box too.",
      control: text(),
      required: true,
      group: "Content",
    },
    checked: {
      description: "Whether the box is ticked. Controlled: update it from onChange.",
      control: boolean(),
      required: true,
      group: "Content",
    },
    size: {
      description: "Box and label size.",
      control: enumOf(CHECKBOX_SIZE, "CHECKBOX_SIZE"),
      defaultValue: CHECKBOX_SIZE.MEDIUM,
      group: "Appearance",
    },
    edges: {
      description: "Corner style of the box.",
      control: enumOf(CHECKBOX_EDGE_STYLE, "CHECKBOX_EDGE_STYLE"),
      defaultValue: CHECKBOX_EDGE_STYLE.ROUNDED,
      group: "Appearance",
    },
    disabled: {
      description: "Blocks toggling and dims the checkbox.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    onChange: {
      description: "Called with the new checked state.",
      control: action(),
      type: "(checked: boolean) => void",
      required: true,
      group: "Events",
    },
    className: {
      description: "Extra classes on the wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
