import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import Checkbox, {
  CHECKBOX_EDGE_STYLE,
  CHECKBOX_SIZE,
} from "@/components/checkbox";
import Input from "@/components/input";
import SelectDropdown from "@/components/selectDropdown";
import { useState, ChangeEvent } from "react";

const Checkboxes = () => {
  const [label, setLabel] = useState("Accept terms");
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState<string>(CHECKBOX_SIZE.MEDIUM);
  const [edges, setEdges] = useState<string>(CHECKBOX_EDGE_STYLE.ROUNDED);

  const sizeOptions = [
    { value: CHECKBOX_SIZE.SMALL, label: "small" },
    { value: CHECKBOX_SIZE.MEDIUM, label: "medium" },
    { value: CHECKBOX_SIZE.LARGE, label: "large" },
  ];

  const edgeOptions = [
    { value: CHECKBOX_EDGE_STYLE.ROUNDED, label: "rounded" },
    { value: CHECKBOX_EDGE_STYLE.SQUARED, label: "squared" },
  ];

  const codeExample = `import { Checkbox, CHECKBOX_SIZE } from "gwan-design-system";

const Example = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label="Accept terms"
      checked={checked}
      onChange={(val) => setChecked(val)}
      size={CHECKBOX_SIZE.MEDIUM} // optional, defaults to medium
      edges={CHECKBOX_EDGE_STYLE.ROUNDED} // optional, defaults to rounded
      disabled={false} // optional, defaults to false
      className="" // optional, for custom styling
    />
  );
};`;

  const renderPlayground = () => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex justify-center items-center">
          <Checkbox
            label={label}
            checked={checked}
            onChange={(val) => setChecked(val)}
            disabled={disabled}
            size={size as CHECKBOX_SIZE}
            edges={edges as CHECKBOX_EDGE_STYLE}
          />
        </div>

        <div className="flex flex-row justify-center gap-4 items-end flex-wrap">
          <Input
            label="Label"
            value={label}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLabel(e.target.value)
            }
            className="w-full sm:w-64"
          />

          <SelectDropdown
            label="Size"
            options={sizeOptions}
            value={size}
            onChange={(option) => setSize(option)}
            className="w-full sm:w-64"
          />

          <SelectDropdown
            label="Edges"
            options={edgeOptions}
            value={edges}
            onChange={(option) => setEdges(option)}
            className="w-full sm:w-64"
          />

          <Checkbox
            label="Checked"
            checked={checked}
            onChange={(val) => setChecked(val)}
            size={CHECKBOX_SIZE.MEDIUM}
          />

          <Checkbox
            label="Disabled"
            checked={disabled}
            onChange={(val) => setDisabled(val)}
            size={CHECKBOX_SIZE.MEDIUM}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-row gap-4 items-center">
          <Checkbox
            label="Small"
            checked
            size={CHECKBOX_SIZE.SMALL}
            onChange={() => {}}
          />
          <Checkbox
            label="Medium"
            checked
            size={CHECKBOX_SIZE.MEDIUM}
            onChange={() => {}}
          />
          <Checkbox
            label="Large"
            checked
            size={CHECKBOX_SIZE.LARGE}
            onChange={() => {}}
          />
        </div>
        <div className="flex gap-6 mt-4">
          <Checkbox
            label="Disabled"
            checked={false}
            disabled
            size={CHECKBOX_SIZE.MEDIUM}
            onChange={() => {}}
          />
          <Checkbox
            label="Checked Disabled"
            checked
            disabled
            size={CHECKBOX_SIZE.MEDIUM}
            onChange={() => {}}
          />
        </div>
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Checkboxes;
