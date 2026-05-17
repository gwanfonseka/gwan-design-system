import { FC, ReactNode } from "react";

export enum BUTTON_VARIANTS {
  PRIMARY   = "primary",
  SECONDARY = "secondary",
  TERTIARY  = "tertiary",
}

export enum BUTTON_EDGE_STYLE {
  ROUNDED = "rounded",
  SQUARED = "squared",
  PILL    = "pill",
}

export enum BUTTON_SIZE {
  SM = "SM",
  MD = "MD",
  LG = "LG",
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
  size?: BUTTON_SIZE;
}

const variantClass = (variant: BUTTON_VARIANTS, disabled: boolean): string => {
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

const edgeClass = (edges: BUTTON_EDGE_STYLE): string => {
  switch (edges) {
    case BUTTON_EDGE_STYLE.SQUARED: return "rounded-none";
    case BUTTON_EDGE_STYLE.PILL:    return "rounded-full";
    default:                        return "rounded-lg";
  }
};

const sizeConfig: Record<BUTTON_SIZE, { text: string; px: string; py: string; pyIcon: string; icon: string }> = {
  [BUTTON_SIZE.SM]: { text: "text-xs",   px: "px-3", py: "py-1.5", pyIcon: "p-1.5", icon: "size-3.5" },
  [BUTTON_SIZE.MD]: { text: "text-sm",   px: "px-4", py: "py-2.5", pyIcon: "p-2.5", icon: "size-4"   },
  [BUTTON_SIZE.LG]: { text: "text-base", px: "px-6", py: "py-3.5", pyIcon: "p-3.5", icon: "size-5"   },
};

const Button: FC<IButton> = ({
  variant  = BUTTON_VARIANTS.PRIMARY,
  label,
  onClick,
  leftIcon,
  rightIcon,
  type     = "button",
  disabled = false,
  className = "",
  edges    = BUTTON_EDGE_STYLE.ROUNDED,
  size     = BUTTON_SIZE.MD,
}: IButton) => {
  const s = sizeConfig[size];
  const padding = label ? `${s.py} ${s.px}` : s.pyIcon;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantClass(variant, disabled)} ${padding} ${s.text} ${edgeClass(edges)} ${className}`}
    >
      <div className="flex flex-row gap-2 items-center">
        {leftIcon  && <div className={s.icon}>{leftIcon}</div>}
        {label     && <span>{label}</span>}
        {rightIcon && <div className={s.icon}>{rightIcon}</div>}
      </div>
    </button>
  );
};

export default Button;
