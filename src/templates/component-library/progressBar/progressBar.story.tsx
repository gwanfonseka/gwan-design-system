import ProgressBar, { PROGRESS_BAR_SIZE, PROGRESS_BAR_TYPE, type IProgressBar } from "@/components/progressBar";
import { boolean, defineStory, enumOf, number, range, text } from "@/playground";

export default defineStory<IProgressBar>({
  name: "ProgressBar",
  component: ProgressBar,
  args: { value: 64, label: "Uploading", showValue: true },
  argTypes: {
    value: {
      description: "Progress so far, out of max.",
      control: range(0, 100),
      required: true,
      group: "Content",
    },
    max: {
      description: "Value that counts as complete.",
      control: number({ min: 1 }),
      defaultValue: 100,
      group: "Content",
    },
    label: {
      description: "Text above the bar. Also names the progressbar for screen readers.",
      control: text(),
      group: "Content",
    },
    showValue: {
      description: "Shows the percentage next to the label.",
      control: boolean(),
      defaultValue: false,
      group: "Content",
    },
    type: {
      description: "Semantic colour.",
      control: enumOf(PROGRESS_BAR_TYPE, "PROGRESS_BAR_TYPE"),
      defaultValue: PROGRESS_BAR_TYPE.DEFAULT,
      group: "Appearance",
    },
    size: {
      description: "Bar thickness.",
      control: enumOf(PROGRESS_BAR_SIZE, "PROGRESS_BAR_SIZE"),
      defaultValue: PROGRESS_BAR_SIZE.MEDIUM,
      group: "Appearance",
    },
    striped: {
      description: "Adds diagonal stripes to the fill.",
      control: boolean(),
      defaultValue: false,
      group: "Appearance",
    },
    animated: {
      description: "Moves the stripes. Has no effect without striped.",
      control: boolean(),
      defaultValue: false,
      group: "Appearance",
      visible: (args) => args.striped === true,
    },
    className: {
      description: "Extra classes on the wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
  render: (props) => (
    <div className="w-full max-w-md">
      <ProgressBar {...props} />
    </div>
  ),
});
