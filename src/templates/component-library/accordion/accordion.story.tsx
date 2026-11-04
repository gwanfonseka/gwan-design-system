import Accordion, { ACCORDION_VARIANT, type IAccordion, type IAccordionItem } from "@/components/accordion";
import { boolean, data, defineStory, enumOf, text } from "@/playground";

const answer = (body: string) => <p className="text-sm text-muted-fg">{body}</p>;

const FAQ: IAccordionItem[] = [
  { key: "install", title: "How do I install it?", content: answer("Run npm install gwan-design-system, then add the theme tokens to your CSS.") },
  { key: "dark", title: "Does it support dark mode?", content: answer("Yes. Add the dark class to <html> and every component follows.") },
  { key: "tailwind", title: "Which Tailwind version?", content: answer("Tailwind CSS v4.") },
  { key: "legacy", title: "Can I use it with Tailwind v3?", content: answer("Not supported."), disabled: true },
];

export default defineStory<IAccordion>({
  name: "Accordion",
  component: Accordion,
  args: { items: "FAQ", defaultOpenKey: "install" },
  remountOn: ["defaultOpenKey", "allowMultiple"],
  argTypes: {
    items: {
      description: "Sections as { key, title, content, disabled? }.",
      control: data({ FAQ, "Two sections": FAQ.slice(0, 2) }),
      type: "IAccordionItem[]",
      required: true,
      group: "Content",
    },
    defaultOpenKey: {
      description: "Key of the section open on first render.",
      control: text(),
      group: "Behaviour",
    },
    allowMultiple: {
      description: "Lets several sections stay open at once.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    variant: {
      description: "Section style.",
      control: enumOf(ACCORDION_VARIANT, "ACCORDION_VARIANT"),
      defaultValue: ACCORDION_VARIANT.DEFAULT,
      group: "Appearance",
    },
    className: {
      description: "Extra classes on the wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
  render: (props) => (
    <div className="w-full max-w-lg">
      <Accordion {...props} />
    </div>
  ),
});
