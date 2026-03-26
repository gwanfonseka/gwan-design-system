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
  const textareaId =
    id || label?.toLowerCase().replace(/\s+/g, "-") || "textarea";

  return (
    <div className={`flex flex-col relative ${className}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className={`text-sm ${isError ? "text-red-500" : "text-neutral-600"} mb-1`}
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
          className={`border ${isError ? "border-red-500 focus:border-red-500" : "border-neutral-300"} outline-none py-4 pl-4 ${
            onClear ? "pr-8" : "pr-4"
          } ${edges === FORM_ELEMENT_EDGE_STYLE.ROUNDED && "rounded-lg"} ${
            disabled ? "cursor-not-allowed" : "cursor-text"
          } text-sm w-full ${inputClassName}`}
          required={required}
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

export default TextArea;
