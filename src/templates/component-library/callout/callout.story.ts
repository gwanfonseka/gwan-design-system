import Callout, { CALLOUT_TYPE, type ICallout } from "@/components/callout";
import { data, defineStory, enumOf, text } from "@/playground";

export default defineStory<ICallout>({
  name: "Callout",
  component: Callout,
  args: { title: "Heads up", children: "Short" },
  argTypes: {
    title: {
      description: "Bold first line.",
      control: text(),
      group: "Content",
    },
    children: {
      description: "Body of the callout.",
      control: data({
        Short: "Tokens must be defined before the components render.",
        Long: "Tokens must be defined before the components render. Put the :root and .dark blocks at the top of globals.css, then register them with @theme inline.",
      }),
      type: "ReactNode",
      required: true,
      group: "Content",
    },
    type: {
      description: "Colour and icon.",
      control: enumOf(CALLOUT_TYPE, "CALLOUT_TYPE"),
      defaultValue: CALLOUT_TYPE.INFO,
      group: "Appearance",
    },
    className: {
      description: "Extra classes on the callout.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
