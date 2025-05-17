import { FC } from "react";
import { CrossSVG } from "../icons";

export interface IChip {
  label: string;
  onClear: () => void;
}

const Chip: FC<IChip> = ({ label, onClear }: IChip) => {
  return (
    <div className="flex flex-row gap-2 items-center bg-neutrola-700 w-fit px-4 py-2 rounded-full">
      <div
        className="size-3 cursor-pointer text-neutral-200 hover:text-white"
        onClick={onClear}
      >
        <CrossSVG />
      </div>
      <p className="text-neutral-200 text-base font-semibold">{label}</p>
    </div>
  );
};

export default Chip;
