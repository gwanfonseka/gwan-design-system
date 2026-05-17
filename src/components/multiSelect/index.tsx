"use client";

import { FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import { ChevDownSVG, CrossSVG, SearchSVG, CheckSVG } from "../icons";

export enum MULTI_SELECT_SIZE {
  SM = "SM",
  MD = "MD",
}

export interface IMultiSelectOption {
  value: string;
  label: string;
}

export interface IMultiSelect {
  options: IMultiSelectOption[];
  value: string[];
  onChange: (values: string[]) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: MULTI_SELECT_SIZE;
  className?: string;
  isError?: boolean;
  errorMessage?: string;
  required?: boolean;
}

const sizeConfig: Record<MULTI_SELECT_SIZE, { trigger: string; chip: string }> = {
  [MULTI_SELECT_SIZE.SM]: { trigger: "py-1.5 px-2.5 min-h-[32px] text-xs", chip: "text-[11px] px-2 py-0.5" },
  [MULTI_SELECT_SIZE.MD]: { trigger: "py-2.5 px-3 min-h-[40px] text-sm",   chip: "text-xs px-2.5 py-1"   },
};

const MultiSelect: FC<IMultiSelect> = ({
  options,
  value,
  onChange,
  label,
  placeholder = "Select options…",
  disabled = false,
  size = MULTI_SELECT_SIZE.MD,
  className = "",
  isError = false,
  errorMessage,
  required = false,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const ref      = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef  = useRef<HTMLDivElement>(null);
  const s        = sizeConfig[size];

  const triggerId = label ? `gwan-multiselect-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : "gwan-multiselect";
  const listboxId = `${triggerId}-listbox`;
  const errorId   = `${triggerId}-error`;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Scroll highlighted option into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const item = listRef.current.children[highlightedIndex] as HTMLElement;
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase()),
  );
  const selectedOptions = options.filter((o) => value.includes(o.value));

  const toggle = (val: string) => {
    onChange(value.includes(val) ? value.filter((v) => v !== val) : [...value, val]);
  };

  const removeChip = (val: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(value.filter((v) => v !== val));
  };

  const openDropdown = () => {
    if (disabled) return;
    setOpen(true);
    setHighlightedIndex(-1);
    setTimeout(() => searchRef.current?.focus(), 0);
  };

  // Keyboard on trigger div
  const handleTriggerKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDropdown(); }
    if (e.key === "Escape" && open) { e.preventDefault(); setOpen(false); }
  };

  // Keyboard on search input
  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0) toggle(filtered[highlightedIndex].value);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      setSearch("");
    }
  };

  return (
    <div className={`flex flex-col ${className}`} ref={ref}>
      {label && (
        <label
          id={`${triggerId}-label`}
          className={`text-xs font-semibold mb-1 ${isError ? "text-danger" : "text-muted-fg"}`}
        >
          {label}{required && " *"}
        </label>
      )}

      {/* Trigger */}
      <div
        id={triggerId}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-labelledby={label ? `${triggerId}-label` : undefined}
        aria-invalid={isError || undefined}
        aria-describedby={isError && errorMessage ? errorId : undefined}
        aria-required={required || undefined}
        tabIndex={disabled ? -1 : 0}
        onClick={openDropdown}
        onKeyDown={handleTriggerKeyDown}
        className={`relative flex flex-wrap items-center gap-1.5 bg-surface border rounded cursor-pointer transition-colors duration-200 pr-8 ${s.trigger}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${isError ? "border-danger" : open ? "border-primary-default" : "border-border hover:border-primary-default"}`}
      >
        {selectedOptions.length === 0 ? (
          <span className="text-muted-fg">{placeholder}</span>
        ) : (
          selectedOptions.map((o) => (
            <span
              key={o.value}
              className={`inline-flex items-center gap-1 bg-primary-default/10 text-primary-default rounded font-medium ${s.chip}`}
            >
              {o.label}
              {!disabled && (
                <span
                  role="button"
                  aria-label={`Remove ${o.label}`}
                  className="size-3 flex items-center cursor-pointer hover:text-danger transition-colors"
                  onClick={(e) => removeChip(o.value, e)}
                >
                  <CrossSVG />
                </span>
              )}
            </span>
          ))
        )}
        <span className="size-4 absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-fg pointer-events-none" aria-hidden="true">
          <ChevDownSVG />
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="relative">
          <div
            id={listboxId}
            role="listbox"
            aria-multiselectable="true"
            aria-label={label}
            className="absolute top-1 left-0 right-0 z-50 bg-surface border border-border rounded shadow-lg overflow-hidden"
          >
            {/* Search */}
            <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
              <span className="size-3.5 text-muted-fg shrink-0" aria-hidden="true"><SearchSVG /></span>
              <input
                ref={searchRef}
                autoFocus
                value={search}
                onChange={(e) => { setSearch(e.target.value); setHighlightedIndex(-1); }}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search…"
                aria-label="Search options"
                className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-fg"
              />
              {search && (
                <span
                  className="size-3 text-muted-fg cursor-pointer hover:text-foreground"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <CrossSVG />
                </span>
              )}
            </div>

            {/* Options */}
            <div ref={listRef} className="max-h-52 overflow-y-auto">
              {filtered.length === 0 ? (
                <p className="px-3 py-4 text-sm text-muted-fg text-center">No options found</p>
              ) : (
                filtered.map((o, index) => {
                  const selected = value.includes(o.value);
                  return (
                    <div
                      key={o.value}
                      role="option"
                      aria-selected={selected}
                      onClick={() => toggle(o.value)}
                      className={`flex items-center gap-2.5 px-3 py-2 cursor-pointer transition-colors duration-150 ${
                        highlightedIndex === index ? "bg-surface-raised" : "hover:bg-surface-raised"
                      }`}
                      onMouseEnter={() => setHighlightedIndex(index)}
                    >
                      <span
                        aria-hidden="true"
                        className={`size-4 rounded border flex items-center justify-center shrink-0 transition-colors duration-150
                          ${selected ? "bg-primary-default border-primary-default text-primary-default-fg" : "border-border bg-surface"}`}
                      >
                        {selected && <span className="size-3"><CheckSVG /></span>}
                      </span>
                      <span className="text-sm text-foreground">{o.label}</span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {value.length > 0 && (
              <div className="border-t border-border px-3 py-2 flex items-center justify-between">
                <span className="text-xs text-muted-fg">{value.length} selected</span>
                <button
                  type="button"
                  onClick={() => onChange([])}
                  className="text-xs font-semibold text-danger hover:opacity-70 transition-opacity"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {isError && errorMessage && (
        <p id={errorId} role="alert" className="text-danger text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default MultiSelect;
