import TextArea from "@/components/textarea";
import { ChangeEvent, useState } from "react";

const Inputs = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValueRequired, setInputValueRequired] = useState<string>("");
  const [inputValueDisabled, setInputValueDisabled] = useState<string>("");

  return (
    <div className="flex flex-col gap-4">
      <TextArea
        label="Text Area"
        placeholder="This is a textarea"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInputValue(e.target.value)
        }
        onClear={() => setInputValue("")}
      />
      <TextArea
        label="Required Text Area"
        placeholder="This is a required text area"
        value={inputValueRequired}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInputValueRequired(e.target.value)
        }
        required
      />
      <TextArea
        label="Disabled Text Area"
        placeholder="This is a disabled text area"
        value={inputValueDisabled}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInputValueDisabled(e.target.value)
        }
        disabled
      />
    </div>
  );
};

export default Inputs;
