import { FC, ReactNode } from "react";

export enum BUTTON_VARIANTS {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export interface IButton {
  variant?: BUTTON_VARIANTS;
  label?: string;
  onClick: () => void;
  icon?: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

const Button: FC<IButton> = ({
  variant = BUTTON_VARIANTS.PRIMARY,
  label,
  onClick,
  icon,
  type = "button",
  disabled = false,
  className = "",
}: IButton) => {
  const getButtonVariant = (variant: BUTTON_VARIANTS) => {
    switch (variant) {
      case BUTTON_VARIANTS.PRIMARY:
        return disabled
          ? "bg-neutral-300 text-neutral-800 cursor-not-allowed"
          : "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700";

      case BUTTON_VARIANTS.SECONDARY:
        return disabled
          ? "bg-neutral-100 text-neutral-800 cursor-not-allowed"
          : "bg-neutral-50 text-primary-700 hover:bg-primary-50 active:bg-primary-100";
      case BUTTON_VARIANTS.TERTIARY:
        return disabled
          ? "text-neutral-300 border border-neutral-300 cursor-not-allowed"
          : "bg-transparent text-primary-500 border border-primary-500 hover:bg-neutral-50 active:bg-neutral-100";
    }
  };

  return (
    <button
      className={`${getButtonVariant(variant)} px-4 ${
        label ? "py-2" : "py-4"
      } rounded-lg ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex flex-row gap-2 items-center">
        {icon && <div className="size-5">{icon}</div>}
        {label && <p>{label}</p>}
      </div>
    </button>
  );
};

export default Button;
