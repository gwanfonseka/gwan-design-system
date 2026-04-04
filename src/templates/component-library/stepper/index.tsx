import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Button from "@/components/button";
import Stepper, { STEPPER_ORIENTATION, STEPPER_VARIANT, STEP_STATUS } from "@/components/stepper";
import { useState } from "react";

const stepData = [
  { key: "account", title: "Account", description: "Set up your credentials" },
  { key: "profile", title: "Profile", description: "Personal information" },
  { key: "billing", title: "Billing", description: "Payment details" },
  { key: "confirm", title: "Confirm", description: "Review and submit" },
];

const StepperTemplate = () => {
  const [activeKey, setActiveKey] = useState("profile");
  const [orientation, setOrientation] = useState<string>(STEPPER_ORIENTATION.HORIZONTAL);
  const [variant, setVariant] = useState<string>(STEPPER_VARIANT.DEFAULT);

  const orientationOptions = Object.values(STEPPER_ORIENTATION).map((v) => ({ value: v, label: v }));
  const variantOptions = Object.values(STEPPER_VARIANT).map((v) => ({ value: v, label: v }));

  const activeIndex = stepData.findIndex((s) => s.key === activeKey);

  const codeExample = `import { Stepper, STEPPER_ORIENTATION, STEP_STATUS } from "gwan-design-system";
import { useState } from "react";

const steps = [
  { key: "step1", title: "Account",  description: "Set up your credentials" },
  { key: "step2", title: "Profile",  description: "Personal information" },
  { key: "step3", title: "Billing",  description: "Payment details" },
  { key: "step4", title: "Confirm",  description: "Review and submit" },
];

const Example = () => {
  const [activeKey, setActiveKey] = useState("step1");

  return (
    <>
      <Stepper
        steps={steps}
        activeKey={activeKey}
        orientation={STEPPER_ORIENTATION.HORIZONTAL} // horizontal | vertical
      />

      {/* Or with manual status override */}
      <Stepper
        steps={[
          { key: "s1", title: "Done",   status: STEP_STATUS.COMPLETE },
          { key: "s2", title: "Active", status: STEP_STATUS.ACTIVE },
          { key: "s3", title: "Error",  status: STEP_STATUS.ERROR },
          { key: "s4", title: "Next",   status: STEP_STATUS.PENDING },
        ]}
      />
    </>
  );
};`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <Stepper
        steps={stepData}
        activeKey={activeKey}
        orientation={orientation as STEPPER_ORIENTATION}
        variant={variant as STEPPER_VARIANT}
      />
      <div className="flex flex-row flex-wrap justify-center gap-3">
        <Button
          label="← Back"
          onClick={() => setActiveKey(stepData[Math.max(0, activeIndex - 1)].key)}
          disabled={activeIndex === 0}
        />
        <Button
          label="Next →"
          onClick={() => setActiveKey(stepData[Math.min(stepData.length - 1, activeIndex + 1)].key)}
          disabled={activeIndex === stepData.length - 1}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <SelectDropdown label="Orientation" options={orientationOptions} value={orientation} onChange={setOrientation} className="w-full sm:w-48" />
        <SelectDropdown label="Variant" options={variantOptions} value={variant} onChange={setVariant} className="w-full sm:w-48" />
      </div>
    </div>
  );

  const [demoKey, setDemoKey] = useState("billing");
  const demoIndex = stepData.findIndex((s) => s.key === demoKey);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <Stepper steps={stepData} activeKey={demoKey} />
        <div className="flex justify-center gap-3">
          <Button label="← Back" onClick={() => setDemoKey(stepData[Math.max(0, demoIndex - 1)].key)} disabled={demoIndex === 0} />
          <Button label="Next →" onClick={() => setDemoKey(stepData[Math.min(stepData.length - 1, demoIndex + 1)].key)} disabled={demoIndex === stepData.length - 1} />
        </div>
        <Stepper
          steps={[
            { key: "s1", title: "Done", description: "Completed", status: STEP_STATUS.COMPLETE },
            { key: "s2", title: "Active", description: "In progress", status: STEP_STATUS.ACTIVE },
            { key: "s3", title: "Error", description: "Needs attention", status: STEP_STATUS.ERROR },
            { key: "s4", title: "Pending", description: "Upcoming", status: STEP_STATUS.PENDING },
          ]}
        />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default StepperTemplate;
