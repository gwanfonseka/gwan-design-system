import Slider, { SLIDER_SIZE, type ISlider } from "@/components/slider";
import { action, boolean, defineStory, enumOf, number, range, text } from "@/playground";

export default defineStory<ISlider>({
  name: "Slider",
  component: Slider,
  args: { value: 40, label: "Volume" },
  bindings: [{ prop: "value", event: "onChange" }],
  argTypes: {
    value: {
      description: "Current value. Pass a [low, high] pair instead for a range with two thumbs.",
      control: range(0, 100),
      type: "number | [number, number]",
      required: true,
      group: "Content",
    },
    label: {
      description: "Label above the track.",
      control: text(),
      group: "Content",
    },
    min: {
      description: "Lowest value.",
      control: number(),
      defaultValue: 0,
      group: "Behaviour",
    },
    max: {
      description: "Highest value.",
      control: number(),
      defaultValue: 100,
      group: "Behaviour",
    },
    step: {
      description: "Increment between values.",
      control: number({ min: 1 }),
      defaultValue: 1,
      group: "Behaviour",
    },
    showTooltip: {
      description: "Shows the value above the thumb while dragging.",
      control: boolean(),
      defaultValue: false,
      group: "Appearance",
    },
    size: {
      description: "Track and thumb size.",
      control: enumOf(SLIDER_SIZE, "SLIDER_SIZE"),
      defaultValue: SLIDER_SIZE.MD,
      group: "Appearance",
    },
    disabled: {
      description: "Blocks dragging and dims the slider.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    onChange: {
      description: "Called with the new value, or [low, high] in range mode.",
      control: action(),
      type: "(value: number | [number, number]) => void",
      required: true,
      group: "Events",
    },
    className: {
      description: "Extra classes on the wrapper.",
      control: text("e.g. w-64"),
      defaultValue: "",
      group: "Advanced",
    },
  },
  render: (props) => (
    <div className="w-72">
      <Slider {...props} />
    </div>
  ),
});
