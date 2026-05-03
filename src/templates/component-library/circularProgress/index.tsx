"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Input from "@/components/input";
import CircularProgress, { CIRCULAR_PROGRESS_SIZE, CIRCULAR_PROGRESS_TYPE } from "@/components/circularProgress";

const codeExample = `import { CircularProgress, CIRCULAR_PROGRESS_SIZE, CIRCULAR_PROGRESS_TYPE } from "gwan-design-system";

const Example = () => {
  return (
    <CircularProgress
      value={75}                              // required, 0–100
      size={CIRCULAR_PROGRESS_SIZE.MD}        // optional — SM | MD | LG
      type={CIRCULAR_PROGRESS_TYPE.DEFAULT}   // optional — DEFAULT | SUCCESS | DANGER | WARNING
      showLabel={true}                        // optional, default true
      className=""                            // optional, extra wrapper class
    />
  );
};`;

const CircularProgressTemplate = () => {
  const [value, setValue] = useState("75");
  const [size, setSize] = useState<string>(CIRCULAR_PROGRESS_SIZE.MD);
  const [type, setType] = useState<string>(CIRCULAR_PROGRESS_TYPE.DEFAULT);
  const [showLabel, setShowLabel] = useState("true");

  const sizeOptions = Object.values(CIRCULAR_PROGRESS_SIZE).map((v) => ({ value: v, label: v }));
  const typeOptions = Object.values(CIRCULAR_PROGRESS_TYPE).map((v) => ({ value: v, label: v }));
  const labelOptions = [{ value: "true", label: "Visible" }, { value: "false", label: "Hidden" }];

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center min-h-24">
        <CircularProgress
          value={Number(value)}
          size={size as CIRCULAR_PROGRESS_SIZE}
          type={type as CIRCULAR_PROGRESS_TYPE}
          showLabel={showLabel === "true"}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <Input label="Value (0–100)" value={value} onChange={(e) => setValue((e.target as HTMLInputElement).value)} className="w-full sm:w-40" />
        <SelectDropdown label="Size" options={sizeOptions} value={size} onChange={setSize} className="w-full sm:w-40" />
        <SelectDropdown label="Type" options={typeOptions} value={type} onChange={setType} className="w-full sm:w-40" />
        <SelectDropdown label="Label" options={labelOptions} value={showLabel} onChange={setShowLabel} className="w-full sm:w-40" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      {/* All types at MD size */}
      <div className="flex flex-row flex-wrap justify-center gap-8 items-center">
        {Object.values(CIRCULAR_PROGRESS_TYPE).map((t) => (
          <div key={t} className="flex flex-col items-center gap-2">
            <CircularProgress value={70} type={t} size={CIRCULAR_PROGRESS_SIZE.MD} />
            <span className="text-xs text-muted-fg">{t}</span>
          </div>
        ))}
      </div>
      {/* All sizes */}
      <div className="flex flex-row flex-wrap justify-center gap-8 items-center">
        {Object.values(CIRCULAR_PROGRESS_SIZE).map((s) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <CircularProgress value={65} size={s} />
            <span className="text-xs text-muted-fg">{s}</span>
          </div>
        ))}
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default CircularProgressTemplate;
