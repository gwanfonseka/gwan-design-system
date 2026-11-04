import ColorPicker, { type IColorPicker } from "@/components/colorPicker";
import { FORM_ELEMENT_SIZE } from "@/components/input";
import { action, boolean, color, data, defineStory, enumOf, text } from "@/playground";

export default defineStory<IColorPicker>({
  name: "ColorPicker",
  component: ColorPicker,
  args: { value: "#3b82f6", label: "Brand colour" },
  bindings: [{ prop: "value", event: "onChange" }],
  argTypes: {
    value: {
      description: "Current colour as a hex string. Controlled: update it from onChange.",
      control: color(),
      defaultValue: "#3b82f6",
      group: "Content",
    },
    label: {
      description: "Label above the field.",
      control: text(),
      group: "Content",
    },
    presets: {
      description: "Swatches offered in the panel.",
      control: data({
        Default: undefined,
        Greens: ["#14532d", "#166534", "#15803d", "#22c55e", "#86efac", "#dcfce7"],
        Greys: ["#0f172a", "#334155", "#64748b", "#cbd5e1", "#f1f5f9", "#ffffff"],
        None: [],
      }),
      type: "string[]",
      defaultValue: "Default",
      group: "Content",
    },
    size: {
      description: "Field height.",
      control: enumOf(FORM_ELEMENT_SIZE, "FORM_ELEMENT_SIZE"),
      defaultValue: FORM_ELEMENT_SIZE.MD,
      group: "Appearance",
    },
    disabled: {
      description: "Blocks changes and dims the field.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    onChange: {
      description: "Called with the new hex colour.",
      control: action(),
      type: "(color: string) => void",
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
