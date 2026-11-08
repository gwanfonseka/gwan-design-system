import TimeLine, { STEP_DIRECTION, type ITimeLine } from "@/components/timeLine";
import { data, defineStory, enumOf, text } from "@/playground";

const ORDER = [
  { title: "Order placed", placeholderRight: "09:12", description: "Payment confirmed.", status: "Success" },
  { title: "Packed", placeholderRight: "11:40", status: "Success" },
  { title: "Out for delivery", placeholderRight: "14:05", placeholderBottom: "Courier: Kasun", status: "Success" },
];

export default defineStory<ITimeLine>({
  name: "TimeLine",
  component: TimeLine,
  args: { logs: "In progress" },
  argTypes: {
    logs: {
      description:
        "Events in order. status is \"Success\", \"Failed\" or \"Finished\" (any case), or a TIMELINE_STATUS value. Until the last log is Failed or Finished, a Pending step is added at the end.",
      control: data({
        "In progress": ORDER,
        Delivered: [...ORDER, { title: "Delivered", placeholderRight: "16:30", status: "Finished" }],
        Failed: [...ORDER.slice(0, 2), { title: "Delivery failed", description: "No one was home.", status: "Failed" }],
        Empty: [],
      }),
      type: "ILog[]",
      required: true,
      group: "Content",
    },
    direction: {
      description: "Oldest event first (downward) or newest first (upward).",
      control: enumOf(STEP_DIRECTION, "STEP_DIRECTION"),
      defaultValue: STEP_DIRECTION.DOWNWARD,
      group: "Appearance",
    },
    className: {
      description: "Extra classes on the wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
