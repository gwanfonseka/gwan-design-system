import { FC, useEffect, useId, useRef, useState } from "react";
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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  const closeDropdown = () => setIsChildrenVisible(false);

  // Closing removes the panel, so send focus back to the trigger rather than the page.
  const wasOpen = useRef(false);
  useEffect(() => {
    if (wasOpen.current && !isChildrenVisible) triggerRef.current?.focus();
    wasOpen.current = isChildrenVisible;
  }, [isChildrenVisible]);

  return (
    <div
      className={`relative ${className}`}
      onKeyDown={(e) => {
        if (e.key === "Escape" && isChildrenVisible) {
          e.stopPropagation();
          closeDropdown();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isChildrenVisible}
        aria-controls={isChildrenVisible ? panelId : undefined}
        className="flex flex-row gap-2.5 items-center w-fit border border-border bg-surface px-3 py-2.5 rounded cursor-pointer hover:border-primary-default focus:outline-none focus-visible:border-primary-default transition-colors duration-200"
        onClick={() => setIsChildrenVisible(!isChildrenVisible)}
      >
        <span className="size-5 text-muted-fg">
          <FilterSVG />
        </span>
        <span className="text-foreground text-sm">Filter</span>
        <span className="size-5 text-muted-fg">
          <ChevDownSVG />
        </span>
      </button>
      {isChildrenVisible && (
        <div
          id={panelId}
          className="border border-border rounded shadow-lg overflow-y-auto absolute top-full mt-1 bg-surface z-10"
        >
          {children(closeDropdown)}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
