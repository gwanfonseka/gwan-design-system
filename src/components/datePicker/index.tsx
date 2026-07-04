"use client";

import { FC, useEffect, useRef, useState } from "react";
import { FORM_ELEMENT_SIZE } from "../input";

export enum DATE_PICKER_FORMAT {
  // ── Date-only ──────────────────────────────────────────────────────
  DD_MMM_YYYY      = "DD MMM YYYY",
  DD_MM_YYYY       = "DD-MM-YYYY",
  MM_DD_YYYY       = "MM-DD-YYYY",
  YYYY_MM_DD       = "YYYY-MM-DD",
  DD_MM_YYYY_SLASH = "DD/MM/YYYY",
  MM_DD_YYYY_SLASH = "MM/DD/YYYY",
  // ── 24-hour timestamp — system clock auto-stamped unless timePicker ─
  DD_MMM_YYYY_TIME      = "DD MMM YYYY HH:mm",
  DD_MM_YYYY_TIME       = "DD-MM-YYYY HH:mm",
  MM_DD_YYYY_TIME       = "MM-DD-YYYY HH:mm",
  YYYY_MM_DD_TIME       = "YYYY-MM-DD HH:mm",
  DD_MM_YYYY_SLASH_TIME = "DD/MM/YYYY HH:mm",
  MM_DD_YYYY_SLASH_TIME = "MM/DD/YYYY HH:mm",
  // ── 12-hour timestamp — system clock auto-stamped unless timePicker ─
  DD_MMM_YYYY_TIME_12      = "DD MMM YYYY hh:mm A",
  DD_MM_YYYY_TIME_12       = "DD-MM-YYYY hh:mm A",
  MM_DD_YYYY_TIME_12       = "MM-DD-YYYY hh:mm A",
  YYYY_MM_DD_TIME_12       = "YYYY-MM-DD hh:mm A",
  DD_MM_YYYY_SLASH_TIME_12 = "DD/MM/YYYY hh:mm A",
  MM_DD_YYYY_SLASH_TIME_12 = "MM/DD/YYYY hh:mm A",
}

export interface IDatePicker {
  value?: Date | null;
  onChange: (date: Date | null) => void;
  label?: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  size?: FORM_ELEMENT_SIZE;
  format?: DATE_PICKER_FORMAT;
  timePicker?: boolean;
  isError?: boolean;
  errorMessage?: string;
  className?: string;
}

const DAYS         = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS       = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth()    === b.getMonth()    &&
  a.getDate()     === b.getDate();

const isOutOfRange = (date: Date, min?: Date, max?: Date) => {
  if (min && date < new Date(min.getFullYear(), min.getMonth(), min.getDate())) return true;
  if (max && date > new Date(max.getFullYear(), max.getMonth(), max.getDate())) return true;
  return false;
};

const hasTimeTokens = (format: DATE_PICKER_FORMAT) =>
  (format as string).includes("HH") || (format as string).includes("hh");

const is12hFormat = (format: DATE_PICKER_FORMAT) => (format as string).includes("hh");

/*
 * Replacement order matters:
 *   1. A  (AM/PM)  — must come before MMM/MM to avoid matching "A" in "Apr" / "Aug"
 *   2. YYYY
 *   3. MMM         — must come before MM to avoid partial match
 *   4. MM
 *   5. DD
 *   6. HH  (24h)
 *   7. hh  (12h)
 *   8. mm  (minutes, lowercase — safe: MM already consumed, month shorts have no "mm")
 */
const formatDisplay = (date: Date, format: DATE_PICKER_FORMAT, timePicker: boolean): string => {
  const rawH       = date.getHours();
  const rawM       = date.getMinutes();
  const h24        = rawH.toString().padStart(2, "0");
  const h12        = (rawH % 12 || 12).toString().padStart(2, "0");
  const ampm       = rawH < 12 ? "AM" : "PM";
  const m          = rawM.toString().padStart(2, "0");
  const day        = date.getDate().toString().padStart(2, "0");
  const monthNum   = (date.getMonth() + 1).toString().padStart(2, "0");
  const year       = date.getFullYear().toString();
  const monthShort = MONTHS_SHORT[date.getMonth()];

  let result = (format as string)
    .replace("A",    ampm)
    .replace("YYYY", year)
    .replace("MMM",  monthShort)
    .replace("MM",   monthNum)
    .replace("DD",   day)
    .replace("HH",   h24)
    .replace("hh",   h12)
    .replace("mm",   m);

  // timePicker active but format has no time tokens → append 24h time
  if (timePicker && !hasTimeTokens(format)) {
    result += ` ${h24}:${m}`;
  }

  return result;
};

const timeInputClass =
  "w-10 text-center text-sm bg-surface border border-border rounded px-1 py-0.5 " +
  "text-foreground outline-none focus:border-primary-default transition-colors " +
  "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

const DatePicker: FC<IDatePicker> = ({
  value,
  onChange,
  label,
  placeholder = "Select date",
  minDate,
  maxDate,
  disabled      = false,
  size          = FORM_ELEMENT_SIZE.MD,
  format        = DATE_PICKER_FORMAT.DD_MMM_YYYY,
  timePicker    = false,
  isError       = false,
  errorMessage,
  className     = "",
}) => {
  const isSM      = size === FORM_ELEMENT_SIZE.SM;
  const sizeClass = isSM ? "px-2.5 py-1.5 text-xs" : "px-3 py-2.5 text-sm";
  const iconSize  = isSM ? "w-3.5 h-3.5" : "w-4 h-4";
  const minWidth  = isSM ? "min-w-[160px]" : "min-w-[200px]";

  const [open, setOpen]               = useState(false);
  const [viewDate, setViewDate]       = useState(value ?? new Date());
  const [hours, setHours]             = useState(() => value ? value.getHours()   : new Date().getHours());
  const [minutes, setMinutes]         = useState(() => value ? value.getMinutes() : new Date().getMinutes());
  const [alignRight, setAlignRight]   = useState(false);
  const [openUpward, setOpenUpward]   = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const use12h = is12hFormat(format);
  const isPM   = hours >= 12;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open && ref.current) {
      const rect        = ref.current.getBoundingClientRect();
      const panelWidth  = 256;
      const panelHeight = 320;
      setAlignRight(window.innerWidth  - rect.left < panelWidth  && rect.right > panelWidth);
      setOpenUpward(window.innerHeight - rect.bottom < panelHeight && rect.top > panelHeight);
    }
  }, [open]);

  useEffect(() => {
    if (value) {
      setViewDate(value);
      setHours(value.getHours());
      setMinutes(value.getMinutes());
    }
  }, [value]);

  const year        = viewDate.getFullYear();
  const month       = viewDate.getMonth();
  const firstDay    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today       = new Date();

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const cells: (Date | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  const applyTime = (h: number, m: number) => {
    if (!value) return;
    const d = new Date(value);
    d.setHours(h, m, 0, 0);
    onChange(d);
  };

  const pickDate = (date: Date) => {
    const d = new Date(date);
    if (timePicker) {
      d.setHours(hours, minutes, 0, 0);
    } else if (hasTimeTokens(format)) {
      // Auto-stamp with system clock
      const now = new Date();
      d.setHours(now.getHours(), now.getMinutes(), 0, 0);
      setHours(now.getHours());
      setMinutes(now.getMinutes());
    }
    onChange(d);
    if (!timePicker) setOpen(false);
  };

  // 24-hour hour input handler
  const handleHours24 = (raw: string) => {
    const h = Math.max(0, Math.min(23, Number(raw) || 0));
    setHours(h);
    applyTime(h, minutes);
  };

  // 12-hour hour input handler — converts display value (1-12) back to internal 24h
  const handleHours12 = (raw: string) => {
    const h12 = Math.max(1, Math.min(12, Number(raw) || 1));
    const h24 = isPM ? (h12 === 12 ? 12 : h12 + 12) : (h12 === 12 ? 0 : h12);
    setHours(h24);
    applyTime(h24, minutes);
  };

  const toggleAmPm = () => {
    const h = isPM ? hours - 12 : hours + 12;
    setHours(h);
    applyTime(h, minutes);
  };

  const handleMinutes = (raw: string) => {
    const m = Math.max(0, Math.min(59, Number(raw) || 0));
    setMinutes(m);
    applyTime(hours, m);
  };

  const displayHours = use12h
    ? (hours % 12 || 12).toString().padStart(2, "0")
    : hours.toString().padStart(2, "0");

  return (
    <div className={`relative inline-flex flex-col gap-1 ${className}`} ref={ref}>
      {label && (
        <label className={`text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"}`}>{label}</label>
      )}

      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        className={`flex items-center justify-between gap-2 ${sizeClass} ${minWidth} border rounded transition-colors duration-200 ${
          disabled
            ? "border-border bg-surface-raised text-muted-fg cursor-not-allowed opacity-60"
            : isError
            ? "border-danger bg-surface text-foreground hover:border-danger focus:outline-none focus:border-danger cursor-pointer"
            : "border-border bg-surface text-foreground hover:border-primary-default focus:outline-none focus:border-primary-default cursor-pointer"
        }`}
      >
        <span className={value ? "text-foreground" : "text-muted-fg/60"}>
          {value ? formatDisplay(value, format, timePicker) : placeholder}
        </span>
        <svg viewBox="0 0 16 16" fill="none" className={`${iconSize} text-muted-fg shrink-0`} xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
          <path d="M5 1v2M11 1v2M1 7h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </button>

      {isError && errorMessage && (
        <p role="alert" className="text-danger text-xs mt-1">{errorMessage}</p>
      )}

      {open && (
        <div className={`absolute z-50 bg-surface border border-border rounded-lg shadow-lg p-3 w-64 ${openUpward ? "bottom-full mb-1.5" : "top-full mt-1.5"} ${alignRight ? "right-0" : "left-0"}`}>
          {/* Month navigation */}
          <div className="flex items-center justify-between mb-3">
            <button type="button" onClick={prevMonth} className="p-1 rounded hover:bg-surface-raised text-muted-fg hover:text-foreground transition-colors">
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="text-sm font-semibold text-foreground">{MONTHS[month]} {year}</span>
            <button type="button" onClick={nextMonth} className="p-1 rounded hover:bg-surface-raised text-muted-fg hover:text-foreground transition-colors">
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-1">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-[10px] font-bold text-muted-fg py-1">{d}</div>
            ))}
          </div>

          {/* Date grid */}
          <div className="grid grid-cols-7 gap-y-0.5">
            {cells.map((date, i) => {
              if (!date) return <div key={`empty-${i}`} />;
              const isSelected = value ? isSameDay(date, value) : false;
              const isToday    = isSameDay(date, today);
              const isDis      = isOutOfRange(date, minDate, maxDate);
              return (
                <button
                  key={i}
                  type="button"
                  disabled={isDis}
                  onClick={() => pickDate(date)}
                  className={`text-xs w-8 h-8 mx-auto flex items-center justify-center rounded-full transition-colors duration-150 ${
                    isDis
                      ? "text-muted-fg/30 cursor-not-allowed"
                      : isSelected
                      ? "bg-primary-default text-primary-default-fg font-semibold"
                      : isToday
                      ? "border border-primary-default text-primary-default font-semibold hover:bg-primary-default/10"
                      : "text-foreground hover:bg-surface-raised cursor-pointer"
                  }`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          {/* Clear — shown when no time picker */}
          {value && !timePicker && (
            <button
              type="button"
              onClick={() => { onChange(null); setOpen(false); }}
              className="mt-2 w-full text-xs text-muted-fg hover:text-foreground text-center py-1 hover:bg-surface-raised rounded transition-colors"
            >
              Clear selection
            </button>
          )}

          {/* Manual time picker */}
          {timePicker && (
            <div className="mt-2 pt-2 border-t border-border">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xs text-muted-fg font-medium">Time</span>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min={use12h ? 1 : 0}
                    max={use12h ? 12 : 23}
                    value={displayHours}
                    onChange={(e) => use12h ? handleHours12(e.target.value) : handleHours24(e.target.value)}
                    className={timeInputClass}
                  />
                  <span className="text-sm font-bold text-muted-fg">:</span>
                  <input
                    type="number"
                    min={0}
                    max={59}
                    value={minutes.toString().padStart(2, "0")}
                    onChange={(e) => handleMinutes(e.target.value)}
                    className={timeInputClass}
                  />
                  {use12h && (
                    <button
                      type="button"
                      onClick={toggleAmPm}
                      className="text-xs font-semibold px-1.5 py-0.5 rounded border border-border text-foreground hover:bg-surface-raised transition-colors min-w-8.5"
                    >
                      {isPM ? "PM" : "AM"}
                    </button>
                  )}
                </div>
              </div>
              {value && (
                <button
                  type="button"
                  onClick={() => onChange(null)}
                  className="w-full text-xs text-muted-fg hover:text-foreground text-center py-1 hover:bg-surface-raised rounded transition-colors mb-1"
                >
                  Clear selection
                </button>
              )}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full text-xs font-semibold text-primary-default hover:opacity-70 text-center py-1.5 bg-primary-default/10 hover:bg-primary-default/20 rounded transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
