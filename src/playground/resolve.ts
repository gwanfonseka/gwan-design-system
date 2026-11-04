import { createElement } from "react";
import { getIcon } from "./icons";
import type { AnyStory, Args, ArgTypeBase, ArgValue, Binding } from "./types";

export type ActionLogger = (name: string, args: unknown[]) => void;

/** What a bound callback stores when the story doesn't say: dates as ISO strings. */
const storable = (value: unknown): ArgValue => {
  if (value instanceof Date) return value.toISOString();
  if (Array.isArray(value)) return value.join(",");
  return value as ArgValue;
};

/** Comma-separated text back to a list. */
export const toList = (value: ArgValue): string[] =>
  typeof value === "string" ? value.split(",").map((v) => v.trim()).filter(Boolean) : [];

/**
 * Turns stored args into real props: icon and preset names become their values, dates
 * become `Date`s, actions become loggers, and bound callbacks also update their prop.
 */
export const resolveProps = (
  story: AnyStory,
  args: Args,
  log: ActionLogger,
  setArgs: (patch: Args) => void,
): Record<string, unknown> => {
  const argTypes = story.argTypes as Record<string, ArgTypeBase>;
  const props: Record<string, unknown> = {};

  for (const [key, argType] of Object.entries(argTypes)) {
    if (argType.visible && !argType.visible(args)) continue;
    const { control } = argType;
    const value = args[key];
    switch (control.kind) {
      case "icon": {
        const Icon = typeof value === "string" ? getIcon(value) : undefined;
        if (Icon) props[key] = createElement(Icon);
        break;
      }
      case "data":
        if (typeof value === "string" && value in control.presets) props[key] = control.presets[value];
        break;
      case "date":
        props[key] = typeof value === "string" ? new Date(value) : value;
        break;
      case "list":
        props[key] = toList(value);
        break;
      case "action":
        if (control.optional && value !== true) break;
        props[key] = (...callArgs: unknown[]) => {
          log(key, callArgs);
          const update = control.update as ((...a: unknown[]) => Args) | undefined;
          if (update) setArgs(update(...callArgs));
        };
        break;
      default:
        if (value !== undefined) props[key] = value;
    }
  }

  for (const binding of (story.bindings ?? []) as Binding<Record<string, unknown>>[]) {
    const toValue = binding.toValue as ((...a: unknown[]) => ArgValue) | undefined;
    const toArgs = binding.toArgs as ((...a: unknown[]) => Args) | undefined;
    props[binding.event] = (...callArgs: unknown[]) => {
      log(binding.event, callArgs);
      setArgs(
        toArgs
          ? toArgs(...callArgs)
          : { [binding.prop]: toValue ? toValue(...callArgs) : storable(callArgs[0]) },
      );
    };
  }

  return props;
};
