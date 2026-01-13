import * as svgList from "@/components/icons";
import { Check } from "@/components/icons/checkSVG";
import { Code } from "@/components/icons/codeSVG";
import { useState } from "react";

const Icons = () => {
  const list = Object.keys(svgList);
  const [copied, setCopied] = useState(false);

  const codeExample = `import * as svgList from "@/components/icons";

const Example = () => {
  const list = Object.keys(svgList);

  return (
    <div className="grid grid-cols-8 gap-x-8 gap-y-12">
      {list.map((svg: string, index) => (
        <div
          className="flex flex-col items-center gap-4 border border-white bg-neutral-50 size-32 p-2 rounded-lg justify-center"
          key={\`svg_\${index}\`}
        >
          <div className="size-[40px]">
            {svgList[svg as keyof typeof svgList]()}
          </div>
          <span className="text-sm font-medium">{svg}</span>
        </div>
      ))}
    </div>
  );
};`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeExample);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-8 gap-x-8 gap-y-12">
        {list.map((svg: string, index) => (
          <div
            className="flex flex-col items-center gap-4 border border-white bg-neutral-50 size-32 p-2 rounded-lg justify-center"
            key={`svg_${index}`}
          >
            <div className="size-[40px]">
              {svgList[svg as keyof typeof svgList]()}
            </div>
            <span className="text-sm font-medium">{svg}</span>
          </div>
        ))}
      </div>

      <label className="text-black text-xl font-medium mt-6">Usage</label>
      <div className="relative bg-neutral-900 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-700">
          <span className="text-xs text-neutral-400 uppercase font-medium">
            typescriptreact
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-300 hover:text-white hover:bg-neutral-800 rounded transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <div className="size-4">
                  <Check />
                </div>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <div className="size-4">
                  <Code />
                </div>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-neutral-100 font-mono">{codeExample}</code>
        </pre>
      </div>
    </div>
  );
};

export default Icons;