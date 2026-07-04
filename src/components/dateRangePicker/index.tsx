"use client";

import { FC, useEffect, useRef, useState } from "react";
import { FORM_ELEMENT_SIZE } from "../input";
import { DATE_PICKER_FORMAT } from "../datePicker";

export interface IDateRangePicker {
  startDate?: Date | null;
  endDate?: Date | null;
  onChange: (range: { startDate: Date | null; endDate: Date | null }) => void;
  label?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  size?: FORM_ELEMENT_SIZE;
  format?: DATE_PICKER_FORMAT;
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

const formatDate = (date: Date, format: DATE_PICKER_FORMAT): string => {
  const day   = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year  = date.getFullYear().toString();
  const mmm   = MONTHS_SHORT[date.getMonth()];
  return (format as string)
    .replace("YYYY", year)
    .replace("MMM",  mmm)
    .replace("MM",   month)
    .replace("DD",   day)
    .replace(/\s*HH:mm|\s*hh:mm A/, ""); // strip time tokens if present
};

const CalendarMonth: FC<{
  viewDate: Date;
  startDate?: Date | null;
  endDate?: Date | null;
  hoverDate?: Date | null;
  minDate?: Date;
  maxDate?: Date;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (d: Date) => void;
  onHover: (d: Date | null) => void;
  hidePrev?: boolean;
  hideNext?: boolean;
}> = ({ viewDate, startDate, endDate, hoverDate, minDate, maxDate, onPrev, onNext, onSelect, onHover, hidePrev, hideNext }) => {
  const year        = viewDate.getFullYear();
  const month       = viewDate.getMonth();
  const firstDay    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today       = new Date();

  const cells: (Date | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  const rangeEnd = hoverDate && startDate && !endDate ? hoverDate : endDate;

  return (
    <div className="flex flex-col gap-2 min-w-[220px]">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          className={`p-1 rounded hover:bg-surface-raised text-muted-fg hover:text-foreground transition-colors ${hidePrev ? "invisible" : ""}`}
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <span className="text-sm font-semibold text-foreground">{MONTHS[month]} {year}</span>
        <button
          type="button"
          onClick={onNext}
          className={`p-1 rounded hover:bg-surface-raised text-muted-fg hover:text-foreground transition-colors ${hideNext ? "invisible" : ""}`}
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>

      <div className="grid grid-cols-7">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[10px] font-bold text-muted-fg py-1">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-0.5">
        {cells.map((date, i) => {
          if (!date) return <div key={`e-${i}`} />;
          const isDis     = isOutOfRange(date, minDate, maxDate);
          const isStart   = startDate ? isSameDay(date, startDate) : false;
          const isEnd     = rangeEnd  ? isSameDay(date, rangeEnd)  : false;
          const isToday   = isSameDay(date, today);
          const inRange   = startDate && rangeEnd && date > startDate && date < rangeEnd;

          return (
            <button
              key={i}
              type="button"
              disabled={isDis}
              onClick={() => onSelect(date)}
              onMouseEnter={() => onHover(date)}
              onMouseLeave={() => onHover(null)}
              className={`text-xs w-8 h-8 mx-auto flex items-center justify-center rounded-full transition-colors duration-100 ${
                isDis
                  ? "text-muted-fg/30 cursor-not-allowed"
                  : isStart || isEnd
                  ? "bg-primary-default text-primary-default-fg font-semibold"
                  : inRange
                  ? "bg-primary-default/15 text-foreground rounded-none"
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
    </div>
  );
};

const DateRangePicker: FC<IDateRangePicker> = ({
  startDate,
  endDate,
  onChange,
  label,
  startPlaceholder = "Start date",
  endPlaceholder   = "End date",
  minDate,
  maxDate,
  disabled  = false,
  size      = FORM_ELEMENT_SIZE.MD,
  format    = DATE_PICKER_FORMAT.DD_MMM_YYYY,
  isError   = false,
  errorMessage,
  className = "",
}) => {
  const isSM      = size === FORM_ELEMENT_SIZE.SM;
  const sizeClass = isSM ? "px-2.5 py-1.5 text-xs" : "px-3 py-2.5 text-sm";
  const iconSize  = isSM ? "w-3.5 h-3.5" : "w-4 h-4";

  const [open, setOpen]           = useState(false);
  const [leftView, setLeftView]   = useState(() => startDate ?? new Date());
  const [hover, setHover]         = useState<Date | null>(null);
  const [alignRight, setAlignRight] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const rightView = new Date(leftView.getFullYear(), leftView.getMonth() + 1, 1);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Reposition the panel whenever it opens
  useEffect(() => {
    if (open && ref.current) {
      const rect           = ref.current.getBoundingClientRect();
      const panelWidth     = 496; // 2 × 220px calendars + gap-6 (24px) + p-4 (32px)
      const panelHeight    = 320;
      const spaceRight     = window.innerWidth  - rect.left;
      const spaceBelow     = window.innerHeight - rect.bottom;
      setAlignRight(spaceRight < panelWidth  && rect.right > panelWidth);
      setOpenUpward(spaceBelow < panelHeight && rect.top   > panelHeight);
    }
  }, [open]);

  const handleSelect = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      onChange({ startDate: date, endDate: null });
    } else {
      if (date < startDate) {
        onChange({ startDate: date, endDate: startDate });
      } else {
        onChange({ startDate, endDate: date });
        setOpen(false);
      }
    }
  };

  const prevMonth = () => setLeftView(new Date(leftView.getFullYear(), leftView.getMonth() - 1, 1));
  const nextMonth = () => setLeftView(new Date(leftView.getFullYear(), leftView.getMonth() + 1, 1));

  const borderClass = isError
    ? "border-danger hover:border-danger focus:border-danger"
    : "border-border hover:border-primary-default focus:border-primary-default";

  const displayValue = () => {
    if (startDate && endDate) return `${formatDate(startDate, format)} → ${formatDate(endDate, format)}`;
    if (startDate) return `${formatDate(startDate, format)} → ${endPlaceholder}`;
    return `${startPlaceholder} → ${endPlaceholder}`;
  };

  const hasValue = !!(startDate || endDate);

  return (
    <div ref={ref} className={`relative inline-flex flex-col gap-1 ${className}`}>
      {label && (
        <label className={`text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"}`}>{label}</label>
      )}

      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        className={`flex items-center justify-between gap-2 ${sizeClass} border rounded transition-colors duration-200 ${
          disabled
            ? "border-border bg-surface-raised text-muted-fg cursor-not-allowed opacity-60"
            : `bg-surface text-foreground cursor-pointer ${borderClass}`
        } ${open && !isError ? "border-primary-default" : ""}`}
      >
        <span className={hasValue ? "text-foreground" : "text-muted-fg/60"}>
          {displayValue()}
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
        <div className={`absolute z-50 bg-surface border border-border rounded-lg shadow-lg p-4 ${openUpward ? "bottom-full mb-1.5" : "top-full mt-1.5"} ${alignRight ? "right-0" : "left-0"}`}>
          <div className="flex gap-6">
            <CalendarMonth
              viewDate={leftView}
              startDate={startDate}
              endDate={endDate}
              hoverDate={hover}
              minDate={minDate}
              maxDate={maxDate}
              onPrev={prevMonth}
              onNext={nextMonth}
              onSelect={handleSelect}
              onHover={setHover}
              hideNext
            />
            <CalendarMonth
              viewDate={rightView}
              startDate={startDate}
              endDate={endDate}
              hoverDate={hover}
              minDate={minDate}
              maxDate={maxDate}
              onPrev={prevMonth}
              onNext={nextMonth}
              onSelect={handleSelect}
              onHover={setHover}
              hidePrev
            />
          </div>

          {hasValue && (
            <div className="mt-3 pt-3 border-t border-border flex justify-between items-center">
              <button
                type="button"
                onClick={() => { onChange({ startDate: null, endDate: null }); }}
                className="text-xs text-muted-fg hover:text-foreground py-1 px-2 hover:bg-surface-raised rounded transition-colors"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs font-semibold text-primary-default py-1 px-3 bg-primary-default/10 hover:bg-primary-default/20 rounded transition-colors"
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

export default DateRangePicker;
