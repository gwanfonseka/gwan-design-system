import { FC } from "react";

export interface IRadioButton {
  label: string;
  value: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  className?: string;
  disabled?: boolean;
}

const RadioButton: FC<IRadioButton> = ({
  label,
  value,
  selectedValue,
  onChange,
  name,
  className = "",
  disabled = false,
}: IRadioButton) => {
  const isChecked = selectedValue === value;
  const inputId = `gwan-radio-${(name ?? "group")}-${value.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <label
      htmlFor={inputId}
      className={`flex items-center gap-2 cursor-pointer ${className} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      <input
        id={inputId}
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={() => !disabled && onChange && onChange(value)}
        className="sr-only"
      />

      <div
        aria-hidden="true"
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full transition-all
          ${isChecked
            ? "border-primary-default bg-primary-default"
            : "border-border bg-surface hover:border-primary-default"
          }
          ${disabled ? "bg-surface-raised border-border" : ""}`}
      >
        {isChecked && <div className="w-2.5 h-2.5 bg-primary-default-fg rounded-full" />}
      </div>

      <span className="text-foreground">{label}</span>
    </label>
  );
};

export default RadioButton;
