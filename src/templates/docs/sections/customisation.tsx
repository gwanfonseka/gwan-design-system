import { H2, H3, P, Code, Callout, InlineCode, TokenRow } from "../primitives";

const Customisation = () => (
  <>
    {/* Design Tokens */}
    <H2 id="tokens">Design Tokens</H2>
    <P>
      All tokens are CSS custom properties defined in{" "}
      <InlineCode>:root</InlineCode> and <InlineCode>.dark</InlineCode>.
      Overriding a token changes every component that references it — there is
      no cascading specificity to manage.
    </P>

    <H3>Semantic tokens</H3>
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-border text-left">
            <th className="pb-3 pr-4 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">
              Token
            </th>
            <th className="pb-3 pr-4 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">
              Light
            </th>
            <th className="pb-3 pr-4 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">
              Dark
            </th>
            <th className="pb-3 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">
              Usage
            </th>
          </tr>
        </thead>
        <tbody>
          <TokenRow
            name="--background"
            light="#f8f9f5"
            dark="#131a10"
            usage="Page background"
          />
          <TokenRow
            name="--foreground"
            light="#1c2218"
            dark="#e2eada"
            usage="Primary text"
          />
          <TokenRow
            name="--surface"
            light="#ffffff"
            dark="#1c241a"
            usage="Cards, panels"
          />
          <TokenRow
            name="--surface-raised"
            light="#eef2e8"
            dark="#252e22"
            usage="Elevated surfaces"
          />
          <TokenRow
            name="--border"
            light="#c4cdb8"
            dark="#3c4d38"
            usage="All borders"
          />
          <TokenRow
            name="--muted-fg"
            light="#60705a"
            dark="#9ea593"
            usage="Secondary text"
          />
          <TokenRow
            name="--accent"
            light="#0f766e"
            dark="#2dd4bf"
            usage="Links, highlights"
          />
          <TokenRow
            name="--success"
            light="#047857"
            dark="#34d399"
            usage="Success states"
          />
          <TokenRow
            name="--danger"
            light="#be123c"
            dark="#fb7185"
            usage="Error states"
          />
          <TokenRow
            name="--warning"
            light="#b45309"
            dark="#fbbf24"
            usage="Warning states"
          />
        </tbody>
      </table>
    </div>

    {/* Primary Colour Scale */}
    <H2 id="primary-scale">Primary Colour Scale</H2>
    <P>
      The two semantic primary tokens (<InlineCode>--primary-default</InlineCode> and{" "}
      <InlineCode>--primary-default-fg</InlineCode>) control the main brand colour
      and follow light and dark mode. Primary buttons, tabs, the stepper, switches,
      progress bars and focus borders all use them, so they stay readable in both
      themes. A few places use fixed steps on the primary palette instead.
    </P>
    <P>
      These scale steps are registered once in <InlineCode>@theme {"{}"}</InlineCode> and
      do <strong>not</strong> change between light and dark mode. If you rebrand
      to a different hue, replace the entire scale so the secondary and disabled
      buttons and the spinner track match your brand.
    </P>

    <H3>Components that use the primary scale</H3>
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-border text-left">
            <th className="pb-3 pr-6 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">Component</th>
            <th className="pb-3 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">Scale steps used</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            ["Button",  "100, 200, 300, 800 (secondary fill, hover, pressed, text); 200, 500 (disabled primary)"],
            ["Spinner", "100 (track of the PRIMARY colour)"],
          ].map(([comp, steps]) => (
            <tr key={comp}>
              <td className="py-2.5 pr-6 font-medium text-foreground">{comp}</td>
              <td className="py-2.5 font-mono text-xs text-muted-fg">{steps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <H3>Replacing the scale when rebranding</H3>
    <P>
      The <a href="/themes" className="underline underline-offset-2 hover:text-foreground transition-colors">Theme Generator</a> includes a built-in scale builder — pick a seed colour and
      it auto-generates the full 10-step scale. Copy the output directly into your{" "}
      <InlineCode>globals.css</InlineCode>. To override manually, replace the values below.
    </P>
    <Code lang="css">{`/* In globals.css — replace ALL steps to match your brand hue */
@theme {
  --color-primary-50:  #f4f7f1;  /* lightest tint  */
  --color-primary-100: #e2eada;
  --color-primary-200: #c8d5be;
  --color-primary-300: #adc09e;
  --color-primary-400: #a4b496;
  --color-primary-500: #9ea593;  /* mid-point      */
  --color-primary-600: #7e8c73;
  --color-primary-700: #60705a;
  --color-primary-800: #435240;
  --color-primary-900: #2c3629;  /* darkest shade  */
}`}</Code>

    <Callout type="tip">
      Always replace all 10 steps together. Using only a few steps from a
      different hue creates inconsistent hover and disabled states across
      components. Use the <a href="/themes" className="underline underline-offset-2">Theme Generator</a> to
      generate a matched scale from a single seed colour.
    </Callout>

    {/* Extending */}
    <H2 id="extending">Extending Themes</H2>
    <P>
      To rebrand GWAN for your project, override the CSS custom properties in
      your <InlineCode>globals.css</InlineCode>. You do not need to fork or
      patch the library — the components read whatever values you define.
    </P>

    <H3>Example: rebrand to an indigo palette</H3>
    <P>
      Change values in the stylesheet from Getting Started; keep every token name. This example changes the
      brand-related tokens and the primary scale, and leaves the rest as they were.
    </P>
    <Code lang="css">{`/* globals.css — edit the values, keep the rest of the stylesheet */
:root {
  /* …other tokens unchanged… */
  --primary-default:    #4f46e5; /* indigo-600 */
  --primary-default-fg: #ffffff;
  --accent:             #7c3aed; /* violet-600 */
}

.dark {
  /* …other tokens unchanged… */
  --primary-default:    #818cf8; /* indigo-400 */
  --primary-default-fg: #1e1b4b;
  --accent:             #a78bfa; /* violet-400 */
}

@theme {
  /* …semantic mappings unchanged… */
  --color-primary-50:  #eef2ff;
  --color-primary-100: #e0e7ff;
  --color-primary-200: #c7d2fe;
  --color-primary-300: #a5b4fc;
  --color-primary-400: #818cf8;
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  --color-primary-700: #4338ca;
  --color-primary-800: #3730a3;
  --color-primary-900: #312e81;
}`}</Code>

    <Callout type="warn">
      The package ships no CSS, so there are no built-in values to fall back to. Every token in the Getting
      Started stylesheet must stay defined; a missing one leaves that colour unset wherever a component uses it.
    </Callout>

    <H3>Adding custom component styles</H3>
    <P>
      Every component accepts a <InlineCode>className</InlineCode> prop for
      one-off overrides without touching the source.
    </P>
    <Code lang="tsx">{`<Button
  variant={BUTTON_VARIANTS.PRIMARY}
  label="Wide CTA"
  onClick={() => {}}
  className="w-full py-4 text-lg"
/>`}</Code>

    {/* Versioning */}
    <H2 id="versioning">Versioning</H2>
    <P>
      GWAN follows <strong>Semantic Versioning</strong> (semver) and is published to npm as{" "}
      <InlineCode>gwan-design-system</InlineCode>. Releases are listed on the{" "}
      <a
        href="https://github.com/gwanfonseka/gwan-design-system/releases"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        GitHub releases page
      </a>
      . To see which version your app has installed:
    </P>
    <Code lang="bash">{`npm ls gwan-design-system`}</Code>

    <Callout type="info">
      Breaking changes are communicated via a <strong>major</strong> version
      bump. Minor versions add new components or tokens. Patch versions are bug
      fixes and documentation updates.
    </Callout>

    {/* Footer */}
    <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-fg">
        © 2026 GWAN.DEV
      </p>
      <div className="flex items-center gap-4">
        <a
          href="/components-library"
          className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-fg hover:text-foreground transition-colors"
        >
          Component Library
        </a>
        <a
          href="/home"
          className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-fg hover:text-foreground transition-colors"
        >
          Home
        </a>
      </div>
    </div>
  </>
);

export default Customisation;
