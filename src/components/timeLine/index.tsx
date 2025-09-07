import { FC, useEffect, useState } from "react";
import { CircleSVG } from "../icons";

export enum ORDER_STATUS {
  ORDER_PLACED = "Order placed",
  PRINTING_IN_PROGRESS = "Printing in progress",
  PACKAGING = "Packaging",
  DISPATCHED_TO_COURIER = "Dispatched to courier",
  DELIVERED = "Delivered",
  ORDER_CANCELLED = "Order cancelled",
  PENDING = "Pending",
}

export enum STEP_STATUS {
  SUCCESS = "Success",
  FAILED = "Failed",
  FINISHED = "Finished",
}

export interface ILog {
  title: string;
  date?: string;
  description?: string;
  status: string;
}

export interface ITimeLine {
  logs: ILog[];
  className?: string;
}

const TimeLine: FC<ITimeLine> = ({ logs, className = "" }: ITimeLine) => {
  const [steps, setSteps] = useState<ILog[]>([]);

  useEffect(() => {
    if (
      logs[0].status !== STEP_STATUS.FAILED &&
      logs[0].status !== STEP_STATUS.FINISHED
    ) {
      setSteps([
        {
          title: "Pending",
          status: "Pending",
        },
        ...logs,
      ]);
    } else {
      setSteps(logs);
    }
  }, [logs]);

  const getIcon = (status?: string) => {
    switch (status) {
      case STEP_STATUS.SUCCESS:
      case STEP_STATUS.FINISHED:
        return (
          <div className="size-4 bg-green-500 rounded-full text-white p-2"></div>
        );
      case STEP_STATUS.FAILED:
        return (
          <div className="size-4 bg-red-500 rounded-full text-white p-2"></div>
        );
      default:
        return (
          <div className="size-4 bg-neutral-600 text-neutral-200 rounded-full p-1">
            <CircleSVG />
          </div>
        );
    }
  };

  return (
    <div className={className}>
      {steps.map(({ title, date, description, status }, index) => (
        <div key={`log_${index}`} className="flex flex-row gap-4">
          <div className="flex flex-col items-center">
            {getIcon(status)}
            <div className="w-0.5 h-full bg-neutral-100"></div>
          </div>
          <div className="flex flex-col flex-1">
            <p
              className={`text-base font-semibold relative top-[-2px] ${
                status === "Pending" ? "pb-8" : ""
              }`}
            >
              {title}
            </p>
            {title && <p className="text-xs text-neutral-700">{date}</p>}
            {description && (
              <p className="p-4 text-xs bg-neutral-50 text-neutral-800 rounded-lg my-2 max-w-80">
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
