import { FC, ReactNode } from "react";

export enum BUTTON_VARIANTS {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export enum BUTTON_EDGE_STYLE {
  ROUNDED = "rounded",
  SQUARED = "squared",
  PILL = "pill",
}

export interface IButton {
  variant?: BUTTON_VARIANTS;
  label?: string;
  onClick: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  edges?: BUTTON_EDGE_STYLE;
}

const Button: FC<IButton> = ({
  variant = BUTTON_VARIANTS.PRIMARY,
  label,
  onClick,
  leftIcon,
  rightIcon,
  type = "button",
  disabled = false,
  className = "",
  edges = BUTTON_EDGE_STYLE.ROUNDED,
}: IButton) => {
  const getButtonVariant = (variant: BUTTON_VARIANTS) => {
    switch (variant) {
      case BUTTON_VARIANTS.PRIMARY:
        return disabled
          ? "bg-primary-200 text-primary-500 cursor-not-allowed"
          : "bg-primary-500 text-primary-default-fg hover:bg-primary-600 active:bg-primary-700";

      case BUTTON_VARIANTS.SECONDARY:
        return disabled
          ? "bg-surface text-muted-fg cursor-not-allowed"
          : "bg-primary-100 text-primary-800 cursor-pointer hover:bg-primary-200 active:bg-primary-300";

      case BUTTON_VARIANTS.TERTIARY:
        return disabled
          ? "text-muted-fg border border-border cursor-not-allowed"
          : "bg-transparent text-primary-500 border border-primary-500 cursor-pointer hover:bg-surface active:bg-surface-raised";
    }
  };

  const getEdgesStyle = (edges: BUTTON_EDGE_STYLE) => {
    switch (edges) {
      case BUTTON_EDGE_STYLE.SQUARED:
        return "rounded-none";
      case BUTTON_EDGE_STYLE.PILL:
        return "rounded-full";
      default:
        return "rounded-lg";
    }
  };

  return (
    <button
      className={`${getButtonVariant(variant)} px-4 ${
        label ? "py-2" : "py-4"
      } ${getEdgesStyle(edges)} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex flex-row gap-2 items-center">
        {leftIcon && <div className="size-5">{leftIcon}</div>}
        {label && <p>{label}</p>}
        {rightIcon && <div className="size-5">{rightIcon}</div>}
      </div>
    </button>
  );
};

export default Button;
