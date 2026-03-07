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
  SQUARE = "square",
  PILL = "pill",
}

export interface ITag {
  type: TAG_TYPE;
  label: string;
  variant?: TAG_VARIANT; // optional, default is solid
  edges?: TAG_EDGE_STYLE; // optional, default is rounded
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
        return `${variant === TAG_VARIANT.SOLID ? "bg-green-50" : "bg-transparent border border-green-600"} text-green-600`;
      case TAG_TYPE.DANGER:
        return `${variant === TAG_VARIANT.SOLID ? "bg-red-50" : "bg-transparent border border-red-600"} text-red-600`;
      case TAG_TYPE.WARNING:
        return `${variant === TAG_VARIANT.SOLID ? "bg-yellow-100" : "bg-transparent border border-yellow-500"} text-yellow-500`;
      case TAG_TYPE.INFO:
        return `${variant === TAG_VARIANT.SOLID ? "bg-blue-50" : "bg-transparent border border-blue-600"} text-blue-600`;
      default:
        return `${variant === TAG_VARIANT.SOLID ? "bg-neutral-200" : "bg-transparent border border-neutral-800"} text-neutral-800`;
    }
  };

  const getEdgesStyle = (edges: TAG_EDGE_STYLE) => {
    switch (edges) {
      case TAG_EDGE_STYLE.SQUARE:
        return "rounded-none";
      case TAG_EDGE_STYLE.PILL:
        return "rounded-full";
      default:
        return "rounded-lg";
    }
  };

  return (
    <div
      className={`w-fit px-4 py-2 text-sm ${getTagStyle(
        type,
      )} ${getEdgesStyle(edges)} ${className}`}
    >
      {label}
    </div>
  );
};

export default Tag;
