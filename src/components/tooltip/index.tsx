import { FC } from "react";

export enum TOOLTIP_POSITION {
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
}

export interface ITooltip {
  position: TOOLTIP_POSITION;
  label: React.ReactNode;
  isVisible: boolean;
  toolTipWidth?: string;
  toolTipClass?: string;
  className?: string;
}

const Tooltip: FC<ITooltip> = ({
  position,
  label,
  isVisible = false,
  toolTipWidth = "w-60",
  toolTipClass = "",
  className = "",
}: ITooltip) => {
  const getTooltipPosition = (position: TOOLTIP_POSITION) => {
    switch (position) {
      case TOOLTIP_POSITION.TOP:
        return "mb-2 bottom-full left-1/2 -translate-x-1/2";
      case TOOLTIP_POSITION.BOTTOM:
        return "mt-2 top-full left-1/2 -translate-x-1/2";
      case TOOLTIP_POSITION.LEFT:
        return "mr-2 right-full top-1/2 -translate-y-1/2";
      case TOOLTIP_POSITION.RIGHT:
        return "ml-2 left-full top-1/2 -translate-y-1/2";
      default:
        return "";
    }
  };

  const tipPosition = (position: TOOLTIP_POSITION) => {
    switch (position) {
      case TOOLTIP_POSITION.TOP:
        return "bottom-[-4px] left-1/2 -translate-x-1/2";
      case TOOLTIP_POSITION.BOTTOM:
        return "top-[-4px] left-1/2 -translate-x-1/2";
      case TOOLTIP_POSITION.LEFT:
        return "right-[-4px] top-1/2 -translate-y-1/2";
      case TOOLTIP_POSITION.RIGHT:
        return "left-[-4px] top-1/2 -translate-y-1/2";
      default:
        return "";
    }
  };

  return (
    <div
      className={`bg-neutral-800 text-white text-sm py-1 px-2 rounded-lg absolute z-50 
        ${isVisible ? "block" : "hidden"} ${getTooltipPosition(
        position
      )} ${toolTipWidth} ${toolTipClass} ${className}`}
    >
      <div>{label}</div>
      <div
        className={`absolute w-2 h-2 bg-neutral-800 rotate-45 ${tipPosition(
          position
        )}`}
      ></div>
    </div>
  );
};

export default Tooltip;
