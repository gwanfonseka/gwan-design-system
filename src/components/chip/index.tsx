import { FC } from "react";
import { CrossSVG } from "../icons";

export interface IChip {
  label: string;
  onClear: () => void;
  className?: string;
  variant?: CHIP_VARIANT;
  edges?: CHIP_EDGE_STYLE;
}

export enum CHIP_VARIANT {
  SOLID = "solid",
  OUTLINE = "outline",
}

export enum CHIP_EDGE_STYLE {
  ROUNDED = "rounded",
  SQUARED = "squared",
  PILL = "pill",
}

const Chip: FC<IChip> = ({
  label,
  onClear,
  className = "",
  variant = CHIP_VARIANT.SOLID,
  edges = CHIP_EDGE_STYLE.ROUNDED,
}: IChip) => {
  const getChipStyle = (variant: CHIP_VARIANT) => {
    switch (variant) {
      case CHIP_VARIANT.OUTLINE:
        return "bg-transparent border border-neutral-700 text-neutral-700 hover:text-neutral-900";
      case CHIP_VARIANT.SOLID:
      default:
        return "bg-neutral-300 text-neutral-800 hover:text-neutral-900";
    }
  };

  const getEdgesStyle = (edges: CHIP_EDGE_STYLE) => {
    switch (edges) {
      case CHIP_EDGE_STYLE.SQUARED:
        return "rounded-none";
      case CHIP_EDGE_STYLE.PILL:
        return "rounded-full";
      default:
        return "rounded-lg";
    }
  };

  return (
    <div
      className={`flex flex-row gap-2 items-center ${getChipStyle(variant)} w-fit px-4 py-2 ${getEdgesStyle(edges)} ${className}`}
    >
      <div className="size-4 cursor-pointer" onClick={onClear}>
        <CrossSVG />
      </div>
      <p className="text-base">{label}</p>
    </div>
  );
};

export default Chip;
