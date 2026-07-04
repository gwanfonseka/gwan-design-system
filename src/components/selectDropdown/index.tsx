"use client";

import { FC, useCallback, useEffect, useRef, useState, KeyboardEvent } from "react";
import { ChevDownSVG, SearchSVG } from "../icons";
import { FORM_ELEMENT_EDGE_STYLE, FORM_ELEMENT_SIZE } from "../input";
import Spinner, { SPINNER_SIZE, SPINNER_COLOR } from "../spinner";

export interface ISelectDropdownOption {
  value?: string;
  label: string;
}

export interface ISelectDropdown {
  options: ISelectDropdownOption[];
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value: string;
  onChange: (option: string) => void;
  inputClassName?: string;
  className?: string;
  isError?: boolean;
  errorMessage?: string;
  required?: boolean;
  edges?: FORM_ELEMENT_EDGE_STYLE;
  size?: FORM_ELEMENT_SIZE;
  searchable?: boolean;
  onSearch?: (query: string) => void;
  debounce?: number;
  isLoading?: boolean;
  emptyMessage?: string;
}

const SelectDropdown: FC<ISelectDropdown> = ({
  options,
  label,
  placeholder = "",
  disabled = false,
  value,
  onChange,
  inputClassName = "",
  className = "",
  isError = false,
  errorMessage,
  required = false,
  edges = FORM_ELEMENT_EDGE_STYLE.ROUNDED,
  size = FORM_ELEMENT_SIZE.MD,
  searchable = false,
  onSearch,
  debounce: debounceMs = 300,
  isLoading = false,
  emptyMessage = "No options found",
}: ISelectDropdown) => {
  const [dropdownValue, setDropdownValue] = useState<string>("");
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef      = useRef<HTMLDivElement>(null);
  const searchRef    = useRef<HTMLInputElement>(null);
  const triggerRef   = useRef<HTMLInputElement>(null);
  const debounceRef  = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isSM       = size === FORM_ELEMENT_SIZE.SM;
  const sizeClass  = isSM ? "py-1.5 pl-2.5 pr-8 text-xs" : "py-2.5 pl-3 pr-9 text-sm";
  const chevSize   = isSM ? "size-3.5" : "size-4";
  const inputId    = label ? `gwan-select-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : "gwan-select";
  const listboxId  = `${inputId}-listbox`;
  const errorId    = `${inputId}-error`;

  // Local filtering (only when no async onSearch)
  const displayOptions = searchable && !onSearch
    ? options.filter((o) => o.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : options;

  useEffect(() => {
    const option = options.find((opt) => (opt.value ?? opt.label) === value);
    setDropdownValue(option ? option.label : value);
  }, [value, options]);

  // Click-outside to close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOptionsVisible(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Position (up/down) when opening
  useEffect(() => {
    if (isOptionsVisible && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const dropdownHeight = Math.min(displayOptions.length * 40 + (searchable ? 52 : 0), 320);
      const spaceBelow = window.innerHeight - rect.bottom;
      setOpenUpward(spaceBelow < dropdownHeight && rect.top > spaceBelow);
    }
  }, [isOptionsVisible, displayOptions.length, searchable]);

  // Highlight current selection when opening; auto-focus search
  useEffect(() => {
    if (isOptionsVisible) {
      const idx = displayOptions.findIndex((o) => (o.value ?? o.label) === value);
      setHighlightedIndex(idx);
      if (searchable) setTimeout(() => searchRef.current?.focus(), 0);
    } else {
      setHighlightedIndex(-1);
      setSearchQuery("");
    }
  }, [isOptionsVisible]);

  // Scroll highlighted option into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const item = listRef.current.children[highlightedIndex] as HTMLElement;
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);

  const open  = () => !disabled && setIsOptionsVisible(true);
  const close = () => setIsOptionsVisible(false);
  const toggle = () => !disabled && setIsOptionsVisible((v) => !v);

  const handleSelect = (option: ISelectDropdownOption) => {
    const actualValue = option.value ?? option.label;
    setDropdownValue(option.label);
    onChange(actualValue);
    setIsOptionsVisible(false);
    triggerRef.current?.focus();
  };

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setHighlightedIndex(-1);
    if (onSearch) {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => onSearch(query), debounceMs);
    }
  }, [onSearch, debounceMs]);

  const handleTriggerKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (!isOptionsVisible) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        open();
      }
      return;
    }
    navigateList(e);
  };

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    navigateList(e);
  };

  const navigateList = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.min(i + 1, displayOptions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (highlightedIndex >= 0) handleSelect(displayOptions[highlightedIndex]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
      triggerRef.current?.focus();
    }
  };

  const rounded = edges === FORM_ELEMENT_EDGE_STYLE.ROUNDED;

  return (
    <div className={`flex flex-col ${className}`}>
      <div ref={containerRef} className="flex flex-col relative">
        {label && (
          <label
            htmlFor={inputId}
            className={`text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"} mb-1`}
          >
            {`${label}${required ? " *" : ""}`}
          </label>
        )}
        <div className="relative">
          <div className={`${chevSize} absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-muted-fg pointer-events-none transition-transform duration-200 ${isOptionsVisible ? "rotate-180" : ""}`}>
            <ChevDownSVG />
          </div>
          <input
            ref={triggerRef}
            id={inputId}
            type="text"
            role="combobox"
            aria-expanded={isOptionsVisible}
            aria-haspopup="listbox"
            aria-controls={listboxId}
            aria-activedescendant={
              isOptionsVisible && highlightedIndex >= 0
                ? `${listboxId}-opt-${highlightedIndex}`
                : undefined
            }
            aria-invalid={isError || undefined}
            aria-describedby={isError && errorMessage ? errorId : undefined}
            aria-required={required || undefined}
            className={`bg-surface text-foreground border outline-none ${sizeClass} ${
              rounded && "rounded"
            } ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${
              isError
                ? "border-danger focus:border-danger"
                : "border-border hover:border-primary-default focus:border-primary-default"
            } w-full placeholder:text-muted-fg/60 dark:placeholder:text-muted-fg/40 transition-colors duration-200 ${inputClassName}`}
            placeholder={placeholder}
            onClick={toggle}
            onKeyDown={handleTriggerKeyDown}
            onBlur={(e) => {
              if (!containerRef.current?.contains(e.relatedTarget as Node)) {
                setIsOptionsVisible(false);
              }
            }}
            value={dropdownValue}
            readOnly
            disabled={disabled}
            required={required}
          />
        </div>

        {isOptionsVisible && (
          <div
            id={listboxId}
            role="listbox"
            aria-label={label}
            className={`border border-border ${rounded && "rounded"} shadow-lg absolute min-w-full bg-surface z-10 ${
              openUpward ? "bottom-full mb-1" : "top-full mt-1"
            } overflow-hidden`}
          >
            {/* Search box */}
            {searchable && (
              <div className="p-2 border-b border-border">
                <div className="relative flex items-center">
                  <span className="absolute left-2.5 size-3.5 text-muted-fg pointer-events-none">
                    <SearchSVG />
                  </span>
                  <input
                    ref={searchRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Search..."
                    className={`w-full bg-surface-raised text-foreground text-sm ${rounded ? "rounded" : ""} pl-7 pr-7 py-1.5 outline-none border border-transparent focus:border-primary-default placeholder:text-muted-fg/60 transition-colors duration-200`}
                  />
                  {isLoading && (
                    <span className="absolute right-2">
                      <Spinner size={SPINNER_SIZE.XS} color={SPINNER_COLOR.PRIMARY} />
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Options list */}
            <div ref={listRef} className="max-h-96 overflow-y-auto">
              {isLoading && displayOptions.length === 0 ? (
                <div className="flex items-center justify-center gap-2 px-3 py-4 text-sm text-muted-fg">
                  <Spinner size={SPINNER_SIZE.SM} color={SPINNER_COLOR.DEFAULT} />
                  <span>Loading…</span>
                </div>
              ) : displayOptions.length === 0 ? (
                <div className="px-3 py-4 text-sm text-muted-fg text-center">{emptyMessage}</div>
              ) : (
                displayOptions.map(({ label: optLabel, value: optVal }, index) => (
                  <div
                    key={`${optLabel}_${optVal}_${index}`}
                    id={`${listboxId}-opt-${index}`}
                    role="option"
                    aria-selected={(optVal ?? optLabel) === value}
                    className={`px-3 py-2.5 cursor-pointer text-sm text-foreground transition-colors ${
                      highlightedIndex === index ? "bg-surface-raised" : "hover:bg-surface-raised"
                    }`}
                    onMouseDown={() => handleSelect({ label: optLabel, value: optVal })}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    {optLabel}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
      {isError && errorMessage && (
        <p id={errorId} role="alert" className="text-danger text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default SelectDropdown;
