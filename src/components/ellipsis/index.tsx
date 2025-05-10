import { useState } from "react";
import Tooltip, { TOOLTIP_POSITION } from "../tooltip";

export interface IEllipsis {
  label: string;
  tooltipPosition?: TOOLTIP_POSITION;
  tooltipWidth?: string;
}

const Ellipsis = ({
  label,
  tooltipPosition = TOOLTIP_POSITION.RIGHT,
  tooltipWidth = "w-40",
}: IEllipsis) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      <p className="text-ellipsis w-32 overflow-hidden whitespace-nowrap">
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
