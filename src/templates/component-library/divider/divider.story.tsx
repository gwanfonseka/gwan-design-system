import Divider, { DIVIDER_ORIENTATION, DIVIDER_VARIANT, type IDivider } from "@/components/divider";
import { data, defineStory, enumOf, text } from "@/playground";

export default defineStory<IDivider>({
  name: "Divider",
  component: Divider,
  args: {},
  argTypes: {
    orientation: {
      description: "Horizontal rule between blocks, or vertical rule between inline items.",
      control: enumOf(DIVIDER_ORIENTATION, "DIVIDER_ORIENTATION"),
      defaultValue: DIVIDER_ORIENTATION.HORIZONTAL,
      group: "Appearance",
    },
    variant: {
      description: "Line style.",
      control: enumOf(DIVIDER_VARIANT, "DIVIDER_VARIANT"),
      defaultValue: DIVIDER_VARIANT.SOLID,
      group: "Appearance",
    },
    label: {
      description: "Text in the middle of the divider, e.g. \"or\".",
      control: data({ None: undefined, Or: "or", Section: "Billing details" }),
      type: "ReactNode",
      defaultValue: "None",
      group: "Content",
    },
    className: {
      description: "Extra classes on the divider.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
  // Show it between real content so both orientations make sense.
  render: (props) =>
    props.orientation === DIVIDER_ORIENTATION.VERTICAL ? (
      <div className="flex items-center gap-4 h-8 text-sm text-foreground">
        <span>Docs</span>
        <Divider {...props} />
        <span>Blog</span>
        <Divider {...props} />
        <span>Changelog</span>
      </div>
    ) : (
      <div className="w-full max-w-md flex flex-col gap-4 text-sm text-foreground">
        <p>Sign in with your email.</p>
        <Divider {...props} />
        <p>Continue with a passkey.</p>
      </div>
    ),
});
