import Stepper, { STEP_STATUS, STEPPER_ORIENTATION, STEPPER_VARIANT, type IStepper } from "@/components/stepper";
import { boolean, data, defineStory, enumOf, text } from "@/playground";

const CHECKOUT = [
  { key: "cart", title: "Cart", description: "2 items", status: STEP_STATUS.COMPLETE },
  { key: "shipping", title: "Shipping", description: "Address and method", status: STEP_STATUS.ACTIVE },
  { key: "payment", title: "Payment", status: STEP_STATUS.PENDING },
  { key: "review", title: "Review", status: STEP_STATUS.PENDING },
];

export default defineStory<IStepper>({
  name: "Stepper",
  component: Stepper,
  layout: "fullwidth",
  args: { steps: "Checkout", activeKey: "shipping" },
  argTypes: {
    steps: {
      description: "Steps as { key, title, description?, status?, content? }. status sets each step's icon and colour.",
      control: data({
        Checkout: CHECKOUT,
        "With error": CHECKOUT.map((s) => (s.key === "payment" ? { ...s, status: STEP_STATUS.ERROR, description: "Card declined" } : s)),
      }),
      type: "IStep[]",
      required: true,
      group: "Content",
    },
    activeKey: {
      description: "Key of the current step.",
      control: text(),
      group: "Content",
    },
    orientation: {
      description: "Steps in a row or a column.",
      control: enumOf(STEPPER_ORIENTATION, "STEPPER_ORIENTATION"),
      defaultValue: STEPPER_ORIENTATION.HORIZONTAL,
      group: "Appearance",
    },
    variant: {
      description: "Full step markers or a minimal style.",
      control: enumOf(STEPPER_VARIANT, "STEPPER_VARIANT"),
      defaultValue: STEPPER_VARIANT.DEFAULT,
      group: "Appearance",
    },
    showAllContent: {
      description: "Vertical only: shows every step's content, not just the active step's.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    className: {
      description: "Extra classes on the wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
