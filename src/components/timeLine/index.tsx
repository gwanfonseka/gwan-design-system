import { FC, useEffect, useState } from "react";
import { CircleSVG } from "../icons";

export enum STEP_STATUS {
  SUCCESS = "Success",
  FAILED = "Failed",
  FINISHED = "Finished",
}

export enum STEP_DIRECTION {
  UPWARD = "upward",
  DOWNWARD = "downward",
}

export interface ILog {
  title: string;
  placeholderRight?: string;
  placeholderBottom?: string;
  description?: string;
  status: string;
}

export interface ITimeLine {
  logs: ILog[];
  className?: string;
  direction?: STEP_DIRECTION;
}

const TimeLine: FC<ITimeLine> = ({
  logs,
  className = "",
  direction = STEP_DIRECTION.DOWNWARD,
}: ITimeLine) => {
  const [steps, setSteps] = useState<ILog[]>([]);

  useEffect(() => {
    if (
      logs[logs.length - 1].status !== STEP_STATUS.FAILED &&
      logs[logs.length - 1].status !== STEP_STATUS.FINISHED
    ) {
      const updatedLogs =
        direction === STEP_DIRECTION.DOWNWARD
          ? [
              ...logs,
              {
                title: "Pending",
                status: "Pending",
              },
            ].reverse()
          : [
              ...logs,
              {
                title: "Pending",
                status: "Pending",
              },
            ];
      setSteps([...updatedLogs]);
    } else {
      const updatedLogs =
        direction === STEP_DIRECTION.DOWNWARD ? [...logs].reverse() : [...logs];
      setSteps([...updatedLogs]);
    }
  }, [logs, direction]);

  const getIcon = (status?: string) => {
    switch (status) {
      case STEP_STATUS.SUCCESS:
      case STEP_STATUS.FINISHED:
        return (
          <div className="size-4 bg-green-500 rounded-full text-white">
            <CircleSVG />
          </div>
        );
      case STEP_STATUS.FAILED:
        return (
          <div className="size-4 bg-red-500 rounded-full text-white">
            <CircleSVG />
          </div>
        );
      default:
        return (
          <div className="size-4 bg-neutral-600 text-neutral-200 rounded-full">
            <CircleSVG />
          </div>
        );
    }
  };

  return (
    <div className={className}>
      {steps.map(
        (
          { title, placeholderBottom, placeholderRight, description, status },
          index,
        ) => (
          <div key={`log_${index}`} className="flex flex-row gap-4">
            <div className="flex flex-col items-center">
              {getIcon(status)}
              <div className="w-0.5 h-full bg-neutral-100"></div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex flex-row gap-2 items-center">
                <p
                  className={`text-base font-semibold relative -top-0.5 ${
                    status === "Pending" ? "pb-8" : ""
                  }`}
                >
                  {title}
                </p>
                {placeholderRight && (
                  <p className="text-xs text-neutral-700 italic">
                    {placeholderRight}
                  </p>
                )}
              </div>
              {placeholderBottom && (
                <p className="text-sm text-neutral-800">{placeholderBottom}</p>
              )}
              {description && (
                <p className="p-4 text-xs bg-neutral-300 text-black rounded-lg my-2 max-w-80">
                  {description}
                </p>
              )}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default TimeLine;
