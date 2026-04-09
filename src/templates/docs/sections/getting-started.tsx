import { H2, H3, P, Code, Callout, InlineCode } from "../primitives";
import pkg from "../../../../package.json";

const GettingStarted = () => (
  <>
    {/* Introduction */}
    <H2 id="introduction">Introduction</H2>
    <P>
      GWAN is a high-performance component library and design system built for Next.js projects. It provides a curated set of production-ready components, a fully typed API, and a Tailwind CSS v4 theming layer — all with first-class dark mode support baked in.
    </P>
    <P>
      GWAN is designed with a <em>plug-and-play</em> philosophy. Drop it into any Next.js project, configure your tokens once, and every component automatically adapts to your brand and colour scheme.
    </P>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      {[
        { label: "Components", value: "38+" },
        { label: "Version", value: `v${pkg.version}` },
        { label: "License", value: "MIT" },
      ].map((s) => (
        <div key={s.label} className="border border-border rounded-xl p-4 bg-surface text-center">
          <p className="text-2xl font-black text-foreground">{s.value}</p>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg mt-1">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Installation */}
    <H2 id="installation">Installation</H2>
    <P>Install the GWAN package and its peer dependencies into your existing Next.js project.</P>

    <H3>1. Install via npm</H3>
    <Code lang="bash">{`npm install gwan-design-system`}</Code>

    <H3>2. Install peer dependencies</H3>
    <P>GWAN requires React 19, Tailwind CSS v4, and <InlineCode>next-themes</InlineCode> for dark mode support.</P>
    <Code lang="bash">{`npm install tailwindcss@^4 @tailwindcss/postcss next-themes`}</Code>

    <Callout type="info">
      GWAN targets <strong>Next.js 15+</strong> and <strong>React 19</strong>. If you are on an older version, check the compatibility table in the repository.
    </Callout>

    {/* Tailwind Setup */}
    <H2 id="tailwind-setup">Tailwind Setup</H2>
    <P>
      GWAN uses Tailwind CSS v4 with the new <InlineCode>@import &quot;tailwindcss&quot;</InlineCode> syntax and the <InlineCode>@theme</InlineCode> directive. There is no <InlineCode>tailwind.config.js</InlineCode> required — all tokens live in your CSS file.
    </P>

    <H3>1. Configure PostCSS</H3>
    <P>Create or update <InlineCode>postcss.config.mjs</InlineCode> at the root of your project.</P>
    <Code lang="js">{`// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`}</Code>

    <H3>2. Configure content paths</H3>
    <P>Create <InlineCode>tailwind.config.ts</InlineCode> and point it at your source files.</P>
    <Code lang="ts">{`// tailwind.config.ts
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {},
  plugins: [],
};

export default config;`}</Code>

    <H3>3. Import Tailwind in globals.css</H3>
    <Code lang="css">{`/* src/app/globals.css */
@import "tailwindcss";

/* Your theme tokens go here — see Theme Setup below */`}</Code>

    {/* Theme Setup */}
    <H2 id="theme-setup">Theme Setup</H2>
    <P>
      GWAN&apos;s theming system is built entirely on CSS custom properties and Tailwind&apos;s <InlineCode>@theme</InlineCode> directive. You define your colour tokens once in <InlineCode>globals.css</InlineCode> — both a light and dark variant — and every component reads from those tokens automatically.
    </P>

    <H3>1. Define your tokens</H3>
    <P>Add the following to your <InlineCode>globals.css</InlineCode>. Customise the hex values to match your brand.</P>
    <Code lang="css">{`/* ─── Light theme ─────────────────────── */
:root {
  --background:      #f8f9f5;
  --foreground:      #1c2218;

  --surface:         #ffffff;
  --surface-raised:  #eef2e8;
  --surface-overlay: #e3e9da;

  --border:          #c4cdb8;
  --muted-fg:        #60705a;

  --primary-default: #435240;
  --accent:          #0f766e;

  --success:         #059669;
  --danger:          #e11d48;
  --warning:         #d97706;
}

/* ─── Dark theme ──────────────────────── */
.dark {
  --background:      #131a10;
  --foreground:      #e2eada;

  --surface:         #1c241a;
  --surface-raised:  #252e22;
  --surface-overlay: #2d392a;

  --border:          #3c4d38;
  --muted-fg:        #9ea593;

  --primary-default: #adc09e;
  --accent:          #2dd4bf;

  --success:         #34d399;
  --danger:          #fb7185;
  --warning:         #fbbf24;
}`}</Code>

    <H3>2. Register tokens with Tailwind</H3>
    <P>Use the <InlineCode>@theme</InlineCode> directive to expose every CSS variable as a Tailwind utility class.</P>
    <Code lang="css">{`@theme {
  --color-background:     var(--background);
  --color-foreground:     var(--foreground);
  --color-surface:        var(--surface);
  --color-surface-raised: var(--surface-raised);
  --color-border:         var(--border);
  --color-muted-fg:       var(--muted-fg);
  --color-accent:         var(--accent);
  --color-success:        var(--success);
  --color-danger:         var(--danger);
  --color-warning:        var(--warning);

  /* Primary scale */
  --color-primary-50:  #f4f7f1;
  --color-primary-100: #e2eada;
  --color-primary-500: #9ea593;
  --color-primary-800: #435240;
  --color-primary-900: #2c3629;
}`}</Code>

    <Callout type="tip">
      Once registered in <InlineCode>@theme</InlineCode>, use these as normal Tailwind utilities — <InlineCode>bg-background</InlineCode>, <InlineCode>text-foreground</InlineCode>, <InlineCode>border-border</InlineCode>, <InlineCode>bg-primary-500</InlineCode>, etc.
    </Callout>

    {/* Dark Mode */}
    <H2 id="dark-mode">Dark Mode</H2>
    <P>
      GWAN uses <InlineCode>next-themes</InlineCode> to manage dark mode. The library toggles a <InlineCode>.dark</InlineCode> class on the <InlineCode>&lt;html&gt;</InlineCode> element, which switches the CSS custom properties you defined above.
    </P>

    <H3>1. Wrap your app with ThemeProvider</H3>
    <Code lang="tsx">{`// src/app/layout.tsx
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}</Code>

    <H3>2. Add a theme toggle</H3>
    <P>Use the <InlineCode>useTheme</InlineCode> hook and guard against hydration mismatch with a <InlineCode>mounted</InlineCode> check.</P>
    <Code lang="tsx">{`"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}`}</Code>

    <Callout type="warn">
      Always check <InlineCode>mounted</InlineCode> before rendering theme-dependent UI. The server renders without knowing the user&apos;s preference, so reading <InlineCode>theme</InlineCode> before mount will produce a hydration mismatch.
    </Callout>
  </>
);

export default GettingStarted;
