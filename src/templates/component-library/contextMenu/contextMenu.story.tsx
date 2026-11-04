import ContextMenu, { type IContextMenu } from "@/components/contextMenu";
import { data, defineStory, text } from "@/playground";
import { MENU } from "../dropdownMenu/dropdownMenu.story";

export default defineStory<IContextMenu>({
  name: "ContextMenu",
  component: ContextMenu,
  args: { children: "Drop zone", items: "Actions" },
  argTypes: {
    children: {
      description: "Area that opens the menu on right-click.",
      control: data({
        "Drop zone": (
          <div className="w-72 h-36 flex items-center justify-center rounded-lg border-2 border-dashed border-border text-sm text-muted-fg select-none">
            Right-click here
          </div>
        ),
        "File row": (
          <div className="w-72 px-4 py-3 rounded-lg bg-surface-raised text-sm text-foreground select-none">
            invoice-0042.pdf
          </div>
        ),
      }),
      type: "ReactNode",
      required: true,
      group: "Content",
    },
    items: {
      description: "Same entries as DropdownMenu: { label, icon?, onClick?, disabled?, destructive? } or { isDivider: true }.",
      control: data({ Actions: MENU, "Two items": MENU.slice(0, 2) }),
      type: "IDropdownMenuItem[]",
      required: true,
      group: "Content",
    },
    className: {
      description: "Extra classes on the wrapper around the area.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
