"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Input from "@/components/input";
import Divider, { DIVIDER_ORIENTATION, DIVIDER_VARIANT } from "@/components/divider";

const DividerTemplate = () => {
  const [orientation, setOrientation] = useState<string>(DIVIDER_ORIENTATION.HORIZONTAL);
  const [variant, setVariant] = useState<string>(DIVIDER_VARIANT.SOLID);
  const [label, setLabel] = useState<string>("");

  const orientationOptions = Object.values(DIVIDER_ORIENTATION).map((v) => ({ value: v, label: v }));
  const variantOptions = Object.values(DIVIDER_VARIANT).map((v) => ({ value: v, label: v }));

  const codeExample = `import { Divider, DIVIDER_ORIENTATION, DIVIDER_VARIANT } from "gwan-design-system";

const Example = () => {
  return (
    <Divider
      orientation={DIVIDER_ORIENTATION.HORIZONTAL} // HORIZONTAL | VERTICAL
      variant={DIVIDER_VARIANT.SOLID}              // SOLID | DASHED | DOTTED
      label="or continue with"                     // optional, centered label text
      className=""                                 // optional, extra wrapper class
    />
  );
};`;

  const isVertical = orientation === DIVIDER_ORIENTATION.VERTICAL;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center min-h-16 px-8">
        {isVertical ? (
          <div className="flex items-center h-12 gap-6">
            <span className="text-sm text-muted-fg">Left</span>
            <Divider orientation={DIVIDER_ORIENTATION.VERTICAL} variant={variant as DIVIDER_VARIANT} />
            <span className="text-sm text-muted-fg">Right</span>
          </div>
        ) : (
          <div className="w-full max-w-sm">
            <Divider
              variant={variant as DIVIDER_VARIANT}
              label={label || undefined}
            />
          </div>
        )}
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
        <SelectDropdown label="Orientation" options={orientationOptions} value={orientation} onChange={setOrientation} className="w-full sm:w-48" />
        <SelectDropdown label="Variant" options={variantOptions} value={variant} onChange={setVariant} className="w-full sm:w-48" />
        {!isVertical && (
          <Input
            label="Label (optional)"
            value={label}
            onChange={(e) => setLabel((e.target as HTMLInputElement).value)}
            className="w-full sm:w-48"
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Static examples */}
      <div className="flex flex-col gap-5 px-4 max-w-md mx-auto w-full">
        <div>
          <p className="text-xs text-muted-fg mb-2">Solid</p>
          <Divider />
        </div>
        <div>
          <p className="text-xs text-muted-fg mb-2">Dashed</p>
          <Divider variant={DIVIDER_VARIANT.DASHED} />
        </div>
        <div>
          <p className="text-xs text-muted-fg mb-2">Dotted</p>
          <Divider variant={DIVIDER_VARIANT.DOTTED} />
        </div>
        <div>
          <p className="text-xs text-muted-fg mb-2">With label</p>
          <Divider label="or continue with" />
        </div>
        <div>
          <p className="text-xs text-muted-fg mb-2">Vertical</p>
          <div className="flex items-center h-10 gap-4">
            <span className="text-sm text-muted-fg">Left</span>
            <Divider orientation={DIVIDER_ORIENTATION.VERTICAL} />
            <span className="text-sm text-muted-fg">Right</span>
          </div>
        </div>
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default DividerTemplate;
