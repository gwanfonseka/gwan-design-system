import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import PostTemplate from "@/templates/blog/post";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} — GWAN Blog`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https://gwan.dev/blog/${slug}`,
        type: "article",
        publishedTime: post.date,
        authors: [post.author],
        images: [
          {
            url: `/blog/${slug}/opengraph-image`,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [`/blog/${slug}/opengraph-image`],
      },
    };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { content, ...postMeta } = post;

  return <PostTemplate post={postMeta} content={content} />;
}
