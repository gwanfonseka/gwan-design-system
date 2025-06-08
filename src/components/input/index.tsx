import { FC } from "react";

export interface IInput {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  inputClassName?: string;
  required?: boolean;
  className?: string;
  type?: string;
}

const Input: FC<IInput> = ({
  label,
  value,
  onChange,
  disabled,
  placeholder,
  inputClassName = "",
  required = false,
  className = "",
  type = "text",
}: IInput) => {
  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      <label htmlFor={label} className="text-sm text-neutral-600 mb-2">
        {`${label}${required ? " *" : ""}`}
      </label>
      <input
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`border border-neutral-300 outline-none p-4 rounded-lg ${
          disabled ? "cursor-not-allowed" : "cursor-text"
        } text-sm w-full ${inputClassName}`}
        required={required}
        type={type}
      />
    </div>
  );
};

export default Input;
