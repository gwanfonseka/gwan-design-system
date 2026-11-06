import type { ComponentType, ReactNode } from "react";

/**
 * A value as the playground stores it. Icons and data presets are stored by name,
 * dates as ISO strings, and actions not at all.
 */
export type ArgValue = string | number | boolean | null | undefined;
export type Args = Record<string, ArgValue>;

export type EnumLike = Record<string, string | number>;

export type Control =
  | { kind: "text"; placeholder?: string }
  | { kind: "textarea"; rows?: number }
  | { kind: "number"; min?: number; max?: number; step?: number }
  | { kind: "range"; min: number; max: number; step?: number }
  | { kind: "boolean" }
  | { kind: "enum"; enumObj: EnumLike; enumName: string; display?: "radio" | "select" }
  | {
      kind: "options";
      options: readonly (string | number)[];
      display?: "radio" | "select";
      /** Display names for values that don't read well, e.g. "" → "None". */
      labels?: Record<string, string>;
    }
  | { kind: "icon" }
  | { kind: "color" }
  | { kind: "date" }
  | { kind: "time" }
  /** A `string[]`, stored and edited as comma-separated text. */
  | { kind: "list"; placeholder?: string }
  | {
      kind: "data";
      /** Named sample values: arrays, objects, React nodes or strings. */
      presets: Record<string, unknown>;
      /** Hand-written code per preset, for values that can't be printed (e.g. render functions). */
      code?: Record<string, string | PresetCode>;
    }
  | {
      kind: "action";
      /** The handler changes behaviour by being present, so it starts off and is switched on. */
      optional?: boolean;
      /** Keeps an optional handler in generated code, for props most uses will set. */
      inCode?: boolean;
      /** How the handler reads in generated code. Defaults to `() => {}`. */
      signature?: string;
      /** Args to change when it's called, e.g. clearing `value` from `onClear`. */
      update?: (...args: never[]) => Args;
    };

export interface PresetCode {
  code: string;
  /** Library exports the code uses. */
  imports?: string[];
  /** Declarations the code relies on, printed above it. */
  setup?: string;
}

export type ArgGroup = "Content" | "Appearance" | "Behaviour" | "Events" | "Advanced";

export interface ArgTypeBase {
  description: string;
  control: Control;
  /** The component's own default, shown in the table and left out of generated code. */
  defaultValue?: ArgValue;
  /** Overrides the type shown in the table, e.g. `string | number`. */
  type?: string;
  group?: ArgGroup;
  /** Hides the row when it doesn't apply, e.g. avatar fields while the avatar is off. */
  visible?: (args: Args) => boolean;
}

type Entry<P, K extends keyof P> = ArgTypeBase &
  (Partial<Pick<P, K>> extends Pick<P, K> ? { required?: false } : { required: true });

/**
 * One entry per prop of `P`. Props that are required on the component must be marked
 * `required: true`, and optional ones cannot be, so the table can't misreport either.
 * Keys in `Inherited` (e.g. native HTML attributes) may be listed but don't have to be.
 */
export type ArgTypes<P, Inherited extends keyof P = never> = {
  [K in Exclude<keyof P, Inherited>]-?: Entry<P, K>;
} & {
  [K in Inherited]?: Entry<P, K>;
};

/**
 * Keeps a value prop in sync with its callback, so the preview stays interactive and
 * the table follows what happens in it.
 */
export interface Binding<P> {
  prop: keyof P & string;
  event: keyof P & string;
  /** Maps the callback's arguments to the stored value. Defaults to the first argument. */
  toValue?: (...args: never[]) => ArgValue;
  /**
   * For callbacks that report several props at once (e.g. a date range): the other props
   * it controls, and how to map the arguments to all of them.
   */
  alsoControls?: (keyof P & string)[];
  toArgs?: (...args: never[]) => Args;
  /** How the handler reads in generated code. Defaults to the bare setter. */
  code?: string;
}

export interface RenderContext {
  args: Args;
  setArgs: (patch: Args) => void;
}

export interface Story<P, Inherited extends keyof P = never> {
  /** Component name used in generated JSX and imports. */
  name: string;
  component: ComponentType<P>;
  /** Package the snippet imports from. Defaults to `gwan-design-system`. */
  importFrom?: string;
  /** Starting values. Anything not listed starts as the prop's `defaultValue`. */
  args: Partial<Record<keyof P, ArgValue>>;
  argTypes: ArgTypes<P, Inherited>;
  bindings?: Binding<P>[];
  /** Shown under the props table, e.g. "Also accepts native <input> attributes." */
  note?: string;
  /** Props the component only reads when it mounts; changing one re-creates the preview. */
  remountOn?: (keyof P & string)[];
  /** `fullwidth` for bars, tables and layouts that should span the canvas. */
  layout?: "centered" | "fullwidth";
  /** Custom preview when the component needs surroundings. Receives resolved props. */
  render?: (props: P, ctx: RenderContext) => ReactNode;
  /** Code shown instead of the generated snippet when a render override changes usage. */
  usage?: (generated: string) => string;
}

/** A story with its prop types erased, as the engine handles it internally. */
export type AnyStory = Story<Record<string, unknown>, string>;
