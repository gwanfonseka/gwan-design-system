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
    } else {
      setDropdownValue(value);
    }
  }, [value, options]);

  useEffect(() => {
    if (isOptionsVisible && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const dropdownHeight = Math.min(options.length * 56, 384);
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setOpenUpward(spaceBelow < dropdownHeight && spaceAbove > spaceBelow);
    }
  }, [isOptionsVisible, options.length]);

  const handleMouseDown = (option: ISelectDropdownOption) => {
    const actualValue = option.value ?? option.label;
    setDropdownValue(option.label);
    onChange(actualValue);
    setIsOptionsVisible(false);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div ref={containerRef} className="flex flex-col relative">
        {label && (
          <label
            htmlFor={label}
            className={`text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"} mb-1`}
          >
            {`${label}${required ? " *" : ""}`}
          </label>
        )}
        <div className="relative">
          <div className="size-4 absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-muted-fg pointer-events-none">
            <ChevDownSVG />
          </div>
          <input
            id={label}
            type="text"
            className={`bg-surface text-foreground border outline-none py-2.5 pl-3 pr-9 ${
              edges === FORM_ELEMENT_EDGE_STYLE.ROUNDED && "rounded"
            } ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${
              isError
                ? "border-danger focus:border-danger"
                : "border-border hover:border-primary-500 focus:border-primary-500"
            } text-sm w-full placeholder:text-muted-fg transition-colors duration-200 ${inputClassName}`}
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
            className={`border border-border ${
              edges === FORM_ELEMENT_EDGE_STYLE.ROUNDED && "rounded"
            } shadow-lg max-h-96 overflow-y-auto absolute min-w-full bg-surface z-10 ${
              openUpward ? "bottom-full mb-1" : "top-full mt-1"
            }`}
          >
            {options.map(({ label, value: val }, index) => (
              <div
                key={`${label}_${val}_${index + 1}`}
                className="px-3 py-2.5 cursor-pointer hover:bg-surface-raised text-sm text-foreground"
                onMouseDown={() => handleMouseDown({ label, value: val })}
              >
                {label}
              </div>
            ))}
          </div>
        )}
      </div>
      {isError && errorMessage && (
        <p className="text-danger text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default SelectDropdown;
