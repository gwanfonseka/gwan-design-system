// src/templates/users/role-filter.tsx
import { useState } from "react";
import { Button, BUTTON_SIZE, BUTTON_VARIANTS, Checkbox, FilterDropdown } from "gwan-design-system";
import { ROLES, type Role } from "./data";

/** The panel keeps a draft so nothing changes until Apply. */
const RolePanel = ({
  selected,
  onApply,
  close,
}: {
  selected: Role[];
  onApply: (roles: Role[]) => void;
  close: () => void;
}) => {
  const [draft, setDraft] = useState(selected);
  const toggle = (role: Role, on: boolean) =>
    setDraft((current) => (on ? [...current, role] : current.filter((r) => r !== role)));

  return (
    <div className="w-60 p-4 flex flex-col gap-3">
      <p className="text-sm font-semibold text-foreground">Role</p>
      {ROLES.map((role) => (
        <Checkbox
          key={role}
          label={role}
          checked={draft.includes(role)}
          onChange={(on) => toggle(role, on)}
        />
      ))}
      <div className="flex justify-end gap-2 pt-2">
        <Button
          label="Clear"
          size={BUTTON_SIZE.SM}
          variant={BUTTON_VARIANTS.TERTIARY}
          onClick={() => {
            onApply([]);
            close();
          }}
        />
        <Button
          label="Apply"
          size={BUTTON_SIZE.SM}
          onClick={() => {
            onApply(draft);
            close();
          }}
        />
      </div>
    </div>
  );
};

export default function RoleFilter({
  selected,
  onChange,
}: {
  selected: Role[];
  onChange: (roles: Role[]) => void;
}) {
  return (
    <FilterDropdown>
      {(close) => <RolePanel selected={selected} onApply={onChange} close={close} />}
    </FilterDropdown>
  );
}
