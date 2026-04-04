import RadioButton from "@/components/radioButton";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import Input from "@/components/input";
import { useState, ChangeEvent } from "react";

const codeExample = `import { RadioButton } from "gwan-design-system";

const Example = () => {
  const [selected, setSelected] = useState("option1");

  return (
    <div className="flex flex-col gap-3">
      <RadioButton
        label="Option 1"
        value="option1"
        selectedValue={selected}
        onChange={setSelected}
      />
      <RadioButton
        label="Option 2"
        value="option2"
        selectedValue={selected}
        onChange={setSelected}
      />
      <RadioButton
        label="Option 3"
        value="option3"
        selectedValue={selected}
        onChange={setSelected}
      />
    </div>
  );
};`;

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [option1Label, setOption1Label] = useState("Option 1");
  const [option2Label, setOption2Label] = useState("Option 2");
  const [option3Label, setOption3Label] = useState("Option 3");

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 items-center">
        <RadioButton
          label={option1Label}
          value="option1"
          selectedValue={selectedOption}
          onChange={setSelectedOption}
        />
        <RadioButton
          label={option2Label}
          value="option2"
          selectedValue={selectedOption}
          onChange={setSelectedOption}
        />
        <RadioButton
          label={option3Label}
          value="option3"
          selectedValue={selectedOption}
          onChange={setSelectedOption}
        />
        <p className="text-sm text-muted-fg mt-2">
          Selected: <span className="text-foreground font-medium">{selectedOption}</span>
        </p>
      </div>

      <div className="flex flex-row justify-center gap-4 flex-wrap">
        <Input
          label="Option 1 Label"
          value={option1Label}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setOption1Label(e.target.value)}
          className="w-full sm:w-48"
        />
        <Input
          label="Option 2 Label"
          value={option2Label}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setOption2Label(e.target.value)}
          className="w-full sm:w-48"
        />
        <Input
          label="Option 3 Label"
          value={option3Label}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setOption3Label(e.target.value)}
          className="w-full sm:w-48"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default RadioButtons;
