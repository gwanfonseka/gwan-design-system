import { Fragment, useEffect, useMemo, useState } from "react";
import { highlightTsx, loadHighlighter } from "@/lib/highlight";
import { CheckSVG, CopySVG } from "../icons";

const CodeSnippet = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  // Plain text on the server and until the highlighter loads; then coloured on every change.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadHighlighter()
      .then(() => !cancelled && setReady(true))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const lines = useMemo(() => (ready ? highlightTsx(code) : null), [ready, code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-950 border-b border-neutral-800">
        <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-neutral-400">
          Usage
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-md transition-colors duration-150"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <div className="size-3.5"><CheckSVG /></div>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <div className="size-3.5"><CopySVG /></div>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="bg-neutral-950 p-5 overflow-x-auto">
        <code className="text-neutral-100 font-mono text-xs leading-relaxed">
          {lines
            ? lines.map((line, i) => (
                <Fragment key={i}>
                  {line.map((token, j) => (
                    <span key={j} style={{ color: token.color }}>
                      {token.content}
                    </span>
                  ))}
                  {i < lines.length - 1 && "\n"}
                </Fragment>
              ))
            : code}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
