import TimeLine, { ORDER_STATUS } from "@/components/timeLine";

const success = [
  {
    title: ORDER_STATUS.DELIVERED,
    date: "2021-01-04",
    description: "Package is delivered",
  },
  {
    title: ORDER_STATUS.DISPATCHED_TO_COURIER,
    date: "2021-01-03",
    description: "Package is in transit",
  },
  {
    title: ORDER_STATUS.PACKAGING,
    date: "2021-01-03",
    description: "Packaging is in progress",
  },
  {
    title: ORDER_STATUS.PRINTING_IN_PROGRESS,
    date: "2021-01-02",
    description: "Planner is being printed",
  },
  {
    title: ORDER_STATUS.ORDER_PLACED,
    date: "2025-01-01",
    description: "Order placed by customer",
  },
];

const canceled = [
  {
    title: ORDER_STATUS.ORDER_CANCELLED,
    date: "2021-01-04",
    description: "Package is delivered",
  },
  {
    title: ORDER_STATUS.DISPATCHED_TO_COURIER,
    date: "2021-01-03",
    description: "Package is in transit",
  },
  {
    title: ORDER_STATUS.PACKAGING,
    date: "2021-01-03",
    description: "Packaging is in progress",
  },
  {
    title: ORDER_STATUS.PRINTING_IN_PROGRESS,
    date: "2021-01-02",
    description: "Planner is being printed",
  },
  {
    title: ORDER_STATUS.ORDER_PLACED,
    date: "2025-01-01",
    description: "Order placed by customer",
  },
];

const pending = [
  {
    title: ORDER_STATUS.PACKAGING,
    date: "2021-01-03",
    description: "Packaging is in progress",
  },
  {
    title: ORDER_STATUS.PRINTING_IN_PROGRESS,
    date: "2021-01-02",
    description: "Planner is being printed",
  },
  {
    title: ORDER_STATUS.ORDER_PLACED,
    date: "2025-01-01",
    description: "Order placed by customer",
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
