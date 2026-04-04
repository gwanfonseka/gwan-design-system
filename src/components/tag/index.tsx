import { FC } from "react";

export enum TAG_TYPE {
  DEFAULT = "default",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
  INFO = "info",
}

export enum TAG_VARIANT {
  SOLID = "solid",
  OUTLINE = "outline",
}

export enum TAG_EDGE_STYLE {
  ROUNDED = "rounded",
  SQUARED = "squared",
  PILL = "pill",
}

export interface ITag {
  type: TAG_TYPE;
  label: string;
  variant?: TAG_VARIANT;
  edges?: TAG_EDGE_STYLE;
  className?: string;
}

const Tag: FC<ITag> = ({
  type,
  label,
  variant = TAG_VARIANT.SOLID,
  edges = TAG_EDGE_STYLE.ROUNDED,
  className = "",
}: ITag) => {
  const getTagStyle = (type: TAG_TYPE) => {
    switch (type) {
      case TAG_TYPE.SUCCESS:
        return `${variant === TAG_VARIANT.SOLID ? "bg-success-bg" : "bg-transparent border border-success"} text-success-fg`;
      case TAG_TYPE.DANGER:
        return `${variant === TAG_VARIANT.SOLID ? "bg-danger-bg" : "bg-transparent border border-danger"} text-danger-fg`;
      case TAG_TYPE.WARNING:
        return `${variant === TAG_VARIANT.SOLID ? "bg-warning-bg" : "bg-transparent border border-warning"} text-warning-fg`;
      case TAG_TYPE.INFO:
        return `${variant === TAG_VARIANT.SOLID ? "bg-accent/10" : "bg-transparent border border-accent"} text-accent`;
      default:
        return `${variant === TAG_VARIANT.SOLID ? "bg-surface-raised" : "bg-transparent border border-border"} text-foreground`;
    }
  };

  const getEdgesStyle = (edges: TAG_EDGE_STYLE) => {
    switch (edges) {
      case TAG_EDGE_STYLE.SQUARED:
        return "rounded-none";
      case TAG_EDGE_STYLE.PILL:
        return "rounded-full";
      default:
        return "rounded-lg";
    }
  };

  return (
    <div
      className={`w-fit px-4 py-2 text-sm ${getTagStyle(type)} ${getEdgesStyle(edges)} ${className}`}
    >
      {label}
    </div>
  );
};

export default Tag;
