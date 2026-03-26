import { ClipboardEvent, FC, KeyboardEvent } from "react";
import { CrossSVG } from "../icons";

export enum FORM_ELEMENT_EDGE_STYLE {
  ROUNDED = "rounded",
  SQUARED = "squared",
}

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
  isError?: boolean;
  errorMessage?: string;
  edges?: FORM_ELEMENT_EDGE_STYLE;
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
  isError = false,
  errorMessage,
  edges = FORM_ELEMENT_EDGE_STYLE.ROUNDED,
  onKeyDown,
  onPaste,
  ...rest
}: IInput) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (type === "number" && ["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }

    onKeyDown?.(e);
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      const paste = e.clipboardData.getData("text");
      if (/[eE+\-]/.test(paste)) {
        e.preventDefault();
      }
    }

    onPaste?.(e);
  };
  return (
    <div className={`flex flex-col relative ${className}`}>
      {label && (
        <label
          htmlFor={label}
          className={`text-sm ${isError ? "text-red-500" : "text-neutral-600"} mb-1`}
        >
          {`${label}${required ? " *" : ""}`}
        </label>
      )}
      <div className="relative">
        <input
          id={label}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          className={`border ${isError ? "border-red-500 focus:border-red-500" : "border-neutral-300"} outline-none py-4 pl-4 ${
            onClear ? "pr-8" : "pr-4"
          } ${edges === FORM_ELEMENT_EDGE_STYLE.ROUNDED && "rounded-lg"} ${
            disabled ? "cursor-not-allowed" : "cursor-text"
          } text-sm w-full ${inputClassName}`}
          required={required}
          type={type}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
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
      {isError && errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
