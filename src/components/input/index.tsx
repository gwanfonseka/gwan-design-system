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
          className={`text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"} mb-1`}
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
          className={`bg-surface text-foreground border ${
            isError
              ? "border-danger focus:border-danger"
              : "border-border hover:border-primary-500 focus:border-primary-500"
          } outline-none py-2.5 pl-3 ${
            onClear ? "pr-8" : "pr-3"
          } ${edges === FORM_ELEMENT_EDGE_STYLE.ROUNDED && "rounded"} ${
            disabled ? "cursor-not-allowed opacity-50" : "cursor-text"
          } text-sm w-full placeholder:text-muted-fg transition-colors duration-200 ${inputClassName}`}
          required={required}
          type={type}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          {...rest}
        />
        {onClear && value && (
          <div
            className="size-3 absolute right-3 top-1/2 -translate-y-1/2 text-muted-fg hover:text-foreground cursor-pointer"
            onClick={onClear}
          >
            <CrossSVG />
          </div>
        )}
      </div>
      {isError && errorMessage && (
        <p className="text-danger text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
