import { getAllPosts } from "@/lib/blog";
import BlogTemplate from "@/templates/blog";

export const metadata = {
  title: "Blog — GWAN Design System",
  description:
    "Deep-dives on the Gwan design system — integrations, how-tos, and the thinking behind component decisions.",
  openGraph: {
    url: "https://gwan.dev/blog",
    type: "website",
    title: "Blog — GWAN Design System",
    description:
      "Deep-dives on the Gwan design system — integrations, how-tos, and the thinking behind component decisions.",
    images: [{ url: "/images/gwan-dev-og.jpg", width: 1200, height: 630, alt: "GWAN Design System Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — GWAN Design System",
    description:
      "Deep-dives on the Gwan design system — integrations, how-tos, and the thinking behind component decisions.",
    images: ["/images/gwan-dev-og.jpg"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogTemplate posts={posts} />;
}
