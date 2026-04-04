import { FC } from "react";

export enum SWITCH_SIZE {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface ISwitch {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: SWITCH_SIZE;
  className?: string;
}

const Switch: FC<ISwitch> = ({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  size = SWITCH_SIZE.MEDIUM,
  className = "",
}) => {
  const trackSize = {
    [SWITCH_SIZE.SMALL]: "w-8 h-4",
    [SWITCH_SIZE.MEDIUM]: "w-11 h-6",
    [SWITCH_SIZE.LARGE]: "w-14 h-7",
  }[size];

  const thumbSize = {
    [SWITCH_SIZE.SMALL]: "w-3 h-3",
    [SWITCH_SIZE.MEDIUM]: "w-4 h-4",
    [SWITCH_SIZE.LARGE]: "w-5 h-5",
  }[size];

  const thumbTranslate = {
    [SWITCH_SIZE.SMALL]: checked ? "translate-x-4.5" : "translate-x-0.5",
    [SWITCH_SIZE.MEDIUM]: checked ? "translate-x-6" : "translate-x-1",
    [SWITCH_SIZE.LARGE]: checked ? "translate-x-8" : "translate-x-1",
  }[size];

  const trackColor = disabled
    ? "bg-border cursor-not-allowed"
    : checked
      ? "bg-primary-500 cursor-pointer"
      : "bg-surface-raised border border-border cursor-pointer";

  return (
    <label
      className={`inline-flex items-start gap-3 ${disabled ? "opacity-50" : ""} ${className}`}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative shrink-0 inline-flex items-center rounded-full transition-colors duration-200 focus:outline-none ${trackSize} ${trackColor}`}
      >
        <span
          className={`inline-block bg-white rounded-full shadow-sm transition-transform duration-200 ${thumbSize} ${thumbTranslate}`}
        />
      </button>
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <span className="text-sm font-medium text-foreground leading-tight">
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs text-muted-fg mt-0.5">{description}</span>
          )}
        </div>
      )}
    </label>
  );
};

export default Switch;
