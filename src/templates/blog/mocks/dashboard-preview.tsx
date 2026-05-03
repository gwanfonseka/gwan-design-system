"use client";

import MenuBar, { MENU_BAR_VARIANT } from "@/components/menuBar";
import StatCard from "@/components/statCard";
import { STAT_TREND } from "@/components/statCard";
import CircularProgress from "@/components/circularProgress";
import { CIRCULAR_PROGRESS_SIZE, CIRCULAR_PROGRESS_TYPE } from "@/components/circularProgress";
import AvatarGroup from "@/components/avatarGroup";
import Table from "@/components/table";
import type { ITableColumn } from "@/components/table";
import Badge from "@/components/badge";
import { BADGE_TYPE } from "@/components/badge";
import Avatar from "@/components/avatar";
import { AVATAR_VARIANT, AVATAR_SIZE, AVATAR_LABEL_POSITION } from "@/components/avatar";
import {
  DashboardSVG,
  UsersSVG,
  OrdersSVG,
  SettingsSVG,
  MoneySVG,
} from "@/components/icons";
import { TOOLTIP_POSITION } from "@/components/tooltip";

const menuItems = [
  { title: "Dashboard", icon: <DashboardSVG />, route: "", isActive: false, isDivider: false },
  { title: "Users",     icon: <UsersSVG />,     route: "", isActive: true,  isDivider: false },
  { title: "Orders",    icon: <OrdersSVG />,    route: "", isActive: false, isDivider: false },
  { title: "Settings",  icon: <SettingsSVG />,  route: "", isActive: false, isDivider: false },
];

const teamMembers = [
  { name: "Alice Martin", email: "alice@company.com" },
  { name: "Bob Chen",     email: "bob@company.com"   },
  { name: "Clara Singh",  email: "clara@company.com" },
  { name: "David Park",   email: "david@company.com" },
  { name: "Eva Torres",   email: "eva@company.com"   },
  { name: "Frank Liu",    email: "frank@company.com" },
];

const users = [
  { name: "Alice Martin",  email: "alice@company.com",  role: "Admin",  status: "Active"    },
  { name: "Bob Chen",      email: "bob@company.com",    role: "Viewer", status: "Active"    },
  { name: "Clara Singh",   email: "clara@company.com",  role: "Editor", status: "Suspended" },
  { name: "David Park",    email: "david@company.com",  role: "Viewer", status: "Active"    },
];

const statusBadge: Record<string, BADGE_TYPE> = {
  Active:    BADGE_TYPE.SUCCESS,
  Suspended: BADGE_TYPE.DANGER,
};

type User = { name: string; email: string; role: string; status: string };

const columns: ITableColumn[] = [
  {
    header: "Name",
    render: (row: User) => (
      <div className="flex items-center gap-2">
        <Avatar name={row.name} email={row.email} variant={AVATAR_VARIANT.INITIALS_ONLY} size={AVATAR_SIZE.XS} />
        <span className="text-sm font-medium text-foreground">{row.name}</span>
      </div>
    ),
  },
  {
    header: "Email",
    render: (row: User) => <span className="text-sm text-muted-fg">{row.email}</span>,
  },
  {
    header: "Role",
    render: (row: User) => <span className="text-sm text-muted-fg">{row.role}</span>,
  },
  {
    header: "Status",
    render: (row: User) => <Badge type={statusBadge[row.status]} label={row.status} />,
  },
];

const DashboardPreview = () => (
  <div className="rounded-xl border border-border overflow-hidden shadow-lg not-prose my-8">
    {/* MenuBar */}
    <MenuBar
      menuItems={menuItems}
      logoShort="/images/logo_short.png"
      logoLong="/images/logo.png"
      variant={MENU_BAR_VARIANT.DEFAULT}
      isAvatarVisible
      avatarName="John Doe"
      avatarEmail="john@company.com"
      avatarImage="/images/profile_picture.png"
      avatarType={AVATAR_VARIANT.IMAGE_WITH_FULL}
      avatarSize={AVATAR_SIZE.SM}
      avatarLabelPosition={AVATAR_LABEL_POSITION.RIGHT}
    />

    <div className="bg-background px-5 py-6 flex flex-col gap-5">
      {/* Page heading */}
      <div>
        <h2 className="text-lg font-black text-foreground">Users</h2>
        <p className="text-xs text-muted-fg mt-0.5">Manage your team and permissions.</p>
      </div>

      {/* Stat cards row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard label="Total Users"  value="9,430"   trend={STAT_TREND.UP}   trendLabel="8% vs last month"  icon={<UsersSVG />}  />
        <StatCard label="Revenue"      value="$48,295" trend={STAT_TREND.UP}   trendLabel="12% vs last month" icon={<MoneySVG />}  />
        <StatCard label="New Orders"   value="1,284"   trend={STAT_TREND.DOWN} trendLabel="3% vs last month"  icon={<OrdersSVG />} />
        <div className="bg-surface border border-border rounded-xl p-4 flex flex-col gap-2">
          <p className="text-xs text-muted-fg">Plan usage</p>
          <div className="flex items-center gap-3">
            <CircularProgress value={78} size={CIRCULAR_PROGRESS_SIZE.SM} type={CIRCULAR_PROGRESS_TYPE.SUCCESS} />
            <div>
              <p className="text-sm font-bold text-foreground">78%</p>
              <p className="text-[10px] text-muted-fg">7,800 / 10,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team row */}
      <div className="flex items-center gap-3">
        <p className="text-xs text-muted-fg">Team</p>
        <AvatarGroup
          items={teamMembers}
          max={4}
          size={AVATAR_SIZE.SM}
          overflowTooltipPosition={TOOLTIP_POSITION.TOP}
        />
      </div>

      {/* Users table */}
      <Table columns={columns} data={users} bordered />
    </div>
  </div>
);

export default DashboardPreview;
