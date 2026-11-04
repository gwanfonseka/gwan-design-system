import Tabs, { TABS_VARIANT, type ITabItem, type ITabs } from "@/components/tabs";
import { action, data, defineStory, enumOf, text } from "@/playground";

const panel = (body: string) => <p className="text-sm text-muted-fg py-4">{body}</p>;

const ACCOUNT: ITabItem[] = [
  { key: "profile", label: "Profile", content: panel("Name, photo and bio.") },
  { key: "security", label: "Security", content: panel("Password and two-factor settings.") },
  { key: "billing", label: "Billing", content: panel("Plan, invoices and payment method.") },
  { key: "api", label: "API", content: panel("Keys are available on paid plans."), disabled: true },
];

export default defineStory<ITabs>({
  name: "Tabs",
  component: Tabs,
  args: { items: "Account settings", activeKey: "profile" },
  bindings: [{ prop: "activeKey", event: "onChange" }],
  argTypes: {
    items: {
      description: "Tabs as { key, label, content, disabled? }. Content is rendered under the tab list.",
      control: data({ "Account settings": ACCOUNT, "Two tabs": ACCOUNT.slice(0, 2) }),
      type: "ITabItem[]",
      required: true,
      group: "Content",
    },
    activeKey: {
      description: "Key of the selected tab. Defaults to the first one.",
      control: text(),
      group: "Content",
    },
    variant: {
      description: "Tab list style.",
      control: enumOf(TABS_VARIANT, "TABS_VARIANT"),
      defaultValue: TABS_VARIANT.UNDERLINE,
      group: "Appearance",
    },
    onChange: {
      description: "Called with the key of the tab the user picks.",
      control: action(),
      type: "(key: string) => void",
      group: "Events",
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
      <Tabs {...props} />
    </div>
  ),
});
