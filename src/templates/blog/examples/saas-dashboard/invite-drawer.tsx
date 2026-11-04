// src/templates/users/invite-drawer.tsx
import { useState } from "react";
import { Button, Drawer, Input, SelectDropdown } from "gwan-design-system";
import { ROLES, type Role, type User } from "./data";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function InviteDrawer({
  open,
  onClose,
  onInvite,
}: {
  open: boolean;
  onClose: () => void;
  onInvite: (user: User) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("Viewer");
  const [submitted, setSubmitted] = useState(false);

  const nameError = submitted && !name.trim();
  const emailError = submitted && !EMAIL.test(email);

  const submit = () => {
    setSubmitted(true);
    if (!name.trim() || !EMAIL.test(email)) return;
    onInvite({ id: crypto.randomUUID(), name: name.trim(), email, role, status: "Invited" });
    setName("");
    setEmail("");
    setRole("Viewer");
    setSubmitted(false);
  };

  return (
    <Drawer open={open} onClose={onClose} title="Invite user">
      <div className="p-4 flex flex-col gap-4">
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName((e.target as HTMLInputElement).value)}
          isError={nameError}
          errorMessage="Enter a name"
          required
        />
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          isError={emailError}
          errorMessage="Enter a valid email address"
          required
        />
        <SelectDropdown
          label="Role"
          options={ROLES.map((r) => ({ label: r }))}
          value={role}
          onChange={(value) => setRole(value as Role)}
        />
        <Button label="Send invite" onClick={submit} />
      </div>
    </Drawer>
  );
}
