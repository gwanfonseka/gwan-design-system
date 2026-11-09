import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { setGaEnv } from "@/test/ga-env";

vi.mock("@next/third-parties/google", () => ({
  GoogleAnalytics: ({ gaId }: { gaId: string }) => <div data-testid="ga" data-ga-id={gaId} />,
}));

import ProductionGoogleAnalytics from "./google-analytics";

describe("ProductionGoogleAnalytics", () => {
  it("renders nothing when the id is missing or this build is a Vercel preview", () => {
    setGaEnv(undefined);
    const { container, rerender } = render(<ProductionGoogleAnalytics />);
    expect(container).toBeEmptyDOMElement();

    setGaEnv("G-PROD123", "1");
    rerender(<ProductionGoogleAnalytics />);
    expect(screen.queryByTestId("ga")).not.toBeInTheDocument();
  });

  it("renders Google Analytics with the measurement id on production", () => {
    setGaEnv(" G-PROD123 ");
    render(<ProductionGoogleAnalytics />);
    expect(screen.getByTestId("ga")).toHaveAttribute("data-ga-id", "G-PROD123");
  });
});
