import { H2, H3, P, Code, Callout, InlineCode } from "../primitives";
import { SERVER_SUPPORT } from "../server-support";

const Usage = () => (
  <>
    {/* Using Components */}
    <H2 id="components">Using Components</H2>
    <P>
      Every GWAN component is a typed React function component. Import it from the package root and pass the required props. Components with fixed choices, such as variants, sizes and types, export an enum for them, so a wrong value is a type error.
    </P>

    <H3>Button</H3>
    <Code lang="tsx">{`import { Button, BUTTON_VARIANTS } from "gwan-design-system";

<Button
  variant={BUTTON_VARIANTS.PRIMARY}
  label="Save Changes"
  onClick={() => console.log("clicked")}
/>

<Button
  variant={BUTTON_VARIANTS.SECONDARY}
  label="Cancel"
  onClick={() => {}}
  disabled
/>`}</Code>

    <H3>Tag</H3>
    <Code lang="tsx">{`import { Tag, TAG_TYPE } from "gwan-design-system";

<Tag type={TAG_TYPE.SUCCESS} label="Completed" />
<Tag type={TAG_TYPE.DANGER}  label="Failed" />
<Tag type={TAG_TYPE.WARNING} label="Pending" />
<Tag type={TAG_TYPE.INFO}    label="In Transit" />`}</Code>

    <H3>Avatar</H3>
    <Code lang="tsx">{`import { Avatar, AVATAR_VARIANT } from "gwan-design-system";

// With image
<Avatar
  name="Alex Chon"
  email="alex@gwan.dev"
  image="/images/profile.png"
  variant={AVATAR_VARIANT.IMAGE_WITH_FULL}
/>

// Initials only
<Avatar
  name="Sam Rivera"
  email="sam@gwan.dev"
  variant={AVATAR_VARIANT.INITIALS_ONLY}
/>`}</Code>

    <H3>Input</H3>
    <Code lang="tsx">{`import { Input } from "gwan-design-system";

const [value, setValue] = useState("");

<Input
  label="Email address"
  type="email"
  value={value}
  placeholder="you@example.com"
  onChange={(e) => setValue(e.target.value)}
  onClear={value ? () => setValue("") : undefined}
/>`}</Code>

    <H3>Snackbar</H3>
    <Code lang="tsx">{`import { Snackbar, SNACK_BAR_TYPE, CheckSVG } from "gwan-design-system";

<Snackbar
  type={SNACK_BAR_TYPE.SUCCESS}
  message="Profile updated successfully"
  icon={<CheckSVG />}
/>`}</Code>

    {/* Plug & Play */}
    <H2 id="plug-and-play">Plug & Play</H2>
    <P>
      GWAN components are built to sit together. Below is a complete user profile card made only of GWAN components, plus one wrapper div for layout.
    </P>

    <Code lang="tsx">{`"use client";

import { useState } from "react";
import {
  Avatar,
  AVATAR_VARIANT,
  Button,
  BUTTON_VARIANTS,
  CheckSVG,
  Input,
  Snackbar,
  SNACK_BAR_TYPE,
  Tag,
  TAG_TYPE,
} from "gwan-design-system";

export default function ProfileCard() {
  const [name, setName]   = useState("Alex Chon");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-surface border border-border rounded-2xl p-6 flex flex-col gap-6 max-w-sm">
      <Avatar
        name={name}
        email="alex@gwan.dev"
        variant={AVATAR_VARIANT.INITIALS_WITH_FULL}
      />

      <div className="flex gap-2">
        <Tag type={TAG_TYPE.SUCCESS} label="Active" />
        <Tag type={TAG_TYPE.INFO}    label="Admin" />
      </div>

      <Input
        label="Display name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onClear={name ? () => setName("") : undefined}
      />

      <Button
        variant={BUTTON_VARIANTS.PRIMARY}
        label="Save Changes"
        leftIcon={<CheckSVG />}
        onClick={handleSave}
      />

      {saved && (
        <Snackbar
          type={SNACK_BAR_TYPE.SUCCESS}
          message="Profile saved successfully"
          icon={<CheckSVG />}
        />
      )}
    </div>
  );
}`}</Code>

    <P>That is the full component. There is no per-component theming: it follows light and dark mode through the CSS variables you define once in Getting Started.</P>

    {/* Client vs Server */}
    <H2 id="client-server">Client vs Server Components</H2>
    <P>
      The package does not add <InlineCode>&quot;use client&quot;</InlineCode> to its build. Components that only
      display content render in a Server Component. Interactive ones, which use hooks or attach their own event
      handlers, must be imported from a file marked <InlineCode>&quot;use client&quot;</InlineCode>. A few render
      on the server until you pass them a handler, because Server Components cannot pass functions.
    </P>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-border text-left">
            <th className="pb-3 pr-4 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">Component</th>
            <th className="pb-3 pr-4 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">In a Server Component</th>
            <th className="pb-3 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">Reason</th>
          </tr>
        </thead>
        <tbody>
          {SERVER_SUPPORT.map(([comp, mode, reason]) => (
            <tr key={comp} className="border-b border-border">
              <td className="py-2.5 pr-4 font-mono text-[12px] text-foreground">{comp}</td>
              <td
                className={`py-2.5 pr-4 text-[12px] font-semibold ${
                  mode === "yes" ? "text-success" : mode === "handlers" ? "text-warning" : "text-danger"
                }`}
              >
                {mode === "yes" ? "✓ Yes" : mode === "handlers" ? "✓ Without handlers" : "✗ Client only"}
              </td>
              <td className="py-2.5 text-[12px] text-muted-fg">{reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <Callout type="tip">
      Put client-only components in their own file marked <InlineCode>&quot;use client&quot;</InlineCode> and import
      that file from your Server Component page, rather than marking the whole page client-side.
    </Callout>
  </>
);

export default Usage;
