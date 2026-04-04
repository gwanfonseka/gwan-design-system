import { FC, useState } from "react";
import Tooltip, { TOOLTIP_POSITION } from "../tooltip";

export interface IEllipsis {
  label: string;
  labelMaxWidth?: string;
  tooltipPosition?: TOOLTIP_POSITION;
  tooltipWidth?: string;
  className?: string;
}

const Ellipsis: FC<IEllipsis> = ({
  label,
  labelMaxWidth = "w-32",
  tooltipPosition = TOOLTIP_POSITION.RIGHT,
  tooltipWidth = "w-40",
  className = "",
}: IEllipsis) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      <p
        className={`text-ellipsis ${labelMaxWidth} overflow-hidden whitespace-nowrap`}
      >
        {label}
      </p>
      <Tooltip
        label={label}
        position={tooltipPosition}
        isVisible={isTooltipVisible}
        toolTipWidth={tooltipWidth}
      />
    </div>
  );
};

export default Ellipsis;
