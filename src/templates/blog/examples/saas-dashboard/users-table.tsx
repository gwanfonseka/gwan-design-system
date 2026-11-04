// src/templates/users/users-table.tsx
import {
  Avatar,
  AVATAR_SIZE,
  AVATAR_VARIANT,
  Badge,
  BADGE_TYPE,
  EclipseHorizontalSVG,
  DROPDOWN_PLACEMENT,
  DropdownMenu,
  Table,
  TrashSVG,
  type ITableColumn,
} from "gwan-design-system";
import type { Status, User } from "./data";

const statusBadge: Record<Status, BADGE_TYPE> = {
  Active: BADGE_TYPE.SUCCESS,
  Invited: BADGE_TYPE.INFO,
  Suspended: BADGE_TYPE.DANGER,
};

const columns = (onDelete: (user: User) => void): ITableColumn[] => [
  {
    header: "Name",
    render: (user: User) => (
      <div className="flex items-center gap-2">
        <Avatar
          name={user.name}
          email={user.email}
          variant={AVATAR_VARIANT.INITIALS_ONLY}
          size={AVATAR_SIZE.XS}
        />
        <span className="text-sm font-medium text-foreground">{user.name}</span>
      </div>
    ),
  },
  {
    header: "Email",
    render: (user: User) => <span className="text-sm text-muted-fg">{user.email}</span>,
  },
  {
    header: "Role",
    render: (user: User) => <span className="text-sm text-muted-fg">{user.role}</span>,
  },
  {
    header: "Status",
    render: (user: User) => <Badge type={statusBadge[user.status]} label={user.status} />,
  },
  {
    header: "",
    headerClassName: "w-12",
    render: (user: User) => (
      <DropdownMenu
        placement={DROPDOWN_PLACEMENT.BOTTOM_RIGHT}
        trigger={
          <span aria-label={`Actions for ${user.name}`} className="size-5 block text-muted-fg">
            <EclipseHorizontalSVG />
          </span>
        }
        items={[
          {
            label: "Remove user",
            icon: <TrashSVG />,
            destructive: true,
            onClick: () => onDelete(user),
          },
        ]}
      />
    ),
  },
];

export default function UsersTable({
  users,
  onDelete,
}: {
  users: User[];
  onDelete: (user: User) => void;
}) {
  return <Table columns={columns(onDelete)} data={users} bordered />;
}
