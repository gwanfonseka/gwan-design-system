import Alert, { ALERT_TYPE, ALERT_VARIANT, type IAlert } from "@/components/alert";
import { action, boolean, data, defineStory, enumOf, icon, text } from "@/playground";

export default defineStory<IAlert>({
  name: "Alert",
  component: Alert,
  args: { title: "Payment method expiring", message: "Short" },
  remountOn: ["dismissible"],
  argTypes: {
    title: {
      description: "Bold first line.",
      control: text(),
      group: "Content",
    },
    message: {
      description: "Body of the alert.",
      control: data({
        Short: "Your card ending 4242 expires next month.",
        Long: "Your card ending 4242 expires next month. Update it before 1 April to keep your plan active and avoid losing access to your projects.",
      }),
      type: "ReactNode",
      required: true,
      group: "Content",
    },
    icon: {
      description: "Replaces the type's default icon.",
      control: icon(),
      group: "Content",
    },
    type: {
      description: "Semantic colour and default icon.",
      control: enumOf(ALERT_TYPE, "ALERT_TYPE"),
      defaultValue: ALERT_TYPE.INFO,
      group: "Appearance",
    },
    variant: {
      description: "Fill strength.",
      control: enumOf(ALERT_VARIANT, "ALERT_VARIANT"),
      defaultValue: ALERT_VARIANT.SUBTLE,
      group: "Appearance",
    },
    dismissible: {
      description: "Adds a close button. The alert hides itself when it's clicked.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    onDismiss: {
      description: "Called after the alert is dismissed.",
      control: action(),
      group: "Events",
      visible: (args) => args.dismissible === true,
    },
    className: {
      description: "Extra classes on the alert.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
