"use client";

import { FC, useCallback, useEffect, useRef } from "react";
import { SearchSVG, CrossSVG } from "../icons";
import Spinner, { SPINNER_SIZE, SPINNER_COLOR } from "../spinner";
import { FORM_ELEMENT_SIZE } from "../input";

export interface ISearchInput {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  debounce?: number;
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  label?: string;
  size?: FORM_ELEMENT_SIZE;
  className?: string;
}

const SearchInput: FC<ISearchInput> = ({
  value,
  onChange,
  onSearch,
  debounce = 300,
  placeholder = "Search…",
  disabled = false,
  isLoading = false,
  label,
  size = FORM_ELEMENT_SIZE.MD,
  className = "",
}) => {
  const isSM = size === FORM_ELEMENT_SIZE.SM;
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      onChange(val);
      if (onSearch) {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => onSearch(val), debounce);
      }
    },
    [onChange, onSearch, debounce],
  );

  const handleClear = useCallback(() => {
    onChange("");
    onSearch?.("");
    clearTimeout(timerRef.current);
  }, [onChange, onSearch]);

  const inputId    = label ? `gwan-search-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : "gwan-search";
  const hasRightSlot = isLoading || !!value;
  const sizeClass  = isSM ? "py-1.5 text-xs" : "py-2.5 text-sm";
  const plClass    = isSM ? "pl-8" : "pl-9";
  const prClass    = hasRightSlot ? (isSM ? "pr-7" : "pr-9") : (isSM ? "pr-2.5" : "pr-3");
  const iconSize   = isSM ? "size-3.5" : "size-4";
  const clearSize  = isSM ? "size-3" : "size-3.5";

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-xs font-semibold text-muted-fg mb-1">{label}</label>
      )}
      <div className="relative flex items-center">
        <span className={`${iconSize} absolute left-3 text-muted-fg pointer-events-none`}>
          <SearchSVG />
        </span>

        <input
          id={inputId}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-busy={isLoading || undefined}
          className={`w-full bg-surface text-foreground border border-border rounded ${plClass} ${prClass} ${sizeClass} outline-none placeholder:text-muted-fg/60 dark:placeholder:text-muted-fg/40 transition-colors duration-200 hover:border-primary-default focus:border-primary-default ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        />

        {isLoading ? (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            <Spinner size={SPINNER_SIZE.XS} color={SPINNER_COLOR.DEFAULT} />
          </span>
        ) : value ? (
          <span
            onClick={handleClear}
            className={`${clearSize} absolute right-3 top-1/2 -translate-y-1/2 text-muted-fg hover:text-foreground cursor-pointer transition-colors`}
          >
            <CrossSVG />
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default SearchInput;
