import { FC, useState } from "react";
import { CheckSVG } from "../icons";

export interface ICheckbox {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const Checkbox: FC<ICheckbox> = ({
  label,
  checked = false,
  onChange,
  className = "",
}: ICheckbox) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="hidden"
      />
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all 
          ${
            isChecked
              ? "bg-primary-300 border-primary-400"
              : "bg-white border-neutral-500"
          }
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
