import TextLink, { type ITextLink } from "@/components/textLink";
import { action, defineStory, options, text } from "@/playground";

export default defineStory<ITextLink>({
  name: "TextLink",
  component: TextLink,
  args: { href: "https://gwan.dev", children: "Read the docs" },
  argTypes: {
    children: {
      description: "Link text.",
      control: text(),
      type: "ReactNode",
      required: true,
      group: "Content",
    },
    href: {
      description: "Where the link goes.",
      control: text(),
      required: true,
      group: "Behaviour",
    },
    target: {
      description: "Where to open it. _blank adds a safe rel unless you set one.",
      control: options(["_self", "_blank"]),
      type: "string",
      group: "Behaviour",
    },
    rel: {
      description: "Link relationship.",
      control: text(),
      group: "Behaviour",
    },
    onClick: {
      description: "Called when the link is clicked. Receives the event, so a router can take over.",
      control: action({ optional: true }),
      group: "Events",
    },
    className: {
      description: "Extra classes on the link.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
