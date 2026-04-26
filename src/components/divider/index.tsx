import { FC, ReactNode } from "react";

export enum DIVIDER_ORIENTATION {
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL",
}

export enum DIVIDER_VARIANT {
  SOLID = "SOLID",
  DASHED = "DASHED",
  DOTTED = "DOTTED",
}

export interface IDivider {
  orientation?: DIVIDER_ORIENTATION;
  variant?: DIVIDER_VARIANT;
  label?: ReactNode;
  className?: string;
}

const borderStyle: Record<DIVIDER_VARIANT, string> = {
  [DIVIDER_VARIANT.SOLID]:  "border-solid",
  [DIVIDER_VARIANT.DASHED]: "border-dashed",
  [DIVIDER_VARIANT.DOTTED]: "border-dotted",
};

const Divider: FC<IDivider> = ({
  orientation = DIVIDER_ORIENTATION.HORIZONTAL,
  variant = DIVIDER_VARIANT.SOLID,
  label,
  className = "",
}) => {
  if (orientation === DIVIDER_ORIENTATION.VERTICAL) {
    return (
      <div
        className={`self-stretch w-px border-l border-border ${borderStyle[variant]} ${className}`}
      />
    );
  }

  if (label) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className={`flex-1 border-t border-border ${borderStyle[variant]}`} />
        <span className="text-xs text-muted-fg whitespace-nowrap">{label}</span>
        <div className={`flex-1 border-t border-border ${borderStyle[variant]}`} />
      </div>
    );
  }

  return (
    <div
      className={`w-full border-t border-border ${borderStyle[variant]} ${className}`}
    />
  );
};

export default Divider;
