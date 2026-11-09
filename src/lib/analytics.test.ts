import { describe, expect, it, vi } from "vitest";
import { googleAnalyticsId, trackEvent } from "./analytics";
import { setGaEnv } from "@/test/ga-env";

describe("googleAnalyticsId", () => {
  it("returns null when the id is missing, blank, or not a GA4 measurement id", () => {
    setGaEnv(undefined);
    expect(googleAnalyticsId()).toBeNull();
    for (const id of ["", "   ", "UA-123", "G-", "G-ABC 1", "G-ABC';alert(1)"]) {
      setGaEnv(id);
      expect(googleAnalyticsId()).toBeNull();
    }
  });

  it("returns null on Vercel even with a valid id", () => {
    setGaEnv("G-PROD123", "1");
    expect(googleAnalyticsId()).toBeNull();
  });

  it("returns the trimmed id when analytics is on", () => {
    setGaEnv(" G-abc123 ", "");
    expect(googleAnalyticsId()).toBe("G-abc123");
    setGaEnv("G-PROD123");
    expect(googleAnalyticsId()).toBe("G-PROD123");
  });
});

describe("trackEvent", () => {
  it("sends the event through gtag when analytics is on", () => {
    setGaEnv("G-PROD123");
    const gtag = vi.fn();
    window.gtag = gtag;

    trackEvent("contact_submit");
    trackEvent("copy_install_command");
    trackEvent("copy_theme_css");

    expect(gtag.mock.calls).toEqual([
      ["event", "contact_submit"],
      ["event", "copy_install_command"],
      ["event", "copy_theme_css"],
    ]);
  });

  it("does nothing when analytics is off or gtag is missing", () => {
    const gtag = vi.fn();
    window.gtag = gtag;

    setGaEnv(undefined);
    trackEvent("contact_submit");
    setGaEnv("G-PROD123", "1");
    trackEvent("contact_submit");
    setGaEnv("not-an-id");
    trackEvent("contact_submit");

    setGaEnv("G-PROD123");
    delete window.gtag;
    trackEvent("copy_theme_css");
    window.gtag = "gtag" as unknown as Window["gtag"];
    trackEvent("copy_install_command");

    expect(gtag).not.toHaveBeenCalled();
  });
});
