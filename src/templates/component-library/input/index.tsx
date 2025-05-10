import Input from "@/components/input";
import { useState } from "react";

const Inputs = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValueRequired, setInputValueRequired] = useState<string>("");
  const [inputValueDisabled, setInputValueDisabled] = useState<string>("");

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Input"
        placeholder="This is an input"
        value={inputValue}
        onChange={(val) => setInputValue(val)}
      />
      <Input
        label="Required Input"
        placeholder="This is a required input"
        value={inputValueRequired}
        onChange={(val) => setInputValueRequired(val)}
        required
      />
      <Input
        label="Disabled Input"
        placeholder="This is a disabled input"
        value={inputValueDisabled}
        onChange={(val) => setInputValueDisabled(val)}
        disabled
      />
    </div>
  );
};

export default Inputs;
