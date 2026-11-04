import { useCallback, useMemo, useReducer } from "react";
import type { AnyStory, Args, ArgValue } from "./types";

type Action =
  | { type: "set"; patch: Args }
  | { type: "resetAll" };

/** Starting values: each prop's `defaultValue`, overridden by the story's `args`. */
export const initialArgs = (story: AnyStory): Args => {
  const argTypes = story.argTypes as Record<string, { defaultValue?: ArgValue }>;
  const base: Args = {};
  for (const key of Object.keys(argTypes)) base[key] = argTypes[key].defaultValue;
  return { ...base, ...(story.args as Args) };
};

export const argsReducer = (initial: Args) => (state: Args, action: Action): Args => {
  switch (action.type) {
    case "set":
      return { ...state, ...action.patch };
    case "resetAll":
      return initial;
  }
};

export const useArgs = (story: AnyStory, overrides?: Args) => {
  const initial = useMemo(() => initialArgs(story), [story]);
  const reducer = useMemo(() => argsReducer(initial), [initial]);
  const [args, dispatch] = useReducer(reducer, initial, (i) => ({ ...i, ...overrides }));

  const setArgs = useCallback((patch: Args) => dispatch({ type: "set", patch }), []);
  const resetAll = useCallback(() => dispatch({ type: "resetAll" }), []);

  const isChanged = useCallback((key: string) => args[key] !== initial[key], [args, initial]);
  const changedCount = Object.keys(args).filter((k) => args[k] !== initial[k]).length;

  return { args, initial, setArgs, resetAll, isChanged, changedCount };
};
