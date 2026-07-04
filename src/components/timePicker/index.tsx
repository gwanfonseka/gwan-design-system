"use client";

import { FC, useEffect, useRef, useState } from "react";
import { FORM_ELEMENT_SIZE } from "../input";

export enum TIME_FORMAT {
  H12 = "12h",
  H24 = "24h",
}

export interface ITimePicker {
  value?: string | null;
  onChange: (time: string) => void;
  label?: string;
  placeholder?: string;
  format?: TIME_FORMAT;
  withSeconds?: boolean;
  disabled?: boolean;
  isError?: boolean;
  errorMessage?: string;
  size?: FORM_ELEMENT_SIZE;
  className?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

const TimePicker: FC<ITimePicker> = ({
  value,
  onChange,
  label,
  placeholder = "Select time",
  format = TIME_FORMAT.H12,
  withSeconds = false,
  disabled = false,
  isError = false,
  errorMessage,
  size = FORM_ELEMENT_SIZE.MD,
  className = "",
}) => {
  const is12h = format === TIME_FORMAT.H12;
  const isSM = size === FORM_ELEMENT_SIZE.SM;

  const parseValue = (v?: string | null) => {
    if (!v) return { h: 12, m: 0, s: 0, period: "AM" as "AM" | "PM" };
    const parts = v.split(":");
    let h = parseInt(parts[0] ?? "12", 10);
    const m = parseInt(parts[1] ?? "0", 10);
    const s = parseInt(parts[2] ?? "0", 10);
    let period: "AM" | "PM" = "AM";
    if (is12h) {
      period = h >= 12 ? "PM" : "AM";
      if (h === 0) h = 12;
      else if (h > 12) h -= 12;
    }
    return { h, m, s, period };
  };

  const { h: initH, m: initM, s: initS, period: initP } = parseValue(value);
  const [hours, setHours] = useState(initH);
  const [minutes, setMinutes] = useState(initM);
  const [seconds, setSeconds] = useState(initS);
  const [period, setPeriod] = useState<"AM" | "PM">(initP);
  const [open, setOpen]             = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const hourOptions = is12h ? Array.from({ length: 12 }, (_, i) => i + 1) : Array.from({ length: 24 }, (_, i) => i);
  const minuteOptions = Array.from({ length: 60 }, (_, i) => i);
  const secondOptions = Array.from({ length: 60 }, (_, i) => i);

  const emitChange = (h: number, m: number, s: number, p: "AM" | "PM") => {
    let h24 = h;
    if (is12h) {
      if (p === "AM" && h === 12) h24 = 0;
      else if (p === "PM" && h !== 12) h24 = h + 12;
    }
    const time = withSeconds ? `${pad(h24)}:${pad(m)}:${pad(s)}` : `${pad(h24)}:${pad(m)}`;
    onChange(time);
  };

  const handleHour = (h: number) => { setHours(h); emitChange(h, minutes, seconds, period); };
  const handleMinute = (m: number) => { setMinutes(m); emitChange(hours, m, seconds, period); };
  const handleSecond = (s: number) => { setSeconds(s); emitChange(hours, minutes, s, period); };
  const handlePeriod = (p: "AM" | "PM") => { setPeriod(p); emitChange(hours, minutes, seconds, p); };

  const displayHour = is12h ? hours : hours;
  const displayValue = value
    ? is12h
      ? `${pad(displayHour)}:${pad(minutes)}${withSeconds ? `:${pad(seconds)}` : ""} ${period}`
      : `${pad(hours)}:${pad(minutes)}${withSeconds ? `:${pad(seconds)}` : ""}`
    : "";

  useEffect(() => {
    const { h, m, s, period: p } = parseValue(value);
    setHours(h); setMinutes(m); setSeconds(s); setPeriod(p);
  }, [value]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  useEffect(() => {
    if (open && ref.current) {
      const rect        = ref.current.getBoundingClientRect();
      const panelWidth  = 240;
      const panelHeight = 220;
      setAlignRight(window.innerWidth  - rect.left < panelWidth  && rect.right > panelWidth);
      setOpenUpward(window.innerHeight - rect.bottom < panelHeight && rect.top > panelHeight);
    }
  }, [open]);

  const scrollToActive = (colRef: React.RefObject<HTMLDivElement | null>, activeIdx: number) => {
    if (colRef.current) {
      const item = colRef.current.querySelectorAll("button")[activeIdx];
      item?.scrollIntoView({ block: "center" });
    }
  };

  const hourColRef = useRef<HTMLDivElement>(null);
  const minColRef = useRef<HTMLDivElement>(null);
  const secColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const hIdx = is12h ? hourOptions.indexOf(hours) : hours;
      scrollToActive(hourColRef, hIdx >= 0 ? hIdx : 0);
      scrollToActive(minColRef, minutes);
      if (withSeconds) scrollToActive(secColRef, seconds);
    }
  }, [open]);

  const triggerHeight = isSM ? "py-1.5 text-xs" : "py-2.5 text-sm";
  const borderClass = isError
    ? "border-danger"
    : "border-border hover:border-primary-default focus:border-primary-default";

  const Column = ({
    options,
    active,
    onSelect,
    colRef,
    format: fmt,
  }: {
    options: number[];
    active: number;
    onSelect: (v: number) => void;
    colRef: React.RefObject<HTMLDivElement | null>;
    format?: (v: number) => string;
  }) => (
    <div
      ref={colRef}
      className="flex flex-col overflow-y-auto h-48 scrollbar-hide snap-y snap-mandatory"
      style={{ scrollbarWidth: "none" }}
    >
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onSelect(opt)}
          className={`snap-center px-3 py-1.5 text-sm font-medium rounded transition-colors duration-150 shrink-0 ${
            opt === active
              ? "bg-primary-default text-primary-default-fg"
              : "text-foreground hover:bg-surface-raised"
          }`}
        >
          {fmt ? fmt(opt) : pad(opt)}
        </button>
      ))}
    </div>
  );

  return (
    <div ref={ref} className={`flex flex-col gap-1 relative ${className}`}>
      {label && (
        <label className={`text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"}`}>
          {label}
        </label>
      )}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        className={`w-full text-left bg-surface border rounded ${borderClass} ${triggerHeight} px-3 outline-none transition-colors duration-200 ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        } ${open ? (isError ? "border-danger" : "border-primary-default") : ""}`}
      >
        <span className={displayValue ? "text-foreground" : "text-muted-fg/60"}>
          {displayValue || placeholder}
        </span>
      </button>

      {open && (
        <div className={`absolute z-50 bg-surface border border-border rounded-lg shadow-lg p-2 flex gap-1 min-w-40 ${openUpward ? "bottom-full mb-1" : "top-full mt-1"} ${alignRight ? "right-0" : "left-0"}`}>
          <Column
            options={hourOptions}
            active={hours}
            onSelect={handleHour}
            colRef={hourColRef}
            format={(v) => pad(v)}
          />
          <div className="flex items-center justify-center text-muted-fg font-bold text-sm px-0.5">:</div>
          <Column
            options={minuteOptions}
            active={minutes}
            onSelect={handleMinute}
            colRef={minColRef}
          />
          {withSeconds && (
            <>
              <div className="flex items-center justify-center text-muted-fg font-bold text-sm px-0.5">:</div>
              <Column
                options={secondOptions}
                active={seconds}
                onSelect={handleSecond}
                colRef={secColRef}
              />
            </>
          )}
          {is12h && (
            <div className="flex flex-col gap-1 justify-center pl-1">
              {(["AM", "PM"] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => handlePeriod(p)}
                  className={`px-2 py-1.5 text-xs font-semibold rounded transition-colors duration-150 ${
                    period === p
                      ? "bg-primary-default text-primary-default-fg"
                      : "text-foreground hover:bg-surface-raised"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {isError && errorMessage && (
        <p role="alert" className="text-danger text-xs mt-0.5">{errorMessage}</p>
      )}
    </div>
  );
};

export default TimePicker;
