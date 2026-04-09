import DocsTemplate from "@/templates/docs";

export const metadata = {
  title: "Documentation — GWAN Design System",
  description: "Installation, setup, theming, and usage guide for the GWAN Design System.",
  openGraph: {
    url: "https://gwan.dev/docs",
    type: "website",
    title: "Documentation — GWAN Design System",
    description: "Installation, setup, theming, and usage guide for the GWAN Design System.",
    images: [{ url: "/images/gwan-dev-og.jpg", width: 1200, height: 630, alt: "GWAN Design System Docs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation — GWAN Design System",
    description: "Installation, setup, theming, and usage guide for the GWAN Design System.",
    images: ["/images/gwan-dev-og.jpg"],
  },
};

export default function DocsPage() {
  return <DocsTemplate />;
}
