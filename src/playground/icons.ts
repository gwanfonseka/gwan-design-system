import type { ComponentType } from "react";
import * as Icons from "@/components/icons";

const registry = Icons as unknown as Record<string, ComponentType>;

export const ICON_NAMES = Object.keys(registry).sort((a, b) => a.localeCompare(b));

export const getIcon = (name: string): ComponentType | undefined => registry[name];

/** "ArrowRightSVG" → "Arrow Right" */
export const iconLabel = (name: string) =>
  name.replace(/SVGG?$/, "").replace(/([a-z])([A-Z])/g, "$1 $2");
