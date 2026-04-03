"use client";

import { useState } from "react";

const CopyIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M11 5V3.5A1.5 1.5 0 009.5 2H3.5A1.5 1.5 0 002 3.5V9.5A1.5 1.5 0 003.5 11H5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 8l4 4 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CssOutput = ({ cssOutput }: { cssOutput: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cssOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-black uppercase tracking-tight text-foreground">Generated CSS</h2>
          <p className="text-xs text-muted-fg">
            Paste this into your{" "}
            <code className="font-mono text-primary-600 dark:text-primary-400">globals.css</code> to apply your theme.
          </p>
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-bold tracking-[0.1em] uppercase border transition-all duration-200 ${
            copied
              ? "bg-success-bg border-success text-success-fg"
              : "bg-surface border-border text-foreground hover:border-foreground/40"
          }`}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? "Copied!" : "Copy CSS"}
        </button>
      </div>

      <div className="rounded-xl border border-border overflow-hidden bg-primary-900 dark:bg-black/40">
        <div className="flex items-center justify-between px-5 py-3 border-b border-primary-700/40 bg-primary-800/40">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-400">globals.css</span>
        </div>
        <pre className="overflow-x-auto p-5 text-[12px] leading-6 font-mono text-primary-200">
          <code>{cssOutput}</code>
        </pre>
      </div>
    </div>
  );
};

export default CssOutput;
