import { BellSVG, MailSVG, ShieldSVG } from "@/components/icons";
import List, { LIST_SIZE, LIST_VARIANT, type IList } from "@/components/list";
import Badge, { BADGE_TYPE } from "@/components/badge";
import { data, defineStory, enumOf, text } from "@/playground";

const SETTINGS = [
  { key: "mail", title: "Email", description: "Weekly summary", icon: <MailSVG />, onClick: () => {} },
  { key: "push", title: "Notifications", description: "Mentions and replies", icon: <BellSVG />, rightSlot: <Badge type={BADGE_TYPE.INFO} label="3" /> },
  { key: "security", title: "Security", description: "Managed by your organisation", icon: <ShieldSVG />, disabled: true },
];

export default defineStory<IList>({
  name: "List",
  component: List,
  args: { items: "Settings" },
  argTypes: {
    items: {
      description:
        "Rows as { key, title, description?, icon?, rightSlot?, disabled?, selected?, onClick? }. Rows with onClick are clickable and respond to Enter and Space.",
      control: data({
        Settings: SETTINGS,
        "Titles only": SETTINGS.map(({ key, title }) => ({ key, title })),
        "With selection": SETTINGS.map((row, index) => ({ ...row, selected: index === 0 })),
      }),
      type: "IListItem[]",
      required: true,
      group: "Content",
    },
    variant: {
      description: "Row and container style.",
      control: enumOf(LIST_VARIANT, "LIST_VARIANT"),
      defaultValue: LIST_VARIANT.DEFAULT,
      group: "Appearance",
    },
    size: {
      description: "Row height and text size.",
      control: enumOf(LIST_SIZE, "LIST_SIZE"),
      defaultValue: LIST_SIZE.MD,
      group: "Appearance",
    },
    className: {
      description: "Extra classes on the list.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
  render: (props) => (
    <div className="w-full max-w-md">
      <List {...props} />
    </div>
  ),
});
