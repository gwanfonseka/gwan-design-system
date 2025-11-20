import { FC, useState } from "react";
import { CheckSVG } from "../icons";

export interface ICheckbox {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?:boolean;
}

const Checkbox: FC<ICheckbox> = ({
  label,
  checked = false,
  onChange,
  className = "",
  disabled = false,
}: ICheckbox) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;

    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        disabled={disabled}
        className="hidden"
      />
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all 
          ${
            isChecked
              ? "bg-primary-300 border-primary-400"
              : "bg-white border-neutral-500"
          }
          ${disabled ? "bg-neutral-200 border-neutral-400" : ""}
        `}
      >
        {isChecked && (
          <div className="size-4 text-black">
            <CheckSVG />
          </div>
        )}
      </div>
      {label && <span className="text-black">{label}</span>}
    </label>
  );
};

export default Checkbox;
