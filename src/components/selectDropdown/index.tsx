import { FC, useEffect, useState } from "react";
import { ChevDownSVG } from "../icons";

export interface ISelectDropdownOption {
  value?: string;
  label: string;
}

export interface ISelectDropdown {
  options: ISelectDropdownOption[];
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value: string;
  onChange: (option: string) => void;
  inputClassName?: string;
  className?: string;
}

const SelectDropdown: FC<ISelectDropdown> = ({
  options,
  label,
  placeholder = "",
  disabled = false,
  value,
  onChange,
  inputClassName = "",
  className = "",
}: ISelectDropdown) => {
  const [dropdownValue, setDropdownValue] = useState<string>("");
  const [isOptionsVisible, setIsOptionsVisible] = useState<boolean>(false);

  useEffect(() => {
    const option = options.find((opt) => opt.label === value);
    if (option) {
      setDropdownValue(option.label);
      onChange(option.label);
    } else {
      setDropdownValue("");
    }
  }, []);

  const handleMouseDown = (val: string) => {
    setDropdownValue(val);
    onChange(val);
    setIsOptionsVisible(false);
  };

  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      {label && (
        <label htmlFor={label} className="text-sm text-neutral-600 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <div className="size-5 absolute inset-y-4 right-4 flex items-center text-neutral-600 pointer-events-none">
          <ChevDownSVG />
        </div>
        <input
          id={label}
          type="text"
          className={`border border-neutral-300 outline-none p-4 rounded-lg ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          } text-sm w-full ${inputClassName}`}
          placeholder={placeholder}
          onClick={() => setIsOptionsVisible(!isOptionsVisible)}
          value={dropdownValue}
          onBlur={() => setIsOptionsVisible(false)}
          readOnly
          disabled={disabled}
        ></input>
      </div>

      {isOptionsVisible && (
        <div className="border border-neutral-300 rounded-lg shadow-lg max-h-96 overflow-y-auto absolute min-w-full top-full bg-white z-10">
          {options.map(({ label, value: val }, index) => (
            <div
              key={`${label}_${val}_${index + 1}`}
              className="p-4 cursor-pointer hover:bg-neutral-50 text-sm"
              onMouseDown={() => handleMouseDown(label)}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
