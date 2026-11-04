import { FORM_ELEMENT_EDGE_STYLE, FORM_ELEMENT_SIZE } from "@/components/input";
import { boolean, enumOf, text } from "@/playground";
import type { Args } from "@/playground";

const hasError = (args: Args) => args.isError === true;

/** Props shared by the text-like form fields, described once. */
export const fieldContent = {
  label: {
    description: "Label above the field. Also names the field for screen readers.",
    control: text(),
    group: "Content" as const,
  },
  placeholder: {
    description: "Hint shown while the field is empty.",
    control: text(),
    defaultValue: "",
    group: "Content" as const,
  },
};

export const fieldSize = {
  size: {
    description: "Field height. SM for dense layouts.",
    control: enumOf(FORM_ELEMENT_SIZE, "FORM_ELEMENT_SIZE"),
    defaultValue: FORM_ELEMENT_SIZE.MD,
    group: "Appearance" as const,
  },
};

export const fieldEdges = {
  edges: {
    description: "Corner style.",
    control: enumOf(FORM_ELEMENT_EDGE_STYLE, "FORM_ELEMENT_EDGE_STYLE"),
    defaultValue: FORM_ELEMENT_EDGE_STYLE.ROUNDED,
    group: "Appearance" as const,
  },
};

export const fieldState = {
  disabled: {
    description: "Blocks input and dims the field.",
    control: boolean(),
    defaultValue: false,
    group: "Behaviour" as const,
  },
  required: {
    description: "Adds an asterisk to the label and marks the field as required.",
    control: boolean(),
    defaultValue: false,
    group: "Behaviour" as const,
  },
  isError: {
    description: "Shows the error style. Turns on errorMessage.",
    control: boolean(),
    defaultValue: false,
    group: "Behaviour" as const,
  },
  errorMessage: {
    description: "Message under the field while isError is on. Announced to screen readers.",
    control: text("This field is required"),
    group: "Behaviour" as const,
    visible: hasError,
  },
};

export const fieldClasses = {
  className: {
    description: "Extra classes on the wrapper, e.g. a width.",
    control: text("e.g. w-64"),
    defaultValue: "",
    group: "Advanced" as const,
  },
  inputClassName: {
    description: "Extra classes on the field itself.",
    control: text(),
    defaultValue: "",
    group: "Advanced" as const,
  },
};
