import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

/**
 * Vercel sets VERCEL=1. Analytics and Speed Insights post to `/_vercel/*`,
 * which only exists on Vercel. Self-hosted production omits them.
 */
export default function VercelTelemetry() {
  if (process.env.VERCEL !== "1") return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
