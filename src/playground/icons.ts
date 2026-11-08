import type { ComponentType } from "react";
import * as Icons from "@/components/icons";

const registry = Icons as unknown as Record<string, ComponentType>;

// BrightHigh is the old name of BrightHighSVG, so it would list that icon twice.
export const ICON_NAMES = Object.keys(registry)
  .filter((name) => name !== "BrightHigh")
  .sort((a, b) => a.localeCompare(b));

export const getIcon = (name: string): ComponentType | undefined => registry[name];

/** "ArrowRightSVG" → "Arrow Right" */
export const iconLabel = (name: string) =>
  name.replace(/SVGG?$/, "").replace(/([a-z])([A-Z])/g, "$1 $2");
