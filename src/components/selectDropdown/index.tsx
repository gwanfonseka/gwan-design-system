import { FC, useEffect, useState, useRef } from "react";
import { ChevDownSVG } from "../icons";
import { FORM_ELEMENT_EDGE_STYLE } from "../input";

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
  isError?: boolean;
  errorMessage?: string;
  required?: boolean;
  edges?: FORM_ELEMENT_EDGE_STYLE;
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
  isError = false,
  errorMessage,
  required = false,
  edges = FORM_ELEMENT_EDGE_STYLE.ROUNDED,
}: ISelectDropdown) => {
  const [dropdownValue, setDropdownValue] = useState<string>("");
  const [isOptionsVisible, setIsOptionsVisible] = useState<boolean>(false);
  const [openUpward, setOpenUpward] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const option = options.find((opt) => (opt.value ?? opt.label) === value);
    if (option) {
      setDropdownValue(option.label);
      // onChange(option.label);
    } else {
      setDropdownValue(value);
    }
  }, [value, options]);

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

  const handleMouseDown = (option: ISelectDropdownOption) => {
    const actualValue = option.value ?? option.label;

    setDropdownValue(option.label); // show label
    onChange(actualValue); // send value
    setIsOptionsVisible(false);
  };

  return (
    <div className="flex flex-col">
      <div ref={containerRef} className={`flex flex-col relative ${className}`}>
        {label && (
          <label
            htmlFor={label}
            className={`text-sm ${isError ? "text-red-500" : "text-neutral-600"} mb-1`}
          >
            {`${label}${required ? " *" : ""}`}
          </label>
        )}
        <div className="relative">
          <div className="size-5 absolute inset-y-4 right-4 flex items-center text-neutral-600 pointer-events-none">
            <ChevDownSVG />
          </div>
          <input
            id={label}
            type="text"
            className={`border outline-none p-4 ${edges === FORM_ELEMENT_EDGE_STYLE.ROUNDED && "rounded-lg"} ${
              disabled ? "cursor-not-allowed" : "cursor-pointer"
            } ${isError ? "border-red-500 focus:border-red-500" : "border-neutral-300"} text-sm w-full ${inputClassName}`}
            placeholder={placeholder}
            onClick={() => setIsOptionsVisible(!isOptionsVisible)}
            value={dropdownValue}
            onBlur={() => setIsOptionsVisible(false)}
            readOnly
            disabled={disabled}
            required={required}
          />
        </div>
        {isOptionsVisible && (
          <div
            className={`border border-neutral-300 ${edges === FORM_ELEMENT_EDGE_STYLE.ROUNDED && "rounded-lg"} shadow-lg max-h-96 overflow-y-auto absolute min-w-full bg-white z-10 ${
              openUpward ? "bottom-full mb-1" : "top-full"
            }`}
          >
            {options.map(({ label, value: val }, index) => (
              <div
                key={`${label}_${val}_${index + 1}`}
                className="p-4 cursor-pointer hover:bg-neutral-50 text-sm"
                onMouseDown={() => handleMouseDown({ label, value: val })}
              >
                {label}
              </div>
            ))}
          </div>
        )}
      </div>
      {isError && errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default SelectDropdown;
