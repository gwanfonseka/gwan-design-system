import { beforeEach, describe, expect, it, vi } from "vitest";

const send = vi.hoisted(() => vi.fn());

vi.mock("resend", () => ({
  Resend: class {
    emails = { send };
  },
}));

import { CONTACT_LIMITS } from "@/lib/contactValidation";
import { sendContactEmail } from "./sendContactEmail";

const NAME = "Ada Lovelace";
const EMAIL = "ada@example.com";
const MESSAGE = "I would like to ask about theming.";

beforeEach(() => {
  send.mockResolvedValue({ data: { id: "1" }, error: null });
  vi.spyOn(console, "log").mockImplementation(() => {});
});

describe("sendContactEmail", () => {
  it("sends the notification and the auto-reply for a valid message", async () => {
    await expect(sendContactEmail(` ${NAME} `, ` ${EMAIL} `, MESSAGE)).resolves.toEqual({ success: true });
    expect(send).toHaveBeenCalledTimes(2);
    expect(send.mock.calls[1][0].to).toBe(EMAIL);
    expect(send.mock.calls[0][0].subject).toBe(`New contact from ${NAME}`);
  });

  it("reports success but sends nothing when the honeypot is filled", async () => {
    await expect(sendContactEmail(NAME, EMAIL, MESSAGE, "https://spam.example")).resolves.toEqual({ success: true });
    expect(send).not.toHaveBeenCalled();
  });

  it.each([
    ["a name that is too long", "a".repeat(CONTACT_LIMITS.name + 1), EMAIL, MESSAGE],
    ["an email that is too long", NAME, `${"a".repeat(CONTACT_LIMITS.email)}@example.com`, MESSAGE],
    ["a message that is too long", NAME, EMAIL, "a".repeat(CONTACT_LIMITS.message + 1)],
    ["a message that is too short", NAME, EMAIL, "Hi"],
    ["an invalid email", NAME, "not-an-email", MESSAGE],
    ["a blank name", "   ", EMAIL, MESSAGE],
    ["a URL in the name", "Visit https://evil.example", EMAIL, MESSAGE],
    ["a bare domain in the name", "Win at evil.com now", EMAIL, MESSAGE],
    ["markup in the name", "<b>Ada</b>", EMAIL, MESSAGE],
    ["a line break in the name", "Ada\nBcc: victim@example.com", EMAIL, MESSAGE],
  ])("rejects %s without sending", async (_, name, email, message) => {
    const result = await sendContactEmail(name, email, message);
    expect(result.success).toBe(false);
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects arguments that aren't strings", async () => {
    const result = await sendContactEmail({} as unknown as string, EMAIL, MESSAGE);
    expect(result).toEqual({ success: false, error: "Invalid submission." });
    expect(send).not.toHaveBeenCalled();
  });

  it.each(["Mary-Jane O'Neil", "J. R. Smith", "José García", "李小龙"])("accepts the name %s", async (name) => {
    await expect(sendContactEmail(name, EMAIL, MESSAGE)).resolves.toEqual({ success: true });
  });
});
