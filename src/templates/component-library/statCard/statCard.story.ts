import StatCard, { STAT_TREND, type IStatCard } from "@/components/statCard";
import { defineStory, enumOf, icon, text } from "@/playground";

export default defineStory<IStatCard>({
  name: "StatCard",
  component: StatCard,
  args: { label: "Revenue", value: "$48,210", trend: STAT_TREND.UP, trendLabel: "+12% vs last month", icon: "MoneySVG" },
  argTypes: {
    label: {
      description: "What the number measures.",
      control: text(),
      required: true,
      group: "Content",
    },
    value: {
      description: "The headline number, formatted as you want it shown.",
      control: text(),
      type: "string | number",
      required: true,
      group: "Content",
    },
    trend: {
      description: "Direction arrow and colour for the trend label.",
      control: enumOf(STAT_TREND, "STAT_TREND"),
      group: "Content",
    },
    trendLabel: {
      description: "Text next to the trend arrow.",
      control: text(),
      group: "Content",
    },
    icon: {
      description: "Icon in the card header, beside the label.",
      control: icon(),
      group: "Content",
    },
    className: {
      description: "Extra classes on the card.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
