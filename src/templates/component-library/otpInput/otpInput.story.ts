import OtpInput, { OTP_SIZE, type IOtpInput } from "@/components/otpInput";
import { action, boolean, defineStory, enumOf, range, text } from "@/playground";

export default defineStory<IOtpInput>({
  name: "OtpInput",
  component: OtpInput,
  args: { value: "", label: "Verification code" },
  bindings: [{ prop: "value", event: "onChange" }],
  argTypes: {
    value: {
      description: "Digits entered so far. Controlled: update it from onChange.",
      control: text(),
      required: true,
      group: "Content",
    },
    label: {
      description: "Label above the boxes.",
      control: text(),
      group: "Content",
    },
    length: {
      description: "Number of boxes.",
      control: range(4, 8),
      defaultValue: 6,
      group: "Appearance",
    },
    size: {
      description: "Box size.",
      control: enumOf(OTP_SIZE, "OTP_SIZE"),
      defaultValue: OTP_SIZE.MD,
      group: "Appearance",
    },
    mask: {
      description: "Hides the digits like a password.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    disabled: {
      description: "Blocks input and dims the boxes.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    isError: {
      description: "Shows the error style. Turns on errorMessage.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    errorMessage: {
      description: "Message under the boxes while isError is on.",
      control: text("That code didn't match"),
      group: "Behaviour",
      visible: (args) => args.isError === true,
    },
    onChange: {
      description: "Called with the digits on every change.",
      control: action(),
      type: "(value: string) => void",
      required: true,
      group: "Events",
    },
    onComplete: {
      description: "Called once every box is filled.",
      control: action(),
      type: "(value: string) => void",
      group: "Events",
    },
    className: {
      description: "Extra classes on the wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
