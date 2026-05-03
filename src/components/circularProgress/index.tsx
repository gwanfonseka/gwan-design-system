import { FC } from "react";

export enum CIRCULAR_PROGRESS_SIZE {
  SM = "SM",
  MD = "MD",
  LG = "LG",
}

export enum CIRCULAR_PROGRESS_TYPE {
  DEFAULT = "DEFAULT",
  SUCCESS = "SUCCESS",
  DANGER = "DANGER",
  WARNING = "WARNING",
}

export interface ICircularProgress {
  value: number;
  size?: CIRCULAR_PROGRESS_SIZE;
  type?: CIRCULAR_PROGRESS_TYPE;
  showLabel?: boolean;
  className?: string;
}

const sizeConfig: Record<CIRCULAR_PROGRESS_SIZE, { px: number; stroke: number; text: string }> = {
  [CIRCULAR_PROGRESS_SIZE.SM]: { px: 48,  stroke: 4, text: "text-[10px]" },
  [CIRCULAR_PROGRESS_SIZE.MD]: { px: 72,  stroke: 6, text: "text-xs"     },
  [CIRCULAR_PROGRESS_SIZE.LG]: { px: 100, stroke: 8, text: "text-sm"     },
};

const typeConfig: Record<CIRCULAR_PROGRESS_TYPE, { track: string; fill: string }> = {
  [CIRCULAR_PROGRESS_TYPE.DEFAULT]: { track: "stroke-border",      fill: "stroke-primary-default" },
  [CIRCULAR_PROGRESS_TYPE.SUCCESS]: { track: "stroke-success-bg",  fill: "stroke-success"         },
  [CIRCULAR_PROGRESS_TYPE.DANGER]:  { track: "stroke-danger-bg",   fill: "stroke-danger"          },
  [CIRCULAR_PROGRESS_TYPE.WARNING]: { track: "stroke-warning-bg",  fill: "stroke-warning"         },
};

const CircularProgress: FC<ICircularProgress> = ({
  value,
  size = CIRCULAR_PROGRESS_SIZE.MD,
  type = CIRCULAR_PROGRESS_TYPE.DEFAULT,
  showLabel = true,
  className = "",
}) => {
  const clamped = Math.min(100, Math.max(0, value));
  const { px, stroke, text } = sizeConfig[size];
  const { track, fill } = typeConfig[type];

  const radius = (px - stroke * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clamped / 100) * circumference;
  const center = px / 2;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: px, height: px }}>
      <svg width={px} height={px} className="-rotate-90">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          className={track}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`${fill} transition-all duration-500`}
        />
      </svg>
      {showLabel && (
        <span className={`absolute font-semibold text-foreground ${text}`}>
          {clamped}%
        </span>
      )}
    </div>
  );
};

export default CircularProgress;
