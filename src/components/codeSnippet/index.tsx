import { useState } from "react";
import { CheckSVG, CopySVG } from "../icons";

const CodeSnippet = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

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
    <div className="relative bg-neutral-900 rounded-lg overflow-hidden shadow-md">
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-700">
        <span className="text-xs text-neutral-400 uppercase font-medium">
          Usage
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-300 hover:text-white hover:bg-neutral-800 rounded transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <div className="size-4">
                <CheckSVG />
              </div>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <div className="size-4">
                <CopySVG />
              </div>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code className="text-neutral-100 font-mono">{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
