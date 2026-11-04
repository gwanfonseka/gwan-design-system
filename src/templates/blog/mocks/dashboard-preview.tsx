"use client";

import UsersShell from "../examples/saas-dashboard/users-shell";

/**
 * The finished dashboard from the SaaS post, rendered from the same files the post
 * shows. Navigation is left out so clicking the menu doesn't leave the article.
 */
const DashboardPreview = () => (
  <div className="not-prose my-8 rounded-2xl border border-border overflow-hidden">
    <UsersShell />
  </div>
);

export default DashboardPreview;
