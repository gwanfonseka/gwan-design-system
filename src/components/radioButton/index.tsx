import { FC } from "react";

export interface IRadioButton {
  label: string;
  value: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const RadioButton: FC<IRadioButton> = ({
  label,
  value,
  selectedValue,
  onChange,
  className = "",
}: IRadioButton) => {
  const isChecked = selectedValue === value;

  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full transition-all
            ${
              isChecked
                ? "border-primary-500 bg-primary-500"
                : "border-gray-400 bg-white"
            }
          `}
        onClick={() => onChange && onChange(value)}
      >
        {isChecked && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
      </div>

      <span className="text-gray-700">{label}</span>

      <input
        type="radio"
        value={value}
        checked={isChecked}
        onChange={() => onChange && onChange(value)}
        className="hidden"
      />
    </label>
  );
};

export default RadioButton;
