function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function adminNotificationHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New Contact — GWAN.DEV</title>
</head>
<body style="margin:0;padding:0;background:#f8f9f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9f5;padding:48px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #c4cdb8;border-radius:8px;overflow:hidden;max-width:560px;">

          <!-- Header -->
          <tr>
            <td style="background:#435240;padding:24px 32px;">
              <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;color:#adc09e;">GWAN.DEV</p>
              <p style="margin:8px 0 0;font-size:20px;font-weight:800;color:#f4f7f1;letter-spacing:-0.01em;">New Contact Message</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">

              <!-- Name -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid #eef2e8;">
                <tr>
                  <td>
                    <p style="margin:0 0 5px;font-size:9px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#60705a;">Identity</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#1c2218;">${escapeHtml(name)}</p>
                  </td>
                </tr>
              </table>

              <!-- Email -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid #eef2e8;">
                <tr>
                  <td>
                    <p style="margin:0 0 5px;font-size:9px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#60705a;">Channel</p>
                    <a href="mailto:${escapeHtml(email)}" style="font-size:14px;color:#0f766e;text-decoration:none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 10px;font-size:9px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#60705a;">Subject Matter</p>
                    <p style="margin:0;font-size:13px;color:#1c2218;line-height:1.7;white-space:pre-wrap;background:#f8f9f5;border-left:3px solid #adc09e;padding:14px 16px;border-radius:0 4px 4px 0;">${escapeHtml(message)}</p>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td style="background:#435240;border-radius:4px;">
                    <a href="mailto:${escapeHtml(email)}?subject=Re: Your GWAN.DEV enquiry" style="display:inline-block;padding:10px 22px;font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#f4f7f1;text-decoration:none;">
                      Reply to ${escapeHtml(name)} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:14px 32px;background:#f4f7f1;border-top:1px solid #eef2e8;">
              <p style="margin:0;font-size:10px;color:#9ea593;">Sent via GWAN.DEV contact form</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
