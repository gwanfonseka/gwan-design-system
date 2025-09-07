import TimeLine, { STEP_STATUS } from "@/components/timeLine";

const success = [
  {
    title: "Delivered",
    date: "2021-01-04",
    description: "Package is delivered",
    status: STEP_STATUS.FINISHED,
  },
  {
    title: "Delivering",
    date: "2021-01-03",
    description: "Package is in transit",
    status: STEP_STATUS.SUCCESS,
  },
  {
    title: "Packaging in progress",
    date: "2021-01-03",
    description: "Packaging is in progress",
    status: STEP_STATUS.SUCCESS,
  },
  {
    title: "Printing in progress",
    date: "2021-01-02",
    description: "Planner is being printed",
    status: STEP_STATUS.SUCCESS,
  },
  {
    title: "Order placed",
    date: "2025-01-01",
    description: "Order placed by customer",
    status: STEP_STATUS.SUCCESS,
  },
];

const canceled = [
  {
    title: "Delivered",
    date: "2021-01-04",
    description: "Package is delivered",
    status: STEP_STATUS.FAILED,
  },
  {
    title: "Delivering",
    date: "2021-01-03",
    description: "Package is in transit",
    status: STEP_STATUS.SUCCESS,
  },
  {
    title: "Packaging in progress",
    date: "2021-01-03",
    description: "Packaging is in progress",
    status: STEP_STATUS.SUCCESS,
  },
  {
    title: "Printing in progress",
    date: "2021-01-02",
    description: "Planner is being printed",
    status: STEP_STATUS.SUCCESS,
  },
  {
    title: "Order placed",
    date: "2025-01-01",
    description: "Order placed by customer",
    status: STEP_STATUS.SUCCESS,
  },
];

const pending = [
  {
    title: "Packaging in progress",
    date: "2021-01-03",
    description: "Packaging is in progress",
    status: STEP_STATUS.SUCCESS,
  },
  {
    title: "Printing in progress",
    date: "2021-01-02",
    description: "Planner is being printed",
    status: STEP_STATUS.SUCCESS,
  },
  {
    title: "Order placed",
    date: "2025-01-01",
    description: "Order placed by customer",
    status: STEP_STATUS.SUCCESS,
  },
];

const TimeLines = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col gap-8">
        <p className="text-base font-semibold">Order pending scenario</p>
        <TimeLine logs={pending} />
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-base font-semibold">Order success scenario</p>
        <TimeLine logs={success} />
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-base font-semibold">Order canceled scenario</p>
        <TimeLine logs={canceled} />
      </div>
    </div>
  );
};

export default TimeLines;
