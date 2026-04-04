"use client";

import { FC, ReactNode, useEffect, useRef, useState } from "react";

export interface ICommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  group?: string;
  shortcut?: string[];
  onSelect: () => void;
}

export interface ICommandPalette {
  open: boolean;
  onClose: () => void;
  items: ICommandItem[];
  placeholder?: string;
  emptyMessage?: string;
}

const CommandPalette: FC<ICommandPalette> = ({
  open,
  onClose,
  items,
  placeholder = "Type a command or search...",
  emptyMessage = "No results found.",
}) => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[activeIndex]) {
          filtered[activeIndex].onSelect();
          onClose();
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  });

  const filtered = query.trim()
    ? items.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.description?.toLowerCase().includes(query.toLowerCase()) ||
          item.group?.toLowerCase().includes(query.toLowerCase())
      )
    : items;

  const grouped = filtered.reduce<Record<string, ICommandItem[]>>((acc, item) => {
    const g = item.group ?? "";
    if (!acc[g]) acc[g] = [];
    acc[g].push(item);
    return acc;
  }, {});

  let flatIndex = 0;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full max-w-lg bg-surface border border-border rounded-xl shadow-2xl overflow-hidden">
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-muted-fg shrink-0" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M10.5 10.5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveIndex(0); }}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-fg/60 focus:outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded border border-border text-[10px] text-muted-fg font-mono">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="overflow-y-auto max-h-80 py-2">
          {filtered.length === 0 ? (
            <p className="px-4 py-6 text-center text-sm text-muted-fg">{emptyMessage}</p>
          ) : (
            Object.entries(grouped).map(([group, groupItems]) => (
              <div key={group}>
                {group && (
                  <p className="px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase text-muted-fg/60">
                    {group}
                  </p>
                )}
                {groupItems.map((item) => {
                  const idx = flatIndex++;
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => { item.onSelect(); onClose(); }}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-100 ${
                        isActive ? "bg-primary-500/10" : "hover:bg-surface-raised"
                      }`}
                    >
                      {item.icon && (
                        <span className="w-5 h-5 text-muted-fg shrink-0">{item.icon}</span>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{item.label}</p>
                        {item.description && (
                          <p className="text-xs text-muted-fg truncate">{item.description}</p>
                        )}
                      </div>
                      {item.shortcut && (
                        <div className="flex gap-1 shrink-0">
                          {item.shortcut.map((k) => (
                            <kbd key={k} className="px-1.5 py-0.5 text-[10px] rounded border border-border text-muted-fg font-mono">
                              {k}
                            </kbd>
                          ))}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 px-4 py-2 border-t border-border">
          <span className="flex items-center gap-1 text-[10px] text-muted-fg/60">
            <kbd className="px-1 py-0.5 rounded border border-border font-mono text-[9px]">↑↓</kbd> navigate
          </span>
          <span className="flex items-center gap-1 text-[10px] text-muted-fg/60">
            <kbd className="px-1 py-0.5 rounded border border-border font-mono text-[9px]">↵</kbd> select
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
