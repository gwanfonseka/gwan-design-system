import CodeSnippet from "@/components/codeSnippet";
import Input from "@/components/input";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Switch, { SWITCH_SIZE } from "@/components/switch";
import { useState } from "react";

const Switches = () => {
  const [checked, setChecked] = useState(false);
  const [label, setLabel] = useState("Enable notifications");
  const [description, setDescription] = useState(
    "Receive alerts when events occur",
  );
  const [size, setSize] = useState<string>(SWITCH_SIZE.MEDIUM);
  const [disabled, setDisabled] = useState<string>("false");

  const sizeOptions = Object.values(SWITCH_SIZE).map((v) => ({
    value: v,
    label: v,
  }));
  const disabledOptions = [
    { value: "false", label: "enabled" },
    { value: "true", label: "disabled" },
  ];

  const codeExample = `import { Switch, SWITCH_SIZE } from "gwan-design-system";
import { useState } from "react";

const Example = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      {/* Basic switch */}
      <Switch checked={enabled} onChange={setEnabled} />

      {/* With label */}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        label="Enable notifications"
      />

      {/* With label and description */}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        label="Dark mode"
        description="Switch between light and dark themes"
      />

      {/* Sizes */}
      <Switch checked={enabled} onChange={setEnabled} size={SWITCH_SIZE.SMALL} />
      <Switch checked={enabled} onChange={setEnabled} size={SWITCH_SIZE.LARGE} />

      {/* Disabled */}
      <Switch checked={true} onChange={() => {}} disabled label="Locked setting" />
    </>
  );
};`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center min-h-16">
        <Switch
          checked={checked}
          onChange={setChecked}
          label={label || undefined}
          description={description || undefined}
          size={size as SWITCH_SIZE}
          disabled={disabled === "true"}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
        <Input
          label="Label"
          value={label}
          onChange={(e) => setLabel((e.target as HTMLInputElement).value)}
          className="w-full sm:w-56"
        />
        <Input
          label="Description"
          value={description}
          onChange={(e) => setDescription((e.target as HTMLInputElement).value)}
          className="w-full sm:w-56"
        />
        <SelectDropdown
          label="Size"
          options={sizeOptions}
          value={size}
          onChange={setSize}
          className="w-full sm:w-48"
        />
        <SelectDropdown
          label="State"
          options={disabledOptions}
          value={disabled}
          onChange={setDisabled}
          className="w-full sm:w-48"
        />
      </div>
    </div>
  );

  const [s1, setS1] = useState(true);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-4">
        <Switch
          checked={s1}
          onChange={setS1}
          label="Dark mode"
          description="Switch between light and dark themes"
        />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Switches;
