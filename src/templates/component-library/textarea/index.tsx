import { Check } from "@/components/icons/checkSVG";
import { Code } from "@/components/icons/codeSVG";
import TextArea from "@/components/textarea";
import { ChangeEvent, useState } from "react";

const TextAreas = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValueRequired, setInputValueRequired] = useState<string>("");
  const [inputValueDisabled, setInputValueDisabled] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const codeExample = `import TextArea from "@/components/textarea";
import { ChangeEvent, useState } from "react";

const Example = () => {
  const [value, setValue] = useState<string>("");

  return (
    <TextArea
      label="Text Area"
      placeholder="Enter your text here"
      value={value}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
        setValue(e.target.value)
      }
      onClear={() => setValue("")}
    />
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
    <div className="flex flex-col gap-4">
      <TextArea
        label="Text Area"
        placeholder="This is a textarea"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInputValue(e.target.value)
        }
        onClear={() => setInputValue("")}
      />
      <TextArea
        label="Required Text Area"
        placeholder="This is a required text area"
        value={inputValueRequired}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInputValueRequired(e.target.value)
        }
        required
      />
      <TextArea
        label="Disabled Text Area"
        placeholder="This is a disabled text area"
        value={inputValueDisabled}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInputValueDisabled(e.target.value)
        }
        disabled
      />

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

export default TextAreas;