import { DATE_PICKER_FORMAT } from "@/components/datePicker";
import DateRangePicker, { type IDateRangePicker } from "@/components/dateRangePicker";
import { FORM_ELEMENT_SIZE } from "@/components/input";
import { action, boolean, date, defineStory, enumOf, text } from "@/playground";

type Range = { startDate: Date | null; endDate: Date | null };

export default defineStory<IDateRangePicker>({
  name: "DateRangePicker",
  component: DateRangePicker,
  args: { label: "Stay" },
  bindings: [
    {
      prop: "startDate",
      event: "onChange",
      alsoControls: ["endDate"],
      toArgs: (range: Range) => ({
        startDate: range.startDate?.toISOString() ?? null,
        endDate: range.endDate?.toISOString() ?? null,
      }),
      code: "({ startDate, endDate }) => {\n    setStartDate(startDate);\n    setEndDate(endDate);\n  }",
    },
  ],
  argTypes: {
    startDate: {
      description: "Start of the range, or null. Controlled together with endDate.",
      control: date(),
      type: "Date | null",
      group: "Content",
    },
    endDate: {
      description: "End of the range, or null.",
      control: date(),
      type: "Date | null",
      group: "Content",
    },
    label: {
      description: "Label above the fields.",
      control: text(),
      group: "Content",
    },
    startPlaceholder: {
      description: "Shown in the start field while it's empty.",
      control: text(),
      defaultValue: "Start date",
      group: "Content",
    },
    endPlaceholder: {
      description: "Shown in the end field while it's empty.",
      control: text(),
      defaultValue: "End date",
      group: "Content",
    },
    format: {
      description: "How the dates are displayed.",
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
      description: "Blocks opening and dims the fields.",
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
      description: "Message under the fields while isError is on.",
      control: text("Pick both dates"),
      group: "Behaviour",
      visible: (args) => args.isError === true,
    },
    onChange: {
      description: "Called with { startDate, endDate } whenever either end changes.",
      control: action(),
      type: "(range: { startDate: Date | null; endDate: Date | null }) => void",
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
