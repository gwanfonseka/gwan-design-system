import { FC } from "react";

export enum PROGRESS_BAR_TYPE {
  DEFAULT = "default",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
  INFO = "info",
}

export enum PROGRESS_BAR_SIZE {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface IProgressBar {
  value: number;
  max?: number;
  type?: PROGRESS_BAR_TYPE;
  size?: PROGRESS_BAR_SIZE;
  label?: string;
  showValue?: boolean;
  striped?: boolean;
  animated?: boolean;
  className?: string;
}

const ProgressBar: FC<IProgressBar> = ({
  value,
  max = 100,
  type = PROGRESS_BAR_TYPE.DEFAULT,
  size = PROGRESS_BAR_SIZE.MEDIUM,
  label,
  showValue = false,
  striped = false,
  animated = false,
  className = "",
}) => {
  const percent = Math.min(Math.max((value / max) * 100, 0), 100);

  const trackColor = "bg-surface-raised";

  const fillColor = {
    [PROGRESS_BAR_TYPE.SUCCESS]: "bg-success",
    [PROGRESS_BAR_TYPE.DANGER]: "bg-danger",
    [PROGRESS_BAR_TYPE.WARNING]: "bg-warning",
    [PROGRESS_BAR_TYPE.INFO]: "bg-accent",
    [PROGRESS_BAR_TYPE.DEFAULT]: "bg-primary-500",
  }[type];

  const trackHeight = {
    [PROGRESS_BAR_SIZE.SMALL]: "h-1.5",
    [PROGRESS_BAR_SIZE.MEDIUM]: "h-3",
    [PROGRESS_BAR_SIZE.LARGE]: "h-5",
  }[size];

  const stripedClass = striped
    ? "bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(255,255,255,0.15)_6px,rgba(255,255,255,0.15)_12px)]"
    : "";

  const animatedClass = animated && striped ? "animate-[progress-stripe_1s_linear_infinite]" : "";

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-xs font-medium text-foreground">{label}</span>}
          {showValue && (
            <span className="text-xs text-muted-fg">{Math.round(percent)}%</span>
          )}
        </div>
      )}
      <div className={`w-full ${trackHeight} ${trackColor} rounded-full overflow-hidden`}>
        <div
          className={`h-full ${fillColor} ${stripedClass} ${animatedClass} rounded-full transition-[width] duration-500 ease-out`}
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
