"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import AvatarGroup from "@/components/avatarGroup";
import { AVATAR_SIZE } from "@/components/avatar";
import Badge, { BADGE_TYPE } from "@/components/badge";
import Button, { BUTTON_SIZE, BUTTON_VARIANTS } from "@/components/button";
import Checkbox from "@/components/checkbox";
import CircularProgress, { CIRCULAR_PROGRESS_TYPE } from "@/components/circularProgress";
import CommandPalette, { type ICommandItem } from "@/components/commandPalette";
import DropdownMenu, { DROPDOWN_PLACEMENT } from "@/components/dropdownMenu";
import Input from "@/components/input";
import ProgressBar, { PROGRESS_BAR_TYPE } from "@/components/progressBar";
import Slider from "@/components/slider";
import Snackbar, { SNACK_BAR_TYPE } from "@/components/snackBar";
import StatCard, { STAT_TREND } from "@/components/statCard";
import Switch from "@/components/switch";
import Tabs, { TABS_VARIANT } from "@/components/tabs";
import {
  AddSVG,
  ChartSVG,
  CheckSVG,
  ChevDownSVG,
  CopySVG,
  CrossSVG,
  DashboardSVG,
  EditSVG,
  MoneySVG,
  SearchSVG,
  SettingsSVG,
  UsersSVG,
} from "@/components/icons";
import counts from "@/lib/library-counts.json";

/** A bento tile: a small working scenario, plus links to the playgrounds of what it's built from. */
const Tile = ({
  title,
  uses,
  className = "",
  children,
}: {
  title: string;
  /** Playground tab names, as in the component library menu. */
  uses: string[];
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={`bg-surface border border-border rounded-2xl p-5 flex flex-col gap-5 transition-colors duration-200 hover:border-primary-default/40 ${className}`}
  >
    <p className="text-sm font-semibold text-foreground">{title}</p>
    <div className="flex-1 flex flex-col justify-center gap-4">{children}</div>
    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-subtle">
      {uses.map((name) => (
        <Link
          key={name}
          href={`/components-library?tab=${encodeURIComponent(name)}`}
          className="text-[10px] font-semibold tracking-wide text-muted-fg px-2 py-0.5 rounded-full border border-border hover:text-foreground hover:border-muted-fg transition-colors"
        >
          {name}
        </Link>
      ))}
    </div>
  </div>
);

const TEAM = [
  { name: "Alex Chon", email: "alex@acme.dev" },
  { name: "Sam Rivera", email: "sam@acme.dev" },
  { name: "Priya Nair", email: "priya@acme.dev" },
  { name: "Leo Park", email: "leo@acme.dev" },
  { name: "Mia Costa", email: "mia@acme.dev" },
  { name: "Noah Kim", email: "noah@acme.dev" },
];

const OverviewTile = () => {
  const [tab, setTab] = useState("week");
  const figures: Record<string, { revenue: string; trend: string; users: string; goal: number }> = {
    week: { revenue: "$12,480", trend: "+8% vs last week", users: "1,204", goal: 64 },
    month: { revenue: "$48,210", trend: "+12% vs last month", users: "4,870", goal: 82 },
  };
  const f = figures[tab];

  const panel = (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-3 items-stretch pt-4">
      <StatCard label="Revenue" value={f.revenue} trend={STAT_TREND.UP} trendLabel={f.trend} icon={<MoneySVG />} />
      <StatCard label="Active users" value={f.users} trend={STAT_TREND.NEUTRAL} trendLabel="Steady" icon={<UsersSVG />} />
      <div className="flex flex-col items-center justify-center gap-1 px-4">
        <CircularProgress value={f.goal} type={CIRCULAR_PROGRESS_TYPE.SUCCESS} />
        <span className="text-[11px] text-muted-fg">of target</span>
      </div>
    </div>
  );

  return (
    <Tile title="Revenue overview" uses={["Tabs", "Stat Card", "Circular Progress"]} className="md:col-span-4">
      <Tabs
        variant={TABS_VARIANT.PILL}
        activeKey={tab}
        onChange={setTab}
        items={[
          { key: "week", label: "This week", content: panel },
          { key: "month", label: "This month", content: panel },
        ]}
      />
    </Tile>
  );
};

const RolloutTile = () => {
  const [rollout, setRollout] = useState(25);
  const live = rollout === 100;
  return (
    <Tile title="Release rollout" uses={["Slider", "Progress Bar", "Badge"]} className="md:col-span-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-fg">v2.4.0</span>
        <Badge type={live ? BADGE_TYPE.SUCCESS : BADGE_TYPE.WARNING} label={live ? "Live" : "Staged"} dot />
      </div>
      <ProgressBar
        value={rollout}
        label="Users on the new version"
        showValue
        type={live ? PROGRESS_BAR_TYPE.SUCCESS : PROGRESS_BAR_TYPE.DEFAULT}
      />
      <Slider
        label="Rollout"
        value={rollout}
        step={5}
        onChange={(v) => setRollout(Array.isArray(v) ? v[0] : v)}
      />
    </Tile>
  );
};

const PreferencesTile = () => {
  const [email, setEmail] = useState(true);
  const [digest, setDigest] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!saved) return;
    const timer = setTimeout(() => setSaved(false), 2500);
    return () => clearTimeout(timer);
  }, [saved]);

  return (
    <Tile title="Notification preferences" uses={["Switch", "Checkbox", "Buttons", "Snackbar"]} className="md:col-span-2">
      <Switch checked={email} onChange={setEmail} label="Email me about mentions" />
      <Checkbox label="Weekly digest" checked={digest} onChange={setDigest} />
      {saved ? (
        <Snackbar type={SNACK_BAR_TYPE.SUCCESS} message="Preferences saved" icon={<CheckSVG />} />
      ) : (
        <Button label="Save" size={BUTTON_SIZE.SM} onClick={() => setSaved(true)} className="self-start" />
      )}
    </Tile>
  );
};

const SignUpTile = () => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const invalid = touched && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  return (
    <Tile title="Early access" uses={["Input", "Buttons"]} className="md:col-span-2">
      <Input
        label="Work email"
        type="email"
        value={value}
        placeholder="you@company.com"
        onChange={(e) => setValue((e.target as HTMLInputElement).value)}
        onBlur={() => setTouched(true)}
        onClear={() => setValue("")}
        isError={invalid}
        errorMessage="Enter a valid email address"
      />
      <Button
        label="Request invite"
        size={BUTTON_SIZE.SM}
        disabled={!value || invalid}
        onClick={() => setTouched(true)}
        className="self-start"
      />
    </Tile>
  );
};

const TeamTile = () => {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const commands: ICommandItem[] = [
    { id: "invite", label: "Invite teammate", icon: <AddSVG />, group: "Team", onSelect: () => {} },
    { id: "dash", label: "Go to dashboard", icon: <DashboardSVG />, group: "Navigate", onSelect: () => {} },
    { id: "reports", label: "Open reports", icon: <ChartSVG />, group: "Navigate", onSelect: () => {} },
    { id: "settings", label: "Settings", icon: <SettingsSVG />, group: "Navigate", onSelect: () => {} },
  ];

  return (
    <Tile title="Team" uses={["Avatar Group", "Dropdown Menu", "Command Palette"]} className="md:col-span-2">
      <div className="flex items-center justify-between gap-3">
        <AvatarGroup items={TEAM} max={4} size={AVATAR_SIZE.SM} />
        <DropdownMenu
          placement={DROPDOWN_PLACEMENT.BOTTOM_RIGHT}
          trigger={
            <Button
              label="Manage"
              size={BUTTON_SIZE.SM}
              variant={BUTTON_VARIANTS.SECONDARY}
              rightIcon={<ChevDownSVG />}
              onClick={() => {}}
            />
          }
          items={[
            { label: "Edit roles", icon: <EditSVG />, onClick: () => {} },
            { label: "Copy invite link", icon: <CopySVG />, onClick: () => {} },
            { isDivider: true },
            { label: "Remove member", icon: <CrossSVG />, onClick: () => {}, destructive: true },
          ]}
        />
      </div>
      <Button
        label="Search commands"
        size={BUTTON_SIZE.SM}
        variant={BUTTON_VARIANTS.TERTIARY}
        leftIcon={<SearchSVG />}
        onClick={() => setPaletteOpen(true)}
        className="self-start"
      />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} items={commands} />
    </Tile>
  );
};

const ComponentIntelligence = () => (
  <section className="bg-surface-raised py-16 md:py-24 px-5 md:px-10 relative overflow-hidden">
    {/* Decorative angled background shape */}
    <div className="hidden lg:block absolute -right-16 top-0 bottom-0 w-[30%] bg-surface-overlay/60 [clip-path:polygon(12%_0%,100%_0%,100%_100%,0%_100%)]" />

    <div className="max-w-6xl mx-auto relative flex flex-col gap-12 md:gap-16">
      <div className="flex flex-col gap-5">
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-black uppercase leading-tight tracking-tight text-foreground">
          Components,
          <br />
          Wired Together
        </h2>
        <p className="text-sm text-muted-fg leading-relaxed max-w-md">
          Every tile below is running GWAN components with real state, not screenshots. Try them, then open any
          component in its playground to change its props and copy the code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <OverviewTile />
        <RolloutTile />
        <PreferencesTile />
        <SignUpTile />
        <TeamTile />
      </div>

      <Link
        href="/components-library"
        className="self-start text-xs font-bold tracking-[0.18em] uppercase text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
      >
        Explore all {counts.components} components
      </Link>
    </div>
  </section>
);

export default ComponentIntelligence;
