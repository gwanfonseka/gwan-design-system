import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Button from "@/components/button";
import Popover, { POPOVER_PLACEMENT, POPOVER_TRIGGER } from "@/components/popover";
import { useState } from "react";

const Popovers = () => {
  const [placement, setPlacement] = useState<string>(POPOVER_PLACEMENT.BOTTOM);
  const [trigger, setTrigger] = useState<string>(POPOVER_TRIGGER.CLICK);

  const placementOptions = Object.values(POPOVER_PLACEMENT).map((v) => ({ value: v, label: v }));
  const triggerOptions = Object.values(POPOVER_TRIGGER).map((v) => ({ value: v, label: v }));

  const sampleContent = (
    <div className="flex flex-col gap-1">
      <p>Click-triggered overlay with a title and body. Useful for contextual info, confirmations, or quick actions.</p>
    </div>
  );

  const codeExample = `import { Popover, POPOVER_PLACEMENT, POPOVER_TRIGGER } from "gwan-design-system";

const Example = () => (
  <>
    {/* Click trigger */}
    <Popover
      trigger={<button>Click me</button>}
      title="Popover Title"
      content={<p>This is the popover body content.</p>}
      placement={POPOVER_PLACEMENT.BOTTOM} // top | bottom | left | right
      triggerOn={POPOVER_TRIGGER.CLICK}    // click | hover
    />

    {/* Hover trigger */}
    <Popover
      trigger={<button>Hover me</button>}
      content={<p>Appears on hover.</p>}
      placement={POPOVER_PLACEMENT.TOP}
      triggerOn={POPOVER_TRIGGER.HOVER}
    />
  </>
);`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center py-12">
        <Popover
          trigger={<Button label="Open Popover" onClick={() => {}} />}
          title="Popover Title"
          content={sampleContent}
          placement={placement as POPOVER_PLACEMENT}
          triggerOn={trigger as POPOVER_TRIGGER}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <SelectDropdown label="Placement" options={placementOptions} value={placement} onChange={setPlacement} className="w-full sm:w-48" />
        <SelectDropdown label="Trigger" options={triggerOptions} value={trigger} onChange={setTrigger} className="w-full sm:w-48" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row flex-wrap justify-center gap-6 py-8">
        {Object.values(POPOVER_PLACEMENT).map((p) => (
          <Popover
            key={p}
            trigger={<Button label={p} onClick={() => {}} />}
            title={`${p} placement`}
            content="Popover positioned relative to the trigger."
            placement={p}
          />
        ))}
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Popovers;
