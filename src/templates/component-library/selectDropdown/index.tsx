import SelectDropdown, {
  type ISelectDropdownOption,
} from "@/components/selectDropdown";
import { useState } from "react";

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

const numbers = [
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
];

const SelectDropdowns = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [disabledDropdown, setDisabledDropdown] = useState<string>("");
  const [customDropdown, setCustomDropdown] = useState<string>("1");

  return (
    <div className="flex flex-col gap-4">
      <SelectDropdown
        options={options}
        label="Select dropdown"
        placeholder="This is a placeholder"
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
      />
      <SelectDropdown
        options={options}
        label="Disabled Select dropdown"
        placeholder="This is a placeholder"
        value={disabledDropdown}
        onChange={(option) => setDisabledDropdown(option)}
        disabled
      />
      <div className="flex flex-col gap-2">
        <label className="text-sm text-neutral-600 mb-2">
          Pagination dropdown
        </label>
        <div className="w-20">
          <SelectDropdown
            options={numbers}
            value={customDropdown}
            onChange={(option) => setCustomDropdown(option)}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectDropdowns;
