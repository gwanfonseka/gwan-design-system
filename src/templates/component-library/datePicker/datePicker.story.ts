import DatePicker, { DATE_PICKER_FORMAT, type IDatePicker } from "@/components/datePicker";
import { FORM_ELEMENT_SIZE } from "@/components/input";
import { action, boolean, date, defineStory, enumOf, text } from "@/playground";

export default defineStory<IDatePicker>({
  name: "DatePicker",
  component: DatePicker,
  args: { label: "Delivery date" },
  bindings: [{ prop: "value", event: "onChange" }],
  argTypes: {
    value: {
      description: "Selected date, or null. Controlled: update it from onChange.",
      control: date(),
      type: "Date | null",
      group: "Content",
    },
    label: {
      description: "Label above the field.",
      control: text(),
      group: "Content",
    },
    placeholder: {
      description: "Shown while no date is chosen.",
      control: text(),
      defaultValue: "Select date",
      group: "Content",
    },
    format: {
      description: "How the chosen date is displayed. The *_TIME formats also show hours and minutes.",
      control: enumOf(DATE_PICKER_FORMAT, "DATE_PICKER_FORMAT"),
      defaultValue: DATE_PICKER_FORMAT.DD_MMM_YYYY,
      group: "Appearance",
    },
    size: {
      description: "Field height.",
      control: enumOf(FORM_ELEMENT_SIZE, "FORM_ELEMENT_SIZE"),
      defaultValue: FORM_ELEMENT_SIZE.MD,
      group: "Appearance",
    },
    timePicker: {
      description: "Adds hour and minute selection under the calendar.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    minDate: {
      description: "Earliest selectable date.",
      control: date(),
      group: "Behaviour",
    },
    maxDate: {
      description: "Latest selectable date.",
      control: date(),
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
      control: text("Pick a date"),
      group: "Behaviour",
      visible: (args) => args.isError === true,
    },
    onChange: {
      description: "Called with the chosen date, or null when cleared.",
      control: action(),
      type: "(date: Date | null) => void",
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
