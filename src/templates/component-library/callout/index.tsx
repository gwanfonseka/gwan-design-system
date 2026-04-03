import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Input from "@/components/input";
import Callout, { CALLOUT_TYPE } from "@/components/callout";
import { useState, ChangeEvent } from "react";

const codeExample = `import { Callout, CALLOUT_TYPE } from "gwan-design-system";

const Example = () => {
  return (
    <Callout type={CALLOUT_TYPE.INFO}>
      This is an informational message.
    </Callout>
  );
};

// With a custom title
<Callout type={CALLOUT_TYPE.WARNING} title="Heads up">
  This action cannot be undone.
</Callout>

// Available types: INFO | WARNING | TIP | DANGER`;

const Callouts = () => {
  const [type, setType] = useState<string>(CALLOUT_TYPE.INFO);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("This is a callout message. Use it to surface important information to your users.");

  const typeOptions = [
    { value: CALLOUT_TYPE.INFO, label: "Info" },
    { value: CALLOUT_TYPE.WARNING, label: "Warning" },
    { value: CALLOUT_TYPE.TIP, label: "Tip" },
    { value: CALLOUT_TYPE.DANGER, label: "Danger" },
  ];

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <Callout type={type as CALLOUT_TYPE} title={title || undefined}>
        {message}
      </Callout>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        <SelectDropdown
          label="Type"
          options={typeOptions}
          value={type}
          onChange={(val) => setType(val)}
          className="w-48"
        />
        <Input
          label="Custom title (optional)"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          className="w-64"
        />
        <Input
          label="Message"
          value={message}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
          className="w-80"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Callout type={CALLOUT_TYPE.INFO}>This is an informational callout. Use it to highlight notes or context.</Callout>
        <Callout type={CALLOUT_TYPE.WARNING}>This is a warning callout. Use it to flag potential issues.</Callout>
        <Callout type={CALLOUT_TYPE.TIP}>This is a tip callout. Use it to share best practices or shortcuts.</Callout>
        <Callout type={CALLOUT_TYPE.DANGER}>This is a danger callout. Use it to warn about destructive or irreversible actions.</Callout>
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Callouts;
