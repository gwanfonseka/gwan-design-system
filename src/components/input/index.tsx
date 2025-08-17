import { FC } from "react";
import { CrossSVG } from "../icons";

export interface IInput extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  disabled?: boolean;
  placeholder?: string;
  inputClassName?: string;
  required?: boolean;
  className?: string;
  type?: string;
  onClear?: () => void;
}

const Input: FC<IInput> = ({
  label,
  value,
  disabled,
  placeholder = "",
  inputClassName = "",
  required = false,
  className = "",
  type = "text",
  onClear,
  ...rest
}: IInput) => {
  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      {label && (
        <label htmlFor={label} className="text-sm text-neutral-600 mb-2">
          {`${label}${required ? " *" : ""}`}
        </label>
      )}
      <div className="relative">
        <input
          id={label}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          className={`border border-neutral-300 outline-none py-4 pl-4 ${
            onClear ? "pr-8" : "pr-4"
          } rounded-lg ${
            disabled ? "cursor-not-allowed" : "cursor-text"
          } text-sm w-full ${inputClassName}`}
          required={required}
          type={type}
          {...rest}
        />
        {onClear && value && (
          <div
            className="size-3 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900 cursor-pointer"
            onClick={onClear}
          >
            <CrossSVG />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
