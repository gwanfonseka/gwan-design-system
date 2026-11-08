import { FC, ReactNode, useEffect, useId, useRef, type KeyboardEvent } from "react";

export enum DRAWER_PLACEMENT {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}

export enum DRAWER_SIZE {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  FULL = "full",
}

export interface IDrawer {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  placement?: DRAWER_PLACEMENT;
  size?: DRAWER_SIZE;
  showOverlay?: boolean;
  className?: string;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const Drawer: FC<IDrawer> = ({
  open,
  onClose,
  title,
  children,
  placement = DRAWER_PLACEMENT.RIGHT,
  size = DRAWER_SIZE.MEDIUM,
  showOverlay = true,
  className = "",
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  // Move focus into the drawer when it opens, and back to where it was when it closes.
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    // The close button is always there, so there is always something to focus.
    panelRef.current!.querySelector<HTMLElement>(FOCUSABLE)!.focus();
    return () => previous?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // With the overlay the page behind is unusable, so keep Tab inside the drawer.
  const trapFocus = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab" || !showOverlay) return;
    const focusable = Array.from(panelRef.current!.querySelectorAll<HTMLElement>(FOCUSABLE));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isHorizontal = placement === DRAWER_PLACEMENT.LEFT || placement === DRAWER_PLACEMENT.RIGHT;

  const sizeClass = isHorizontal
    ? {
        [DRAWER_SIZE.SMALL]: "w-64",
        [DRAWER_SIZE.MEDIUM]: "w-80",
        [DRAWER_SIZE.LARGE]: "w-[480px]",
        [DRAWER_SIZE.FULL]: "w-full",
      }[size]
    : {
        [DRAWER_SIZE.SMALL]: "h-48",
        [DRAWER_SIZE.MEDIUM]: "h-72",
        [DRAWER_SIZE.LARGE]: "h-[480px]",
        [DRAWER_SIZE.FULL]: "h-full",
      }[size];

  const placementBase: Record<DRAWER_PLACEMENT, string> = {
    [DRAWER_PLACEMENT.LEFT]: `top-0 left-0 h-full ${sizeClass}`,
    [DRAWER_PLACEMENT.RIGHT]: `top-0 right-0 h-full ${sizeClass}`,
    [DRAWER_PLACEMENT.TOP]: `top-0 left-0 w-full ${sizeClass}`,
    [DRAWER_PLACEMENT.BOTTOM]: `bottom-0 left-0 w-full ${sizeClass}`,
  };

  const translateHidden: Record<DRAWER_PLACEMENT, string> = {
    [DRAWER_PLACEMENT.LEFT]: "-translate-x-full",
    [DRAWER_PLACEMENT.RIGHT]: "translate-x-full",
    [DRAWER_PLACEMENT.TOP]: "-translate-y-full",
    [DRAWER_PLACEMENT.BOTTOM]: "translate-y-full",
  };

  return (
    <>
      {/* Overlay */}
      {showOverlay && (
        <div
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={onClose}
        />
      )}

      {/* Drawer panel. Closed, it stays mounted off-screen, so inert keeps it out of reach. */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal={showOverlay || undefined}
        aria-labelledby={title ? titleId : undefined}
        aria-label={title ? undefined : "Drawer"}
        tabIndex={-1}
        inert={!open}
        aria-hidden={!open || undefined}
        onKeyDown={trapFocus}
        className={`fixed z-50 outline-none bg-surface border-border shadow-xl flex flex-col transition-transform duration-300 ease-in-out
          ${placementBase[placement]}
          ${placement === DRAWER_PLACEMENT.LEFT || placement === DRAWER_PLACEMENT.TOP ? "border-r border-b" : "border-l border-t"}
          ${open ? "translate-x-0 translate-y-0" : translateHidden[placement]}
          ${className}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
          {title ? (
            <h2 id={titleId} className="text-sm font-semibold text-foreground">{title}</h2>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-muted-fg hover:text-foreground hover:bg-surface-raised transition-colors duration-200"
            aria-label="Close drawer"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
