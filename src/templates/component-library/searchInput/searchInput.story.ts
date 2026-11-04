import { FORM_ELEMENT_SIZE } from "@/components/input";
import SearchInput, { type ISearchInput } from "@/components/searchInput";
import { action, boolean, defineStory, enumOf, number, text } from "@/playground";

export default defineStory<ISearchInput>({
  name: "SearchInput",
  component: SearchInput,
  args: { value: "" },
  bindings: [{ prop: "value", event: "onChange" }],
  argTypes: {
    value: {
      description: "Current query. Controlled: update it from onChange.",
      control: text(),
      required: true,
      group: "Content",
    },
    label: {
      description: "Label above the field.",
      control: text(),
      group: "Content",
    },
    placeholder: {
      description: "Hint shown while the field is empty.",
      control: text(),
      defaultValue: "Search…",
      group: "Content",
    },
    size: {
      description: "Field height.",
      control: enumOf(FORM_ELEMENT_SIZE, "FORM_ELEMENT_SIZE"),
      defaultValue: FORM_ELEMENT_SIZE.MD,
      group: "Appearance",
    },
    debounce: {
      description: "Milliseconds of quiet typing before onSearch fires.",
      control: number({ min: 0, max: 2000, step: 50 }),
      defaultValue: 300,
      group: "Behaviour",
    },
    isLoading: {
      description: "Shows a spinner in the field, e.g. while results load.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    disabled: {
      description: "Blocks typing and dims the field.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    onChange: {
      description: "Called on every keystroke with the new text.",
      control: action(),
      type: "(value: string) => void",
      required: true,
      group: "Events",
    },
    onSearch: {
      description: "Called with the query after the debounce, and with \"\" when cleared.",
      control: action(),
      type: "(value: string) => void",
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
