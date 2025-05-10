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
}

const Tag = ({ type, label }: ITag) => {
  const getTagStyle = (type: TAG_TYPE) => {
    switch (type) {
      case TAG_TYPE.SUCCESS:
        return "bg-greenola-50 text-greenola-600";
      case TAG_TYPE.DANGER:
        return "bg-redola-50 text-redola-600";
      case TAG_TYPE.WARNING:
        return "bg-yellowla-50 text-yellowla-600";
      case TAG_TYPE.INFO:
        return "bg-blueola-50 text-blueola-600";
      default:
        return "bg-neutrola-50 text-neutrola-600";
    }
  };

  return <div className={`w-fit px-4 py-2 rounded-lg text-sm ${getTagStyle(type)}`}>{label}</div>;
};

export default Tag;
