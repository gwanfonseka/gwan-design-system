import Button from "@/components/button";
import Drawer, { DRAWER_PLACEMENT, DRAWER_SIZE, type IDrawer } from "@/components/drawer";
import Input from "@/components/input";
import { action, boolean, data, defineStory, enumOf, text } from "@/playground";
import { openBinding, triggerUsage } from "@/playground/overlay";

export default defineStory<IDrawer>({
  name: "Drawer",
  component: Drawer,
  args: { open: false, title: "Edit profile", children: "Form" },
  bindings: [openBinding],
  argTypes: {
    open: {
      description: "Whether the drawer is showing. Controlled: set it false from onClose.",
      control: boolean(),
      required: true,
      group: "Content",
    },
    title: {
      description: "Heading in the drawer's header.",
      control: text(),
      group: "Content",
    },
    children: {
      description: "Body of the drawer.",
      control: data({
        Form: (
          <div className="flex flex-col gap-4 p-4">
            <Input label="Name" value="John Doe" onChange={() => {}} />
            <Input label="Email" value="john.doe@email.com" onChange={() => {}} />
            <Button label="Save" onClick={() => {}} />
          </div>
        ),
        Text: <p className="p-4 text-sm text-muted-fg">Drawers suit secondary tasks that keep the page in view.</p>,
      }),
      type: "ReactNode",
      required: true,
      group: "Content",
    },
    placement: {
      description: "Edge the drawer slides in from.",
      control: enumOf(DRAWER_PLACEMENT, "DRAWER_PLACEMENT"),
      defaultValue: DRAWER_PLACEMENT.RIGHT,
      group: "Appearance",
    },
    size: {
      description: "Width (or height, from the top or bottom).",
      control: enumOf(DRAWER_SIZE, "DRAWER_SIZE"),
      defaultValue: DRAWER_SIZE.MEDIUM,
      group: "Appearance",
    },
    showOverlay: {
      description: "Dims the page behind the drawer. Clicking the overlay closes it.",
      control: boolean(),
      defaultValue: true,
      group: "Appearance",
    },
    onClose: {
      description: "Called from the close button or the overlay.",
      control: action(),
      required: true,
      group: "Events",
    },
    className: {
      description: "Extra classes on the drawer panel.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
  render: (props, { setArgs }) => (
    <>
      <Button label="Open drawer" onClick={() => setArgs({ open: true })} />
      <Drawer {...props} />
    </>
  ),
  usage: triggerUsage("Open drawer"),
});
