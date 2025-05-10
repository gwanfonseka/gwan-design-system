import { useEffect, useState } from "react";
import { CheckSVG, CircleSVG, CrossSVG } from "../icons";

export enum ORDER_STATUS {
  ORDER_PLACED = "Order placed",
  PRINTING_IN_PROGRESS = "Printing in progress",
  PACKAGING = "Packaging",
  DISPATCHED_TO_COURIER = "Dispatched to courier",
  DELIVERED = "Delivered",
  ORDER_CANCELLED = "Order cancelled",
  PENDING = "Pending",
}

export interface ILog {
  title: ORDER_STATUS;
  date?: string;
  description?: string;
}

export interface ITimeLine {
  logs: ILog[];
}

const TimeLine = ({ logs }: ITimeLine) => {
  const [steps, setSteps] = useState<ILog[]>([]);

  useEffect(() => {
    if (
      logs[0].title !== ORDER_STATUS.ORDER_CANCELLED &&
      logs[0].title !== ORDER_STATUS.DELIVERED
    ) {
      setSteps([
        {
          title: ORDER_STATUS.PENDING,
        },
        ...logs,
      ]);
    } else {
      setSteps(logs);
    }
  }, [logs]);

  const getIcon = (status?: ORDER_STATUS) => {
    switch (status) {
      case ORDER_STATUS.ORDER_PLACED:
      case ORDER_STATUS.PRINTING_IN_PROGRESS:
      case ORDER_STATUS.PACKAGING:
      case ORDER_STATUS.DISPATCHED_TO_COURIER:
      case ORDER_STATUS.DELIVERED:
        return (
          <div className="size-5 bg-greenola-500 rounded-full p-1 text-white">
            <CheckSVG />
          </div>
        );
      case ORDER_STATUS.ORDER_CANCELLED:
        return (
          <div className="size-5 bg-redola-500 rounded-full p-1 text-white">
            <CrossSVG />
          </div>
        );
      default:
        return (
          <div className="size-5 bg-neutrola-600 text-neutrola-200 rounded-full p-1">
            <CircleSVG />
          </div>
        );
    }
  };

  return (
    <div>
      {steps.map(({ title, date, description }, index) => (
        <div key={`log_${index}`} className="flex flex-row gap-4">
          <div className="flex flex-col items-center">
            {getIcon(title)}
            <div className="w-0.5 h-full bg-neutrola-500"></div>
          </div>
          <div className="flex flex-col flex-1">
            <p
              className={`text-base font-semibold relative top-[-2px] ${
                title === ORDER_STATUS.PENDING ? "pb-8" : ""
              }`}
            >
              {title}
            </p>
            {title && <p className="text-xs text-neutrola-700">{date}</p>}
            {description && (
              <p className="p-4 text-xs bg-neutrola-50 text-neutral-800 rounded-lg my-2">
                {description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
