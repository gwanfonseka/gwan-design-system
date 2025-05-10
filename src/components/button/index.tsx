import { ReactNode } from "react";

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
}

const Button = ({
  variant = BUTTON_VARIANTS.PRIMARY,
  label,
  onClick,
  icon,
  type = "button",
  disabled = false,
}: IButton) => {
  const getButtonVariant = (variant: BUTTON_VARIANTS) => {
    switch (variant) {
      case BUTTON_VARIANTS.PRIMARY:
        return disabled
          ? "bg-neutrola-300 text-neutrola-800 cursor-not-allowed"
          : "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700";

      case BUTTON_VARIANTS.SECONDARY:
        return disabled
          ? "bg-neutrola-100 text-neutrola-800 cursor-not-allowed"
          : "bg-neutrola-50 text-primary-700 hover:bg-primary-50 active:bg-primary-100";
      case BUTTON_VARIANTS.TERTIARY:
        return disabled
          ? "text-neutrola-300 border border-neutrola-300 cursor-not-allowed"
          : "bg-transparent text-primary-500 border border-primary-500 hover:bg-neutrola-50 active:bg-neutrola-100";
    }
  };

  return (
    <button
      className={`${getButtonVariant(variant)} px-4 ${
        label ? "py-2" : "py-4"
      } rounded-lg`}
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
