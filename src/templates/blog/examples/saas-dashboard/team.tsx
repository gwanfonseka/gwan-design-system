// src/templates/users/team.tsx
import { AVATAR_SIZE, AvatarGroup, TOOLTIP_POSITION } from "gwan-design-system";
import type { User } from "./data";

export default function TeamRow({ users }: { users: User[] }) {
  return (
    <div className="flex items-center gap-3">
      <p className="text-xs text-muted-fg">Team</p>
      <AvatarGroup
        items={users.map(({ name, email }) => ({ name, email }))}
        max={4}
        size={AVATAR_SIZE.SM}
        overflowTooltipPosition={TOOLTIP_POSITION.TOP}
      />
    </div>
  );
}
