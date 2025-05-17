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
}

const FilterDropdown: FC<IFilter> = ({ children }: IFilter) => {
  const [isChildrenVisible, setIsChildrenVisible] = useState<boolean>(false);

  const closeDropdown = () => setIsChildrenVisible(false);

  return (
    <div className="relative">
      <div
        className="flex flex-row gap-4 items-center w-fit border border-neutrola-300 hover:border-neutrola-400 group p-2 rounded-lg cursor-pointer"
        onClick={() => setIsChildrenVisible(!isChildrenVisible)}
      >
        <div className="size-5 text-neutrola-300 group-hover:text-neutrola-400">
          <FilterSVG />
        </div>
        <p className="text-neutrola-300 text-base group-hover:text-neutrola-400">
          Filter
        </p>
        <div className="size-5 text-neutrola-300 group-hover:text-neutrola-400">
          <ChevDownSVG />
        </div>
      </div>
      {isChildrenVisible && (
        <div className="border border-neutrola-300 rounded-lg shadow-lg overflow-y-auto absolute top-full bg-white z-10">
          {children(closeDropdown)}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
