import Checkbox from "@/components/checkbox";
import CodeSnippet from "@/components/codeSnippet";
import Input, { FORM_ELEMENT_EDGE_STYLE } from "@/components/input";
import Playground from "@/components/playground";
import SelectDropdown, {
  type ISelectDropdownOption,
} from "@/components/selectDropdown";
import { ChangeEvent, useState } from "react";

const options: ISelectDropdownOption[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
  { value: "5", label: "Option 5" },
  { value: "6", label: "Option 6" },
  { value: "7", label: "Option 7" },
  { value: "8", label: "Option 8" },
  { value: "9", label: "Option 9" },
  { value: "10", label: "Option 10" },
  { value: "11", label: "Option 11" },
  { value: "12", label: "Option 12" },
  { value: "13", label: "Option 13" },
  { value: "14", label: "Option 14" },
  { value: "15", label: "Option 15" },
  { value: "16", label: "Option 16" },
  { value: "17", label: "Option 17" },
  { value: "18", label: "Option 18" },
  { value: "19", label: "Option 19" },
  { value: "20", label: "Option 20" },
  { value: "21", label: "Option 21" },
  { value: "22", label: "Option 22" },
  { value: "23", label: "Option 23" },
  { value: "24", label: "Option 24" },
  { value: "25", label: "Option 25" },
  { value: "26", label: "Option 26" },
  { value: "27", label: "Option 27" },
  { value: "28", label: "Option 28" },
  { value: "29", label: "Option 29" },
  { value: "30", label: "Option 30" },
  { value: "31", label: "Option 31" },
  { value: "32", label: "Option 32" },
  { value: "33", label: "Option 33" },
  { value: "34", label: "Option 34" },
];

const SelectDropdowns = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [dropdownLabel, setDropdownLabel] = useState<string>("Label");
  const [dropdownPlaceholder, setDropdownPlaceholder] =
    useState<string>("Placeholder");
  const [isRequired, setIsRequired] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(
    "This is an error message",
  );
  const [edges, setEdges] = useState<string>(FORM_ELEMENT_EDGE_STYLE.ROUNDED);

  const dropdownEdgesOptions = [
    { value: FORM_ELEMENT_EDGE_STYLE.ROUNDED, label: "rounded" },
    { value: FORM_ELEMENT_EDGE_STYLE.SQUARED, label: "squared" },
  ];

  const codeExample = `import { SelectDropdown, type ISelectDropdownOption, SELECT_DROPDOWN_EDGE_STYLE } from "gwan-design-system";

const options: ISelectDropdownOption[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const Example = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <SelectDropdown
      label="Select dropdown" // optional, you can add a label
      options={options}
      placeholder="This is a placeholder" // optional, you can add a placeholder
      value={selectedOption}
      onChange={(option) => setSelectedOption(option)}
      required={false} // optional, you can make the dropdown required
      disabled={false} // optional, you can disable the dropdown
      isError={false} // optional, you can show error state
      errorMessage="Error message" // optional, you can add an error message
      className="custom-class" // optional, you can add your own styles
      inputClassName="custom-input-class" // optional, you can add your own styles to the read-only input
      edges={FORM_ELEMENT_EDGE_STYLE.ROUNDED} // optional, you can choose rounded or squared
    />
  );
}`;

  const renderPlayground = () => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-center gap-8 items-center">
          <SelectDropdown
            options={options}
            label={dropdownLabel}
            placeholder={dropdownPlaceholder}
            value={selectedOption}
            onChange={(option) => setSelectedOption(option)}
            className="w-80"
            inputClassName="bg-white disabled:bg-gray-100 disabled:text-gray-500"
            disabled={isDisabled}
            isError={isError}
            errorMessage={errorMessage}
            required={isRequired}
            edges={edges as FORM_ELEMENT_EDGE_STYLE}
          />
        </div>
        <div className="flex flex-row justify-center gap-8 items-end">
          <Input
            label="Dropdown label"
            value={dropdownLabel}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDropdownLabel(e.target.value)
            }
            className="w-64"
          />
          <Input
            label="Dropdown placeholder"
            value={dropdownPlaceholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDropdownPlaceholder(e.target.value)
            }
            className="w-64"
          />
          <SelectDropdown
            label="Edges style"
            options={dropdownEdgesOptions}
            value={edges}
            onChange={(option) => setEdges(option)}
            className="w-64"
          />

          <div className="flex flex-col gap-2 w-64">
            <Checkbox
              label="Required dropdown"
              checked={isRequired}
              onChange={setIsRequired}
            />
            <Checkbox
              label="Disable dropdown"
              checked={isDisabled}
              onChange={setIsDisabled}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-8 items-end">
          <Input
            label="Error message"
            value={errorMessage}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setErrorMessage(e.target.value)
            }
            className="w-64"
            disabled={!isError}
          />
          <div className="w-64">
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
      <div className="flex flex-row justify-center gap-8 items-center">
        <SelectDropdown
          options={options}
          label="Select dropdown"
          placeholder="This is a placeholder"
          value={selectedOption}
          onChange={(option) => setSelectedOption(option)}
          className="w-80"
        />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default SelectDropdowns;
