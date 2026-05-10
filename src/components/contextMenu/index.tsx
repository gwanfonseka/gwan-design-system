"use client";

import { FC, ReactNode, useEffect, useRef, useState } from "react";
import type { IDropdownMenuItem } from "@/components/dropdownMenu";

export interface IContextMenu {
  children: ReactNode;
  items: IDropdownMenuItem[];
  className?: string;
}

const ContextMenu: FC<IContextMenu> = ({ children, items, className = "" }) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = wrapRef.current?.getBoundingClientRect();
    setPos({ x: e.clientX - (rect?.left ?? 0), y: e.clientY - (rect?.top ?? 0) });
    setOpen(true);
  };

  return (
    <div ref={wrapRef} onContextMenu={handleContextMenu} className={`relative ${className}`}>
      {children}

      {open && (
        <div
          ref={menuRef}
          style={{ top: pos.y, left: pos.x }}
          className="absolute z-50 min-w-44 bg-surface border border-border rounded-lg shadow-lg py-1"
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

export default ContextMenu;
