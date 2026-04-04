import { FC } from "react";

export enum BADGE_TYPE {
  DEFAULT = "default",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
  INFO = "info",
}

export enum BADGE_VARIANT {
  SOLID = "solid",
  OUTLINE = "outline",
}

export enum BADGE_SIZE {
  SMALL = "small",
  MEDIUM = "medium",
}

export interface IBadge {
  type?: BADGE_TYPE;
  variant?: BADGE_VARIANT;
  size?: BADGE_SIZE;
  label?: string | number;
  dot?: boolean;
  className?: string;
}

const Badge: FC<IBadge> = ({
  type = BADGE_TYPE.DEFAULT,
  variant = BADGE_VARIANT.SOLID,
  size = BADGE_SIZE.MEDIUM,
  label,
  dot = false,
  className = "",
}) => {
  const getTypeStyle = () => {
    switch (type) {
      case BADGE_TYPE.SUCCESS:
        return variant === BADGE_VARIANT.SOLID
          ? "bg-success-bg text-success-fg"
          : "bg-transparent border border-success text-success-fg";
      case BADGE_TYPE.DANGER:
        return variant === BADGE_VARIANT.SOLID
          ? "bg-danger-bg text-danger-fg"
          : "bg-transparent border border-danger text-danger-fg";
      case BADGE_TYPE.WARNING:
        return variant === BADGE_VARIANT.SOLID
          ? "bg-warning-bg text-warning-fg"
          : "bg-transparent border border-warning text-warning-fg";
      case BADGE_TYPE.INFO:
        return variant === BADGE_VARIANT.SOLID
          ? "bg-accent/10 text-accent"
          : "bg-transparent border border-accent text-accent";
      default:
        return variant === BADGE_VARIANT.SOLID
          ? "bg-surface-raised text-foreground"
          : "bg-transparent border border-border text-foreground";
    }
  };

  const getDotColor = () => {
    switch (type) {
      case BADGE_TYPE.SUCCESS: return "bg-success";
      case BADGE_TYPE.DANGER: return "bg-danger";
      case BADGE_TYPE.WARNING: return "bg-warning";
      case BADGE_TYPE.INFO: return "bg-accent";
      default: return "bg-muted-fg";
    }
  };

  const sizeStyle =
    size === BADGE_SIZE.SMALL
      ? "px-1.5 py-0.5 text-[10px]"
      : "px-2.5 py-1 text-xs";

  if (dot && !label) {
    const dotSize = size === BADGE_SIZE.SMALL ? "w-2 h-2" : "w-2.5 h-2.5";
    return (
      <span className={`inline-block rounded-full ${dotSize} ${getDotColor()} ${className}`} />
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 w-fit font-semibold rounded-full ${sizeStyle} ${getTypeStyle()} ${className}`}
    >
      {dot && (
        <span className={`inline-block w-1.5 h-1.5 rounded-full ${getDotColor()}`} />
      )}
      {label}
    </span>
  );
};

export default Badge;
