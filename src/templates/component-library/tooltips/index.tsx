import Tooltip, { TOOLTIP_POSITION } from "@/components/tooltip";
import { useState } from "react";

const Tooltips = () => {
  const [showTopTooltip, setShowTopTooltip] = useState(false);
  const [showRightTooltip, setShowRightTooltip] = useState(false);
  const [showBottomTooltip, setShowBottomTooltip] = useState(false);
  const [showLeftTooltip, setShowLeftTooltip] = useState(false);

  const tooltipsComponents = [
    {
      label: "Tooltip on top",
      position: TOOLTIP_POSITION.TOP,
      showTooltip: showTopTooltip,
      setShowTooltip: setShowTopTooltip,
    },
    {
      label: "Tooltip on right",
      position: TOOLTIP_POSITION.RIGHT,
      showTooltip: showRightTooltip,
      setShowTooltip: setShowRightTooltip,
    },
    {
      label: "Tooltip on bottom",
      position: TOOLTIP_POSITION.BOTTOM,
      showTooltip: showBottomTooltip,
      setShowTooltip: setShowBottomTooltip,
    },
    {
      label: "Tooltip on left",
      position: TOOLTIP_POSITION.LEFT,
      showTooltip: showLeftTooltip,
      setShowTooltip: setShowLeftTooltip,
    },
  ];

  return (
    <div className="flex flex-row items-center justify-around pt-16">
      {tooltipsComponents.map(
        ({ label, position, showTooltip, setShowTooltip }, index) => (
          <div
            key={index}
            className="relative border border-neutral-700 p-2 rounded-lg cursor-pointer hover:border-primary-500 hover:text-primary-500"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {label}
            <Tooltip
              position={position}
              label={label}
              isVisible={showTooltip}
              toolTipWidth="w-32"
            />
          </div>
        )
      )}
    </div>
  );
};

export default Tooltips;
