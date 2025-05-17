import { FC } from "react";

export enum TAG_TYPE {
  DEFAULT = "default",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
  INFO = "info",
}

export interface ITag {
  type: TAG_TYPE;
  label: string;
  className?: string;
}

const Tag: FC<ITag> = ({ type, label, className = "" }: ITag) => {
  const getTagStyle = (type: TAG_TYPE) => {
    switch (type) {
      case TAG_TYPE.SUCCESS:
        return "bg-green-50 text-green-600";
      case TAG_TYPE.DANGER:
        return "bg-red-50 text-red-600";
      case TAG_TYPE.WARNING:
        return "bg-yellow-50 text-yellow-600";
      case TAG_TYPE.INFO:
        return "bg-blue-50 text-blue-600";
      default:
        return "bg-neutral-50 text-neutral-600";
    }
  };

  return (
    <div
      className={`w-fit px-4 py-2 rounded-lg text-sm ${getTagStyle(
        type
      )} ${className}`}
    >
      {label}
    </div>
  );
};

export default Tag;
