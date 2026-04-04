import { FC, ReactNode } from "react";

export enum CALLOUT_TYPE {
  INFO = "INFO",
  WARNING = "WARNING",
  TIP = "TIP",
  DANGER = "DANGER",
}

export interface ICallout {
  type?: CALLOUT_TYPE;
  title?: string;
  children: ReactNode;
  className?: string;
}

const InfoIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M8 7v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="8" cy="5" r="0.75" fill="currentColor" />
  </svg>
);

const WarningIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 shrink-0 mt-0.5">
    <path d="M8 2L14.5 13.5H1.5L8 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M8 6.5v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="8" cy="11" r="0.75" fill="currentColor" />
  </svg>
);

const TipIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M5.5 8.5l2 2 3-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DangerIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const config: Record<
  CALLOUT_TYPE,
  { border: string; bg: string; text: string; label: string; icon: FC }
> = {
  [CALLOUT_TYPE.INFO]: {
    border: "border-accent/50",
    bg: "bg-accent/10",
    text: "text-accent",
    label: "Note",
    icon: InfoIcon,
  },
  [CALLOUT_TYPE.WARNING]: {
    border: "border-warning/50",
    bg: "bg-warning-bg",
    text: "text-warning-fg",
    label: "Warning",
    icon: WarningIcon,
  },
  [CALLOUT_TYPE.TIP]: {
    border: "border-success/50",
    bg: "bg-success-bg",
    text: "text-success-fg",
    label: "Tip",
    icon: TipIcon,
  },
  [CALLOUT_TYPE.DANGER]: {
    border: "border-danger/50",
    bg: "bg-danger-bg",
    text: "text-danger-fg",
    label: "Danger",
    icon: DangerIcon,
  },
};

const Callout: FC<ICallout> = ({
  type = CALLOUT_TYPE.INFO,
  title,
  children,
  className = "",
}: ICallout) => {
  const { border, bg, text, label, icon: Icon } = config[type];

  return (
    <div
      className={`border-l-4 rounded-r-lg px-4 py-3 text-sm leading-relaxed ${border} ${bg} ${text} ${className}`}
    >
      <div className="flex flex-row gap-2 items-start">
        <Icon />
        <div className="flex flex-col gap-1">
          <span className="font-bold uppercase tracking-[0.15em] text-[10px]">
            {title ?? label}
          </span>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Callout;
