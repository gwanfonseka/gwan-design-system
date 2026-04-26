"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Spinner, { SPINNER_SIZE, SPINNER_COLOR } from "@/components/spinner";

const SpinnerTemplate = () => {
  const [size, setSize] = useState<string>(SPINNER_SIZE.MD);
  const [color, setColor] = useState<string>(SPINNER_COLOR.DEFAULT);

  const sizeOptions = Object.values(SPINNER_SIZE).map((v) => ({ value: v, label: v }));
  const colorOptions = Object.values(SPINNER_COLOR).map((v) => ({ value: v, label: v }));

  const codeExample = `import { Spinner, SPINNER_SIZE, SPINNER_COLOR } from "gwan-design-system";

const Example = () => {
  return (
    <Spinner
      size={SPINNER_SIZE.MD}          // XS | SM | MD | LG | XL
      color={SPINNER_COLOR.DEFAULT}   // DEFAULT | PRIMARY | SUCCESS | DANGER | WARNING
      className=""                    // optional, extra wrapper class
    />
  );
};`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center min-h-16">
        <Spinner size={size as SPINNER_SIZE} color={color as SPINNER_COLOR} />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
        <SelectDropdown label="Size" options={sizeOptions} value={size} onChange={setSize} className="w-full sm:w-48" />
        <SelectDropdown label="Color" options={colorOptions} value={color} onChange={setColor} className="w-full sm:w-48" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Static examples — all sizes */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-row flex-wrap justify-center items-end gap-6">
          {Object.values(SPINNER_SIZE).map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <Spinner size={s} />
              <span className="text-xs text-muted-fg">{s}</span>
            </div>
          ))}
        </div>
        {/* All colors */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-6">
          {Object.values(SPINNER_COLOR).map((c) => (
            <div key={c} className="flex flex-col items-center gap-2">
              <Spinner color={c} />
              <span className="text-xs text-muted-fg">{c}</span>
            </div>
          ))}
        </div>
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default SpinnerTemplate;
