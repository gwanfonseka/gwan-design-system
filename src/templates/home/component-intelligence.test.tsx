import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ComponentIntelligence from "./component-intelligence";

describe("home showcase", () => {
  it("switches the overview figures with the tabs", async () => {
    const user = userEvent.setup();
    render(<ComponentIntelligence />);
    expect(screen.getByText("$12,480")).toBeInTheDocument();
    await user.click(screen.getByRole("tab", { name: "This month" }));
    expect(screen.getByText("$48,210")).toBeInTheDocument();
  });

  it("drives the progress bar and badge from the slider", () => {
    render(<ComponentIntelligence />);
    expect(screen.getByText("Staged")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("slider", { name: "Rollout" }), { target: { value: "100" } });
    expect(screen.getByText("Live")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "100");
  });

  it("confirms saved preferences with a snackbar", async () => {
    const user = userEvent.setup();
    render(<ComponentIntelligence />);
    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(screen.getByText("Preferences saved")).toBeInTheDocument();
  });

  it("validates the email field after it loses focus", async () => {
    const user = userEvent.setup();
    render(<ComponentIntelligence />);
    const field = screen.getByRole("textbox", { name: /Work email/ });
    await user.type(field, "not-an-email");
    await user.tab();
    expect(field).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("button", { name: "Request invite" })).toBeDisabled();
  });

  it("opens the command palette", async () => {
    const user = userEvent.setup();
    render(<ComponentIntelligence />);
    await user.click(screen.getByRole("button", { name: "Search commands" }));
    expect(screen.getByText("Invite teammate")).toBeInTheDocument();
  });

  it("links each tile's components to their playground", () => {
    render(<ComponentIntelligence />);
    expect(screen.getByRole("link", { name: "Command Palette" })).toHaveAttribute(
      "href",
      "/components-library?tab=Command%20Palette",
    );
  });
});
