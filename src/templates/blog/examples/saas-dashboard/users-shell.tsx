// src/templates/users/users-shell.tsx
"use client";

import { useEffect, useState } from "react";
import {
  AVATAR_SIZE,
  AVATAR_VARIANT,
  CheckSVG,
  DashboardSVG,
  MENU_BAR_VARIANT,
  MenuBar,
  OrdersSVG,
  SettingsSVG,
  Snackbar,
  SNACK_BAR_TYPE,
  UsersSVG,
} from "gwan-design-system";
import UsersContent from "./users-content";

const menuItems = [
  { title: "Dashboard", icon: <DashboardSVG />, route: "/dashboard", isActive: false, isDivider: false },
  { title: "Users", icon: <UsersSVG />, route: "/dashboard/users", isActive: true, isDivider: false },
  { title: "Orders", icon: <OrdersSVG />, route: "/dashboard/orders", isActive: false, isDivider: false },
  { title: "Settings", icon: <SettingsSVG />, route: "/dashboard/settings", isActive: false, isDivider: false },
];

export default function UsersShell({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const [snack, setSnack] = useState<{ message: string; type: SNACK_BAR_TYPE } | null>(null);

  // Snackbar has no timer of its own, so the page hides it after four seconds.
  useEffect(() => {
    if (!snack) return;
    const id = window.setTimeout(() => setSnack(null), 4000);
    return () => window.clearTimeout(id);
  }, [snack]);

  return (
    <div className="bg-background">
      <MenuBar
        menuItems={menuItems}
        logoShort="/images/logo_short.png"
        logoLong="/images/logo.png"
        variant={MENU_BAR_VARIANT.DEFAULT}
        sticky
        isAvatarVisible
        avatarName="John Doe"
        avatarEmail="john@company.com"
        avatarImage="/images/profile_picture.png"
        avatarType={AVATAR_VARIANT.IMAGE_WITH_FULL}
        avatarSize={AVATAR_SIZE.SM}
        onNavigate={onNavigate}
      />

      <main className="px-6 py-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-lg font-black text-foreground">Users</h2>
          <p className="text-xs text-muted-fg mt-0.5">Manage your team and permissions.</p>
        </div>
        <UsersContent onAction={(message, type) => setSnack({ message, type })} />
      </main>

      {snack && (
        <div className="fixed bottom-6 right-6 z-50">
          <Snackbar message={snack.message} type={snack.type} icon={<CheckSVG />} />
        </div>
      )}
    </div>
  );
}
