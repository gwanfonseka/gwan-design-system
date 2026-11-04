import Switch, { SWITCH_SIZE, type ISwitch } from "@/components/switch";
import { action, boolean, defineStory, enumOf, text } from "@/playground";

export default defineStory<ISwitch>({
  name: "Switch",
  component: Switch,
  args: { checked: true, label: "Email notifications", description: "Get a summary every morning." },
  bindings: [{ prop: "checked", event: "onChange" }],
  argTypes: {
    checked: {
      description: "Whether the switch is on. Controlled: update it from onChange.",
      control: boolean(),
      required: true,
      group: "Content",
    },
    label: {
      description: "Text next to the switch. Also names it for screen readers.",
      control: text(),
      group: "Content",
    },
    description: {
      description: "Secondary text under the label, linked as the switch's description.",
      control: text(),
      group: "Content",
    },
    size: {
      description: "Track and thumb size.",
      control: enumOf(SWITCH_SIZE, "SWITCH_SIZE"),
      defaultValue: SWITCH_SIZE.MEDIUM,
      group: "Appearance",
    },
    disabled: {
      description: "Blocks toggling and dims the switch.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    onChange: {
      description: "Called with the new state.",
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
