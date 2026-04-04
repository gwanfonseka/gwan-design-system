import { FC, ReactNode } from "react";

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
        ? "text-foreground border-b-2 border-primary-500"
        : "text-muted-fg border-b-2 border-transparent hover:text-foreground hover:border-border transition-colors duration-200 cursor-pointer";
    }
    if (variant === TABS_VARIANT.PILL) {
      return isActive
        ? "bg-primary-500 text-primary-default-fg rounded-full cursor-default"
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

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className={`flex flex-row flex-wrap ${getTrackStyle()}`}>
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            disabled={item.disabled}
            onClick={() => !item.disabled && onChange?.(item.key)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${getTabStyle(item.key, item.disabled)}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div>
        {items.find((item) => item.key === active)?.content}
      </div>
    </div>
  );
};

export default Tabs;
