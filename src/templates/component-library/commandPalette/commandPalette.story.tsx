import Button from "@/components/button";
import CommandPalette, { type ICommandItem, type ICommandPalette } from "@/components/commandPalette";
import { AddSVG, DashboardSVG, SettingsSVG, SignOutSVG } from "@/components/icons";
import { action, boolean, data, defineStory, text } from "@/playground";
import { openBinding, triggerUsage } from "@/playground/overlay";

const COMMANDS: ICommandItem[] = [
  { id: "new", label: "New project", icon: <AddSVG />, group: "Actions", shortcut: ["⌘", "N"], onSelect: () => {} },
  { id: "dash", label: "Go to dashboard", icon: <DashboardSVG />, group: "Navigation", onSelect: () => {} },
  { id: "settings", label: "Settings", description: "Profile, billing and team", icon: <SettingsSVG />, group: "Navigation", shortcut: ["⌘", ","], onSelect: () => {} },
  { id: "out", label: "Sign out", icon: <SignOutSVG />, group: "Account", onSelect: () => {} },
];

export default defineStory<ICommandPalette>({
  name: "CommandPalette",
  component: CommandPalette,
  args: { open: false, items: "App commands" },
  bindings: [openBinding],
  argTypes: {
    open: {
      description: "Whether the palette is showing. Controlled: open it from your own shortcut, close it from onClose.",
      control: boolean(),
      required: true,
      group: "Content",
    },
    items: {
      description:
        "Commands as { id, label, onSelect, description?, icon?, group?, shortcut? }. Items with the same group are listed together.",
      control: data({ "App commands": COMMANDS, Empty: [] }),
      type: "ICommandItem[]",
      required: true,
      group: "Content",
    },
    placeholder: {
      description: "Hint in the search field.",
      control: text(),
      defaultValue: "Type a command or search...",
      group: "Content",
    },
    emptyMessage: {
      description: "Shown when nothing matches the search.",
      control: text(),
      defaultValue: "No results found.",
      group: "Content",
    },
    onClose: {
      description: "Called on Escape, a click outside, or after a command runs.",
      control: action(),
      required: true,
      group: "Events",
    },
    className: {
      description: "Extra classes on the palette panel.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
  render: (props, { setArgs }) => (
    <>
      <Button label="Open command palette" onClick={() => setArgs({ open: true })} />
      <CommandPalette {...props} />
    </>
  ),
  usage: triggerUsage("Open command palette"),
});
