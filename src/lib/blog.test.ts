import fs from "fs";
import path from "path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getAllPosts, getAllSlugs, getPublishedPostBySlug } from "@/lib/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

const originalExistsSync = fs.existsSync;
const originalReaddirSync = fs.readdirSync;
const originalReadFileSync = fs.readFileSync;

const fixtures = new Map<string, string>();
let blogDirExists = true;

function isBlogDir(target: fs.PathLike): boolean {
  return path.resolve(String(target)) === path.resolve(BLOG_DIR);
}

function fixtureName(target: fs.PathLike): string | null {
  const resolved = path.resolve(String(target));
  const root = path.resolve(BLOG_DIR);
  if (!resolved.startsWith(`${root}${path.sep}`) || !resolved.endsWith(".mdx")) return null;
  return path.basename(resolved);
}

function mdx({
  title,
  description,
  date,
  draft,
  body = "Body text.",
  author = "Ada Lovelace",
  tags = ["test"],
}: {
  title: string;
  description: string;
  date: string;
  draft?: boolean;
  body?: string;
  author?: string;
  tags?: string[];
}) {
  const draftLine = draft === undefined ? "" : `draft: ${draft}\n`;
  const tagList = tags.map((tag) => `"${tag}"`).join(", ");
  return `---
title: "${title}"
description: "${description}"
date: "${date}"
author: "${author}"
tags: [${tagList}]
${draftLine}---

${body}
`;
}

beforeEach(() => {
  fixtures.clear();
  blogDirExists = true;

  vi.spyOn(fs, "existsSync").mockImplementation((target) => {
    if (isBlogDir(target)) return blogDirExists;
    const name = fixtureName(target);
    if (name) return fixtures.has(name);
    return originalExistsSync(target);
  });

  vi.spyOn(fs, "readdirSync").mockImplementation(((target: fs.PathLike) => {
    if (isBlogDir(target)) return [...fixtures.keys()];
    return originalReaddirSync(target);
  }) as typeof fs.readdirSync);

  vi.spyOn(fs, "readFileSync").mockImplementation(((target: fs.PathOrFileDescriptor, options?: unknown) => {
    const name = typeof target === "string" ? fixtureName(target) : null;
    if (name && fixtures.has(name)) return fixtures.get(name);
    return originalReadFileSync(target, options as never);
  }) as typeof fs.readFileSync);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("published blog posts", () => {
  it("excludes drafts from listings and static params", () => {
    fixtures.set(
      "newer.mdx",
      mdx({
        title: "Newer published",
        description: "Visible newer",
        date: "2026-05-02",
        draft: false,
        body: "Published newer body",
      }),
    );
    fixtures.set(
      "older.mdx",
      mdx({
        title: "Older published",
        description: "Visible older",
        date: "2026-04-01",
        body: "Published older body",
      }),
    );
    fixtures.set(
      "secret-draft.mdx",
      mdx({
        title: "Secret Draft Title",
        description: "Secret draft description",
        date: "2026-06-01",
        draft: true,
        body: "Secret draft body",
      }),
    );

    const posts = getAllPosts();
    const listed = JSON.stringify(posts);

    expect(posts.map((post) => post.slug)).toEqual(["newer", "older"]);
    expect(getAllSlugs()).toEqual(["newer", "older"]);
    expect(listed).not.toContain("Secret Draft Title");
    expect(listed).not.toContain("Secret draft description");
    expect(listed).not.toContain("Secret draft body");
    expect(posts.every((post) => post.draft === false)).toBe(true);
  });

  it("returns a published post and nothing for a draft or unknown slug", () => {
    fixtures.set(
      "live.mdx",
      mdx({
        title: "Live title",
        description: "Live description",
        date: "2026-05-17",
        draft: false,
        body: "Live body",
        tags: ["forms"],
      }),
    );
    fixtures.set(
      "hidden.mdx",
      mdx({
        title: "Hidden title",
        description: "Hidden description",
        date: "2026-04-21",
        draft: true,
        body: "Hidden body",
      }),
    );

    const published = getPublishedPostBySlug("live");
    expect(published).toMatchObject({
      slug: "live",
      title: "Live title",
      description: "Live description",
      draft: false,
      tags: ["forms"],
    });
    expect(published?.content).toContain("Live body");

    expect(getPublishedPostBySlug("hidden")).toBeNull();
    expect(getPublishedPostBySlug("missing")).toBeNull();
  });

  it("returns no posts when the blog directory is missing", () => {
    blogDirExists = false;
    fixtures.set(
      "live.mdx",
      mdx({ title: "Live", description: "Desc", date: "2026-05-01", draft: false }),
    );

    expect(getAllPosts()).toEqual([]);
    expect(getAllSlugs()).toEqual([]);
  });
});
