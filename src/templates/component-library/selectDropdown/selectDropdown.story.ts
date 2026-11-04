import { FORM_ELEMENT_EDGE_STYLE, FORM_ELEMENT_SIZE } from "@/components/input";
import SelectDropdown, { type ISelectDropdown } from "@/components/selectDropdown";
import { action, boolean, data, defineStory, enumOf, number, text } from "@/playground";
import type { Args } from "@/playground";

const COUNTRIES = [
  "Australia", "Brazil", "Canada", "Denmark", "Egypt", "France", "Germany", "India",
  "Japan", "Kenya", "Mexico", "Netherlands", "Norway", "Sri Lanka", "Sweden", "United Kingdom",
];

const OPTIONS = {
  Fruits: [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ],
  Countries: COUNTRIES.map((c) => ({ value: c.toLowerCase().replace(/\s+/g, "-"), label: c })),
  "Labels only": [{ label: "Small" }, { label: "Medium" }, { label: "Large" }],
  Empty: [],
};

const hasError = (args: Args) => args.isError === true;

export default defineStory<ISelectDropdown>({
  name: "SelectDropdown",
  component: SelectDropdown,
  args: { options: "Fruits", value: "", label: "Fruit", placeholder: "Pick a fruit" },
  bindings: [{ prop: "value", event: "onChange" }],
  argTypes: {
    options: {
      description: "Choices to show. An option without `value` uses its label as the value.",
      control: data(OPTIONS),
      type: "ISelectDropdownOption[]",
      required: true,
      group: "Content",
    },
    value: {
      description: "Selected option's value. Controlled: update it from onChange.",
      control: text(),
      required: true,
      group: "Content",
    },
    label: {
      description: "Label above the field. Also names the field for screen readers.",
      control: text(),
      group: "Content",
    },
    placeholder: {
      description: "Shown while nothing is selected.",
      control: text(),
      defaultValue: "",
      group: "Content",
    },
    emptyMessage: {
      description: "Shown in the list when no option matches.",
      control: text(),
      defaultValue: "No options found",
      group: "Content",
    },
    size: {
      description: "Field height. SM for dense layouts.",
      control: enumOf(FORM_ELEMENT_SIZE, "FORM_ELEMENT_SIZE"),
      defaultValue: FORM_ELEMENT_SIZE.MD,
      group: "Appearance",
    },
    edges: {
      description: "Corner style.",
      control: enumOf(FORM_ELEMENT_EDGE_STYLE, "FORM_ELEMENT_EDGE_STYLE"),
      defaultValue: FORM_ELEMENT_EDGE_STYLE.ROUNDED,
      group: "Appearance",
    },
    searchable: {
      description: "Adds a search box that filters the options.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    debounce: {
      description: "Milliseconds to wait before calling onSearch.",
      control: number({ min: 0, max: 2000, step: 50 }),
      defaultValue: 300,
      group: "Behaviour",
      visible: (args) => args.searchable === true && args.onSearch === true,
    },
    isLoading: {
      description: "Shows a spinner in the list, e.g. while onSearch fetches.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    disabled: {
      description: "Blocks interaction and dims the field.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    required: {
      description: "Marks the field as required.",
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
      control: text("Please choose an option"),
      group: "Behaviour",
      visible: hasError,
    },
    onChange: {
      description: "Called with the chosen option's value.",
      control: action(),
      type: "(value: string) => void",
      required: true,
      group: "Events",
    },
    onSearch: {
      description:
        "Searches on the server instead of filtering locally. Passing it turns off the built-in filter; called with the query.",
      control: action({ optional: true, signature: "(query) => {}" }),
      defaultValue: false,
      type: "(query: string) => void",
      group: "Events",
    },
    className: {
      description: "Extra classes on the wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
    inputClassName: {
      description: "Extra classes on the field itself.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
