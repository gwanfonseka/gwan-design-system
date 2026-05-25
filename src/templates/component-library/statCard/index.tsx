"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Input from "@/components/input";
import StatCard, { STAT_TREND } from "@/components/statCard";
import { ChartSVG, UsersSVG, MoneySVG, OrdersSVG } from "@/components/icons";

const trendOptions = [
  { value: "none", label: "None" },
  ...Object.values(STAT_TREND).map((v) => ({ value: v, label: v })),
];

const codeExample = `import { StatCard, STAT_TREND } from "gwan-design-system";
import { ChartSVG } from "gwan-design-system";

const Example = () => {
  return (
    <StatCard
      label="Total Revenue"           // required
      value="$48,295"                  // required, string or number
      trend={STAT_TREND.UP}           // optional — UP | DOWN | NEUTRAL
      trendLabel="12% vs last month"  // optional, shown next to trend arrow
      icon={<ChartSVG />}             // optional, icon slot top-right
      className=""                    // optional, extra wrapper class
    />
  );
};`;

const StatCardTemplate = () => {
  const [label, setLabel] = useState("Total Revenue");
  const [value, setValue] = useState("$48,295");
  const [trend, setTrend] = useState<string>("UP");
  const [trendLabel, setTrendLabel] = useState("12% vs last month");

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <StatCard
          label={label}
          value={value}
          trend={trend === "none" ? undefined : trend as STAT_TREND}
          trendLabel={trend !== "none" ? trendLabel : undefined}
          icon={<ChartSVG />}
          className="w-64"
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <Input label="Label" value={label} onChange={(e) => setLabel((e.target as HTMLInputElement).value)} className="w-full sm:w-44" />
        <Input label="Value" value={value} onChange={(e) => setValue((e.target as HTMLInputElement).value)} className="w-full sm:w-44" />
        <SelectDropdown label="Trend" options={trendOptions} value={trend} onChange={setTrend} className="w-full sm:w-44" />
        <Input label="Trend label" value={trendLabel} onChange={(e) => setTrendLabel((e.target as HTMLInputElement).value)} className="w-full sm:w-44" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center py-4">
        <StatCard label="Total Revenue" value="$48,295" trend={STAT_TREND.UP} trendLabel="12% vs last month" icon={<ChartSVG />} className="w-64" />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default StatCardTemplate;
