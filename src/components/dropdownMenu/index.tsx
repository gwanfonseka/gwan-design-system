"use client";

import { FC, ReactNode, useEffect, useRef, useState } from "react";

export enum DROPDOWN_PLACEMENT {
  BOTTOM_LEFT = "BOTTOM_LEFT",
  BOTTOM_RIGHT = "BOTTOM_RIGHT",
  TOP_LEFT = "TOP_LEFT",
  TOP_RIGHT = "TOP_RIGHT",
}

export interface IDropdownMenuItem {
  label?: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  destructive?: boolean;
  isDivider?: boolean;
}

export interface IDropdownMenu {
  trigger: ReactNode;
  items: IDropdownMenuItem[];
  placement?: DROPDOWN_PLACEMENT;
  className?: string;
}

const placementClass: Record<DROPDOWN_PLACEMENT, string> = {
  [DROPDOWN_PLACEMENT.BOTTOM_LEFT]:  "top-full left-0 mt-1",
  [DROPDOWN_PLACEMENT.BOTTOM_RIGHT]: "top-full right-0 mt-1",
  [DROPDOWN_PLACEMENT.TOP_LEFT]:     "bottom-full left-0 mb-1",
  [DROPDOWN_PLACEMENT.TOP_RIGHT]:    "bottom-full right-0 mb-1",
};

const DropdownMenu: FC<IDropdownMenu> = ({
  trigger,
  items,
  placement = DROPDOWN_PLACEMENT.BOTTOM_LEFT,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={`relative inline-flex ${className}`} ref={ref}>
      <div onClick={() => setOpen((v) => !v)} className="cursor-pointer">
        {trigger}
      </div>

      {open && (
        <div
          className={`absolute z-50 min-w-44 bg-surface border border-border rounded-lg shadow-lg py-1 ${placementClass[placement]}`}
        >
          {items.map((item, i) => {
            if (item.isDivider) {
              return <div key={i} className="my-1 border-t border-border" />;
            }
            return (
              <button
                key={i}
                disabled={item.disabled}
                onClick={() => {
                  if (!item.disabled) {
                    item.onClick?.();
                    setOpen(false);
                  }
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors
                  ${item.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
                  ${item.destructive
                    ? "text-danger hover:bg-danger-bg"
                    : "text-foreground hover:bg-surface-raised"
                  }`}
              >
                {item.icon && (
                  <span className="size-4 flex items-center justify-center shrink-0 [&>svg]:size-4">
                    {item.icon}
                  </span>
                )}
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
