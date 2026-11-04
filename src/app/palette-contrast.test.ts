import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { SETUP_CSS } from "@/templates/docs/setup-css";

const css = fs.readFileSync(path.join(process.cwd(), "src/app/globals.css"), "utf8");

/** Hex tokens declared directly in a block such as `:root` or `.dark`. */
const tokens = (source: string, selector: string): Record<string, string> => {
  const body = source.match(new RegExp(`${selector.replace(/[.:@]/g, "\\$&")}\\s*\\{([^}]*)\\}`))?.[1] ?? "";
  return Object.fromEntries([...body.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6})/gi)].map((m) => [m[1], m[2]]));
};

type RGB = [number, number, number];
const rgb = (hex: string): RGB => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255) as RGB;
const luminance = ([r, g, b]: RGB) => {
  const f = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const contrast = (a: RGB, b: RGB) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
/** `bg-x/15` over a surface. */
const tint = (color: RGB, over: RGB, alpha: number): RGB =>
  color.map((c, i) => alpha * c + (1 - alpha) * over[i]) as RGB;

const scale = tokens(css, "@theme");
const themes = { light: tokens(css, ":root"), dark: tokens(css, ".dark") };

/**
 * Text colour on background, as the components use them. Each pair must reach WCAG AA
 * for normal text (4.5:1) in both themes. Disabled states are exempt, so they're not here.
 */
const TEXT_PAIRS: [string, (t: (k: string) => RGB) => [RGB, RGB]][] = [
  ["Body text on the page", (t) => [t("foreground"), t("background")]],
  ["Body text on surfaces", (t) => [t("foreground"), t("surface")]],
  ["Body text on raised surfaces", (t) => [t("foreground"), t("surface-raised")]],
  ["Secondary text on the page", (t) => [t("muted-fg"), t("background")]],
  ["Secondary text on surfaces", (t) => [t("muted-fg"), t("surface")]],
  ["Secondary text on raised surfaces", (t) => [t("muted-fg"), t("surface-raised")]],
  ["Primary button, Tabs pill, Stepper step", (t) => [t("primary-default-fg"), t("primary-default")]],
  ["Primary button hover (90%)", (t) => [t("primary-default-fg"), tint(t("primary-default"), t("background"), 0.9)]],
  ["Primary button pressed (80%)", (t) => [t("primary-default-fg"), tint(t("primary-default"), t("background"), 0.8)]],
  ["Tertiary button and primary text on surfaces", (t) => [t("primary-default"), t("surface")]],
  ["Primary text on a 15% primary tint", (t) => [t("primary-default"), tint(t("primary-default"), t("surface"), 0.15)]],
  ["Accent text on surfaces", (t) => [t("accent"), t("surface")]],
  ["Accent text on a 10% accent tint (Badge, Tag, FileUploader)", (t) => [t("accent"), tint(t("accent"), t("surface"), 0.1)]],
  ["Error messages on surfaces", (t) => [t("danger"), t("surface")]],
  ["Error messages on the page", (t) => [t("danger"), t("background")]],
  ["Danger text on danger background", (t) => [t("danger"), t("danger-bg")]],
  ["Success text on surfaces (StatCard trend)", (t) => [t("success"), t("surface")]],
  ["Warning text on surfaces", (t) => [t("warning"), t("surface")]],
  ["Danger foreground on danger background", (t) => [t("danger-fg"), t("danger-bg")]],
  ["Success foreground on success background", (t) => [t("success-fg"), t("success-bg")]],
  ["Warning foreground on warning background", (t) => [t("warning-fg"), t("warning-bg")]],
  ["Status foreground on a 15% status tint (FileUploader)", (t) =>
    [t("danger-fg"), tint(t("danger"), t("surface"), 0.15)]],
  ["Success foreground on a 15% success tint", (t) => [t("success-fg"), tint(t("success"), t("surface"), 0.15)]],
  ["Warning foreground on a 15% warning tint", (t) => [t("warning-fg"), tint(t("warning"), t("surface"), 0.15)]],
];

describe.each(Object.entries(themes))("%s palette", (_, values) => {
  const t = (key: string) => {
    expect(values[key], `--${key} is defined`).toBeDefined();
    return rgb(values[key]);
  };

  it.each(TEXT_PAIRS)("%s reaches 4.5:1", (_, pair) => {
    expect(contrast(...pair(t))).toBeGreaterThanOrEqual(4.5);
  });
});

it("keeps the fixed secondary-button pair at 4.5:1 in both themes", () => {
  expect(contrast(rgb(scale["color-primary-800"]), rgb(scale["color-primary-100"]))).toBeGreaterThanOrEqual(4.5);
});

describe("published setup stylesheet", () => {
  it("is the same in the README and the docs", () => {
    const readme = fs.readFileSync(path.join(process.cwd(), "README.md"), "utf8");
    expect(readme).toContain(SETUP_CSS);
  });

  it("uses the site's own token values", () => {
    for (const [selector, site] of [[":root", themes.light], [".dark", themes.dark]] as const) {
      for (const [key, value] of Object.entries(tokens(SETUP_CSS, selector))) {
        expect(value.toLowerCase(), `${selector} --${key}`).toBe(site[key]?.toLowerCase());
      }
    }
  });
});
