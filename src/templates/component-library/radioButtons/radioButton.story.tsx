import RadioButton, { type IRadioButton } from "@/components/radioButton";
import { action, boolean, defineStory, text } from "@/playground";

const SIBLINGS = [
  { label: "Standard delivery", value: "standard" },
  { label: "Pickup", value: "pickup" },
];

export default defineStory<IRadioButton>({
  name: "RadioButton",
  component: RadioButton,
  args: { label: "Express delivery", value: "express", selectedValue: "express", name: "delivery" },
  bindings: [{ prop: "selectedValue", event: "onChange" }],
  argTypes: {
    label: {
      description: "Text next to the radio. Clicking it selects the radio.",
      control: text(),
      required: true,
      group: "Content",
    },
    value: {
      description: "This radio's value. It's checked when it equals selectedValue.",
      control: text(),
      required: true,
      group: "Content",
    },
    selectedValue: {
      description: "The group's current value. Pass the same one to every radio in the group.",
      control: text(),
      group: "Content",
    },
    name: {
      description: "Native group name. Radios with the same name move focus together with the arrow keys.",
      control: text(),
      group: "Behaviour",
    },
    disabled: {
      description: "Blocks selection and dims the radio.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    onChange: {
      description: "Called with this radio's value when it's chosen.",
      control: action(),
      type: "(value: string) => void",
      group: "Events",
    },
    className: {
      description: "Extra classes on the label wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
  // A lone radio can't be un-chosen, so the preview puts it in a small group.
  render: (props) => (
    <div role="radiogroup" aria-label="Delivery" className="flex flex-col gap-3">
      <RadioButton {...props} />
      {SIBLINGS.map((s) => (
        <RadioButton
          key={s.value}
          {...s}
          name={props.name}
          selectedValue={props.selectedValue}
          onChange={props.onChange}
        />
      ))}
    </div>
  ),
});
