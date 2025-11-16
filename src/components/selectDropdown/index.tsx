import { FC, useEffect, useState, useRef } from "react";
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
  const [openUpward, setOpenUpward] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const option = options.find((opt) => opt.label === value);
    if (option) {
      setDropdownValue(option.label);
      onChange(option.label);
    } else {
      setDropdownValue("");
    }
  }, []);

  useEffect(() => {
    if (isOptionsVisible && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const dropdownHeight = Math.min(options.length * 56, 384); // max-h-96 = 384px
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      // Open upward if not enough space below and more space above
      setOpenUpward(spaceBelow < dropdownHeight && spaceAbove > spaceBelow);
    }
  }, [isOptionsVisible, options.length]);

  const handleMouseDown = (val: string) => {
    setDropdownValue(val);
    onChange(val);
    setIsOptionsVisible(false);
  };

  return (
    <div ref={containerRef} className={`flex flex-col gap-1 relative ${className}`}>
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
        <div
          className={`border border-neutral-300 rounded-lg shadow-lg max-h-96 overflow-y-auto absolute min-w-full bg-white z-10 ${
            openUpward ? "bottom-full mb-1" : "top-full"
          }`}
        >
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
