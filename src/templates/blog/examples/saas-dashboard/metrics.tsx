// src/templates/users/metrics.tsx
import {
  CIRCULAR_PROGRESS_SIZE,
  CIRCULAR_PROGRESS_TYPE,
  CircularProgress,
  MoneySVG,
  OrdersSVG,
  STAT_TREND,
  StatCard,
  UsersSVG,
} from "gwan-design-system";

export default function Metrics() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <StatCard
        label="Total Users"
        value="9,430"
        trend={STAT_TREND.UP}
        trendLabel="8% vs last month"
        icon={<UsersSVG />}
      />
      <StatCard
        label="Revenue"
        value="$48,295"
        trend={STAT_TREND.UP}
        trendLabel="12% vs last month"
        icon={<MoneySVG />}
      />
      <StatCard
        label="New Orders"
        value="1,284"
        trend={STAT_TREND.DOWN}
        trendLabel="3% vs last month"
        icon={<OrdersSVG />}
      />
      <div className="bg-surface border border-border rounded-xl p-4 flex flex-col gap-2">
        <p className="text-xs text-muted-fg">Plan usage</p>
        <div className="flex items-center gap-3">
          <CircularProgress
            value={78}
            size={CIRCULAR_PROGRESS_SIZE.SM}
            type={CIRCULAR_PROGRESS_TYPE.SUCCESS}
          />
          <p className="text-[10px] text-muted-fg">7,800 / 10,000 seats</p>
        </div>
      </div>
    </div>
  );
}
