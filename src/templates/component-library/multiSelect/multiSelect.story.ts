import MultiSelect, { MULTI_SELECT_SIZE, type IMultiSelect } from "@/components/multiSelect";
import { action, data, defineStory, enumOf, list, text } from "@/playground";
import { fieldState } from "../_shared/formField";

const SKILLS = ["React", "TypeScript", "Tailwind", "Node.js", "GraphQL", "Testing"].map((s) => ({
  value: s.toLowerCase().replace(/\W/g, ""),
  label: s,
}));

export default defineStory<IMultiSelect>({
  name: "MultiSelect",
  component: MultiSelect,
  args: { options: "Skills", value: "react,typescript", label: "Skills" },
  bindings: [{ prop: "value", event: "onChange" }],
  argTypes: {
    options: {
      description: "Choices to show.",
      control: data({ Skills: SKILLS, "Two options": SKILLS.slice(0, 2), Empty: [] }),
      type: "IMultiSelectOption[]",
      required: true,
      group: "Content",
    },
    value: {
      description: "Selected values. Controlled: update it from onChange.",
      control: list(),
      required: true,
      group: "Content",
    },
    label: {
      description: "Label above the field.",
      control: text(),
      group: "Content",
    },
    placeholder: {
      description: "Shown while nothing is selected.",
      control: text(),
      defaultValue: "Select options…",
      group: "Content",
    },
    size: {
      description: "Field height.",
      control: enumOf(MULTI_SELECT_SIZE, "MULTI_SELECT_SIZE"),
      defaultValue: MULTI_SELECT_SIZE.MD,
      group: "Appearance",
    },
    ...fieldState,
    onChange: {
      description: "Called with the full list of selected values.",
      control: action(),
      type: "(values: string[]) => void",
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
