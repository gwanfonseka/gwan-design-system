import { FC } from "react";
import { CheckSVG } from "../icons";

export enum CHECKBOX_SIZE {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum CHECKBOX_EDGE_STYLE {
  ROUNDED = "rounded",
  SQUARED = "squared",
}

export interface ICheckbox {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
  size?: CHECKBOX_SIZE;
  edges?: CHECKBOX_EDGE_STYLE;
}

const sizeMap = {
  [CHECKBOX_SIZE.SMALL]: { box: "size-4", icon: "size-3" },
  [CHECKBOX_SIZE.MEDIUM]: { box: "size-5", icon: "size-4" },
  [CHECKBOX_SIZE.LARGE]: { box: "size-6", icon: "size-5" },
};

const edgeMap = {
  [CHECKBOX_EDGE_STYLE.ROUNDED]: "rounded-sm",
  [CHECKBOX_EDGE_STYLE.SQUARED]: "rounded-none",
};

const Checkbox: FC<ICheckbox> = ({
  label,
  checked = false,
  onChange,
  className = "",
  disabled = false,
  size = CHECKBOX_SIZE.MEDIUM,
  edges = CHECKBOX_EDGE_STYLE.ROUNDED,
}: ICheckbox) => {
  const { box, icon } = sizeMap[size];
  const edgeStyle = edgeMap[edges];

  return (
    <label
      className={`flex items-center gap-2 cursor-pointer ${className} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => !disabled && onChange(!checked)}
        disabled={disabled}
        className="hidden"
      />

      <div
        className={`${box} ${edgeStyle} flex items-center justify-center border transition-all
          ${
            checked
              ? "bg-primary-300 border-primary-400"
              : "bg-background border-border"
          }
          ${disabled ? "bg-surface-raised border-border" : ""}
        `}
      >
        {checked && (
          <div className={`${icon} text-foreground`}>
            <CheckSVG />
          </div>
        )}
      </div>

      {label && <span className="text-foreground">{label}</span>}
    </label>
  );
};

export default Checkbox;
