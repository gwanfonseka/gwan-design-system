"use client";

import { useState } from "react";

export const Code = ({ children, lang = "" }: { children: string; lang?: string }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group rounded-xl overflow-hidden border border-border my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-surface-overlay border-b border-border">
        <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-muted-fg">{lang || "code"}</span>
        <button
          onClick={copy}
          className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-fg hover:text-foreground transition-colors duration-200 flex items-center gap-1.5"
        >
          {copied ? (
            <>
              <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                <rect x="1" y="3" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
                <path d="M4 3V2a1 1 0 011-1h5a1 1 0 011 1v7a1 1 0 01-1 1h-1" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="bg-surface p-4 overflow-x-auto text-[12px] leading-[1.8] font-mono text-foreground">
        <code>{children.trim()}</code>
      </pre>
    </div>
  );
};

export const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="text-2xl font-black uppercase tracking-tight text-foreground mt-12 mb-4 scroll-mt-24 border-b border-border pb-3">
    {children}
  </h2>
);

export const H3 = ({ id, children }: { id?: string; children: React.ReactNode }) => (
  <h3 id={id} className="text-base font-bold uppercase tracking-[0.1em] text-foreground mt-8 mb-3 scroll-mt-24">
    {children}
  </h3>
);

export const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-muted-fg leading-relaxed mb-4">{children}</p>
);

export const Callout = ({ type = "info", children }: { type?: "info" | "warn" | "tip"; children: React.ReactNode }) => {
  const styles = {
    info: "border-primary-400/40 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300",
    warn: "border-warning/40 bg-warning-bg text-warning-fg",
    tip:  "border-success/40 bg-success-bg text-success-fg",
  };
  const labels = { info: "Note", warn: "Warning", tip: "Tip" };
  return (
    <div className={`border-l-4 rounded-r-lg px-4 py-3 my-4 text-sm leading-relaxed ${styles[type]}`}>
      <span className="font-bold uppercase tracking-[0.15em] text-[10px] block mb-1">{labels[type]}</span>
      {children}
    </div>
  );
};

export const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-surface-overlay text-foreground text-[12px] font-mono px-1.5 py-0.5 rounded">{children}</code>
);

export const TokenRow = ({ name, light, dark, usage }: { name: string; light: string; dark: string; usage: string }) => (
  <tr className="border-b border-border text-sm">
    <td className="py-2.5 pr-4 font-mono text-[12px] text-foreground">{name}</td>
    <td className="py-2.5 pr-4">
      <span className="flex items-center gap-2">
        <span className="w-4 h-4 rounded-sm border border-border shrink-0" style={{ background: light }} />
        <span className="text-[11px] font-mono text-muted-fg">{light}</span>
      </span>
    </td>
    <td className="py-2.5 pr-4">
      <span className="flex items-center gap-2">
        <span className="w-4 h-4 rounded-sm border border-border shrink-0" style={{ background: dark }} />
        <span className="text-[11px] font-mono text-muted-fg">{dark}</span>
      </span>
    </td>
    <td className="py-2.5 text-[11px] text-muted-fg">{usage}</td>
  </tr>
);
