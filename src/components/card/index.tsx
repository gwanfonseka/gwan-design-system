import { FC, ReactNode } from "react";

export enum CARD_VARIANT {
  DEFAULT = "DEFAULT",
  BORDERED = "BORDERED",
  ELEVATED = "ELEVATED",
  FLAT = "FLAT",
}

export enum CARD_PADDING {
  NONE = "NONE",
  SM = "SM",
  MD = "MD",
  LG = "LG",
}

export interface ICard {
  children: ReactNode;
  variant?: CARD_VARIANT;
  padding?: CARD_PADDING;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const variantClass: Record<CARD_VARIANT, string> = {
  [CARD_VARIANT.DEFAULT]:  "bg-surface border border-border rounded-xl",
  [CARD_VARIANT.BORDERED]: "bg-surface border-2 border-border rounded-xl",
  [CARD_VARIANT.ELEVATED]: "bg-surface dark:bg-surface-raised rounded-xl shadow-md dark:shadow-[0_4px_8px_rgba(0,0,0,0.3)] ring-1 ring-border/30 dark:ring-border",
  [CARD_VARIANT.FLAT]:     "bg-surface-raised rounded-xl",
};

const paddingClass: Record<CARD_PADDING, string> = {
  [CARD_PADDING.NONE]: "",
  [CARD_PADDING.SM]:   "p-3",
  [CARD_PADDING.MD]:   "p-5",
  [CARD_PADDING.LG]:   "p-8",
};

const Card: FC<ICard> = ({
  children,
  variant = CARD_VARIANT.DEFAULT,
  padding = CARD_PADDING.MD,
  header,
  footer,
  className = "",
}) => {
  const hasSlots = header || footer;

  if (hasSlots) {
    return (
      <div className={`${variantClass[variant]} overflow-hidden ${className}`}>
        {header && (
          <div className={`border-b border-border ${paddingClass[padding]}`}>
            {header}
          </div>
        )}
        <div className={paddingClass[padding]}>{children}</div>
        {footer && (
          <div className={`border-t border-border ${paddingClass[padding]}`}>
            {footer}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${variantClass[variant]} ${paddingClass[padding]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
