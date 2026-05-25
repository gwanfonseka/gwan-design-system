"use client";

import { FC, useState } from "react";

export enum SLIDER_SIZE {
  SM = "SM",
  MD = "MD",
  LG = "LG",
}

export interface ISlider {
  value: number | [number, number];
  onChange: (value: number | [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  showTooltip?: boolean;
  disabled?: boolean;
  size?: SLIDER_SIZE;
  label?: string;
  className?: string;
}

const wrapperHeight: Record<SLIDER_SIZE, string> = {
  [SLIDER_SIZE.SM]: "h-4",
  [SLIDER_SIZE.MD]: "h-5",
  [SLIDER_SIZE.LG]: "h-6",
};

const trackHeight: Record<SLIDER_SIZE, string> = {
  [SLIDER_SIZE.SM]: "h-1",
  [SLIDER_SIZE.MD]: "h-1.5",
  [SLIDER_SIZE.LG]: "h-2",
};

const thumbClass: Record<SLIDER_SIZE, string> = {
  [SLIDER_SIZE.SM]: [
    "[&::-webkit-slider-thumb]:size-3.5",
    "[&::-moz-range-thumb]:size-3.5",
  ].join(" "),
  [SLIDER_SIZE.MD]: [
    "[&::-webkit-slider-thumb]:size-4",
    "[&::-moz-range-thumb]:size-4",
  ].join(" "),
  [SLIDER_SIZE.LG]: [
    "[&::-webkit-slider-thumb]:size-5",
    "[&::-moz-range-thumb]:size-5",
  ].join(" "),
};

const baseInputClass = [
  "absolute inset-0 w-full h-full",
  "appearance-none bg-transparent cursor-pointer",
  "[&::-webkit-slider-runnable-track]:appearance-none",
  "[&::-webkit-slider-runnable-track]:bg-transparent",
  "[&::-moz-range-track]:bg-transparent",
  "[&::-webkit-slider-thumb]:appearance-none",
  "[&::-webkit-slider-thumb]:rounded-full",
  "[&::-webkit-slider-thumb]:bg-primary-default",
  "[&::-webkit-slider-thumb]:border-2",
  "[&::-webkit-slider-thumb]:border-surface",
  "[&::-webkit-slider-thumb]:shadow-sm",
  "[&::-webkit-slider-thumb]:transition-transform",
  "[&::-webkit-slider-thumb]:duration-100",
  "[&:focus::-webkit-slider-thumb]:scale-110",
  "[&::-moz-range-thumb]:appearance-none",
  "[&::-moz-range-thumb]:rounded-full",
  "[&::-moz-range-thumb]:bg-primary-default",
  "[&::-moz-range-thumb]:border-2",
  "[&::-moz-range-thumb]:border-surface",
  "[&::-moz-range-thumb]:shadow-sm",
  "disabled:cursor-not-allowed",
  "disabled:[&::-webkit-slider-thumb]:opacity-50",
  "outline-none",
].join(" ");

const Slider: FC<ISlider> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  showTooltip = false,
  disabled = false,
  size = SLIDER_SIZE.MD,
  label,
  className = "",
}) => {
  const isRange = Array.isArray(value);
  const [activeThumb, setActiveThumb] = useState<0 | 1>(0);

  const toPercent = (v: number) => ((v - min) / (max - min)) * 100;

  const low  = isRange ? (value as [number, number])[0] : (value as number);
  const high = isRange ? (value as [number, number])[1] : (value as number);

  const fillLeft  = isRange ? toPercent(low) : 0;
  const fillWidth = toPercent(high) - fillLeft;

  const handleSingle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const handleLow = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Math.min(Number(e.target.value), high - step);
    onChange([v, high]);
  };

  const handleHigh = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Math.max(Number(e.target.value), low + step);
    onChange([low, v]);
  };

  const inputClass = `${baseInputClass} ${thumbClass[size]}`;

  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      {label && (
        <label className="text-xs font-semibold text-muted-fg">{label}</label>
      )}

      <div className={`relative flex items-center ${wrapperHeight[size]} ${disabled ? "opacity-50" : ""}`}>
        {/* Background track */}
        <div className={`absolute inset-x-0 top-1/2 -translate-y-1/2 ${trackHeight[size]} bg-border rounded-full pointer-events-none`} />

        {/* Filled track */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${trackHeight[size]} bg-primary-default rounded-full pointer-events-none`}
          style={{ left: `${fillLeft}%`, width: `${fillWidth}%` }}
        />

        {isRange ? (
          <>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={low}
              onChange={handleLow}
              disabled={disabled}
              aria-label="Minimum value"
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={low}
              onMouseDown={() => setActiveThumb(0)}
              onTouchStart={() => setActiveThumb(0)}
              className={inputClass}
              style={{ zIndex: activeThumb === 0 ? 20 : 10 }}
            />
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={high}
              onChange={handleHigh}
              disabled={disabled}
              aria-label="Maximum value"
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={high}
              onMouseDown={() => setActiveThumb(1)}
              onTouchStart={() => setActiveThumb(1)}
              className={inputClass}
              style={{ zIndex: activeThumb === 1 ? 20 : 10 }}
            />
          </>
        ) : (
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value as number}
            onChange={handleSingle}
            disabled={disabled}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value as number}
            className={`${inputClass} z-10`}
          />
        )}
      </div>

      {showTooltip && (
        <div className="flex justify-between items-center text-xs select-none">
          <span className="text-muted-fg">{min}</span>
          <span className="text-foreground font-semibold">
            {isRange ? `${low} – ${high}` : String(value)}
          </span>
          <span className="text-muted-fg">{max}</span>
        </div>
      )}
    </div>
  );
};

export default Slider;
