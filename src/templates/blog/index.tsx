import { BlogPostMeta } from "@/lib/blog";
import SharedNavbar from "@/templates/shared/navbar";
import SharedFooter from "@/templates/shared/footer";
import PostCard from "./post-card";

const BlogTemplate = ({ posts }: { posts: BlogPostMeta[] }) => {
  return (
    <div className="min-h-screen bg-background">
      <SharedNavbar activePage="blog" />

      <main className="pt-20 pb-24 max-w-screen-xl mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="pt-10 pb-12 border-b border-border mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-fg mb-3">
            GWAN.DEV
          </p>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-4">
            Blog
          </h1>
          <p className="text-base text-muted-fg max-w-xl leading-relaxed">
            Deep-dives on the Gwan design system — integrations, how-tos, and
            the thinking behind component decisions.
          </p>
        </div>

        {/* Grid */}
        {posts.length === 0 ? (
          <p className="text-muted-fg text-sm">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </main>

      <SharedFooter />
    </div>
  );
};

export default BlogTemplate;
