import { FC } from "react";

export enum SPINNER_SIZE {
  XS = "XS",
  SM = "SM",
  MD = "MD",
  LG = "LG",
  XL = "XL",
}

export enum SPINNER_COLOR {
  DEFAULT = "DEFAULT",
  PRIMARY = "PRIMARY",
  SUCCESS = "SUCCESS",
  DANGER = "DANGER",
  WARNING = "WARNING",
}

export interface ISpinner {
  size?: SPINNER_SIZE;
  color?: SPINNER_COLOR;
  className?: string;
}

const sizeClass: Record<SPINNER_SIZE, string> = {
  [SPINNER_SIZE.XS]: "size-3 border-[1.5px]",
  [SPINNER_SIZE.SM]: "size-4 border-2",
  [SPINNER_SIZE.MD]: "size-6 border-2",
  [SPINNER_SIZE.LG]: "size-9 border-[3px]",
  [SPINNER_SIZE.XL]: "size-12 border-[3px]",
};

const colorClass: Record<SPINNER_COLOR, string> = {
  [SPINNER_COLOR.DEFAULT]: "border-border border-t-foreground",
  [SPINNER_COLOR.PRIMARY]: "border-primary-100 border-t-primary-default",
  [SPINNER_COLOR.SUCCESS]: "border-success-bg border-t-success",
  [SPINNER_COLOR.DANGER]:  "border-danger-bg border-t-danger",
  [SPINNER_COLOR.WARNING]: "border-warning-bg border-t-warning",
};

const Spinner: FC<ISpinner> = ({
  size = SPINNER_SIZE.MD,
  color = SPINNER_COLOR.DEFAULT,
  className = "",
}) => (
  <div
    role="status"
    aria-label="Loading"
    className={`rounded-full animate-spin ${sizeClass[size]} ${colorClass[color]} ${className}`}
  />
);

export default Spinner;
