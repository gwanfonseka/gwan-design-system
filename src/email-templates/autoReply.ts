function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function autoReplyHtml({ name }: { name: string }): string {
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>We received your message — GWAN.DEV</title>
</head>
<body style="margin:0;padding:0;background:#0e1510;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0e1510;padding:48px 20px;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;overflow:hidden;border-radius:12px;border:1px solid #2d392a;">

          <!-- Hero -->
          <tr>
            <td style="background:linear-gradient(150deg,#1c2c1a 0%,#2c3e28 40%,#0f4a43 100%);padding:56px 48px;text-align:center;">

              <!-- Logo mark -->
              <table align="center" cellpadding="0" cellspacing="0" style="margin:0 auto 28px;">
                <tr>
                  <td style="width:52px;height:52px;background:rgba(173,192,158,0.12);border:1px solid rgba(173,192,158,0.28);border-radius:10px;text-align:center;vertical-align:middle;">
                    <span style="font-size:22px;font-weight:900;color:#adc09e;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">G</span>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 4px;font-size:9px;font-weight:700;letter-spacing:0.35em;text-transform:uppercase;color:#60705a;">GWAN.DEV</p>
              <h1 style="margin:14px 0 0;font-size:32px;font-weight:900;color:#e2eada;letter-spacing:-0.025em;line-height:1.15;">Message<br/>Received.</h1>
              <p style="margin:16px auto 0;font-size:13px;color:#7e8c73;line-height:1.65;max-width:320px;">
                Thank you for reaching out. Our team will review your message and get back to you shortly.
              </p>

              <!-- Decorative rule -->
              <table align="center" cellpadding="0" cellspacing="0" style="margin:32px auto 0;">
                <tr>
                  <td style="width:32px;height:2px;background:#435240;border-radius:1px;"></td>
                  <td style="width:8px;"></td>
                  <td style="width:8px;height:8px;background:#2dd4bf;border-radius:50%;"></td>
                  <td style="width:8px;"></td>
                  <td style="width:32px;height:2px;background:#435240;border-radius:1px;"></td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="background:#131a10;padding:40px 48px 0;">
              <p style="margin:0 0 6px;font-size:9px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#3c4d38;">Hello,</p>
              <p style="margin:0 0 20px;font-size:22px;font-weight:800;color:#e2eada;letter-spacing:-0.01em;">${escapeHtml(name)}</p>
              <p style="margin:0;font-size:13px;color:#7e8c73;line-height:1.75;">
                We've successfully received your enquiry and added it to our review queue.
                Our engineering team typically responds within <span style="color:#adc09e;font-weight:600;">24–48 hours</span> on working days.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="background:#131a10;padding:32px 48px 0;">
              <div style="border-top:1px solid #1e2c1c;"></div>
            </td>
          </tr>

          <!-- What to expect -->
          <tr>
            <td style="background:#131a10;padding:28px 48px 0;">
              <p style="margin:0 0 20px;font-size:9px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#3c4d38;">What to expect</p>
              <table width="100%" cellpadding="0" cellspacing="0">

                <!-- Step 1 -->
                <tr>
                  <td style="padding-bottom:16px;vertical-align:top;" width="36">
                    <div style="width:28px;height:28px;background:#1c2c1a;border:1px solid #2d392a;border-radius:6px;text-align:center;line-height:28px;font-size:12px;color:#adc09e;font-weight:700;">1</div>
                  </td>
                  <td style="padding-bottom:16px;padding-left:14px;vertical-align:top;">
                    <p style="margin:0 0 3px;font-size:12px;font-weight:700;color:#c8d5be;">Review</p>
                    <p style="margin:0;font-size:12px;color:#60705a;line-height:1.55;">Your message is reviewed by our engineering team.</p>
                  </td>
                </tr>

                <!-- Step 2 -->
                <tr>
                  <td style="padding-bottom:16px;vertical-align:top;" width="36">
                    <div style="width:28px;height:28px;background:#1c2c1a;border:1px solid #2d392a;border-radius:6px;text-align:center;line-height:28px;font-size:12px;color:#adc09e;font-weight:700;">2</div>
                  </td>
                  <td style="padding-bottom:16px;padding-left:14px;vertical-align:top;">
                    <p style="margin:0 0 3px;font-size:12px;font-weight:700;color:#c8d5be;">Response</p>
                    <p style="margin:0;font-size:12px;color:#60705a;line-height:1.55;">A tailored reply is sent directly to this email address.</p>
                  </td>
                </tr>

                <!-- Step 3 -->
                <tr>
                  <td style="vertical-align:top;" width="36">
                    <div style="width:28px;height:28px;background:#1c2c1a;border:1px solid #2d392a;border-radius:6px;text-align:center;line-height:28px;font-size:12px;color:#adc09e;font-weight:700;">3</div>
                  </td>
                  <td style="padding-left:14px;vertical-align:top;">
                    <p style="margin:0 0 3px;font-size:12px;font-weight:700;color:#c8d5be;">Collaborate</p>
                    <p style="margin:0;font-size:12px;color:#60705a;line-height:1.55;">We align on your requirements and move forward together.</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="background:#131a10;padding:32px 48px 0;">
              <div style="border-top:1px solid #1e2c1c;"></div>
            </td>
          </tr>

          <!-- While you wait cards -->
          <tr>
            <td style="background:#131a10;padding:28px 48px 0;">
              <p style="margin:0 0 16px;font-size:9px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#3c4d38;">While you wait</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48%" style="background:#1c241a;border:1px solid #2d392a;border-radius:8px;padding:18px 20px;vertical-align:top;">
                    <p style="margin:0 0 8px;font-size:16px;">📦</p>
                    <p style="margin:0 0 5px;font-size:11px;font-weight:700;color:#adc09e;">Component Library</p>
                    <p style="margin:0;font-size:11px;color:#60705a;line-height:1.55;">Explore our production-ready components, playgrounds, and code snippets.</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="background:#1c241a;border:1px solid #2d392a;border-radius:8px;padding:18px 20px;vertical-align:top;">
                    <p style="margin:0 0 8px;font-size:16px;">📖</p>
                    <p style="margin:0 0 5px;font-size:11px;font-weight:700;color:#adc09e;">Documentation</p>
                    <p style="margin:0;font-size:11px;color:#60705a;line-height:1.55;">Get up and running with installation guides and API references.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background:#131a10;padding:32px 48px;">
              <table align="center" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background:#435240;border-radius:4px;">
                    <a href="https://gwan.dev/components-library"
                       style="display:inline-block;padding:13px 30px;font-size:10px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#f4f7f1;text-decoration:none;">
                      Explore Components →
                    </a>
                  </td>
                  <td width="12"></td>
                  <td style="border:1px solid #2d392a;border-radius:4px;">
                    <a href="https://gwan.dev/docs"
                       style="display:inline-block;padding:13px 30px;font-size:10px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#7e8c73;text-decoration:none;">
                      Read Docs →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0a100a;border-top:1px solid #1a2318;padding:24px 48px;text-align:center;">
              <p style="margin:0 0 6px;font-size:9px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;color:#2d392a;">GWAN.DEV</p>
              <p style="margin:0;font-size:10px;color:#2d392a;line-height:1.6;">
                This is an automated reply — please do not respond to this email.<br/>
                &copy; ${year} GWAN.DEV. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
