"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import Switch from "@/components/switch";
import SelectDropdown from "@/components/selectDropdown";
import Input from "@/components/input";
import Slider, { SLIDER_SIZE } from "@/components/slider";

const codeExample = `import { Slider, SLIDER_SIZE } from "gwan-design-system";
import { useState } from "react";

// Single thumb
const SingleExample = () => {
  const [vol, setVol] = useState(40);
  return (
    <Slider
      label="Volume"
      value={vol}
      onChange={(v) => setVol(v as number)}
      min={0}
      max={100}
      step={1}
      showTooltip
      size={SLIDER_SIZE.MD}   // SM | MD | LG
    />
  );
};

// Dual thumb (range)
const RangeExample = () => {
  const [range, setRange] = useState<[number, number]>([20, 80]);
  return (
    <Slider
      label="Price range"
      value={range}
      onChange={(v) => setRange(v as [number, number])}
      min={0}
      max={200}
      step={5}
      showTooltip
    />
  );
};`;

const sizeOptions = Object.values(SLIDER_SIZE).map((v) => ({ value: v, label: v }));

const SliderTemplate = () => {
  const [single, setSingle]     = useState(40);
  const [playVal, setPlayVal]   = useState<number | [number, number]>(50);
  const [isRange, setIsRange]   = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize]         = useState<SLIDER_SIZE>(SLIDER_SIZE.MD);
  const [step, setStep]         = useState("1");

  const handleIsRange = (v: boolean) => {
    setIsRange(v);
    setPlayVal(v ? [20, 80] : 50);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center py-4 max-w-sm mx-auto w-full">
        <Slider
          label="Volume"
          value={single}
          onChange={(v) => setSingle(v as number)}
          showTooltip
          className="w-full"
        />
      </div>

      <Playground
        template={
          <div className="flex flex-col gap-8">
            <div className="flex justify-center py-4">
              <Slider
                label={isRange ? "Price range" : "Volume"}
                value={playVal}
                onChange={setPlayVal}
                min={0}
                max={100}
                step={Math.max(1, Number(step) || 1)}
                showTooltip={showTooltip}
                disabled={disabled}
                size={size}
                className="w-full max-w-sm"
              />
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4 items-end">
              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-medium text-muted-fg">Range mode</p>
                <Switch checked={isRange} onChange={handleIsRange} />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-medium text-muted-fg">Show tooltip</p>
                <Switch checked={showTooltip} onChange={setShowTooltip} />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-medium text-muted-fg">Disabled</p>
                <Switch checked={disabled} onChange={setDisabled} />
              </div>
              <SelectDropdown
                label="Size"
                options={sizeOptions}
                value={size}
                onChange={(v) => setSize(v as SLIDER_SIZE)}
                className="w-32"
              />
              <Input
                label="Step"
                type="number"
                value={step}
                onChange={(e) => setStep((e.target as HTMLInputElement).value)}
                min={1}
                max={50}
                className="w-24"
              />
            </div>
          </div>
        }
      />

      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default SliderTemplate;
