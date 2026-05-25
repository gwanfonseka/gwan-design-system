"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Switch from "@/components/switch";
import MultiSelect, { MULTI_SELECT_SIZE } from "@/components/multiSelect";

const sizeOptions = Object.values(MULTI_SELECT_SIZE).map((v) => ({ value: v, label: v }));

const frameworkOptions = [
  { value: "react",   label: "React"   },
  { value: "next",    label: "Next.js" },
  { value: "vue",     label: "Vue"     },
  { value: "svelte",  label: "Svelte"  },
  { value: "angular", label: "Angular" },
  { value: "astro",   label: "Astro"   },
];

const codeExample = `import { MultiSelect, MULTI_SELECT_SIZE } from "gwan-design-system";
import type { IMultiSelectOption } from "gwan-design-system";
import { useState } from "react";

const options: IMultiSelectOption[] = [
  { value: "react",  label: "React"   },
  { value: "next",   label: "Next.js" },
  { value: "vue",    label: "Vue"     },
  { value: "svelte", label: "Svelte"  },
];

const Example = () => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <MultiSelect
      label="Frameworks"               // optional label above trigger
      options={options}
      value={selected}                 // controlled: string[] of selected values
      onChange={setSelected}           // receives full updated array on each change
      placeholder="Select frameworks…" // shown when nothing selected
      size={MULTI_SELECT_SIZE.MD}      // MD | SM
      disabled={false}
      isError={false}
      errorMessage=""
      required={false}
    />
  );
};`;

const MultiSelectTemplate = () => {
  const [selected, setSelected] = useState<string[]>(["react", "next"]);
  const [size, setSize] = useState<MULTI_SELECT_SIZE>(MULTI_SELECT_SIZE.MD);
  const [disabled, setDisabled] = useState(false);
  const [isError, setIsError] = useState(false);

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center py-4">
        <MultiSelect
          label="Frameworks"
          options={frameworkOptions}
          value={selected}
          onChange={setSelected}
          placeholder="Select frameworks…"
          size={size}
          disabled={disabled}
          isError={isError}
          errorMessage={isError ? "Please select at least one option." : ""}
          className="w-full max-w-sm"
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <SelectDropdown
          label="Size"
          options={sizeOptions}
          value={size}
          onChange={(v) => setSize(v as MULTI_SELECT_SIZE)}
          className="w-36"
        />
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-medium text-muted-fg">Disabled</p>
          <Switch checked={disabled} onChange={setDisabled} />
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-medium text-muted-fg">Error</p>
          <Switch checked={isError} onChange={setIsError} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center py-4">
        <MultiSelect
          label="Frameworks"
          options={frameworkOptions}
          value={["react", "next"]}
          onChange={() => {}}
          size={MULTI_SELECT_SIZE.MD}
          className="w-72"
        />
      </div>

      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default MultiSelectTemplate;
