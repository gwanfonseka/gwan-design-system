import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { isValidElement, type ReactElement } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  getAllPosts,
  getAllSlugs,
  getPublishedPostBySlug,
  type BlogPostMeta,
} from "@/lib/blog";
import BlogIndexPage from "@/app/blog/page";
import sitemap from "@/app/sitemap";
import BlogPostPage, {
  dynamicParams,
  generateMetadata,
  generateStaticParams,
} from "@/app/blog/[slug]/page";
import OgImage, {
  dynamicParams as ogDynamicParams,
  generateStaticParams as ogStaticParams,
} from "@/app/blog/[slug]/opengraph-image";

const NOT_FOUND_DIGEST = "NEXT_HTTP_ERROR_FALLBACK;404";
const BLOG_DIR = path.join(process.cwd(), "content/blog");
const KNOWN_DRAFTS = ["migrating-from-shadcn"];
const KNOWN_PUBLISHED = "building-accessible-forms";

const renderedImages = vi.hoisted(
  () => [] as { element: unknown; options: unknown }[],
);

vi.mock("next/og", () => ({
  ImageResponse: class ImageResponse {
    element: unknown;
    options: unknown;
    constructor(element: unknown, options: unknown) {
      this.element = element;
      this.options = options;
      renderedImages.push(this);
    }
  },
}));

type DiskPost = {
  slug: string;
  draft: boolean;
  title: string;
  description: string;
};

function postsOnDisk(): DiskPost[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        draft: data.draft === true,
        title: String(data.title ?? ""),
        description: String(data.description ?? ""),
      };
    });
}

async function settle<T>(promise: Promise<T>) {
  try {
    return { status: "fulfilled" as const, value: await promise };
  } catch (error) {
    return { status: "rejected" as const, error };
  }
}

function expectNotFound(error: unknown) {
  expect(error).toMatchObject({ digest: NOT_FOUND_DIGEST });
  expect(JSON.stringify(error)).not.toContain("Migrating from shadcn");
  expect(JSON.stringify(error)).not.toContain("Authenticated Navigation");
}

function elementText(node: unknown): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(elementText).join(" ");
  if (typeof node === "object" && node !== null && "props" in node) {
    const props = (node as { props?: { children?: unknown } }).props;
    return elementText(props?.children);
  }
  return "";
}

describe("draft posts stay off the site", () => {
  const disk = postsOnDisk();
  const drafts = disk.filter((post) => post.draft);
  const published = disk.filter((post) => !post.draft);

  beforeEach(() => {
    renderedImages.length = 0;
  });

  it("finds the known draft and published posts on disk", () => {
    expect(drafts.map((post) => post.slug)).toEqual(
      expect.arrayContaining(KNOWN_DRAFTS),
    );
    expect(published.map((post) => post.slug)).toContain(KNOWN_PUBLISHED);
    expect(drafts.length).toBeGreaterThan(0);
    expect(published.length).toBeGreaterThan(0);
  });

  it("keeps drafts out of listings and static params", async () => {
    const listedSlugs = getAllPosts().map((post) => post.slug);
    const paramSlugs = getAllSlugs();
    const pageParams = (await generateStaticParams()).map(
      (param) => param.slug,
    );
    const imageParams = (await ogStaticParams()).map((param) => param.slug);
    const index = BlogIndexPage() as ReactElement<{ posts: BlogPostMeta[] }>;
    const indexSlugs = index.props.posts.map((post) => post.slug);
    const sitemapUrls = sitemap().map((entry) => entry.url);

    expect(dynamicParams).toBe(false);
    expect(ogDynamicParams).toBe(false);

    for (const draft of drafts) {
      expect(listedSlugs).not.toContain(draft.slug);
      expect(paramSlugs).not.toContain(draft.slug);
      expect(pageParams).not.toContain(draft.slug);
      expect(imageParams).not.toContain(draft.slug);
      expect(indexSlugs).not.toContain(draft.slug);
      expect(sitemapUrls).not.toContain(`https://gwan.dev/blog/${draft.slug}`);
      expect(getPublishedPostBySlug(draft.slug)).toBeNull();
    }

    for (const post of published) {
      expect(listedSlugs).toContain(post.slug);
      expect(paramSlugs).toContain(post.slug);
      expect(pageParams).toContain(post.slug);
      expect(imageParams).toContain(post.slug);
      expect(indexSlugs).toContain(post.slug);
      expect(sitemapUrls).toContain(`https://gwan.dev/blog/${post.slug}`);
      expect(getPublishedPostBySlug(post.slug)?.title).toBe(post.title);
    }

    expect(index.props.posts.every((post) => post.draft === false)).toBe(true);
    expect(JSON.stringify(index.props.posts)).not.toContain(
      "Migrating from shadcn",
    );
  });

  it("calls notFound for a draft slug and still resolves a published post", async () => {
    for (const draft of drafts) {
      const metadata = await settle(
        generateMetadata({ params: Promise.resolve({ slug: draft.slug }) }),
      );
      const page = await settle(
        BlogPostPage({ params: Promise.resolve({ slug: draft.slug }) }),
      );

      expect(metadata.status).toBe("rejected");
      expect(page.status).toBe("rejected");
      if (metadata.status === "rejected") expectNotFound(metadata.error);
      if (page.status === "rejected") expectNotFound(page.error);
    }

    const missing = await settle(
      generateMetadata({ params: Promise.resolve({ slug: "does-not-exist" }) }),
    );
    expect(missing.status).toBe("rejected");
    if (missing.status === "rejected") expectNotFound(missing.error);

    const live = published.find((post) => post.slug === KNOWN_PUBLISHED);
    expect(live).toBeDefined();
    if (!live) return;

    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: live.slug }),
    });
    expect(metadata).toMatchObject({
      title: `${live.title} — GWAN Blog`,
      description: live.description,
      openGraph: {
        title: live.title,
        description: live.description,
        url: `https://gwan.dev/blog/${live.slug}`,
      },
      twitter: {
        title: live.title,
        description: live.description,
      },
    });
    expect(JSON.stringify(metadata)).not.toContain("Migrating from shadcn");
    expect(JSON.stringify(metadata)).not.toContain("Authenticated Navigation");

    const page = await BlogPostPage({
      params: Promise.resolve({ slug: live.slug }),
    });
    expect(isValidElement(page)).toBe(true);
    const props = (
      page as ReactElement<{ post: BlogPostMeta; content: string }>
    ).props;
    expect(props.post.slug).toBe(live.slug);
    expect(props.post.draft).toBe(false);
    expect(props.post.title).toBe(live.title);
    expect(props.content).toContain(
      "Accessible forms are harder to build than they look",
    );
    expect(props.content).not.toContain("shadcn/ui is a great starting point");
  });

  it("does not render an OG image for a draft and still renders a published one", async () => {
    for (const draft of drafts) {
      const image = await settle(
        OgImage({ params: Promise.resolve({ slug: draft.slug }) }),
      );
      expect(image.status).toBe("rejected");
      if (image.status === "rejected") expectNotFound(image.error);
    }
    expect(renderedImages).toHaveLength(0);

    const live = published.find((post) => post.slug === KNOWN_PUBLISHED);
    expect(live).toBeDefined();
    if (!live) return;

    const image = await OgImage({
      params: Promise.resolve({ slug: live.slug }),
    });
    expect(image).toBe(renderedImages[0]);
    const text = elementText(renderedImages[0]?.element);
    expect(text).toContain(live.title);
    expect(text).toContain(live.description);
    expect(text).not.toContain("Migrating from shadcn");
    expect(text).not.toContain("Authenticated Navigation");
  });
});
