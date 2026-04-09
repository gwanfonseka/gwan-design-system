import { BlogPostMeta } from "@/lib/blog";

const PostCard = ({ post }: { post: BlogPostMeta }) => {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-surface border border-border rounded-lg overflow-hidden hover:border-primary-default transition-colors duration-200"
    >
      {/* Cover image */}
      {post.coverImage ? (
        <div className="aspect-[16/9] overflow-hidden bg-surface-raised">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
          <span className="text-3xl font-black tracking-[0.25em] text-primary-default opacity-30 uppercase">
            GWAN
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
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
        <h2 className="text-base font-bold text-foreground leading-snug group-hover:text-primary-default transition-colors duration-200 line-clamp-2">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-muted-fg leading-relaxed line-clamp-3 flex-1">
          {post.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-2 border-t border-border-subtle">
          <span className="text-xs text-muted-fg">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="text-xs text-muted-fg">{post.readingTime}</span>
        </div>
      </div>
    </a>
  );
};

export default PostCard;
