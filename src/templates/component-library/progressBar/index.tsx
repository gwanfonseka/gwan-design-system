import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Input from "@/components/input";
import ProgressBar, {
  PROGRESS_BAR_TYPE,
  PROGRESS_BAR_SIZE,
} from "@/components/progressBar";
import { useState } from "react";

const ProgressBars = () => {
  const [value, setValue] = useState("65");
  const [type, setType] = useState<string>(PROGRESS_BAR_TYPE.DEFAULT);
  const [size, setSize] = useState<string>(PROGRESS_BAR_SIZE.MEDIUM);
  const [striped, setStriped] = useState<string>("false");
  const [showValue, setShowValue] = useState<string>("true");

  const typeOptions = Object.values(PROGRESS_BAR_TYPE).map((v) => ({
    value: v,
    label: v,
  }));
  const sizeOptions = Object.values(PROGRESS_BAR_SIZE).map((v) => ({
    value: v,
    label: v,
  }));
  const boolOptions = [
    { value: "false", label: "off" },
    { value: "true", label: "on" },
  ];

  const codeExample = `import { ProgressBar, PROGRESS_BAR_TYPE, PROGRESS_BAR_SIZE } from "gwan-design-system";

const Example = () => (
  <>
    {/* Basic */}
    <ProgressBar value={65} />

    {/* With label and value */}
    <ProgressBar value={40} label="Upload progress" showValue />

    {/* Types */}
    <ProgressBar value={80} type={PROGRESS_BAR_TYPE.SUCCESS} showValue />
    <ProgressBar value={30} type={PROGRESS_BAR_TYPE.DANGER} showValue />
    <ProgressBar value={55} type={PROGRESS_BAR_TYPE.WARNING} showValue />

    {/* Sizes */}
    <ProgressBar value={65} size={PROGRESS_BAR_SIZE.SMALL} />
    <ProgressBar value={65} size={PROGRESS_BAR_SIZE.LARGE} />

    {/* Striped */}
    <ProgressBar value={65} striped />
  </>
);`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="w-full max-w-md mx-auto flex flex-col gap-0">
        <ProgressBar
          value={Number(value) || 0}
          type={type as PROGRESS_BAR_TYPE}
          size={size as PROGRESS_BAR_SIZE}
          striped={striped === "true"}
          showValue={showValue === "true"}
          label="Progress"
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <Input
          label="Value (0–100)"
          value={value}
          onChange={(e) => setValue((e.target as HTMLInputElement).value)}
          className="w-full sm:w-40"
        />
        <SelectDropdown
          label="Type"
          options={typeOptions}
          value={type}
          onChange={setType}
          className="w-full sm:w-40"
        />
        <SelectDropdown
          label="Size"
          options={sizeOptions}
          value={size}
          onChange={setSize}
          className="w-full sm:w-40"
        />
        <SelectDropdown
          label="Striped"
          options={boolOptions}
          value={striped}
          onChange={setStriped}
          className="w-full sm:w-40"
        />
        <SelectDropdown
          label="Show value"
          options={boolOptions}
          value={showValue}
          onChange={setShowValue}
          className="w-full sm:w-40"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 w-full max-w-lg mx-auto">
        <ProgressBar
          value={90}
          type={PROGRESS_BAR_TYPE.SUCCESS}
          label="Completed"
          showValue
        />
        <ProgressBar
          value={65}
          type={PROGRESS_BAR_TYPE.DEFAULT}
          label="In progress"
          showValue
        />
        <ProgressBar
          value={30}
          type={PROGRESS_BAR_TYPE.WARNING}
          label="Pending"
          showValue
        />
        <ProgressBar
          value={15}
          type={PROGRESS_BAR_TYPE.DANGER}
          label="Critical"
          showValue
        />
        <ProgressBar
          value={50}
          striped
          size={PROGRESS_BAR_SIZE.LARGE}
          label="Striped"
          showValue
        />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default ProgressBars;
