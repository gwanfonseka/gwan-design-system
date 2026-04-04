import CodeSnippet from "@/components/codeSnippet";
import Input from "@/components/input";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Ellipsis from "@/components/ellipsis";
import { TOOLTIP_POSITION } from "@/components/tooltip";
import { ChangeEvent, useState } from "react";

const EllipsisPage = () => {
  const [label, setLabel] = useState(
    "This is a very long text that should truncate with ellipsis",
  );
  const [position, setPosition] = useState<string>(TOOLTIP_POSITION.RIGHT);

  const positionOptions = [
    { value: TOOLTIP_POSITION.TOP, label: "top" },
    { value: TOOLTIP_POSITION.BOTTOM, label: "bottom" },
    { value: TOOLTIP_POSITION.LEFT, label: "left" },
    { value: TOOLTIP_POSITION.RIGHT, label: "right" },
  ];

  const codeExample = `import { Ellipsis } from "gwan-design-system";
import { TOOLTIP_POSITION } from "gwan-design-system";

const Example = () => {
  return (
    <Ellipsis
      label="This is a very long text that should truncate"
      labelMaxWidth="w-32" // optional, you can specify max width using Tailwind classes, default is w-32
      tooltipPosition={TOOLTIP_POSITION.RIGHT} // optional, default is right
      tooltipWidth="w-40" // optional, you can specify width using Tailwind classes, default is w-40
      className="custom-class" // optional, you can add your own styles
    />
  );
};`;

  const renderPlayground = () => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-center items-center">
          <Ellipsis
            label={label}
            tooltipPosition={position as TOOLTIP_POSITION}
          />
        </div>

        <div className="flex flex-row justify-center gap-4 items-center flex-wrap">
          <Input
            label="Label"
            value={label}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLabel(e.target.value)
            }
            className="w-full sm:w-64"
          />

          <SelectDropdown
            label="Tooltip position"
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
      <div className="flex flex-col gap-4 items-center">
        <Ellipsis label="This is a longer text that will truncate" />
      </div>

      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default EllipsisPage;
