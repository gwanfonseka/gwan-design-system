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
        className="flex flex-row gap-4 items-center w-fit border border-border group p-4 rounded-lg cursor-pointer hover:border-foreground transition-colors duration-150"
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
        <div className="border border-border rounded-lg shadow-lg overflow-y-auto absolute top-[105%] bg-surface z-10">
          {children(closeDropdown)}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
