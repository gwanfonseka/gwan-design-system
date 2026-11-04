// src/templates/users/delete-user-modal.tsx
import { Button, BUTTON_VARIANTS, Modal } from "gwan-design-system";
import type { User } from "./data";

export default function DeleteUserModal({
  user,
  onCancel,
  onConfirm,
}: {
  user: User;
  onCancel: () => void;
  onConfirm: (user: User) => void;
}) {
  return (
    <Modal title="Remove user?" onClear={onCancel}>
      <div className="p-4 flex flex-col gap-6">
        <p className="text-sm text-muted-fg">
          {user.name} will lose access to the workspace. You can invite them again later.
        </p>
        <div className="flex justify-end gap-2">
          <Button label="Cancel" variant={BUTTON_VARIANTS.TERTIARY} onClick={onCancel} />
          <Button label="Remove" onClick={() => onConfirm(user)} />
        </div>
      </div>
    </Modal>
  );
}
