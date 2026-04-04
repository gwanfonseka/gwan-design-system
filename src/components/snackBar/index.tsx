import { FC } from "react";

export enum SNACK_BAR_TYPE {
  DEFAULT = "default",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
  INFO = "info",
}

export interface ISnackBar {
  type?: SNACK_BAR_TYPE;
  message: string;
  icon?: React.ReactNode;
  className?: string;
}

const Snackbar: FC<ISnackBar> = ({
  type = SNACK_BAR_TYPE.DEFAULT,
  message,
  icon,
  className = "",
}: ISnackBar) => {
  const getClassName = () => {
    switch (type) {
      case SNACK_BAR_TYPE.SUCCESS:
        return "bg-success-bg text-success-fg border-success";
      case SNACK_BAR_TYPE.DANGER:
        return "bg-danger-bg text-danger-fg border-danger";
      case SNACK_BAR_TYPE.WARNING:
        return "bg-warning-bg text-warning-fg border-warning";
      case SNACK_BAR_TYPE.INFO:
        return "bg-accent/10 text-accent border-accent";
      case SNACK_BAR_TYPE.DEFAULT:
      default:
        return "bg-surface text-foreground border-border";
    }
  };

  return (
    <div
      className={`${getClassName()} p-4 rounded-lg flex flex-row gap-4 items-center font-normal border ${className}`}
    >
      {icon && <div className="size-5">{icon}</div>}
      <div>{message}</div>
    </div>
  );
};

export default Snackbar;
