import { FC } from "react";

export interface IInput {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  inputClassName?: string;
  required?: boolean;
}

const Input: FC<IInput> = ({
  label,
  value,
  onChange,
  disabled,
  placeholder,
  inputClassName = "",
  required = false,
}: IInput) => {
  return (
    <div className="flex flex-col gap-1 relative">
      <label htmlFor={label} className="text-sm text-neutrola-600 mb-2">
        {`${label}${required ? " *" : ""}`}
      </label>
      <input
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`border border-neutrola-300 outline-none p-4 rounded-lg ${
          disabled ? "cursor-not-allowed" : "cursor-text"
        } text-sm w-full ${inputClassName}`}
        required={required}
      />
    </div>
  );
};

export default Input;
