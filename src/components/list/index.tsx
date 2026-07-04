import { FC, ReactNode } from "react";

export enum LIST_VARIANT {
  DEFAULT  = "default",
  BORDERED = "bordered",
  FLUSH    = "flush",
  CARD     = "card",
}

export enum LIST_SIZE {
  SM = "SM",
  MD = "MD",
  LG = "LG",
}

export interface IListItem {
  key: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  rightSlot?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface IList {
  items: IListItem[];
  variant?: LIST_VARIANT;
  size?: LIST_SIZE;
  className?: string;
}

const paddingMap: Record<LIST_SIZE, string> = {
  [LIST_SIZE.SM]: "px-3 py-2",
  [LIST_SIZE.MD]: "px-4 py-3",
  [LIST_SIZE.LG]: "px-5 py-4",
};

const titleSizeMap: Record<LIST_SIZE, string> = {
  [LIST_SIZE.SM]: "text-xs",
  [LIST_SIZE.MD]: "text-sm",
  [LIST_SIZE.LG]: "text-base",
};

const descSizeMap: Record<LIST_SIZE, string> = {
  [LIST_SIZE.SM]: "text-[11px]",
  [LIST_SIZE.MD]: "text-xs",
  [LIST_SIZE.LG]: "text-sm",
};

const iconSizeMap: Record<LIST_SIZE, string> = {
  [LIST_SIZE.SM]: "w-4 h-4",
  [LIST_SIZE.MD]: "w-5 h-5",
  [LIST_SIZE.LG]: "w-6 h-6",
};

const List: FC<IList> = ({
  items,
  variant  = LIST_VARIANT.DEFAULT,
  size     = LIST_SIZE.MD,
  className = "",
}) => {
  const padding   = paddingMap[size];
  const titleSize = titleSizeMap[size];
  const descSize  = descSizeMap[size];
  const iconSize  = iconSizeMap[size];

  const isCard    = variant === LIST_VARIANT.CARD;
  const isBordered = variant === LIST_VARIANT.BORDERED;
  const isFlush   = variant === LIST_VARIANT.FLUSH;

  const wrapperClass = isCard
    ? `rounded-lg border border-border overflow-hidden bg-surface ${className}`
    : isBordered
    ? `rounded-lg border border-border overflow-hidden ${className}`
    : `${className}`;

  return (
    <ul className={wrapperClass} role="list">
      {items.map((item, index) => {
        const isLast    = index === items.length - 1;
        const isClickable = !!item.onClick && !item.disabled;

        const dividerClass = !isLast
          ? isFlush
            ? "border-b border-border"
            : isCard || isBordered
            ? "border-b border-border"
            : "border-b border-border"
          : "";

        const itemClass = [
          "flex items-center gap-3",
          padding,
          titleSize,
          dividerClass,
          isClickable
            ? "cursor-pointer hover:bg-surface-raised transition-colors duration-150"
            : isFlush || variant === LIST_VARIANT.DEFAULT
            ? ""
            : "",
          item.disabled ? "opacity-50 cursor-not-allowed" : "",
        ].filter(Boolean).join(" ");

        return (
          <li
            key={item.key}
            className={itemClass}
            onClick={isClickable ? item.onClick : undefined}
            role={isClickable ? "button" : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onKeyDown={isClickable ? (e) => { if (e.key === "Enter" || e.key === " ") item.onClick?.(); } : undefined}
          >
            {item.icon && (
              <span className={`${iconSize} text-muted-fg shrink-0 flex items-center justify-center`}>
                {item.icon}
              </span>
            )}
            <span className="flex-1 min-w-0">
              <span className={`block font-medium text-foreground truncate`}>{item.title}</span>
              {item.description && (
                <span className={`block ${descSize} text-muted-fg truncate`}>{item.description}</span>
              )}
            </span>
            {item.rightSlot && (
              <span className="shrink-0 text-muted-fg">{item.rightSlot}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
