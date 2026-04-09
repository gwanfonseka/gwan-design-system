import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let title = "GWAN Blog";
  let description = "Insights on the Gwan design system";
  let tags: string[] = [];

  try {
    const post = getPostBySlug(slug);
    title = post.title;
    description = post.description;
    tags = post.tags.slice(0, 3);
  } catch {
    // fall through to defaults
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          backgroundColor: "#131a10",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: Logo + site */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 900,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#adc09e",
            }}
          >
            GWAN.DEV
          </span>
          <span style={{ color: "#3c4d38", fontSize: "13px" }}>/</span>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#60705a",
            }}
          >
            Blog
          </span>
        </div>

        {/* Middle: Title + description */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#e2eada",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#9ea593",
              margin: 0,
              maxWidth: "820px",
              lineHeight: 1.5,
            }}
          >
            {description}
          </p>
        </div>

        {/* Bottom: Tags */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "5px 12px",
                borderRadius: "4px",
                backgroundColor: "#252e22",
                color: "#adc09e",
                border: "1px solid #3c4d38",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
