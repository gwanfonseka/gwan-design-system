import HomeTemplate from "@/templates/home";
import counts from "@/lib/library-counts.json";

export const metadata = {
  title: "GWAN Design System",
  description:
    `Open-source React component library for Next.js: ${counts.components} typed components and ${counts.icons} icons, styled with Tailwind CSS v4 and themed with CSS variables.`,
  openGraph: {
    url: "https://gwan.dev/home",
    type: "website",
    title: "GWAN Design System",
    description:
      `Open-source React component library for Next.js: ${counts.components} typed components and ${counts.icons} icons, styled with Tailwind CSS v4 and themed with CSS variables.`,
    images: [{ url: "/images/gwan-dev-og.jpg", width: 1200, height: 630, alt: "GWAN Design System" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GWAN Design System",
    description:
      `Open-source React component library for Next.js: ${counts.components} typed components and ${counts.icons} icons, styled with Tailwind CSS v4 and themed with CSS variables.`,
    images: ["/images/gwan-dev-og.jpg"],
  },
};

export default function HomePage() {
  return <HomeTemplate />;
}
