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
        return "bg-green-50 text-green-800 border-green-500";
      case SNACK_BAR_TYPE.DANGER:
        return "bg-red-50 text-red-600 border-red-500";
      case SNACK_BAR_TYPE.WARNING:
        return "bg-yellow-50 text-yellow-800 border-yellow-600";
      case SNACK_BAR_TYPE.INFO:
        return "bg-blue-50 text-blue-800 border-blue-600";
      case SNACK_BAR_TYPE.DEFAULT:
      default:
        return "bg-neutral-50 text-neutral-800 border-neutral-500";
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
