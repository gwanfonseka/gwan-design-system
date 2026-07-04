"use client";

import { FC, KeyboardEvent, ClipboardEvent, useRef } from "react";

export enum OTP_SIZE {
  SM = "SM",
  MD = "MD",
  LG = "LG",
}

export interface IOtpInput {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  mask?: boolean;
  disabled?: boolean;
  isError?: boolean;
  errorMessage?: string;
  size?: OTP_SIZE;
  label?: string;
  className?: string;
  onComplete?: (value: string) => void;
}

const sizeMap: Record<OTP_SIZE, { cell: string; text: string }> = {
  [OTP_SIZE.SM]: { cell: "w-9 h-10", text: "text-sm" },
  [OTP_SIZE.MD]: { cell: "w-11 h-12", text: "text-base" },
  [OTP_SIZE.LG]: { cell: "w-13 h-14", text: "text-lg" },
};

const OtpInput: FC<IOtpInput> = ({
  value,
  onChange,
  length = 6,
  mask = false,
  disabled = false,
  isError = false,
  errorMessage,
  size = OTP_SIZE.MD,
  label,
  className = "",
  onComplete,
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = Array.from({ length }, (_, i) => value[i] ?? "");
  const { cell, text } = sizeMap[size];

  const focusAt = (index: number) => {
    const el = inputRefs.current[index];
    if (el) {
      el.focus();
      el.select();
    }
  };

  const update = (index: number, char: string) => {
    const next = digits.map((d, i) => (i === index ? char : d));
    const joined = next.join("");
    onChange(joined);
    if (char && joined.length === length) onComplete?.(joined);
    if (char && index < length - 1) focusAt(index + 1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (digits[index]) {
        update(index, "");
      } else if (index > 0) {
        update(index - 1, "");
        focusAt(index - 1);
      }
      e.preventDefault();
    } else if (e.key === "ArrowLeft" && index > 0) {
      focusAt(index - 1);
    } else if (e.key === "ArrowRight" && index < length - 1) {
      focusAt(index + 1);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length - index);
    if (!pasted) return;
    const next = digits.map((d, i) => {
      const pi = i - index;
      return pi >= 0 && pi < pasted.length ? pasted[pi] : d;
    });
    const joined = next.join("");
    onChange(joined);
    const lastFilled = Math.min(index + pasted.length, length - 1);
    focusAt(lastFilled);
    if (joined.replace(/\s/g, "").length === length) onComplete?.(joined);
  };

  const borderClass = isError
    ? "border-danger focus:border-danger"
    : "border-border hover:border-primary-default focus:border-primary-default";

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className={`text-xs font-semibold ${isError ? "text-danger" : "text-muted-fg"}`}>
          {label}
        </label>
      )}
      <div className="flex gap-2">
        {digits.map((digit, i) => (
          <input
            key={i}
            ref={(el) => { inputRefs.current[i] = el; }}
            type={mask ? "password" : "text"}
            inputMode="numeric"
            maxLength={1}
            value={digit}
            disabled={disabled}
            aria-label={`Digit ${i + 1} of ${length}`}
            className={`${cell} ${text} text-center font-semibold bg-surface text-foreground border rounded outline-none transition-colors duration-200 ${borderClass} ${
              disabled ? "cursor-not-allowed opacity-50" : ""
            }`}
            onChange={(e) => {
              const char = e.target.value.replace(/\D/g, "").slice(-1);
              update(i, char);
            }}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={(e) => handlePaste(e, i)}
            onFocus={(e) => e.target.select()}
          />
        ))}
      </div>
      {isError && errorMessage && (
        <p role="alert" className="text-danger text-xs mt-0.5">{errorMessage}</p>
      )}
    </div>
  );
};

export default OtpInput;
