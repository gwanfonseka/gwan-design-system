"use server";

import { Resend } from "resend";
import { adminNotificationHtml } from "@/email-templates/adminNotification";
import { autoReplyHtml } from "@/email-templates/autoReply";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.RESEND_FROM_EMAIL ?? "noreply@gwan.dev";
const ADMIN_EMAIL = "gwanfonseka@gmail.com";

export interface ContactResult {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(
  name: string,
  email: string,
  message: string,
): Promise<ContactResult> {
  if (!name.trim() || !email.trim() || !message.trim()) {
    return { success: false, error: "All fields are required." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Invalid email address." };
  }

  try {
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
      subject: "We received your message — GWAN.DEV",
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
