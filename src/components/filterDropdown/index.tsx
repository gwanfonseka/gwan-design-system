import { FC, useState } from "react";
import { ChevDownSVG, FilterSVG } from "../icons";

export interface IFilterOption {
  label: string;
  value: string;
  isChecked?: boolean;
}

export interface IFilterCategory {
  category: string;
  options: IFilterOption[];
}

export interface IFilter {
  children: (closeDropdown: () => void) => React.ReactNode;
  className?: string;
}

const FilterDropdown: FC<IFilter> = ({ children, className = "" }: IFilter) => {
  const [isChildrenVisible, setIsChildrenVisible] = useState<boolean>(false);

  const closeDropdown = () => setIsChildrenVisible(false);

  return (
    <div className={`relative ${className}`}>
      <div
        className="flex flex-row gap-4 items-center w-fit border border-neutral-300 hover:border-neutral-400 group p-2 rounded-lg cursor-pointer"
        onClick={() => setIsChildrenVisible(!isChildrenVisible)}
      >
        <div className="size-5 text-neutral-300 group-hover:text-neutral-400">
          <FilterSVG />
        </div>
        <p className="text-neutral-300 text-base group-hover:text-neutral-400">
          Filter
        </p>
        <div className="size-5 text-neutral-300 group-hover:text-neutral-400">
          <ChevDownSVG />
        </div>
      </div>
      {isChildrenVisible && (
        <div className="border border-neutral-300 rounded-lg shadow-lg overflow-y-auto absolute top-full bg-white z-10">
          {children(closeDropdown)}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
