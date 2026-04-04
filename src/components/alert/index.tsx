import { FC, ReactNode, useState } from "react";

export enum ALERT_TYPE {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
}

export enum ALERT_VARIANT {
  SOLID = "solid",
  OUTLINE = "outline",
  SUBTLE = "subtle",
}

export interface IAlert {
  type?: ALERT_TYPE;
  variant?: ALERT_VARIANT;
  title?: string;
  message: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: ReactNode;
  className?: string;
}

const defaultIcons: Record<ALERT_TYPE, ReactNode> = {
  [ALERT_TYPE.INFO]: (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 7v4M8 5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  [ALERT_TYPE.SUCCESS]: (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 8l2.5 2.5L11 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  [ALERT_TYPE.WARNING]: (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2L1.5 13h13L8 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M8 6v3.5M8 11v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  [ALERT_TYPE.DANGER]: (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

const Alert: FC<IAlert> = ({
  type = ALERT_TYPE.INFO,
  variant = ALERT_VARIANT.SUBTLE,
  title,
  message,
  dismissible = false,
  onDismiss,
  icon,
  className = "",
}) => {
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  if (dismissed) return null;

  const colorMap = {
    [ALERT_TYPE.INFO]: {
      solid: "bg-accent text-white border-accent",
      outline: "border border-accent text-accent bg-transparent",
      subtle: "bg-accent/10 border border-accent/20 text-accent",
      icon: "text-accent",
    },
    [ALERT_TYPE.SUCCESS]: {
      solid: "bg-success text-white border-success",
      outline: "border border-success text-success-fg bg-transparent",
      subtle: "bg-success-bg border border-success/20 text-success-fg",
      icon: "text-success",
    },
    [ALERT_TYPE.WARNING]: {
      solid: "bg-warning text-white border-warning",
      outline: "border border-warning text-warning-fg bg-transparent",
      subtle: "bg-warning-bg border border-warning/20 text-warning-fg",
      icon: "text-warning",
    },
    [ALERT_TYPE.DANGER]: {
      solid: "bg-danger text-white border-danger",
      outline: "border border-danger text-danger-fg bg-transparent",
      subtle: "bg-danger-bg border border-danger/20 text-danger-fg",
      icon: "text-danger",
    },
  };

  const colors = colorMap[type];
  const containerClass = colors[variant];
  const iconColor = variant === ALERT_VARIANT.SOLID ? "text-white" : colors.icon;

  return (
    <div className={`flex items-start gap-3 rounded-lg p-4 ${containerClass} ${className}`} role="alert">
      <div className={`shrink-0 mt-0.5 ${iconColor}`}>
        {icon ?? defaultIcons[type]}
      </div>
      <div className="flex-1 min-w-0">
        {title && (
          <p className="text-sm font-semibold mb-0.5">{title}</p>
        )}
        <div className="text-sm">{message}</div>
      </div>
      {dismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          className={`shrink-0 p-0.5 rounded hover:opacity-70 transition-opacity ${iconColor}`}
          aria-label="Dismiss"
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
