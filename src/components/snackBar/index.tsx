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
}

const Snackbar = ({
  type = SNACK_BAR_TYPE.DEFAULT,
  message,
  icon,
}: ISnackBar) => {
  const getClassName = () => {
    switch (type) {
      case SNACK_BAR_TYPE.SUCCESS:
        return "bg-greenola-50 text-greenola-800 border-greenola-500";
      case SNACK_BAR_TYPE.DANGER:
        return "bg-redola-50 text-redola-600 border-redola-500";
      case SNACK_BAR_TYPE.WARNING:
        return "bg-yellowla-50 text-yellowla-800 border-yellowla-600";
      case SNACK_BAR_TYPE.INFO:
        return "bg-blueola-50 text-blueola-800 border-blueola-600";
      case SNACK_BAR_TYPE.DEFAULT:
      default:
        return "bg-neutrola-50 text-neutrola-800 border-neutrola-500";
    }
  };

  return (
    <div
      className={`${getClassName()} p-4 rounded-lg flex flex-row gap-4 items-center font-normal border`}
    >
      {icon && <div className="size-5">{icon}</div>}
      <div>{message}</div>
    </div>
  );
};

export default Snackbar;
