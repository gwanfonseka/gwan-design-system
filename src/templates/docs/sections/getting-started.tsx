import { H2, H3, P, Code, Callout, InlineCode } from "../primitives";
import pkg from "../../../../package.json";
import { SETUP_CSS } from "../setup-css";

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
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 my-6">
      {[
        { label: "Components", value: "53+" },
        { label: "Icons", value: "216+" },
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
    <P>Install the package and Tailwind CSS v4, which compiles GWAN&apos;s class names in your app.</P>

    <H3>1. Install the package</H3>
    <Code lang="bash">{`npm install gwan-design-system`}</Code>

    <H3>2. Install Tailwind CSS v4</H3>
    <Code lang="bash">{`npm install tailwindcss@^4 @tailwindcss/postcss`}</Code>

    <Callout type="info">
      The only peer dependency is <strong>React 19</strong> or newer. GWAN is developed and tested in{" "}
      <strong>Next.js 16</strong> with the App Router.
    </Callout>

    {/* Tailwind Setup */}
    <H2 id="tailwind-setup">Tailwind Setup</H2>
    <P>
      Tailwind CSS v4 is configured in CSS, so there is no <InlineCode>tailwind.config.ts</InlineCode>. It finds class
      names in your own files automatically but skips <InlineCode>node_modules</InlineCode>, so you add GWAN with{" "}
      <InlineCode>@source</InlineCode>.
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

    <H3>2. Add the stylesheet</H3>
    <P>
      Put this in <InlineCode>globals.css</InlineCode>. It tells Tailwind where GWAN&apos;s classes are, makes{" "}
      <InlineCode>dark:</InlineCode> follow the <InlineCode>.dark</InlineCode> class, and defines the colour tokens.
      Change the hex values to your brand, but keep every token: the package ships no CSS, so a token you leave out
      has no value.
    </P>
    <Code lang="css">{SETUP_CSS}</Code>

    <Callout type="tip">
      The <InlineCode>@source</InlineCode> path is relative to the CSS file. From{" "}
      <InlineCode>src/app/globals.css</InlineCode> it&apos;s <InlineCode>../../node_modules/…</InlineCode>; adjust it if
      your stylesheet lives elsewhere. The registered tokens are normal utilities too:{" "}
      <InlineCode>bg-background</InlineCode>, <InlineCode>text-foreground</InlineCode>,{" "}
      <InlineCode>border-border</InlineCode>, <InlineCode>bg-primary-500</InlineCode>.
    </Callout>

    <Callout type="tip">
      Want different colours? The <a href="/themes" className="underline">Theme Generator</a> builds the{" "}
      <InlineCode>:root</InlineCode>, <InlineCode>.dark</InlineCode> and primary-scale blocks for you.
    </Callout>

    {/* Dark Mode */}
    <H2 id="dark-mode">Dark Mode</H2>
    <P>
      GWAN switches to its dark tokens whenever an ancestor has the <InlineCode>dark</InlineCode> class, normally{" "}
      <InlineCode>&lt;html&gt;</InlineCode>. The library doesn&apos;t toggle that class itself; your app does. In
      Next.js, <InlineCode>next-themes</InlineCode> handles it, including the system preference and remembering the
      choice. It&apos;s what gwan.dev uses.
    </P>

    <H3>1. Wrap your app with ThemeProvider</H3>
    <Code lang="bash">{`npm install next-themes`}</Code>
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
