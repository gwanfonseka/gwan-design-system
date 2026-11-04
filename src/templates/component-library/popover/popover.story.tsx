import Button, { BUTTON_VARIANTS } from "@/components/button";
import Popover, { POPOVER_PLACEMENT, POPOVER_TRIGGER, type IPopover } from "@/components/popover";
import { data, defineStory, enumOf, text } from "@/playground";

export default defineStory<IPopover>({
  name: "Popover",
  component: Popover,
  args: { trigger: "Button", content: "Text", title: "Shipping" },
  argTypes: {
    trigger: {
      description: "Element that opens the popover.",
      control: data({
        Button: <Button label="Details" variant={BUTTON_VARIANTS.SECONDARY} onClick={() => {}} />,
        Link: <span className="text-sm underline text-foreground cursor-pointer">What&apos;s this?</span>,
      }),
      type: "ReactNode",
      required: true,
      group: "Content",
    },
    content: {
      description: "Body of the popover.",
      control: data({
        Text: <p className="text-sm text-muted-fg w-56">Orders placed before 2pm ship the same day.</p>,
        Actions: (
          <div className="flex gap-2">
            <Button label="Accept" onClick={() => {}} />
            <Button label="Decline" variant={BUTTON_VARIANTS.TERTIARY} onClick={() => {}} />
          </div>
        ),
      }),
      type: "ReactNode",
      required: true,
      group: "Content",
    },
    title: {
      description: "Heading at the top of the popover.",
      control: text(),
      group: "Content",
    },
    placement: {
      description: "Side of the trigger it opens on.",
      control: enumOf(POPOVER_PLACEMENT, "POPOVER_PLACEMENT"),
      defaultValue: POPOVER_PLACEMENT.BOTTOM,
      group: "Appearance",
    },
    triggerOn: {
      description: "Open on click, or while hovering.",
      control: enumOf(POPOVER_TRIGGER, "POPOVER_TRIGGER"),
      defaultValue: POPOVER_TRIGGER.CLICK,
      group: "Behaviour",
    },
    className: {
      description: "Extra classes on the popover panel.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
