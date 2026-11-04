import type { ChangeEvent, HTMLAttributes } from "react";
import Input, { type IInput } from "@/components/input";
import { action, defineStory, number, options, text } from "@/playground";
import { fieldClasses, fieldContent, fieldEdges, fieldSize, fieldState } from "../_shared/formField";

const isNumber = (args: Record<string, unknown>) => args.type === "number";

export default defineStory<IInput, keyof HTMLAttributes<HTMLInputElement>>({
  name: "Input",
  component: Input,
  args: { value: "", label: "Email", placeholder: "you@example.com" },
  bindings: [
    {
      prop: "value",
      event: "onChange",
      toValue: (e: ChangeEvent<HTMLInputElement>) => e.target.value,
      code: "(e) => setValue(e.target.value)",
    },
  ],
  note: "Also accepts global HTML attributes and event handlers (id, aria-*, onBlur, onKeyDown…), passed to the <input>.",
  argTypes: {
    value: {
      description: "Current text. Controlled: update it from onChange.",
      control: text(),
      required: true,
      group: "Content",
    },
    ...fieldContent,
    type: {
      description: "Native input type.",
      control: options(["text", "email", "password", "number", "search", "tel", "url"]),
      defaultValue: "text",
      group: "Behaviour",
    },
    min: {
      description: "Lowest value, for type number.",
      control: number(),
      group: "Behaviour",
      visible: isNumber,
    },
    max: {
      description: "Highest value, for type number.",
      control: number(),
      group: "Behaviour",
      visible: isNumber,
    },
    step: {
      description: "Increment, for type number.",
      control: number({ min: 0 }),
      group: "Behaviour",
      visible: isNumber,
    },
    ...fieldSize,
    ...fieldEdges,
    ...fieldState,
    onChange: {
      description: "Native change event. Read the text from e.target.value.",
      control: action(),
      type: "(e: ChangeEvent<HTMLInputElement>) => void",
      group: "Events",
    },
    onClear: {
      description: "Adds a clear button while there's a value. Called when it's clicked.",
      control: action({ optional: true, signature: '() => setValue("")', update: () => ({ value: "" }) }),
      defaultValue: false,
      group: "Events",
    },
    ...fieldClasses,
  },
});
