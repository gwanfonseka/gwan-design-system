"use client";

import { useState } from "react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 1h-11A1.5 1.5 0 001 2.5v11A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0013.5 1zM5.5 12.5h-2v-6h2v6zm-1-6.8a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zm9 6.8h-2V9.3c0-.74-.27-1.3-1-1.3a1.1 1.1 0 00-1.03.73c-.05.14-.07.32-.07.5v3.27h-2s.03-5.3 0-6h2v.85a2 2 0 011.8-1c1.32 0 2.3.86 2.3 2.71v3.44z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.294 6.928L14.357 1h-1.2L8.762 6.147 5.25 1H1l5.31 7.728L1 15h1.2l4.642-5.396L10.75 15H15L9.294 6.928zm-1.643 1.91l-.538-.77-4.28-6.123H4.7l3.457 4.946.538.77 4.49 6.422h-1.866l-3.668-5.244z" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 9.5a3.5 3.5 0 005 0l2-2a3.5 3.5 0 00-5-4.95l-1 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M9.5 6.5a3.5 3.5 0 00-5 0l-2 2a3.5 3.5 0 004.95 5l1.05-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 4L1 8l4 4M11 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 8.5l3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShareButtons = ({ slug, title }: { slug: string; title: string }) => {
  const [linkCopied, setLinkCopied] = useState(false);
  const [embedCopied, setEmbedCopied] = useState(false);
  const [embedOpen, setEmbedOpen] = useState(false);

  const url = `https://gwan.dev/blog/${slug}`;
  const embedCode = `<iframe src="${url}" width="100%" height="600" style="border:none;border-radius:8px;" title="${title}"></iframe>`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const copyEmbed = async () => {
    await navigator.clipboard.writeText(embedCode);
    setEmbedCopied(true);
    setTimeout(() => setEmbedCopied(false), 2000);
  };

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;

  return (
    <div className="mt-10 pt-8 border-t border-border">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-fg mb-4">
        Share this article
      </p>

      <div className="flex flex-wrap gap-2">
        {/* LinkedIn */}
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm border border-border text-xs font-semibold tracking-[0.1em] uppercase text-muted-fg hover:text-foreground hover:border-foreground transition-colors duration-200"
        >
          <LinkedInIcon />
          LinkedIn
        </a>

        {/* X / Twitter */}
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm border border-border text-xs font-semibold tracking-[0.1em] uppercase text-muted-fg hover:text-foreground hover:border-foreground transition-colors duration-200"
        >
          <XIcon />
          X / Twitter
        </a>

        {/* Copy link */}
        <button
          onClick={copyLink}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm border border-border text-xs font-semibold tracking-[0.1em] uppercase text-muted-fg hover:text-foreground hover:border-foreground transition-colors duration-200"
        >
          {linkCopied ? <CheckIcon /> : <LinkIcon />}
          {linkCopied ? "Copied!" : "Copy link"}
        </button>

        {/* Embed */}
        <button
          onClick={() => setEmbedOpen((v) => !v)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm border border-border text-xs font-semibold tracking-[0.1em] uppercase text-muted-fg hover:text-foreground hover:border-foreground transition-colors duration-200"
        >
          <CodeIcon />
          Embed
        </button>
      </div>

      {/* Embed panel */}
      {embedOpen && (
        <div className="mt-4 p-4 rounded-sm border border-border bg-surface">
          <p className="text-xs text-muted-fg mb-2">
            Paste this into any HTML page or CMS to embed the article:
          </p>
          <div className="flex items-start gap-3">
            <code className="flex-1 text-xs font-mono text-foreground bg-surface-raised rounded-sm px-3 py-2 break-all leading-relaxed">
              {embedCode}
            </code>
            <button
              onClick={copyEmbed}
              className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-sm border border-border text-xs font-semibold tracking-[0.1em] uppercase text-muted-fg hover:text-foreground hover:border-foreground transition-colors duration-200"
            >
              {embedCopied ? <CheckIcon /> : <CodeIcon />}
              {embedCopied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButtons;
