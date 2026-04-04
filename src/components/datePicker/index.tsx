"use client";

import { FC, useEffect, useRef, useState } from "react";

export interface IDatePicker {
  value?: Date | null;
  onChange: (date: Date | null) => void;
  label?: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  className?: string;
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const isDisabled = (date: Date, min?: Date, max?: Date) => {
  if (min && date < new Date(min.getFullYear(), min.getMonth(), min.getDate())) return true;
  if (max && date > new Date(max.getFullYear(), max.getMonth(), max.getDate())) return true;
  return false;
};

const formatDate = (date: Date) =>
  `${date.getDate().toString().padStart(2, "0")} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;

const DatePicker: FC<IDatePicker> = ({
  value,
  onChange,
  label,
  placeholder = "Select date",
  minDate,
  maxDate,
  disabled = false,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(value ?? new Date());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (value) setViewDate(value);
  }, [value]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const cells: (Date | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  const today = new Date();

  return (
    <div className={`relative inline-flex flex-col gap-1 ${className}`} ref={ref}>
      {label && (
        <label className="text-xs font-semibold text-muted-fg">{label}</label>
      )}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        className={`flex items-center justify-between gap-2 px-3 py-2.5 border rounded text-sm transition-colors duration-200 min-w-[180px] ${
          disabled
            ? "border-border bg-surface-raised text-muted-fg cursor-not-allowed opacity-60"
            : "border-border bg-surface text-foreground hover:border-primary-500 focus:outline-none focus:border-primary-500 cursor-pointer"
        }`}
      >
        <span className={value ? "text-foreground" : "text-muted-fg/60"}>
          {value ? formatDate(value) : placeholder}
        </span>
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-muted-fg shrink-0" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
          <path d="M5 1v2M11 1v2M1 7h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full mt-1.5 left-0 z-50 bg-surface border border-border rounded-lg shadow-lg p-3 w-64">
          {/* Month nav */}
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={prevMonth}
              className="p-1 rounded hover:bg-surface-raised text-muted-fg hover:text-foreground transition-colors"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="text-sm font-semibold text-foreground">
              {MONTHS[month]} {year}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1 rounded hover:bg-surface-raised text-muted-fg hover:text-foreground transition-colors"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-1">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-[10px] font-bold text-muted-fg py-1">
                {d}
              </div>
            ))}
          </div>

          {/* Date grid */}
          <div className="grid grid-cols-7 gap-y-0.5">
            {cells.map((date, i) => {
              if (!date) return <div key={`empty-${i}`} />;
              const isSelected = value ? isSameDay(date, value) : false;
              const isToday = isSameDay(date, today);
              const isDis = isDisabled(date, minDate, maxDate);
              return (
                <button
                  key={i}
                  type="button"
                  disabled={isDis}
                  onClick={() => { onChange(date); setOpen(false); }}
                  className={`text-xs w-8 h-8 mx-auto flex items-center justify-center rounded-full transition-colors duration-150 ${
                    isDis
                      ? "text-muted-fg/30 cursor-not-allowed"
                      : isSelected
                      ? "bg-primary-500 text-white font-semibold"
                      : isToday
                      ? "border border-primary-500 text-primary-500 font-semibold hover:bg-primary-500/10"
                      : "text-foreground hover:bg-surface-raised cursor-pointer"
                  }`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          {/* Clear */}
          {value && (
            <button
              type="button"
              onClick={() => { onChange(null); setOpen(false); }}
              className="mt-2 w-full text-xs text-muted-fg hover:text-foreground text-center py-1 hover:bg-surface-raised rounded transition-colors"
            >
              Clear selection
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
