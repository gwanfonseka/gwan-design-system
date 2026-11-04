import type { ChangeEvent, TextareaHTMLAttributes } from "react";
import TextArea, { type ITextArea } from "@/components/textarea";
import { action, defineStory, number, text } from "@/playground";
import { fieldClasses, fieldContent, fieldEdges, fieldState } from "../_shared/formField";

export default defineStory<ITextArea, keyof TextareaHTMLAttributes<HTMLTextAreaElement>>({
  name: "TextArea",
  component: TextArea,
  args: { value: "", label: "Message", placeholder: "Write something…" },
  bindings: [
    {
      prop: "value",
      event: "onChange",
      toValue: (e: ChangeEvent<HTMLTextAreaElement>) => e.target.value,
      code: "(e) => setValue(e.target.value)",
    },
  ],
  note: "Also accepts native <textarea> attributes such as rows, maxLength and onBlur.",
  argTypes: {
    value: {
      description: "Current text. Controlled: update it from onChange.",
      control: text(),
      required: true,
      group: "Content",
    },
    ...fieldContent,
    rows: {
      description: "Visible height in lines (native attribute).",
      control: number({ min: 1, max: 20 }),
      group: "Appearance",
    },
    ...fieldEdges,
    ...fieldState,
    onChange: {
      description: "Native change event. Read the text from e.target.value.",
      control: action(),
      type: "(e: ChangeEvent<HTMLTextAreaElement>) => void",
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
