import { FC, ReactNode } from "react";

export enum BREADCRUMB_SEPARATOR {
  SLASH = "slash",
  CHEVRON = "chevron",
  DOT = "dot",
}

export interface IBreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
}

export interface IBreadcrumb {
  items: IBreadcrumbItem[];
  separator?: BREADCRUMB_SEPARATOR;
  className?: string;
}

const Separator = ({ type }: { type: BREADCRUMB_SEPARATOR }) => {
  if (type === BREADCRUMB_SEPARATOR.CHEVRON) {
    return (
      <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 text-muted-fg" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === BREADCRUMB_SEPARATOR.DOT) {
    return <span className="w-1 h-1 rounded-full bg-muted-fg" />;
  }
  return <span className="text-muted-fg text-sm">/</span>;
};

const Breadcrumb: FC<IBreadcrumb> = ({
  items,
  separator = BREADCRUMB_SEPARATOR.CHEVRON,
  className = "",
}) => {
  return (
    <nav aria-label="breadcrumb" className={className}>
      <ol className="flex flex-row flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-sm text-muted-fg hover:text-foreground transition-colors duration-200"
                >
                  {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                  {item.label}
                </a>
              ) : (
                <span
                  className={`flex items-center gap-1 text-sm ${
                    isLast ? "text-foreground font-medium" : "text-muted-fg"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                  {item.label}
                </span>
              )}
              {!isLast && <Separator type={separator} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
