import { H2, H3, P, Code, Callout, InlineCode } from "../primitives";

const Usage = () => (
  <>
    {/* Using Components */}
    <H2 id="components">Using Components</H2>
    <P>
      Every GWAN component is a typed React functional component. Import directly from the package and pass the required props. Each component exposes an enum for its variant or type prop to ensure type safety.
    </P>

    <H3>Button</H3>
    <Code lang="tsx">{`import Button, { BUTTON_VARIANTS } from "gwan-design-system/button";

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
    <Code lang="tsx">{`import Tag, { TAG_TYPE } from "gwan-design-system/tag";

<Tag type={TAG_TYPE.SUCCESS} label="Completed" />
<Tag type={TAG_TYPE.DANGER}  label="Failed" />
<Tag type={TAG_TYPE.WARNING} label="Pending" />
<Tag type={TAG_TYPE.INFO}    label="In Transit" />`}</Code>

    <H3>Avatar</H3>
    <Code lang="tsx">{`import Avatar, { AVATAR_VARIANT } from "gwan-design-system/avatar";

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
    <Code lang="tsx">{`import Input from "gwan-design-system/input";

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
    <Code lang="tsx">{`import Snackbar, { SNACK_BAR_TYPE } from "gwan-design-system/snackBar";
import { CheckSVG } from "gwan-design-system/icons";

<Snackbar
  type={SNACK_BAR_TYPE.SUCCESS}
  message="Profile updated successfully"
  icon={<CheckSVG />}
/>`}</Code>

    {/* Plug & Play */}
    <H2 id="plug-and-play">Plug & Play</H2>
    <P>
      The real power of GWAN is how quickly you can assemble full UI surfaces. Below is a complete user profile card built entirely from GWAN components — no custom styles required.
    </P>

    <Code lang="tsx">{`"use client";

import { useState } from "react";
import Button, { BUTTON_VARIANTS } from "gwan-design-system/button";
import Avatar, { AVATAR_VARIANT } from "gwan-design-system/avatar";
import Tag, { TAG_TYPE }           from "gwan-design-system/tag";
import Input                        from "gwan-design-system/input";
import Snackbar, { SNACK_BAR_TYPE } from "gwan-design-system/snackBar";
import { CheckSVG }                 from "gwan-design-system/icons";

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
        icon={<CheckSVG />}
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

    <P>That is the full component. No utility class overrides, no theme wiring — it picks up light and dark mode automatically from the CSS variables you set up once.</P>

    {/* Client vs Server */}
    <H2 id="client-server">Client vs Server Components</H2>
    <P>
      Most GWAN components are pure presentational components and work in both server and client contexts. A small number — those that use <InlineCode>useState</InlineCode>, <InlineCode>useEffect</InlineCode>, or browser APIs — must be used inside a <InlineCode>&quot;use client&quot;</InlineCode> boundary.
    </P>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-border text-left">
            <th className="pb-3 pr-4 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">Component</th>
            <th className="pb-3 pr-4 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">Server Safe</th>
            <th className="pb-3 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">Reason</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Accordion", "✗ Client", "Uses useState for open/close state per item"],
            ["Alert", "✗ Client", "Uses useState for dismiss state"],
            ["Avatar", "✗ Client", "Uses useState + useEffect for pastel colour generation"],
            ["Badge", "✓ Yes", "Pure presentational"],
            ["Banner", "✓ Yes", "Pure presentational"],
            ["Breadcrumb", "✓ Yes", "Pure presentational"],
            ["Button", "✓ Yes", "Accepts onClick as a prop — no internal hooks"],
            ["Callout", "✓ Yes", "Pure presentational"],
            ["Carousel", "✗ Client", "Uses useState + useEffect for slide index and auto-play"],
            ["Checkbox", "✓ Yes", "Controlled — accepts onChange as a prop, no internal hooks"],
            ["Chip", "✓ Yes", "Accepts onClick as a prop — no internal hooks"],
            ["ColorPicker", "✗ Client", "Marked use client — uses useState for colour state"],
            ["CommandPalette", "✗ Client", "Marked use client — uses useState + keyboard listeners"],
            ["DatePicker", "✗ Client", "Marked use client — uses useState for calendar state"],
            ["Drawer", "✗ Client", "Uses useEffect to lock body scroll"],
            ["Ellipsis", "✗ Client", "Uses useState for tooltip visibility"],
            ["FileUploader", "✗ Client", "Uses useRef to trigger the hidden file input"],
            ["FilterDropdown", "✗ Client", "Uses useState for dropdown visibility"],
            ["Icons", "✓ Yes", "Pure SVG components — no hooks"],
            ["Input", "✓ Yes", "Controlled — accepts onChange as a prop, no internal hooks"],
            ["Modal", "✗ Client", "Uses useEffect + useRef for focus trap and scroll lock"],
            ["NavBar", "✗ Client", "Uses useState + useEffect for collapse, tooltips, active item"],
            ["Pagination", "✗ Client", "Uses useState for page-size dropdown"],
            ["Popover", "✗ Client", "Marked use client — uses useState + click-outside detection"],
            ["ProgressBar", "✓ Yes", "Pure presentational"],
            ["RadioButton", "✓ Yes", "Controlled — accepts onChange as a prop, no internal hooks"],
            ["SelectDropdown", "✗ Client", "Uses useState + useEffect + useRef for dropdown state"],
            ["Skeleton", "✓ Yes", "Pure presentational"],
            ["Snackbar", "✓ Yes", "Pure presentational — visibility controlled by consumer"],
            ["States", "✓ Yes", "Pure presentational"],
            ["Stepper", "✓ Yes", "Pure presentational — step state controlled by consumer"],
            ["Switch", "✓ Yes", "Controlled — accepts onChange as a prop, no internal hooks"],
            ["Table", "✓ Yes", "Pure presentational — data and sorting controlled by consumer"],
            ["Tabs", "✓ Yes", "Controlled — accepts activeTab + onChange as props, no internal hooks"],
            ["Tag", "✓ Yes", "Pure presentational"],
            ["TimeLine", "✗ Client", "Uses useState + useEffect for animated step progression"],
            ["Tooltip", "✓ Yes", "Pure presentational — visibility controlled by consumer"],
          ].map(([comp, safe, reason]) => (
            <tr key={comp} className="border-b border-border">
              <td className="py-2.5 pr-4 font-mono text-[12px] text-foreground">{comp}</td>
              <td className={`py-2.5 pr-4 text-[12px] font-semibold ${safe.startsWith("✓") ? "text-success" : "text-danger"}`}>{safe}</td>
              <td className="py-2.5 text-[12px] text-muted-fg">{reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <Callout type="tip">
      When importing client-only components inside a Server Component page, wrap them in their own file marked <InlineCode>&quot;use client&quot;</InlineCode> rather than marking the entire page client-side.
    </Callout>
  </>
);

export default Usage;
