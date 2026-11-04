// src/templates/users/data.ts
export type Role = "Admin" | "Editor" | "Viewer";
export type Status = "Active" | "Invited" | "Suspended";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: Status;
};

export const ROLES: Role[] = ["Admin", "Editor", "Viewer"];

export const USERS: User[] = [
  { id: "1", name: "Alice Martin", email: "alice@company.com", role: "Admin", status: "Active" },
  { id: "2", name: "Bob Chen", email: "bob@company.com", role: "Viewer", status: "Active" },
  { id: "3", name: "Clara Singh", email: "clara@company.com", role: "Editor", status: "Suspended" },
  { id: "4", name: "David Park", email: "david@company.com", role: "Viewer", status: "Active" },
  { id: "5", name: "Eva Torres", email: "eva@company.com", role: "Editor", status: "Active" },
  { id: "6", name: "Frank Liu", email: "frank@company.com", role: "Viewer", status: "Invited" },
  { id: "7", name: "Grace Kim", email: "grace@company.com", role: "Admin", status: "Active" },
  { id: "8", name: "Hugo Silva", email: "hugo@company.com", role: "Viewer", status: "Active" },
];
