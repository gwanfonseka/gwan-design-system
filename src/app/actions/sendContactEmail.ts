"use server";

import { Resend } from "resend";
import { adminNotificationHtml } from "@/email-templates/adminNotification";
import { autoReplyHtml } from "@/email-templates/autoReply";
import { validateContact } from "@/lib/contactValidation";

const FROM = process.env.RESEND_FROM_EMAIL ?? "noreply@gwan.dev";
const ADMIN_EMAIL = "gwanfonseka@gmail.com";

// The SDK throws when the key is missing. Creating the client at import time
// would crash every page that references this action, including the homepage.
function createResend(): Resend {
  return new Resend(process.env.RESEND_API_KEY);
}

export interface ContactResult {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(
  rawName: string,
  rawEmail: string,
  rawMessage: string,
  website = "",
): Promise<ContactResult> {
  // A Server Action is a public endpoint, so its arguments can be anything.
  if ([rawName, rawEmail, rawMessage, website].some((value) => typeof value !== "string")) {
    return { success: false, error: "Invalid submission." };
  }

  // Honeypot: people never see this field. Report success so a bot learns nothing.
  if (website) return { success: true };

  const errors = validateContact(rawName, rawEmail, rawMessage);
  const firstError = errors.name ?? errors.email ?? errors.message;
  if (firstError) return { success: false, error: firstError };

  const name = rawName.trim();
  const email = rawEmail.trim();
  const message = rawMessage.trim();

  try {
    const resend = createResend();
    const adminRes = await resend.emails.send({
      from: `GWAN Contact <${FROM}>`,
      to: ADMIN_EMAIL,
      subject: `New contact from ${name}`,
      html: adminNotificationHtml({ name, email, message }),
    });

    if (adminRes.error) {
      console.error("Admin notification error:", adminRes.error);
      return { success: false, error: "Failed to send. Please try again." };
    }

    const replyRes = await resend.emails.send({
      from: `GWAN.DEV <${FROM}>`,
      to: email,
      subject: "I received your message — GWAN.DEV",
      html: autoReplyHtml({ name }),
    });

    if (replyRes.error) {
      console.error("Auto-reply error:", JSON.stringify(replyRes.error));
    } else {
      console.log("Auto-reply sent, id:", replyRes.data?.id);
    }

    return { success: true };
  } catch (err) {
    console.error("sendContactEmail error:", err);
    return { success: false, error: "Failed to send. Please try again." };
  }
}
