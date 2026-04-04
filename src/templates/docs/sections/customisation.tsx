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
            light="#059669"
            dark="#34d399"
            usage="Success states"
          />
          <TokenRow
            name="--danger"
            light="#e11d48"
            dark="#fb7185"
            usage="Error states"
          />
          <TokenRow
            name="--warning"
            light="#d97706"
            dark="#fbbf24"
            usage="Warning states"
          />
        </tbody>
      </table>
    </div>

    {/* Extending */}
    <H2 id="extending">Extending Themes</H2>
    <P>
      To rebrand GWAN for your project, override the CSS custom properties in
      your <InlineCode>globals.css</InlineCode>. You do not need to fork or
      patch the library — the components read whatever values you define.
    </P>

    <H3>Example: rebrand to an indigo palette</H3>
    <Code lang="css">{`/* Override in your globals.css — after @import "tailwindcss" */
:root {
  --background:      #f5f5ff;
  --foreground:      #1a1a3e;
  --surface:         #ffffff;
  --surface-raised:  #ececff;
  --border:          #c7c7e8;
  --muted-fg:        #6464a0;
  --primary-default: #4f46e5; /* indigo-600 */
  --accent:          #7c3aed; /* violet-600 */
}

.dark {
  --background:      #0f0f1a;
  --foreground:      #e0e0ff;
  --surface:         #16162a;
  --surface-raised:  #1e1e38;
  --border:          #2e2e60;
  --muted-fg:        #8080c0;
  --primary-default: #818cf8; /* indigo-400 */
  --accent:          #a78bfa; /* violet-400 */
}

@theme {
  --color-primary-500: #6366f1; /* your brand base */
}`}</Code>

    <Callout type="tip">
      You only need to override the tokens you want to change. Any tokens you
      leave out will fall back to the GWAN defaults.
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
      GWAN follows <strong>Semantic Versioning</strong> (semver). The version is
      automatically injected at build time via the{" "}
      <InlineCode>NEXT_PUBLIC_APP_VERSION</InlineCode> environment variable,
      which reads from the latest Git tag.
    </P>
    <Code lang="bash">{`# Tag a new release
git tag v0.2.0
git push origin v0.2.0

# The build script picks it up automatically:
# "prebuild": "echo NEXT_PUBLIC_APP_VERSION=$(git describe --tags --abbrev=0) > .env.local"`}</Code>

    <P>You can display the current version in your UI anywhere:</P>
    <Code lang="tsx">{`<span className="text-muted-fg text-xs">
  {process.env.NEXT_PUBLIC_APP_VERSION}
</span>`}</Code>

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
