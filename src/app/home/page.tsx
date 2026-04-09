import HomeTemplate from "@/templates/home";

export const metadata = {
  title: "GWAN Design System",
  description:
    "A high-performance reactive component library engineered for developers who demand surgical precision and scalable aesthetics.",
  openGraph: {
    url: "https://gwan.dev/home",
    type: "website",
    title: "GWAN Design System",
    description:
      "A high-performance reactive component library engineered for developers who demand surgical precision and scalable aesthetics.",
    images: [{ url: "/images/gwan-dev-og.jpg", width: 1200, height: 630, alt: "GWAN Design System" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GWAN Design System",
    description:
      "A high-performance reactive component library engineered for developers who demand surgical precision and scalable aesthetics.",
    images: ["/images/gwan-dev-og.jpg"],
  },
};

export default function HomePage() {
  return <HomeTemplate />;
}
