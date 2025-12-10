import { FC } from "react";
import { CrossSVG } from "../icons";

export interface ITextArea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  value: string;
  disabled?: boolean;
  placeholder?: string;
  inputClassName?: string;
  required?: boolean;
  className?: string;
  onClear?: () => void;
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
  id,
  ...rest
}) => {
  const textareaId =
    id || label?.toLowerCase().replace(/\s+/g, "-") || "textarea";

  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      {label && (
        <label htmlFor={textareaId} className="text-sm text-neutral-600 mb-2">
          {`${label}${required ? " *" : ""}`}
        </label>
      )}

      <div className="relative">
        <textarea
          id={textareaId}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          className={`border border-neutral-300 outline-none py-4 pl-4 ${
            onClear ? "pr-8" : "pr-4"
          } rounded-lg ${
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
    </div>
  );
};

export default TextArea;
