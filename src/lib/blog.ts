import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  coverImage?: string;
  readingTime: string;
  draft: boolean;
  content: string;
}

export type BlogPostMeta = Omit<BlogPost, "content">;

function parseFrontmatter(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? "Untitled",
    description: data.description ?? "",
    date: data.date ?? "",
    author: data.author ?? "Nimesh Fonseka",
    tags: data.tags ?? [],
    coverImage: data.coverImage,
    readingTime: stats.text,
    draft: data.draft ?? false,
    content,
  };
}

function toMeta(post: BlogPost): BlogPostMeta {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    author: post.author,
    tags: post.tags,
    coverImage: post.coverImage,
    readingTime: post.readingTime,
    draft: post.draft,
  };
}

function listMdxSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** Published post, or null when the slug is missing or `draft: true`. */
export function getPublishedPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const post = parseFrontmatter(slug);
  if (post.draft) return null;
  return post;
}

export function getAllPosts(): BlogPostMeta[] {
  return listMdxSlugs()
    .map((slug) => getPublishedPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .map(toMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
