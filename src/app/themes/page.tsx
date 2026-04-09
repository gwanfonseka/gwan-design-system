import ThemesTemplate from "@/templates/themes";

export const metadata = {
  title: "Theme Explorer — GWAN Design System",
  description: "Visually customise GWAN design tokens and copy the generated CSS into your project.",
  openGraph: {
    url: "https://gwan.dev/themes",
    type: "website",
    title: "Theme Explorer — GWAN Design System",
    description: "Visually customise GWAN design tokens and copy the generated CSS into your project.",
    images: [{ url: "/images/gwan-dev-og.jpg", width: 1200, height: 630, alt: "GWAN Theme Explorer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theme Explorer — GWAN Design System",
    description: "Visually customise GWAN design tokens and copy the generated CSS into your project.",
    images: ["/images/gwan-dev-og.jpg"],
  },
};

export default function ThemesPage() {
  return <ThemesTemplate />;
}
