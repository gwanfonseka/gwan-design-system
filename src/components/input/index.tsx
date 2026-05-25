import { ClipboardEvent, FC, KeyboardEvent } from "react";
import { CrossSVG } from "../icons";

export enum FORM_ELEMENT_EDGE_STYLE {
  ROUNDED = "rounded",
  SQUARED = "squared",
}

export enum FORM_ELEMENT_SIZE {
  SM = "SM",
  MD = "MD",
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
  size?: FORM_ELEMENT_SIZE;
  min?: number;
  max?: number;
  step?: number;
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
  size = FORM_ELEMENT_SIZE.MD,
  min,
  max,
  step,
  id: idProp,
  onKeyDown,
  onPaste,
  ...rest
}: IInput) => {
  const isSM = size === FORM_ELEMENT_SIZE.SM;
  const inputId = idProp ?? (label ? `gwan-input-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : undefined);
  const errorId = inputId ? `${inputId}-error` : undefined;
  const sizeClass = isSM ? "py-1.5 text-xs" : "py-2.5 text-sm";
  const plClass   = isSM ? "pl-2.5" : "pl-3";
  const prClass   = onClear ? (isSM ? "pr-7" : "pr-8") : (isSM ? "pr-2.5" : "pr-3");
  const clearSize = isSM ? "size-2.5" : "size-3";
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      const blocked = ["e", "E", "+"];
      if (min !== undefined && min >= 0) blocked.push("-");
      if (blocked.includes(e.key)) e.preventDefault();
    }
    onKeyDown?.(e);
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      const paste = e.clipboardData.getData("text");
      const pattern = min !== undefined && min >= 0 ? /[eE+\-]/ : /[eE+]/;
      if (pattern.test(paste)) e.preventDefault();
    }
    onPaste?.(e);
  };

  return (
    <div className={`flex flex-col relative ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"} mb-1`}
        >
          {`${label}${required ? " *" : ""}`}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          aria-invalid={isError || undefined}
          aria-describedby={isError && errorMessage && errorId ? errorId : undefined}
          aria-required={required || undefined}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          className={`bg-surface text-foreground border ${
            isError
              ? "border-danger focus:border-danger"
              : "border-border hover:border-primary-default focus:border-primary-default"
          } outline-none ${sizeClass} ${plClass} ${prClass} ${
            edges === FORM_ELEMENT_EDGE_STYLE.ROUNDED && "rounded"
          } ${
            disabled ? "cursor-not-allowed opacity-50" : "cursor-text"
          } w-full placeholder:text-muted-fg/60 dark:placeholder:text-muted-fg/40 transition-colors duration-200 ${
            type === "number"
              ? "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              : ""
          } ${inputClassName}`}
          required={required}
          type={type}
          min={min}
          max={max}
          step={step}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          {...rest}
        />
        {onClear && value && (
          <div
            className={`${clearSize} absolute right-3 top-1/2 -translate-y-1/2 text-muted-fg hover:text-foreground cursor-pointer`}
            onClick={onClear}
          >
            <CrossSVG />
          </div>
        )}
      </div>
      {isError && errorMessage && (
        <p id={errorId} role="alert" className="text-danger text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
