export const LIGHT_DEFAULTS = {
  "--background": "#f8f9f5",
  "--foreground": "#1c2218",
  "--surface": "#ffffff",
  "--surface-raised": "#eef2e8",
  "--surface-overlay": "#e3e9da",
  "--border": "#c4cdb8",
  "--muted-fg": "#60705a",
  "--primary-default": "#435240",
  "--primary-default-fg": "#f4f7f1",
  "--primary-muted": "#adc09e",
  "--success": "#059669",
  "--success-bg": "#ecfdf5",
  "--success-fg": "#064e3b",
  "--danger": "#e11d48",
  "--danger-bg": "#fff1f2",
  "--danger-fg": "#881337",
  "--warning": "#d97706",
  "--warning-bg": "#fffbeb",
  "--warning-fg": "#78350f",
};

export const DARK_DEFAULTS = {
  "--background": "#131a10",
  "--foreground": "#e2eada",
  "--surface": "#1c241a",
  "--surface-raised": "#252e22",
  "--surface-overlay": "#2d392a",
  "--border": "#3c4d38",
  "--muted-fg": "#9ea593",
  "--primary-default": "#adc09e",
  "--primary-default-fg": "#1c2218",
  "--primary-muted": "#435240",
  "--success": "#34d399",
  "--success-bg": "#022c1e",
  "--success-fg": "#a7f3d0",
  "--danger": "#fb7185",
  "--danger-bg": "#200a10",
  "--danger-fg": "#fecdd3",
  "--warning": "#fbbf24",
  "--warning-bg": "#1c1300",
  "--warning-fg": "#fde68a",
};

export type TokenMap = typeof LIGHT_DEFAULTS;
export type TokenKey = keyof TokenMap;

export const TOKEN_GROUPS: { label: string; tokens: { key: TokenKey; label: string }[] }[] = [
  {
    label: "Surfaces & Text",
    tokens: [
      { key: "--background", label: "Background" },
      { key: "--foreground", label: "Foreground" },
      { key: "--surface", label: "Surface" },
      { key: "--surface-raised", label: "Surface Raised" },
      { key: "--surface-overlay", label: "Surface Overlay" },
      { key: "--border", label: "Border" },
      { key: "--muted-fg", label: "Muted Text" },
    ],
  },
  {
    label: "Primary Brand",
    tokens: [
      { key: "--primary-default", label: "Primary" },
      { key: "--primary-default-fg", label: "Primary Foreground" },
      { key: "--primary-muted", label: "Primary Muted" },
    ],
  },
  {
    label: "Status",
    tokens: [
      { key: "--success", label: "Success" },
      { key: "--success-bg", label: "Success Background" },
      { key: "--success-fg", label: "Success Foreground" },
      { key: "--danger", label: "Danger" },
      { key: "--danger-bg", label: "Danger Background" },
      { key: "--danger-fg", label: "Danger Foreground" },
      { key: "--warning", label: "Warning" },
      { key: "--warning-bg", label: "Warning Background" },
      { key: "--warning-fg", label: "Warning Foreground" },
    ],
  },
];

export const generateCSS = (light: TokenMap, dark: TokenMap): string => {
  const lines = (vars: TokenMap) =>
    Object.entries(vars)
      .map(([k, v]) => `  ${k}: ${v};`)
      .join("\n");
  return `:root {\n${lines(light)}\n}\n\n.dark {\n${lines(dark)}\n}`;
};
