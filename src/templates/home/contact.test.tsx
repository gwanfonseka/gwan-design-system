import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { setGaEnv } from "@/test/ga-env";

const sendContactEmail = vi.hoisted(() => vi.fn());

vi.mock("@/app/actions/sendContactEmail", () => ({
  sendContactEmail,
}));

import Contact from "./contact";

async function fillForm() {
  const user = userEvent.setup();
  await user.type(screen.getByPlaceholderText("Full Name"), "Ada Lovelace");
  await user.type(screen.getByPlaceholderText("Email Address"), "ada@example.com");
  await user.type(
    screen.getByPlaceholderText("Describe your technical requirements..."),
    "I would like to ask about theming.",
  );
  return user;
}

describe("Contact analytics", () => {
  beforeEach(() => {
    setGaEnv("G-PROD123");
    window.gtag = vi.fn();
    sendContactEmail.mockReset();
  });

  it("sends contact_submit after a successful message", async () => {
    sendContactEmail.mockResolvedValue({ success: true });
    render(<Contact />);
    const user = await fillForm();
    await user.click(screen.getByRole("button", { name: "Transmit Data" }));
    expect(await screen.findByText("Message received.")).toBeInTheDocument();
    expect(window.gtag).toHaveBeenCalledWith("event", "contact_submit");
  });

  it("does not send contact_submit for a honeypot hit", async () => {
    sendContactEmail.mockResolvedValue({ success: true });
    render(<Contact />);
    const user = await fillForm();
    await user.type(screen.getByLabelText("Website"), "https://spam.example");
    await user.click(screen.getByRole("button", { name: "Transmit Data" }));
    expect(await screen.findByText("Message received.")).toBeInTheDocument();
    expect(window.gtag).not.toHaveBeenCalled();
  });

  it("does not send contact_submit when the send fails or the form is invalid", async () => {
    sendContactEmail.mockResolvedValue({ success: false, error: "Mailbox unavailable." });
    const { unmount } = render(<Contact />);
    const user = await fillForm();
    await user.click(screen.getByRole("button", { name: "Transmit Data" }));
    expect(await screen.findByText("Mailbox unavailable.")).toBeInTheDocument();
    expect(window.gtag).not.toHaveBeenCalled();
    unmount();

    render(<Contact />);
    await userEvent.click(screen.getByRole("button", { name: "Transmit Data" }));
    expect(sendContactEmail).toHaveBeenCalledTimes(1);
    expect(window.gtag).not.toHaveBeenCalled();
  });

  it("does nothing when analytics is off", async () => {
    setGaEnv(undefined);
    sendContactEmail.mockResolvedValue({ success: true });
    render(<Contact />);
    const user = await fillForm();
    await user.click(screen.getByRole("button", { name: "Transmit Data" }));
    expect(await screen.findByText("Message received.")).toBeInTheDocument();
    expect(window.gtag).not.toHaveBeenCalled();
  });
});
