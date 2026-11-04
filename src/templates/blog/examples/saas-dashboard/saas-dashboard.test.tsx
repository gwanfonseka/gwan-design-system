import fs from "node:fs";
import path from "node:path";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import UsersShell from "./users-shell";

const table = () => screen.getByRole("table");
const rows = () => within(table()).getAllByRole("row").slice(1);
/** The email cell of a row; avatars elsewhere repeat the email in tooltips. */
const emailCell = (email: string) => within(table()).queryByText(email, { selector: "span" });
const pageLabel = () => screen.getByText(/ of \d+ pages/).textContent;

describe("SaaS dashboard example", () => {
  it("shows the first page of users", () => {
    render(<UsersShell />);
    expect(rows()).toHaveLength(5);
    expect(pageLabel()).toBe("1 of 2 pages");
  });

  it("pages through the users", async () => {
    const user = userEvent.setup();
    render(<UsersShell />);
    const pager = screen.getByText(/ of \d+ pages/).parentElement!;
    const [, next] = within(pager).getAllByRole("button");
    await user.click(next);
    expect(pageLabel()).toBe("2 of 2 pages");
    expect(rows()).toHaveLength(3);
  });

  it("searches by name or email", async () => {
    const user = userEvent.setup();
    render(<UsersShell />);
    await user.type(screen.getByPlaceholderText("Search name or email"), "grace");
    expect(rows()).toHaveLength(1);
    expect(emailCell("grace@company.com")).toBeInTheDocument();
  });

  it("filters by role once the panel is applied", async () => {
    const user = userEvent.setup();
    render(<UsersShell />);
    await user.click(screen.getByText("Filter"));
    await user.click(screen.getByRole("checkbox", { name: "Admin" }));
    expect(rows()).toHaveLength(5);
    await user.click(screen.getByRole("button", { name: "Apply" }));
    expect(rows()).toHaveLength(2);
  });

  it("removes a user after confirming, and says so", async () => {
    const user = userEvent.setup();
    render(<UsersShell />);
    await user.click(screen.getByLabelText("Actions for Alice Martin"));
    await user.click(screen.getByText("Remove user"));
    const dialog = screen.getByRole("dialog", { name: "Remove user?" });
    await user.click(within(dialog).getByRole("button", { name: "Remove" }));
    expect(emailCell("alice@company.com")).not.toBeInTheDocument();
    expect(screen.getByText("Alice Martin was removed")).toBeInTheDocument();
  });

  it("keeps the user when the confirmation is cancelled", async () => {
    const user = userEvent.setup();
    render(<UsersShell />);
    await user.click(screen.getByLabelText("Actions for Alice Martin"));
    await user.click(screen.getByText("Remove user"));
    await user.click(screen.getByRole("button", { name: "Cancel" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(emailCell("alice@company.com")).toBeInTheDocument();
  });

  it("validates the invite form, then adds the invited user", async () => {
    const user = userEvent.setup();
    render(<UsersShell />);
    await user.click(screen.getByRole("button", { name: "Invite user" }));
    await user.click(screen.getByRole("button", { name: "Send invite" }));
    expect(screen.getByText("Enter a name")).toBeInTheDocument();
    expect(screen.getByText("Enter a valid email address")).toBeInTheDocument();

    await user.type(screen.getByRole("textbox", { name: /^Name/ }), "Ines Ford");
    await user.type(screen.getByRole("textbox", { name: /^Email/ }), "ines@company.com");
    await user.click(screen.getByRole("button", { name: "Send invite" }));

    await waitFor(() => expect(screen.getByText("Invitation sent to ines@company.com")).toBeInTheDocument());
    expect(emailCell("ines@company.com")).toBeInTheDocument();
  });
});

describe("SaaS dashboard post", () => {
  const dir = path.join(process.cwd(), "src/templates/blog/examples/saas-dashboard");
  const post = fs.readFileSync(path.join(process.cwd(), "content/blog/saas-dashboard-weekend-build.mdx"), "utf8");
  const blocks = [...post.matchAll(/```tsx\n([\s\S]*?)\n```/g)].map((m) => m[1]);
  const files = fs.readdirSync(dir).filter((f) => /\.tsx?$/.test(f) && !f.includes(".test."));

  it.each(files)("shows %s exactly as it is in the repo", (file) => {
    const source = fs.readFileSync(path.join(dir, file), "utf8").trimEnd();
    expect(blocks).toContain(source);
  });
});
