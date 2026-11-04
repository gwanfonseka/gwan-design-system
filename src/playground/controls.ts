import { SAMPLE_IMAGES } from "./samples";
import type { AnyStory, Args, Control, EnumLike, PresetCode, Story } from "./types";

export const text = (placeholder?: string): Control => ({ kind: "text", placeholder });

export const textarea = (rows = 3): Control => ({ kind: "textarea", rows });

export const number = (opts: { min?: number; max?: number; step?: number } = {}): Control => ({
  kind: "number",
  ...opts,
});

export const range = (min: number, max: number, step = 1): Control => ({
  kind: "range",
  min,
  max,
  step,
});

export const boolean = (): Control => ({ kind: "boolean" });

/**
 * A TypeScript enum. `enumName` is the exported identifier, used in generated code
 * (`BUTTON_SIZE.MD`) and imports. Two options render as radios, more as a dropdown.
 */
export const enumOf = (
  enumObj: EnumLike,
  enumName: string,
  display?: "radio" | "select",
): Control => ({ kind: "enum", enumObj, enumName, display });

/** A literal union such as `"button" | "submit"`. */
export const options = (
  values: readonly (string | number)[],
  display?: "radio" | "select",
): Control => ({ kind: "options", options: values, display });

/** A `ReactNode` icon slot, picked from the library's icon set. */
export const icon = (): Control => ({ kind: "icon" });

/** A CSS colour string, picked with the library's ColorPicker. */
export const color = (): Control => ({ kind: "color" });

/** A `string[]`, edited as comma-separated text. */
export const list = (placeholder = "comma, separated, values"): Control => ({ kind: "list", placeholder });

/** A `Date`, picked with the library's DatePicker. Stored as an ISO string. */
export const date = (): Control => ({ kind: "date" });

/** A time string, picked with the library's TimePicker. */
export const time = (): Control => ({ kind: "time" });

/**
 * Named sample values for props that take arrays, objects or React nodes. The story's
 * args hold the preset name. Pass `code` for presets that can't be printed as-is.
 */
export const data = (
  presets: Record<string, unknown>,
  code?: Record<string, string | PresetCode>,
): Control => ({
  kind: "data",
  presets,
  code,
});

/** An image URL, chosen from the sample images in /public. */
export const image = (): Control => ({
  kind: "options",
  options: ["", ...Object.values(SAMPLE_IMAGES)],
  display: "select",
  labels: { "": "None" },
});

/**
 * A callback. Calls are recorded in the Actions panel. Use `optional` when passing the
 * handler at all changes what the component does (e.g. `onClear` adds a clear button).
 */
export const action = (
  opts: { optional?: boolean; signature?: string; update?: (...args: never[]) => Args } = {},
): Control => ({
  kind: "action",
  ...opts,
});

/**
 * Identity helper so story files get full type checking against the component's props.
 * Pass `Inherited` to make native attributes optional, e.g.
 * `defineStory<IInput, keyof React.HTMLAttributes<HTMLInputElement>>`.
 */
export const defineStory = <P, Inherited extends keyof P = never>(
  story: Story<P, Inherited>,
): AnyStory => story as unknown as AnyStory;
