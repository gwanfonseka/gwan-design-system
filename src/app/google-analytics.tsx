import { GoogleAnalytics } from "@next/third-parties/google";
import { googleAnalyticsId } from "@/lib/analytics";

/**
 * Self-hosted production only. Vercel previews (`VERCEL=1`) and builds without
 * `NEXT_PUBLIC_GA_ID` render nothing.
 *
 * App Router client navigations are page views without a second listener.
 * `gtag('config', id)` loads the Google tag, and that tag records history
 * changes when the GA4 property has enhanced measurement on and "Page changes
 * based on browser history events" checked. Both are the default. Sending
 * `page_view` again from `usePathname` would double-count.
 */
export default function ProductionGoogleAnalytics() {
  const gaId = googleAnalyticsId();
  if (!gaId) return null;
  return <GoogleAnalytics gaId={gaId} />;
}
