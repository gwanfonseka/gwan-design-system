"use client";

import { FC, useEffect, useRef, useState } from "react";

export interface IColorPicker {
  value?: string;
  onChange: (color: string) => void;
  label?: string;
  presets?: string[];
  disabled?: boolean;
  className?: string;
}

const DEFAULT_PRESETS = [
  "#ef4444", "#f97316", "#eab308", "#22c55e", "#14b8a6",
  "#3b82f6", "#8b5cf6", "#ec4899", "#64748b", "#1e293b",
  "#ffffff", "#000000",
];

const isValidHex = (v: string) => /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(v);

const ColorPicker: FC<IColorPicker> = ({
  value = "#3b82f6",
  onChange,
  label,
  presets = DEFAULT_PRESETS,
  disabled = false,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [inputVal, setInputVal] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { setInputVal(value); }, [value]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleInputChange = (v: string) => {
    setInputVal(v);
    if (isValidHex(v)) onChange(v);
  };

  const handleNativeChange = (v: string) => {
    setInputVal(v);
    onChange(v);
  };

  return (
    <div className={`relative inline-flex flex-col gap-1 ${className}`} ref={ref}>
      {label && <span className="text-xs font-semibold text-muted-fg">{label}</span>}

      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        className={`flex items-center gap-2.5 px-3 py-2 border rounded text-sm transition-colors duration-200 ${
          disabled
            ? "border-border bg-surface-raised opacity-60 cursor-not-allowed"
            : "border-border bg-surface hover:border-primary-500 cursor-pointer focus:outline-none"
        }`}
      >
        <span
          className="w-5 h-5 rounded border border-border/60 shrink-0"
          style={{ backgroundColor: value }}
        />
        <span className="text-foreground font-mono text-xs">{value.toUpperCase()}</span>
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-muted-fg" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full mt-1.5 left-0 z-50 bg-surface border border-border rounded-lg shadow-lg p-4 w-56">
          {/* Native color input */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10 rounded overflow-hidden border border-border shrink-0">
              <div className="w-full h-full" style={{ backgroundColor: value }} />
              <input
                type="color"
                value={value}
                onChange={(e) => handleNativeChange(e.target.value)}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-muted-fg mb-1 font-semibold">HEX</p>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => handleInputChange(e.target.value)}
                maxLength={7}
                className="w-full text-xs font-mono text-foreground bg-surface-raised border border-border rounded px-2 py-1 focus:outline-none focus:border-primary-500"
                placeholder="#000000"
              />
            </div>
          </div>

          {/* Presets */}
          <p className="text-[10px] font-bold tracking-widest uppercase text-muted-fg/60 mb-2">Presets</p>
          <div className="grid grid-cols-6 gap-1.5">
            {presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => { onChange(preset); setInputVal(preset); }}
                className="w-7 h-7 rounded border-2 transition-transform hover:scale-110"
                style={{
                  backgroundColor: preset,
                  borderColor: value === preset ? "#adc09e" : "transparent",
                }}
                title={preset}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
