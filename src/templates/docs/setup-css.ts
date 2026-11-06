/**
 * The complete stylesheet an app needs for GWAN. Every token is used by at least one
 * component; the package ships no CSS, so leaving one out leaves that colour unset.
 * Keep README.md's "Setup" block in sync with this.
 */
export const SETUP_CSS = `/* src/app/globals.css */
@import "tailwindcss";

/* GWAN's class names ship in its dist JavaScript. Tailwind skips node_modules,
   so point it there. The path is relative to this CSS file. */
@source "../../node_modules/gwan-design-system/dist";

/* Make dark: utilities follow the .dark class instead of the OS setting. */
@custom-variant dark (&:where(.dark, .dark *));

/* ─── Light theme ─────────────────────────── */
:root {
  --background: #f8f9f5;
  --foreground: #1c2218;

  --surface: #ffffff;
  --surface-raised: #eef2e8;
  --surface-overlay: #e3e9da;

  --border: #c4cdb8;
  --border-subtle: #d8dfce;

  --primary-default: #435240;
  --primary-default-fg: #f4f7f1;

  --muted-fg: #60705a;
  --accent: #0f766e;

  --success: #047857;
  --success-bg: #ecfdf5;
  --success-fg: #064e3b;

  --danger: #be123c;
  --danger-bg: #fff1f2;
  --danger-fg: #881337;

  --warning: #b45309;
  --warning-bg: #fffbeb;
  --warning-fg: #78350f;
}

/* ─── Dark theme ──────────────────────────── */
.dark {
  --background: #131a10;
  --foreground: #e2eada;

  --surface: #1c241a;
  --surface-raised: #252e22;
  --surface-overlay: #2d392a;

  --border: #3c4d38;
  --border-subtle: #2d392a;

  --primary-default: #adc09e;
  --primary-default-fg: #1c2218;

  --muted-fg: #9ea593;
  --accent: #2dd4bf;

  --success: #34d399;
  --success-bg: #022c1e;
  --success-fg: #a7f3d0;

  --danger: #fb7185;
  --danger-bg: #200a10;
  --danger-fg: #fecdd3;

  --warning: #fbbf24;
  --warning-bg: #1c1300;
  --warning-fg: #fde68a;
}

/* ─── Register the tokens as Tailwind colours ─
   inline: utilities read the token directly, so a
   nested .dark section changes colour too. */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  --color-surface: var(--surface);
  --color-surface-raised: var(--surface-raised);
  --color-surface-overlay: var(--surface-overlay);

  --color-border: var(--border);
  --color-border-subtle: var(--border-subtle);

  --color-primary-default: var(--primary-default);
  --color-primary-default-fg: var(--primary-default-fg);

  --color-muted-fg: var(--muted-fg);
  --color-accent: var(--accent);

  --color-success: var(--success);
  --color-success-bg: var(--success-bg);
  --color-success-fg: var(--success-fg);

  --color-danger: var(--danger);
  --color-danger-bg: var(--danger-bg);
  --color-danger-fg: var(--danger-fg);

  --color-warning: var(--warning);
  --color-warning-bg: var(--warning-bg);
  --color-warning-fg: var(--warning-fg);
}

/* Primary scale: the same in light and dark mode */
@theme {
  --color-primary-50: #f4f7f1;
  --color-primary-100: #e2eada;
  --color-primary-200: #c8d5be;
  --color-primary-300: #adc09e;
  --color-primary-400: #a4b496;
  --color-primary-500: #9ea593;
  --color-primary-600: #7e8c73;
  --color-primary-700: #60705a;
  --color-primary-800: #435240;
  --color-primary-900: #2c3629;
}`;

/** Vite setup, shown in the docs and README. A test keeps the two in step. */
export const VITE_CONFIG = `// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});`;

/** Runs before first paint, so a dark page never flashes light. */
export const THEME_SCRIPT = `<!-- index.html, inside <head> -->
<script>
  const saved = localStorage.getItem("theme");
  const dark = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.toggle("dark", dark);
</script>`;

export const THEME_TOGGLE = `import { Button } from "gwan-design-system";

export function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  return <Button label="Toggle theme" onClick={toggle} />;
}`;
