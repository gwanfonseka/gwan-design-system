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
        className="flex flex-row gap-2.5 items-center w-fit border border-border bg-surface px-3 py-2.5 rounded cursor-pointer hover:border-primary-500 transition-colors duration-200"
        onClick={() => setIsChildrenVisible(!isChildrenVisible)}
      >
        <div className="size-5 text-muted-fg">
          <FilterSVG />
        </div>
        <p className="text-foreground text-sm">Filter</p>
        <div className="size-5 text-muted-fg">
          <ChevDownSVG />
        </div>
      </div>
      {isChildrenVisible && (
        <div className="border border-border rounded shadow-lg overflow-y-auto absolute top-full mt-1 bg-surface z-10">
          {children(closeDropdown)}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
