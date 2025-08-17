import Input from "@/components/input";
import { ChangeEvent, useState } from "react";

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
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        onClear={() => setInputValue("")}
      />
      <Input
        label="Required Input"
        placeholder="This is a required input"
        value={inputValueRequired}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValueRequired(e.target.value)
        }
        required
      />
      <Input
        label="Disabled Input"
        placeholder="This is a disabled input"
        value={inputValueDisabled}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValueDisabled(e.target.value)
        }
        disabled
      />
    </div>
  );
};

export default Inputs;
