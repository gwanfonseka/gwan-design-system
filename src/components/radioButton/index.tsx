import { FC } from "react";

export interface IRadioButton {
  label: string;
  value: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const RadioButton: FC<IRadioButton> = ({
  label,
  value,
  selectedValue,
  onChange,
  className = "",
  disabled = false,
}: IRadioButton) => {
  const isChecked = selectedValue === value;

  const handleClick = () => {
    if (disabled) return;
    if (onChange) onChange(value);
  }

  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}
    ${disabled ? "cursor-not-allowed opacity-50" : ""}`}>
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full transition-all
            ${isChecked
            ? "border-primary-500 bg-primary-500"
            : "border-gray-400 bg-white"
          }
             ${disabled ? "bg-gray-200 border-gray-300" : ""}
          `}
        onClick={handleClick}
      >
        {isChecked && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
      </div>

      <span className="text-gray-700">{label}</span>

      <input
        type="radio"
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={() => onChange && onChange(value)}
        className="hidden"
      />
    </label>
  );
};

export default RadioButton;
