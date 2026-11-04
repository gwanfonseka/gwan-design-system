import { H2, H3, P, Code, Callout, InlineCode } from "../primitives";

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
      The package does not add <InlineCode>&quot;use client&quot;</InlineCode> to its build. Components without hooks
      render fine in a Server Component. Components that use hooks must be imported from a file marked{" "}
      <InlineCode>&quot;use client&quot;</InlineCode>. Server Components also cannot pass event handlers, so a
      component that needs <InlineCode>onClick</InlineCode> or <InlineCode>onChange</InlineCode> to be interactive
      needs a Client Component parent once you pass one.
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
          {(
            [
              ["Accordion", "client", "useState for the open sections"],
              ["Alert", "client", "useState for the dismissed state"],
              ["Avatar", "client", "useState for the name tooltip"],
              ["AvatarGroup", "client", "useState for the +N tooltip"],
              ["Badge", "yes", "No hooks"],
              ["Banner", "yes", "No hooks"],
              ["Breadcrumb", "yes", "No hooks"],
              ["Button", "handlers", "No hooks; onClick is required"],
              ["Callout", "yes", "No hooks"],
              ["Card", "yes", "No hooks"],
              ["Carousel", "client", "useState + useEffect for the slide index and auto-advance"],
              ["Checkbox", "handlers", "No hooks; onChange is required"],
              ["Chip", "handlers", "No hooks; onClear is required"],
              ["CircularProgress", "yes", "No hooks"],
              ["ColorPicker", "client", "useState + useEffect for the panel and hex field"],
              ["CommandPalette", "client", "useState + useEffect for search and keyboard navigation"],
              ["ContextMenu", "client", "useState + useEffect for cursor position and outside clicks"],
              ["DatePicker", "client", "useState + useEffect for the calendar panel"],
              ["DateRangePicker", "client", "useState + useEffect for the two-month calendar"],
              ["Divider", "yes", "No hooks"],
              ["Drawer", "client", "useEffect to lock page scroll while open"],
              ["DropdownMenu", "client", "useState + useEffect for the menu and outside clicks"],
              ["Ellipsis", "client", "useState for the tooltip"],
              ["FileUploader", "client", "useState + useRef for the file list, drag state and hidden input"],
              ["FilterDropdown", "client", "useState for the panel"],
              ["Icons", "yes", "Plain SVG, no hooks"],
              ["Input", "handlers", "No hooks; pass onChange from a Client Component"],
              ["List", "handlers", "No hooks; item onClick needs a Client Component"],
              ["MenuBar", "client", "useState + useEffect for overflow and the mobile menu"],
              ["Modal", "client", "useEffect + useRef for the focus trap and scroll lock"],
              ["MultiSelect", "client", "useState + useEffect for the dropdown, search and keyboard navigation"],
              ["NavBar", "client", "useState + useEffect for collapsing and tooltips"],
              ["OtpInput", "client", "useRef for moving focus between digits"],
              ["Pagination", "client", "useState for the page-size dropdown"],
              ["Popover", "client", "useState + useEffect for open state and outside clicks"],
              ["ProgressBar", "yes", "No hooks"],
              ["RadioButton", "handlers", "No hooks; pass onChange from a Client Component"],
              ["SearchInput", "client", "useEffect + useRef for the debounced search"],
              ["SelectDropdown", "client", "useState + useEffect for the dropdown"],
              ["Skeleton", "yes", "No hooks"],
              ["Slider", "client", "useState for the active thumb"],
              ["Snackbar", "yes", "No hooks; you decide when to render it"],
              ["Spinner", "yes", "No hooks; CSS animation"],
              ["StatCard", "yes", "No hooks"],
              ["States", "yes", "No hooks"],
              ["Stepper", "yes", "No hooks; you set each step's status"],
              ["Switch", "handlers", "Only useId; onChange is required"],
              ["Table", "yes", "No hooks; column render functions run where Table renders"],
              ["Tabs", "handlers", "No hooks; switching tabs needs activeKey + onChange from a Client Component"],
              ["Tag", "yes", "No hooks"],
              ["TextArea", "handlers", "No hooks; pass onChange from a Client Component"],
              ["TimeLine", "yes", "No hooks"],
              ["TimePicker", "client", "useState + useEffect for the scroll columns and outside clicks"],
              ["Tooltip", "yes", "No hooks; you control isVisible"],
            ] as const
          ).map(([comp, mode, reason]) => (
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
