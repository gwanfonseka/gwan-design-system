import { FC, ReactNode, useState } from "react";

export enum ACCORDION_VARIANT {
  DEFAULT = "default",
  BORDERED = "bordered",
  FLUSH = "flush",
}

export interface IAccordionItem {
  key: string;
  title: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface IAccordion {
  items: IAccordionItem[];
  defaultOpenKey?: string;
  allowMultiple?: boolean;
  variant?: ACCORDION_VARIANT;
  className?: string;
}

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Accordion: FC<IAccordion> = ({
  items,
  defaultOpenKey,
  allowMultiple = false,
  variant = ACCORDION_VARIANT.DEFAULT,
  className = "",
}) => {
  const [openKeys, setOpenKeys] = useState<Set<string>>(
    defaultOpenKey ? new Set([defaultOpenKey]) : new Set()
  );

  const toggle = (key: string) => {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        if (!allowMultiple) next.clear();
        next.add(key);
      }
      return next;
    });
  };

  const wrapperStyle =
    variant === ACCORDION_VARIANT.BORDERED
      ? "border border-border rounded-lg overflow-hidden divide-y divide-border"
      : variant === ACCORDION_VARIANT.FLUSH
      ? "divide-y divide-border"
      : "flex flex-col gap-2";

  const itemStyle = (isOpen: boolean, disabled?: boolean) => {
    if (variant === ACCORDION_VARIANT.DEFAULT) {
      return `rounded-lg border ${isOpen ? "border-primary-500/30 bg-surface" : "border-border bg-surface"} ${disabled ? "opacity-50" : ""}`;
    }
    return disabled ? "opacity-50" : "";
  };

  return (
    <div className={`${wrapperStyle} ${className}`}>
      {items.map((item) => {
        const isOpen = openKeys.has(item.key);
        return (
          <div key={item.key} className={itemStyle(isOpen, item.disabled)}>
            <button
              type="button"
              disabled={item.disabled}
              onClick={() => !item.disabled && toggle(item.key)}
              className={`w-full flex items-center justify-between px-4 py-3.5 text-left text-sm font-medium text-foreground ${
                item.disabled ? "cursor-not-allowed" : "cursor-pointer hover:text-primary-500 transition-colors duration-200"
              }`}
            >
              <span>{item.title}</span>
              <ChevronIcon open={isOpen} />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-sm text-muted-fg leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
