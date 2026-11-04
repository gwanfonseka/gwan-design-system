import Button, { BUTTON_VARIANTS } from "@/components/button";
import DropdownMenu, { DROPDOWN_PLACEMENT, type IDropdownMenu, type IDropdownMenuItem } from "@/components/dropdownMenu";
import { ChevDownSVG, CopySVG, EditSVG, LinkSVG, CrossSVG } from "@/components/icons";
import { data, defineStory, enumOf, text } from "@/playground";

export const MENU: IDropdownMenuItem[] = [
  { label: "Edit", icon: <EditSVG />, onClick: () => {} },
  { label: "Duplicate", icon: <CopySVG />, onClick: () => {} },
  { label: "Copy link", icon: <LinkSVG />, onClick: () => {}, disabled: true },
  { isDivider: true },
  { label: "Delete", icon: <CrossSVG />, onClick: () => {}, destructive: true },
];

export default defineStory<IDropdownMenu>({
  name: "DropdownMenu",
  component: DropdownMenu,
  args: { trigger: "Button", items: "Actions" },
  argTypes: {
    trigger: {
      description: "Element that opens the menu.",
      control: data({
        Button: <Button label="Actions" rightIcon={<ChevDownSVG />} variant={BUTTON_VARIANTS.SECONDARY} onClick={() => {}} />,
        Text: <span className="text-sm font-medium text-foreground cursor-pointer">More ▾</span>,
      }),
      type: "ReactNode",
      required: true,
      group: "Content",
    },
    items: {
      description:
        "Entries as { label, icon?, onClick?, disabled?, destructive? }, or { isDivider: true } for a separator.",
      control: data({ Actions: MENU, "Two items": MENU.slice(0, 2) }),
      type: "IDropdownMenuItem[]",
      required: true,
      group: "Content",
    },
    placement: {
      description: "Corner of the trigger the menu lines up with.",
      control: enumOf(DROPDOWN_PLACEMENT, "DROPDOWN_PLACEMENT"),
      defaultValue: DROPDOWN_PLACEMENT.BOTTOM_LEFT,
      group: "Appearance",
    },
    className: {
      description: "Extra classes on the wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
