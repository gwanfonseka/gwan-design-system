"use client";

import { FC, useEffect, useRef } from "react";
import { CrossSVG } from "../icons";

export enum MODAL_SIZE {
  SMALL  = "w-[calc(100vw-2rem)] sm:w-[600px]",
  MEDIUM = "w-[calc(100vw-2rem)] sm:w-[800px]",
  LARGE  = "w-[calc(100vw-2rem)] sm:w-[950px]",
  FULL   = "w-full h-full",
}

export interface IModal {
  title: string;
  children: React.ReactNode;
  onClear: () => void;
  size?: MODAL_SIZE;
  className?: string;
}

const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const Modal: FC<IModal> = ({
  title,
  children,
  onClear,
  size = MODAL_SIZE.SMALL,
  className = "",
}: IModal) => {
  const modalRef   = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<Element | null>(null);
  const titleId    = "gwan-modal-title";

  // Store previous focus and move focus inside on mount; restore on unmount
  useEffect(() => {
    previousFocus.current = document.activeElement;
    const focusable = modalRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
    if (focusable?.length) {
      focusable[0].focus();
    } else {
      modalRef.current?.focus();
    }
    return () => {
      (previousFocus.current as HTMLElement | null)?.focus();
    };
  }, []);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClear(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClear]);

  // Focus trap
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusable = Array.from(
      modalRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/40 ${className}`}
      onMouseDown={onClear}
      aria-hidden="true"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className={`bg-surface border border-border p-4 ${
          size !== MODAL_SIZE.FULL && "rounded-lg"
        } absolute flex flex-col gap-4 max-h-[90vh] ${size}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row gap-4 items-center">
          <h2 id={titleId} className="flex-1 text-3xl text-foreground">{title}</h2>
          <button
            type="button"
            aria-label="Close dialog"
            className="size-4 cursor-pointer text-muted-fg hover:text-foreground"
            onClick={onClear}
          >
            <CrossSVG />
          </button>
        </div>
        <div className="w-full h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
