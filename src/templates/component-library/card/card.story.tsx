import Button, { BUTTON_SIZE, BUTTON_VARIANTS } from "@/components/button";
import Card, { CARD_PADDING, CARD_VARIANT, type ICard } from "@/components/card";
import { data, defineStory, enumOf, text } from "@/playground";

export default defineStory<ICard>({
  name: "Card",
  component: Card,
  args: { children: "Text", header: "Title", footer: "Actions" },
  argTypes: {
    children: {
      description: "Body of the card.",
      control: data({
        Text: (
          <p className="text-sm text-muted-fg">
            Track every order from placement to delivery, with live updates from the courier.
          </p>
        ),
        Stats: (
          <div className="flex gap-8">
            <div>
              <p className="text-2xl font-semibold text-foreground">1,284</p>
              <p className="text-xs text-muted-fg">Orders</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">96%</p>
              <p className="text-xs text-muted-fg">On time</p>
            </div>
          </div>
        ),
      }),
      type: "ReactNode",
      required: true,
      group: "Content",
    },
    header: {
      description: "Content above the body, separated by a rule.",
      control: data({
        None: undefined,
        Title: <p className="font-semibold text-foreground">Order tracking</p>,
      }),
      type: "ReactNode",
      defaultValue: "None",
      group: "Content",
    },
    footer: {
      description: "Content below the body, separated by a rule.",
      control: data({
        None: undefined,
        Actions: (
          <div className="flex justify-end gap-2">
            <Button label="Dismiss" variant={BUTTON_VARIANTS.TERTIARY} size={BUTTON_SIZE.SM} onClick={() => {}} />
            <Button label="Open" size={BUTTON_SIZE.SM} onClick={() => {}} />
          </div>
        ),
      }),
      type: "ReactNode",
      defaultValue: "None",
      group: "Content",
    },
    variant: {
      description: "Surface treatment.",
      control: enumOf(CARD_VARIANT, "CARD_VARIANT"),
      defaultValue: CARD_VARIANT.DEFAULT,
      group: "Appearance",
    },
    padding: {
      description: "Inner spacing of the header, body and footer.",
      control: enumOf(CARD_PADDING, "CARD_PADDING"),
      defaultValue: CARD_PADDING.MD,
      group: "Appearance",
    },
    className: {
      description: "Extra classes on the card, e.g. a width.",
      control: text("e.g. w-80"),
      defaultValue: "",
      group: "Advanced",
    },
  },
  render: (props) => (
    <div className="w-full max-w-sm">
      <Card {...props} />
    </div>
  ),
});
