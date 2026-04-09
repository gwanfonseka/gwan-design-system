import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { BlogPostMeta } from "@/lib/blog";
import SharedNavbar from "@/templates/shared/navbar";
import SharedFooter from "@/templates/shared/footer";
import ShareButtons from "./share-buttons";

const mdxComponents = {
  // Map any MDX element to a Gwan component here.
  // e.g. pre: CustomCodeBlock
};

const PostTemplate = ({
  post,
  content,
}: {
  post: BlogPostMeta;
  content: string;
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://gwan.dev",
    },
    publisher: {
      "@type": "Organization",
      name: "GWAN Design System",
      url: "https://gwan.dev",
    },
    url: `https://gwan.dev/blog/${post.slug}`,
    ...(post.coverImage && { image: `https://gwan.dev${post.coverImage}` }),
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SharedNavbar activePage="blog" />

      <main className="pt-20 pb-24 max-w-7xl mx-auto px-5 md:px-10">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-muted-fg hover:text-foreground transition-colors duration-200 mt-8 mb-10"
          >
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All posts
          </a>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold tracking-[0.15em] uppercase px-2 py-0.5 rounded-sm bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground leading-tight mb-4">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-4 text-xs text-muted-fg mb-8 pb-8 border-b border-border">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{post.readingTime}</span>
          </div>

          {/* Cover image */}
          {post.coverImage && (
            <div className="rounded-lg overflow-hidden mb-10 border border-border">
              <img src={post.coverImage} alt={post.title} className="w-full" />
            </div>
          )}

          {/* MDX body */}
          <div className="prose prose-gwan max-w-none dark:prose-invert">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    [
                      rehypePrettyCode as never,
                      {
                        theme: { dark: "github-dark-dimmed", light: "github-light" },
                        keepBackground: false,
                      },
                    ],
                  ],
                },
              }}
            />
          </div>

          {/* Share */}
          <ShareButtons slug={post.slug} title={post.title} />

          {/* Footer CTA */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-fg mb-1">Written by</p>
              <p className="text-sm font-bold text-foreground">{post.author}</p>
            </div>
            <a
              href="/blog"
              className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-fg hover:text-foreground transition-colors duration-200"
            >
              More posts →
            </a>
          </div>
        </div>
      </main>

      <SharedFooter />
    </div>
  );
};

export default PostTemplate;
