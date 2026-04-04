import CodeSnippet from "@/components/codeSnippet";
import Input from "@/components/input";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Badge, {
  BADGE_TYPE,
  BADGE_VARIANT,
  BADGE_SIZE,
} from "@/components/badge";
import { useState } from "react";

const Badges = () => {
  const [label, setLabel] = useState("Badge");
  const [type, setType] = useState<string>(BADGE_TYPE.DEFAULT);
  const [variant, setVariant] = useState<string>(BADGE_VARIANT.SOLID);
  const [size, setSize] = useState<string>(BADGE_SIZE.MEDIUM);
  const [dot, setDot] = useState<string>("false");

  const typeOptions = Object.values(BADGE_TYPE).map((v) => ({
    value: v,
    label: v,
  }));
  const variantOptions = Object.values(BADGE_VARIANT).map((v) => ({
    value: v,
    label: v,
  }));
  const sizeOptions = Object.values(BADGE_SIZE).map((v) => ({
    value: v,
    label: v,
  }));
  const dotOptions = [
    { value: "false", label: "none" },
    { value: "dot-only", label: "dot only" },
    { value: "dot-label", label: "dot + label" },
  ];

  const isDotOnly = dot === "dot-only";
  const hasDot = dot === "dot-label";

  const codeExample = `import { Badge, BADGE_TYPE, BADGE_VARIANT, BADGE_SIZE } from "gwan-design-system";

const Example = () => {
  return (
    <>
      {/* Status badge */}
      <Badge type={BADGE_TYPE.SUCCESS} label="Active" />

      {/* With dot indicator */}
      <Badge type={BADGE_TYPE.WARNING} label="Pending" dot />

      {/* Dot only */}
      <Badge type={BADGE_TYPE.DANGER} dot />

      {/* Outline variant */}
      <Badge type={BADGE_TYPE.INFO} label="Info" variant={BADGE_VARIANT.OUTLINE} />

      {/* Small size */}
      <Badge type={BADGE_TYPE.DEFAULT} label="v1.0" size={BADGE_SIZE.SMALL} />
    </>
  );
};`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center min-h-16">
        <Badge
          type={type as BADGE_TYPE}
          variant={variant as BADGE_VARIANT}
          size={size as BADGE_SIZE}
          label={isDotOnly ? undefined : label}
          dot={isDotOnly || hasDot}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
        <Input
          label="Label"
          value={label}
          onChange={(e) => setLabel((e.target as HTMLInputElement).value)}
          className="w-full sm:w-48"
        />
        <SelectDropdown
          label="Type"
          options={typeOptions}
          value={type}
          onChange={setType}
          className="w-full sm:w-48"
        />
        <SelectDropdown
          label="Variant"
          options={variantOptions}
          value={variant}
          onChange={setVariant}
          className="w-full sm:w-48"
        />
        <SelectDropdown
          label="Size"
          options={sizeOptions}
          value={size}
          onChange={setSize}
          className="w-full sm:w-48"
        />
        <SelectDropdown
          label="Dot"
          options={dotOptions}
          value={dot}
          onChange={setDot}
          className="w-full sm:w-48"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
        <Badge type={BADGE_TYPE.DEFAULT} label="Default" />
        <Badge type={BADGE_TYPE.SUCCESS} label="Success" />
        <Badge type={BADGE_TYPE.INFO} label="Info" />
        <Badge type={BADGE_TYPE.WARNING} label="Warning" />
        <Badge type={BADGE_TYPE.DANGER} label="Danger" />
        <Badge type={BADGE_TYPE.SUCCESS} dot label="Online" />
        <Badge type={BADGE_TYPE.DANGER} dot />
        <Badge type={BADGE_TYPE.INFO} label="v1.0" size={BADGE_SIZE.SMALL} />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Badges;
