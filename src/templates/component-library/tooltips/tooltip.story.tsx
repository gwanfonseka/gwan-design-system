import Button, { BUTTON_VARIANTS } from "@/components/button";
import Tooltip, { TOOLTIP_POSITION, type ITooltip } from "@/components/tooltip";
import { boolean, defineStory, enumOf, options, text } from "@/playground";

export default defineStory<ITooltip>({
  name: "Tooltip",
  component: Tooltip,
  args: { label: "Copies the link to your clipboard", position: TOOLTIP_POSITION.TOP, isVisible: true },
  argTypes: {
    label: {
      description: "Tooltip text or content.",
      control: text(),
      type: "ReactNode",
      required: true,
      group: "Content",
    },
    position: {
      description: "Side of the target it appears on.",
      control: enumOf(TOOLTIP_POSITION, "TOOLTIP_POSITION"),
      required: true,
      group: "Appearance",
    },
    isVisible: {
      description: "Shows the tooltip. You control it, e.g. from the target's hover and focus.",
      control: boolean(),
      required: true,
      group: "Behaviour",
    },
    toolTipWidth: {
      description: "Width class of the bubble.",
      control: options(["w-40", "w-60", "w-80", "w-max"]),
      defaultValue: "w-60",
      group: "Appearance",
    },
    toolTipClass: {
      description: "Extra classes on the bubble, e.g. text alignment.",
      control: text("e.g. text-center"),
      defaultValue: "",
      group: "Advanced",
    },
    className: {
      description: "Extra classes on the outer wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
  // The tooltip positions itself against the nearest relative parent.
  render: (props) => (
    <div className="relative w-fit">
      <Button label="Copy link" variant={BUTTON_VARIANTS.SECONDARY} onClick={() => {}} />
      <Tooltip {...props} />
    </div>
  ),
  usage: (generated) => {
    const [imports, element] = generated.split("\n\n");
    const inner = element.split("\n").map((l) => `  ${l}`).join("\n");
    return `${imports.replace(/import \{ /, "import { Button, ")}\n\n<div className="relative w-fit">\n  <Button label="Copy link" onClick={() => {}} />\n${inner}\n</div>`;
  },
});
