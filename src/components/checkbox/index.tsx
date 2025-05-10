import { useState } from "react";
import { CheckSVG } from "../icons";

export interface ICheckbox {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox = ({ label, checked = false, onChange }: ICheckbox) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
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
              ? "bg-primary-500 border-primary-600"
              : "bg-white border-neutrola-500"
          }
        `}
      >
        {isChecked && (
          <div className="size-4 text-white">
            <CheckSVG />
          </div>
        )}
      </div>
      {label && <span className="text-black">{label}</span>}
    </label>
  );
};

export default Checkbox;
