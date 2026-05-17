import { FC } from "react";
import { CrossSVG } from "../icons";
import { FORM_ELEMENT_EDGE_STYLE } from "../input";

export interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  value: string;
  disabled?: boolean;
  placeholder?: string;
  inputClassName?: string;
  required?: boolean;
  className?: string;
  onClear?: () => void;
  isError?: boolean;
  errorMessage?: string;
  edges?: FORM_ELEMENT_EDGE_STYLE;
}

const TextArea: FC<ITextArea> = ({
  label,
  value,
  disabled,
  placeholder = "",
  inputClassName = "",
  required = false,
  className = "",
  onClear,
  isError = false,
  errorMessage,
  edges = FORM_ELEMENT_EDGE_STYLE.ROUNDED,
  id,
  ...rest
}) => {
  const textareaId = id || (label ? `gwan-textarea-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : "gwan-textarea");
  const errorId = `${textareaId}-error`;

  return (
    <div className={`flex flex-col relative ${className}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className={`text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"} mb-1`}
        >
          {`${label}${required ? " *" : ""}`}
        </label>
      )}

      <div className="relative">
        <textarea
          id={textareaId}
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
          } text-sm w-full placeholder:text-muted-fg transition-colors duration-200 resize-none ${inputClassName}`}
          required={required}
          aria-invalid={isError || undefined}
          aria-describedby={isError && errorMessage ? errorId : undefined}
          aria-required={required || undefined}
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
        <p id={errorId} role="alert" className="text-danger text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default TextArea;
