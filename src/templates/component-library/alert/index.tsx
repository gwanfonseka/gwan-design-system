import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Input from "@/components/input";
import Alert, { ALERT_TYPE, ALERT_VARIANT } from "@/components/alert";
import { useState } from "react";

const Alerts = () => {
  const [type, setType] = useState<string>(ALERT_TYPE.INFO);
  const [variant, setVariant] = useState<string>(ALERT_VARIANT.SUBTLE);
  const [title, setTitle] = useState("Alert Title");
  const [message, setMessage] = useState("This is the alert message body. Use it to communicate status or feedback.");
  const [dismissible, setDismissible] = useState<string>("false");

  const [key, setKey] = useState(0);

  const typeOptions = Object.values(ALERT_TYPE).map((v) => ({ value: v, label: v }));
  const variantOptions = Object.values(ALERT_VARIANT).map((v) => ({ value: v, label: v }));
  const boolOptions = [{ value: "false", label: "off" }, { value: "true", label: "on" }];

  const codeExample = `import { Alert, ALERT_TYPE, ALERT_VARIANT } from "gwan-design-system";

const Example = () => (
  <>
    <Alert
      type={ALERT_TYPE.INFO}
      variant={ALERT_VARIANT.SUBTLE} // solid | outline | subtle
      title="Heads up"
      message="This is an informational alert."
    />

    <Alert
      type={ALERT_TYPE.SUCCESS}
      title="Success!"
      message="Your changes have been saved."
      dismissible
      onDismiss={() => console.log("dismissed")}
    />

    <Alert type={ALERT_TYPE.WARNING} message="Proceed with caution." />
    <Alert type={ALERT_TYPE.DANGER}  message="Something went wrong." />
  </>
);`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div key={key}>
        <Alert
          type={type as ALERT_TYPE}
          variant={variant as ALERT_VARIANT}
          title={title || undefined}
          message={message}
          dismissible={dismissible === "true"}
          onDismiss={() => setTimeout(() => setKey((k) => k + 1), 1500)}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <SelectDropdown label="Type" options={typeOptions} value={type} onChange={setType} className="w-full sm:w-40" />
        <SelectDropdown label="Variant" options={variantOptions} value={variant} onChange={setVariant} className="w-full sm:w-40" />
        <SelectDropdown label="Dismissible" options={boolOptions} value={dismissible} onChange={(v) => { setDismissible(v); setKey((k) => k + 1); }} className="w-full sm:w-40" />
        <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full sm:w-56" />
        <Input label="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full sm:w-72" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Alert type={ALERT_TYPE.INFO} title="Information" message="Here is something you should know." />
        <Alert type={ALERT_TYPE.SUCCESS} title="Success" message="Your changes have been saved successfully." dismissible />
        <Alert type={ALERT_TYPE.WARNING} title="Warning" message="This action may have unintended consequences." />
        <Alert type={ALERT_TYPE.DANGER} title="Error" message="Failed to process the request. Please try again." dismissible />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Alerts;
