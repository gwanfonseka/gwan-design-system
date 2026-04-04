import { FC, ReactNode } from "react";

export enum STEPPER_ORIENTATION {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export enum STEPPER_VARIANT {
  DEFAULT = "default",
  MINIMAL = "minimal",
}

export enum STEP_STATUS {
  COMPLETE = "complete",
  ACTIVE = "active",
  PENDING = "pending",
  ERROR = "error",
}

export interface IStep {
  key: string;
  title: string;
  description?: string;
  status?: STEP_STATUS;
  content?: ReactNode;
}

export interface IStepper {
  steps: IStep[];
  activeKey?: string;
  orientation?: STEPPER_ORIENTATION;
  variant?: STEPPER_VARIANT;
  className?: string;
}

const StepIcon = ({ status, index }: { status: STEP_STATUS; index: number }) => {
  const base = "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors duration-200";

  if (status === STEP_STATUS.COMPLETE) {
    return (
      <div className={`${base} bg-primary-500 text-white`}>
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (status === STEP_STATUS.ERROR) {
    return (
      <div className={`${base} bg-danger text-white`}>
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5l6 6M11 5l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (status === STEP_STATUS.ACTIVE) {
    return (
      <div className={`${base} border-2 border-primary-500 bg-primary-500/10 text-primary-500`}>
        {index + 1}
      </div>
    );
  }
  return (
    <div className={`${base} border-2 border-border bg-transparent text-muted-fg`}>
      {index + 1}
    </div>
  );
};

const Stepper: FC<IStepper> = ({
  steps,
  activeKey,
  orientation = STEPPER_ORIENTATION.HORIZONTAL,
  variant = STEPPER_VARIANT.DEFAULT,
  className = "",
}) => {
  const getStatus = (step: IStep, index: number): STEP_STATUS => {
    if (step.status) return step.status;
    const activeIndex = steps.findIndex((s) => s.key === activeKey);
    if (index < activeIndex) return STEP_STATUS.COMPLETE;
    if (index === activeIndex) return STEP_STATUS.ACTIVE;
    return STEP_STATUS.PENDING;
  };

  if (orientation === STEPPER_ORIENTATION.VERTICAL) {
    return (
      <div className={`flex flex-col ${className}`}>
        {steps.map((step, index) => {
          const status = getStatus(step, index);
          const isLast = index === steps.length - 1;
          return (
            <div key={step.key} className="flex flex-row gap-3">
              <div className="flex flex-col items-center">
                <StepIcon status={status} index={index} />
                {!isLast && (
                  <div className={`w-0.5 flex-1 my-1 ${status === STEP_STATUS.COMPLETE ? "bg-primary-500" : "bg-border"}`} />
                )}
              </div>
              <div className={`pb-6 ${isLast ? "" : ""}`}>
                <p className={`text-sm font-semibold mt-1 ${status === STEP_STATUS.ACTIVE ? "text-foreground" : status === STEP_STATUS.COMPLETE ? "text-foreground" : "text-muted-fg"}`}>
                  {step.title}
                </p>
                {step.description && (
                  <p className="text-xs text-muted-fg mt-0.5">{step.description}</p>
                )}
                {status === STEP_STATUS.ACTIVE && step.content && (
                  <div className="mt-3">{step.content}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-row items-start ${className}`}>
      {steps.map((step, index) => {
        const status = getStatus(step, index);
        const isLast = index === steps.length - 1;
        return (
          <div key={step.key} className="flex flex-1 items-start">
            <div className="flex flex-col items-center flex-1">
              <div className="flex flex-row items-center w-full">
                <div className={`${index > 0 ? "flex-1 h-0.5 mr-2" : "hidden"} ${status === STEP_STATUS.COMPLETE || status === STEP_STATUS.ACTIVE ? "bg-primary-500" : "bg-border"}`} />
                <StepIcon status={status} index={index} />
                <div className={`${!isLast ? "flex-1 h-0.5 ml-2" : "hidden"} ${status === STEP_STATUS.COMPLETE ? "bg-primary-500" : "bg-border"}`} />
              </div>
              {variant === STEPPER_VARIANT.DEFAULT && (
                <div className="text-center mt-2 px-1">
                  <p className={`text-xs font-semibold ${status === STEP_STATUS.ACTIVE ? "text-foreground" : status === STEP_STATUS.COMPLETE ? "text-foreground" : "text-muted-fg"}`}>
                    {step.title}
                  </p>
                  {step.description && (
                    <p className="text-[10px] text-muted-fg mt-0.5 hidden sm:block">{step.description}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
