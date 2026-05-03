import { FC, ReactNode } from "react";

export enum STAT_TREND {
  UP = "UP",
  DOWN = "DOWN",
  NEUTRAL = "NEUTRAL",
}

export interface IStatCard {
  label: string;
  value: string | number;
  trend?: STAT_TREND;
  trendLabel?: string;
  icon?: ReactNode;
  className?: string;
}

const trendConfig: Record<STAT_TREND, { color: string; arrow: string }> = {
  [STAT_TREND.UP]:      { color: "text-success",  arrow: "↑" },
  [STAT_TREND.DOWN]:    { color: "text-danger",   arrow: "↓" },
  [STAT_TREND.NEUTRAL]: { color: "text-muted-fg", arrow: "→" },
};

const StatCard: FC<IStatCard> = ({
  label,
  value,
  trend,
  trendLabel,
  icon,
  className = "",
}) => {
  const trendCfg = trend ? trendConfig[trend] : null;

  return (
    <div className={`bg-surface border border-border rounded-xl p-5 flex flex-col gap-3 ${className}`}>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-fg">{label}</p>
        {icon && (
          <span className="size-5 text-muted-fg shrink-0">{icon}</span>
        )}
      </div>
      <p className="text-2xl font-bold text-foreground leading-none">{value}</p>
      {trendCfg && trendLabel && (
        <p className={`text-xs font-medium ${trendCfg.color}`}>
          {trendCfg.arrow} {trendLabel}
        </p>
      )}
    </div>
  );
};

export default StatCard;
