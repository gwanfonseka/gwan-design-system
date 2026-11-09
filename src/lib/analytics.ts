/**
 * Production Google Analytics (GA4).
 *
 * `NEXT_PUBLIC_GA_ID` is inlined at `next build`, so the Docker image has to
 * receive it as a build-arg. Vercel sets `VERCEL=1` for develop and pull
 * request previews; those builds must not send hits. An empty or malformed id
 * leaves analytics off, which is also how a missing repository variable behaves.
 *
 * The browser bundle does not inline `VERCEL`. Custom events therefore also
 * require `window.gtag`, which the root layout only installs when this id is
 * returned. Calling `trackEvent` with analytics off does nothing.
 */

export type AnalyticsEvent = "contact_submit" | "copy_install_command" | "copy_theme_css";

// GA4 measurement IDs. Restricted so the id can be interpolated into the gtag snippet.
const MEASUREMENT_ID = /^G-[A-Za-z0-9]+$/;

type Gtag = (command: "event", eventName: AnalyticsEvent) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export function googleAnalyticsId(): string | null {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const id = (gaId ?? "").trim();
  if (!MEASUREMENT_ID.test(id) || process.env.VERCEL === "1") return null;
  return id;
}

/** Sends one GA4 event. No-ops when the production tag is not active. */
export function trackEvent(event: AnalyticsEvent): void {
  if (!googleAnalyticsId()) return;
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  gtag("event", event);
}
