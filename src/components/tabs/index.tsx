import { FC, ReactNode, useId, useRef, type KeyboardEvent } from "react";

export enum TABS_VARIANT {
  UNDERLINE = "underline",
  PILL = "pill",
  BOXED = "boxed",
}

export interface ITabItem {
  key: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface ITabs {
  items: ITabItem[];
  activeKey?: string;
  onChange?: (key: string) => void;
  variant?: TABS_VARIANT;
  className?: string;
}

const Tabs: FC<ITabs> = ({
  items,
  activeKey,
  onChange,
  variant = TABS_VARIANT.UNDERLINE,
  className = "",
}) => {
  const active = activeKey ?? items[0]?.key;

  const getTabStyle = (key: string, disabled?: boolean) => {
    const isActive = active === key;
    if (disabled) return "opacity-40 cursor-not-allowed";

    if (variant === TABS_VARIANT.UNDERLINE) {
      return isActive
        ? "text-foreground border-b-2 border-primary-default"
        : "text-muted-fg border-b-2 border-transparent hover:text-foreground hover:border-border transition-colors duration-200 cursor-pointer";
    }
    if (variant === TABS_VARIANT.PILL) {
      return isActive
        ? "bg-primary-default text-primary-default-fg rounded-full cursor-default"
        : "text-muted-fg hover:text-foreground hover:bg-surface-raised rounded-full transition-colors duration-200 cursor-pointer";
    }
    if (variant === TABS_VARIANT.BOXED) {
      return isActive
        ? "bg-surface text-foreground border border-border rounded-md shadow-sm cursor-default"
        : "text-muted-fg hover:text-foreground transition-colors duration-200 cursor-pointer rounded-md";
    }
    return "";
  };

  const getTrackStyle = () => {
    if (variant === TABS_VARIANT.UNDERLINE)
      return "border-b border-border gap-0";
    if (variant === TABS_VARIANT.PILL)
      return "bg-surface-raised rounded-full p-1 gap-1";
    if (variant === TABS_VARIANT.BOXED)
      return "bg-surface-raised rounded-lg p-1 gap-1";
    return "";
  };

  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabId = (key: string) => `${baseId}-tab-${key}`;
  const panelId = `${baseId}-panel`;

  // Arrow keys, Home and End move between enabled tabs and select them (ARIA tabs pattern).
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const enabled = items.map((item, i) => (item.disabled ? -1 : i)).filter((i) => i >= 0);
    const at = enabled.indexOf(index);
    const target =
      e.key === "ArrowRight" ? enabled[(at + 1) % enabled.length]
      : e.key === "ArrowLeft" ? enabled[(at - 1 + enabled.length) % enabled.length]
      : e.key === "Home" ? enabled[0]
      : e.key === "End" ? enabled[enabled.length - 1]
      : undefined;
    if (target === undefined) return;
    e.preventDefault();
    tabRefs.current[target]?.focus();
    onChange?.(items[target].key);
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div role="tablist" className={`flex flex-row flex-wrap ${getTrackStyle()}`}>
        {items.map((item, index) => {
          const selected = active === item.key;
          return (
            <button
              key={item.key}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={tabId(item.key)}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={selected ? panelId : undefined}
              tabIndex={selected ? 0 : -1}
              disabled={item.disabled}
              onClick={() => !item.disabled && onChange?.(item.key)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${getTabStyle(item.key, item.disabled)}`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={active ? tabId(active) : undefined}
        tabIndex={0}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-default rounded-sm"
      >
        {items.find((item) => item.key === active)?.content}
      </div>
    </div>
  );
};

export default Tabs;
