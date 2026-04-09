import { getAllPosts } from "@/lib/blog";
import BlogTemplate from "@/templates/blog";

export const metadata = {
  title: "Blog — GWAN Design System",
  description:
    "Deep-dives on the Gwan design system — integrations, how-tos, and the thinking behind component decisions.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogTemplate posts={posts} />;
}
