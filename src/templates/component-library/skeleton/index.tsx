import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Skeleton, { SKELETON_VARIANT } from "@/components/skeleton";
import { useState } from "react";

const SkeletonTemplate = () => {
  const [variant, setVariant] = useState<string>(SKELETON_VARIANT.RECT);
  const [lines, setLines] = useState<string>("1");

  const variantOptions = Object.values(SKELETON_VARIANT).map((v) => ({ value: v, label: v }));
  const linesOptions = ["1", "2", "3", "4", "5"].map((v) => ({ value: v, label: `${v} line${Number(v) > 1 ? "s" : ""}` }));

  const codeExample = `import { Skeleton, SKELETON_VARIANT } from "gwan-design-system";

const Example = () => (
  <>
    {/* Rectangle (default) */}
    <Skeleton variant={SKELETON_VARIANT.RECT} width="100%" height={120} />

    {/* Text lines */}
    <Skeleton variant={SKELETON_VARIANT.TEXT} lines={3} />

    {/* Single text line with custom width */}
    <Skeleton variant={SKELETON_VARIANT.TEXT} width="60%" />

    {/* Circle avatar */}
    <Skeleton variant={SKELETON_VARIANT.CIRCLE} width={48} />
  </>
);`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="w-full max-w-sm mx-auto">
        {variant === SKELETON_VARIANT.CIRCLE ? (
          <Skeleton variant={SKELETON_VARIANT.CIRCLE} width={60} />
        ) : variant === SKELETON_VARIANT.TEXT ? (
          <Skeleton variant={SKELETON_VARIANT.TEXT} lines={Number(lines)} />
        ) : (
          <Skeleton variant={SKELETON_VARIANT.RECT} width="100%" height={80} />
        )}
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <SelectDropdown
          label="Variant"
          options={variantOptions}
          value={variant}
          onChange={setVariant}
          className="w-full sm:w-48"
        />
        {variant === SKELETON_VARIANT.TEXT && (
          <SelectDropdown
            label="Lines"
            options={linesOptions}
            value={lines}
            onChange={setLines}
            className="w-full sm:w-48"
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Card skeleton demo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[0, 1].map((i) => (
          <div key={i} className="p-4 border border-border rounded-lg flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Skeleton variant={SKELETON_VARIANT.CIRCLE} width={40} />
              <div className="flex-1">
                <Skeleton variant={SKELETON_VARIANT.TEXT} width="60%" />
                <div className="mt-1.5">
                  <Skeleton variant={SKELETON_VARIANT.TEXT} width="40%" />
                </div>
              </div>
            </div>
            <Skeleton variant={SKELETON_VARIANT.RECT} width="100%" height={100} />
            <Skeleton variant={SKELETON_VARIANT.TEXT} lines={3} />
          </div>
        ))}
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default SkeletonTemplate;
