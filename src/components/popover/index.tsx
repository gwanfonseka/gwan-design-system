"use client";

import { FC, ReactNode, useEffect, useRef, useState } from "react";

export enum POPOVER_PLACEMENT {
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
}

export enum POPOVER_TRIGGER {
  CLICK = "click",
  HOVER = "hover",
}

export interface IPopover {
  trigger: ReactNode;
  content: ReactNode;
  placement?: POPOVER_PLACEMENT;
  triggerOn?: POPOVER_TRIGGER;
  title?: string;
  className?: string;
}

const Popover: FC<IPopover> = ({
  trigger,
  content,
  placement = POPOVER_PLACEMENT.BOTTOM,
  triggerOn = POPOVER_TRIGGER.CLICK,
  title,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (triggerOn !== POPOVER_TRIGGER.CLICK) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [triggerOn]);

  const placementClass: Record<POPOVER_PLACEMENT, string> = {
    [POPOVER_PLACEMENT.TOP]: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    [POPOVER_PLACEMENT.BOTTOM]: "top-full left-1/2 -translate-x-1/2 mt-2",
    [POPOVER_PLACEMENT.LEFT]: "right-full top-1/2 -translate-y-1/2 mr-2",
    [POPOVER_PLACEMENT.RIGHT]: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const hoverProps =
    triggerOn === POPOVER_TRIGGER.HOVER
      ? {
          onMouseEnter: () => setOpen(true),
          onMouseLeave: () => setOpen(false),
        }
      : {};

  return (
    <div className={`relative inline-flex ${className}`} ref={ref} {...hoverProps}>
      <div
        onClick={triggerOn === POPOVER_TRIGGER.CLICK ? () => setOpen((v) => !v) : undefined}
        className={triggerOn === POPOVER_TRIGGER.CLICK ? "cursor-pointer" : ""}
      >
        {trigger}
      </div>

      {open && (
        <div
          className={`absolute z-50 w-64 bg-surface border border-border rounded-lg shadow-lg p-3 ${placementClass[placement]}`}
        >
          {title && (
            <p className="text-xs font-semibold text-foreground mb-2 pb-2 border-b border-border">
              {title}
            </p>
          )}
          <div className="text-sm text-muted-fg">{content}</div>
        </div>
      )}
    </div>
  );
};

export default Popover;
