import CodeSnippet from "@/components/codeSnippet";
import Input from "@/components/input";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Tooltip, { TOOLTIP_POSITION } from "@/components/tooltip";
import { ChangeEvent, useState } from "react";

const Tooltips = () => {
  const [label, setLabel] = useState("This is a tooltip label");
  const [position, setPosition] = useState<string>(TOOLTIP_POSITION.TOP);
  const [isVisible, setIsVisible] = useState(true);

  const positionOptions = [
    { value: TOOLTIP_POSITION.TOP, label: "top" },
    { value: TOOLTIP_POSITION.BOTTOM, label: "bottom" },
    { value: TOOLTIP_POSITION.LEFT, label: "left" },
    { value: TOOLTIP_POSITION.RIGHT, label: "right" },
  ];

  const codeExample = `import { Tooltip, TOOLTIP_POSITION } from "gwan-design-system";

const Example = () => {
  return (
    <div className="relative w-fit">
      <button className="px-4 py-2 border rounded-lg">Hover me</button>

      <Tooltip
        position={TOOLTIP_POSITION.TOP}
        label="This is a tooltip"
        isVisible={true}
        toolTipWidth="w-60" // optional, you can specify width using Tailwind classes, default is w-60
        toolTipClass="text-center" // optional, you can add your own styles
        className="custom-class" // optional, you can add your own styles
      />
    </div>
  );
};`;

  const renderPlayground = () => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-center items-center">
          <div className="relative w-fit">
            <button
              className="px-4 py-2 border rounded-lg"
              onMouseEnter={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
            >
              Hover me
            </button>

            <Tooltip
              position={position as TOOLTIP_POSITION}
              label={label}
              isVisible={isVisible}
            />
          </div>
        </div>

        <div className="flex flex-row justify-center gap-4 items-center flex-wrap">
          <Input
            label="Tooltip label"
            value={label}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLabel(e.target.value)
            }
            className="w-full sm:w-64"
          />

          <SelectDropdown
            label="Position"
            options={positionOptions}
            value={position}
            onChange={(option) => setPosition(option)}
            className="w-full sm:w-64"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-center gap-16 items-center">
        <div className="relative">
          <button className="px-4 py-2 border rounded-lg">Top</button>
          <Tooltip
            position={TOOLTIP_POSITION.TOP}
            label="Top tooltip"
            isVisible={true}
            toolTipWidth="w-32"
            toolTipClass="text-center"
          />
        </div>
      </div>

      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Tooltips;
