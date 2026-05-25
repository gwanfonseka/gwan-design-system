"use client";

import { FC, useEffect, useRef, useState, KeyboardEvent } from "react";
import { ChevDownSVG } from "../icons";
import { FORM_ELEMENT_EDGE_STYLE, FORM_ELEMENT_SIZE } from "../input";

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
}: ISelectDropdown) => {
  const [dropdownValue, setDropdownValue] = useState<string>("");
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const isSM = size === FORM_ELEMENT_SIZE.SM;
  const sizeClass   = isSM ? "py-1.5 pl-2.5 pr-8 text-xs" : "py-2.5 pl-3 pr-9 text-sm";
  const chevSize    = isSM ? "size-3.5" : "size-4";

  const inputId   = label ? `gwan-select-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : "gwan-select";
  const listboxId = `${inputId}-listbox`;
  const errorId   = `${inputId}-error`;

  useEffect(() => {
    const option = options.find((opt) => (opt.value ?? opt.label) === value);
    setDropdownValue(option ? option.label : value);
  }, [value, options]);

  useEffect(() => {
    if (isOptionsVisible && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const dropdownHeight = Math.min(options.length * 56, 384);
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setOpenUpward(spaceBelow < dropdownHeight && spaceAbove > spaceBelow);
    }
  }, [isOptionsVisible, options.length]);

  // Set initial highlight to current selection when opening
  useEffect(() => {
    if (isOptionsVisible) {
      const idx = options.findIndex((o) => (o.value ?? o.label) === value);
      setHighlightedIndex(idx);
    } else {
      setHighlightedIndex(-1);
    }
  }, [isOptionsVisible, options, value]);

  // Scroll highlighted option into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const item = listRef.current.children[highlightedIndex] as HTMLElement;
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);

  const handleSelect = (option: ISelectDropdownOption) => {
    const actualValue = option.value ?? option.label;
    setDropdownValue(option.label);
    onChange(actualValue);
    setIsOptionsVisible(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (!isOptionsVisible) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        setIsOptionsVisible(true);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (highlightedIndex >= 0) handleSelect(options[highlightedIndex]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsOptionsVisible(false);
    }
  };

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
          <div className={`${chevSize} absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-muted-fg pointer-events-none`}>
            <ChevDownSVG />
          </div>
          <input
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
              edges === FORM_ELEMENT_EDGE_STYLE.ROUNDED && "rounded"
            } ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${
              isError
                ? "border-danger focus:border-danger"
                : "border-border hover:border-primary-default focus:border-primary-default"
            } w-full placeholder:text-muted-fg/60 dark:placeholder:text-muted-fg/40 transition-colors duration-200 ${inputClassName}`}
            placeholder={placeholder}
            onClick={() => !disabled && setIsOptionsVisible((v) => !v)}
            onKeyDown={handleKeyDown}
            onBlur={() => setIsOptionsVisible(false)}
            value={dropdownValue}
            readOnly
            disabled={disabled}
            required={required}
          />
        </div>

        {isOptionsVisible && (
          <div
            ref={listRef}
            id={listboxId}
            role="listbox"
            aria-label={label}
            className={`border border-border ${
              edges === FORM_ELEMENT_EDGE_STYLE.ROUNDED && "rounded"
            } shadow-lg max-h-96 overflow-y-auto absolute min-w-full bg-surface z-10 ${
              openUpward ? "bottom-full mb-1" : "top-full mt-1"
            }`}
          >
            {options.map(({ label: optLabel, value: optVal }, index) => (
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
            ))}
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
