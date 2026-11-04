// src/templates/users/users-content.tsx
import { useState } from "react";
import {
  AddSVG,
  Button,
  Pagination,
  SearchInput,
  SNACK_BAR_TYPE,
} from "gwan-design-system";
import { USERS, type Role, type User } from "./data";
import DeleteUserModal from "./delete-user-modal";
import InviteDrawer from "./invite-drawer";
import Metrics from "./metrics";
import RoleFilter from "./role-filter";
import TeamRow from "./team";
import UsersTable from "./users-table";

const PAGE_SIZES = [
  { value: "5", label: "5" },
  { value: "10", label: "10" },
];

export default function UsersContent({
  onAction,
}: {
  onAction: (message: string, type: SNACK_BAR_TYPE) => void;
}) {
  const [users, setUsers] = useState<User[]>(USERS);
  const [query, setQuery] = useState("");
  const [roles, setRoles] = useState<Role[]>([]);
  const [paging, setPaging] = useState({ page: 1, size: 5 });
  const [toDelete, setToDelete] = useState<User | null>(null);
  const [inviting, setInviting] = useState(false);

  const q = query.trim().toLowerCase();
  const filtered = users.filter(
    (u) =>
      (!q || `${u.name} ${u.email}`.toLowerCase().includes(q)) &&
      (roles.length === 0 || roles.includes(u.role)),
  );
  const pages = Math.max(1, Math.ceil(filtered.length / paging.size));
  const page = Math.min(paging.page, pages);
  const visible = filtered.slice((page - 1) * paging.size, page * paging.size);

  // Any change to the search or filter starts again from the first page.
  const search = (value: string) => {
    setQuery(value);
    setPaging((p) => ({ ...p, page: 1 }));
  };
  const filterRoles = (next: Role[]) => {
    setRoles(next);
    setPaging((p) => ({ ...p, page: 1 }));
  };

  const remove = (user: User) => {
    setUsers((all) => all.filter((u) => u.id !== user.id));
    setToDelete(null);
    onAction(`${user.name} was removed`, SNACK_BAR_TYPE.SUCCESS);
  };

  const invite = (user: User) => {
    setUsers((all) => [user, ...all]);
    setInviting(false);
    onAction(`Invitation sent to ${user.email}`, SNACK_BAR_TYPE.SUCCESS);
  };

  return (
    <div className="flex flex-col gap-6">
      <Metrics />
      <TeamRow users={users} />

      <div className="flex flex-wrap items-center gap-3">
        <SearchInput value={query} onChange={search} placeholder="Search name or email" className="w-64" />
        <RoleFilter selected={roles} onChange={filterRoles} />
        <Button
          label="Invite user"
          leftIcon={<AddSVG />}
          onClick={() => setInviting(true)}
          className="ml-auto"
        />
      </div>

      {visible.length > 0 ? (
        <UsersTable users={visible} onDelete={setToDelete} />
      ) : (
        <p className="py-10 text-center text-sm text-muted-fg">No users match your search.</p>
      )}

      <Pagination
        total={filtered.length}
        page={page}
        size={paging.size}
        options={PAGE_SIZES}
        onChange={({ page, size }) => setPaging({ page, size })}
      />

      {toDelete && (
        <DeleteUserModal user={toDelete} onCancel={() => setToDelete(null)} onConfirm={remove} />
      )}
      <InviteDrawer open={inviting} onClose={() => setInviting(false)} onInvite={invite} />
    </div>
  );
}
