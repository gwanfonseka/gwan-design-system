import { FORM_ELEMENT_SIZE } from "@/components/input";
import TimePicker, { TIME_FORMAT, type ITimePicker } from "@/components/timePicker";
import { action, boolean, defineStory, enumOf, text, time } from "@/playground";

export default defineStory<ITimePicker>({
  name: "TimePicker",
  component: TimePicker,
  args: { label: "Start time" },
  bindings: [{ prop: "value", event: "onChange" }],
  argTypes: {
    value: {
      description: "Selected time as \"HH:mm\" (or \"HH:mm:ss\" with seconds), 24-hour. Controlled.",
      control: time(),
      type: "string | null",
      group: "Content",
    },
    label: {
      description: "Label above the field.",
      control: text(),
      group: "Content",
    },
    placeholder: {
      description: "Shown while no time is chosen.",
      control: text(),
      defaultValue: "Select time",
      group: "Content",
    },
    format: {
      description: "12-hour with AM/PM, or 24-hour display.",
      control: enumOf(TIME_FORMAT, "TIME_FORMAT"),
      defaultValue: TIME_FORMAT.H12,
      group: "Appearance",
    },
    size: {
      description: "Field height.",
      control: enumOf(FORM_ELEMENT_SIZE, "FORM_ELEMENT_SIZE"),
      defaultValue: FORM_ELEMENT_SIZE.MD,
      group: "Appearance",
    },
    withSeconds: {
      description: "Adds a seconds column.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    disabled: {
      description: "Blocks opening and dims the field.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    isError: {
      description: "Shows the error style. Turns on errorMessage.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    errorMessage: {
      description: "Message under the field while isError is on.",
      control: text("Pick a time"),
      group: "Behaviour",
      visible: (args) => args.isError === true,
    },
    onChange: {
      description: "Called with the chosen time string.",
      control: action(),
      type: "(time: string) => void",
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
