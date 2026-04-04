import Checkbox from "@/components/checkbox";
import CodeSnippet from "@/components/codeSnippet";
import Input, { FORM_ELEMENT_EDGE_STYLE } from "@/components/input";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import { ChangeEvent, useState } from "react";

const Inputs = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [playInputValue, setPlayInputValue] = useState<string>("");
  const [inputLabel, setInputLabel] = useState<string>("Label");
  const [inputPlaceholder, setInputPlaceHolder] =
    useState<string>("Placeholder");
  const [isRequired, setIsRequired] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(
    "This is an error message",
  );
  const [edges, setEdges] = useState<string>(FORM_ELEMENT_EDGE_STYLE.ROUNDED);
  const [inputType, setInputType] = useState<string>("text");

  const inputEdgesOptions = [
    { value: FORM_ELEMENT_EDGE_STYLE.ROUNDED, label: "rounded" },
    { value: FORM_ELEMENT_EDGE_STYLE.SQUARED, label: "squared" },
  ];

  const inputTypes = [
    { value: "text", label: "text" },
    { value: "number", label: "number" },
    { value: "password", label: "password" },
    { value: "email", label: "email" },
    { value: "tel", label: "tel" },
    { value: "url", label: "url" },
    { value: "search", label: "search" },
    { value: "date", label: "date" },
    { value: "week", label: "week" },
    { value: "month", label: "month" },
    { value: "time", label: "time" },
    { value: "file", label: "file" },
  ];

  const codeExample = `import { Input, FORM_ELEMENT_EDGE_STYLE } from "gwan-design-system";

const Example = () => {
  const [inputText, setInputText] = useState<string>("");

  return (
    <Input
      label="Input" // optional, you can add a label
      placeholder="This is an input"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      onClear={() => setInputText("")}
      required={false} // optional, you can make the input required
      disabled={false} // optional, you can disable the input
      isError={false} // optional, you can show error state
      errorMessage="Error message" // optional, you can add an error message
      className="custom-class" // optional, you can add your own styles
      inputClassName="custom-class" // optional, you can add your own styles to the input
      edges={FORM_ELEMENT_EDGE_STYLE.ROUNDED} // optional, you can choose rounded or squared
    />
  );
}`;

  const renderPlayground = () => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-row flex-wrap justify-center gap-8 items-center">
          <Input
            label={inputLabel}
            placeholder={inputPlaceholder}
            value={playInputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPlayInputValue(e.target.value)
            }
            type={inputType}
            onClear={() => setPlayInputValue("")}
            isError={isError}
            errorMessage={errorMessage}
            disabled={isDisabled}
            required={isRequired}
            edges={edges as FORM_ELEMENT_EDGE_STYLE}
            className="w-full sm:w-80"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-8 items-end">
          <Input
            label="Input label"
            value={inputLabel}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputLabel(e.target.value)
            }
            className="w-full sm:w-64"
          />
          <Input
            label="Input placeholder"
            value={inputPlaceholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputPlaceHolder(e.target.value)
            }
            className="w-full sm:w-64"
          />
          <SelectDropdown
            label="Edges style"
            options={inputEdgesOptions}
            value={edges}
            onChange={(option) => setEdges(option)}
            className="w-full sm:w-64"
          />
          <div className="flex flex-col gap-2 w-full sm:w-64">
            <Checkbox
              label="Required input"
              checked={isRequired}
              onChange={setIsRequired}
            />
            <Checkbox
              label="Disable input"
              checked={isDisabled}
              onChange={setIsDisabled}
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-8 items-end">
          <SelectDropdown
            label="Input type"
            options={inputTypes}
            value={inputType}
            onChange={(option) => setInputType(option)}
            className="w-full sm:w-64"
          />
          <Input
            label="Error message"
            value={errorMessage}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setErrorMessage(e.target.value)
            }
            className="w-full sm:w-64"
            disabled={!isError}
          />
          <div className="w-full sm:w-64">
            <Checkbox
              label="Error state"
              checked={isError}
              onChange={setIsError}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row flex-wrap justify-center gap-8 items-center">
        <Input
          label="Input"
          placeholder="This is an input"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          onClear={() => setInputValue("")}
          className="w-full sm:w-80"
        />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Inputs;
