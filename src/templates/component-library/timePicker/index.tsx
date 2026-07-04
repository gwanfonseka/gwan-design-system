"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Switch from "@/components/switch";
import TimePicker, { TIME_FORMAT } from "@/components/timePicker";
import { FORM_ELEMENT_SIZE } from "@/components/input";

const formatOptions = Object.values(TIME_FORMAT).map((v) => ({ value: v, label: v }));
const sizeOptions = Object.values(FORM_ELEMENT_SIZE).map((v) => ({ value: v, label: v }));

const codeExample = `import { TimePicker, TIME_FORMAT } from "gwan-design-system";
import { useState } from "react";

const Example = () => {
  const [time, setTime] = useState<string | null>(null);

  return (
    <TimePicker
      value={time}
      onChange={setTime}
      label="Pick a time"
      placeholder="Select time"
      format={TIME_FORMAT.H12}   // H12 | H24
      withSeconds={false}        // show seconds column
      disabled={false}
      isError={false}
      errorMessage="Required"
      size={FORM_ELEMENT_SIZE.MD}
    />
  );
};`;

const TimePickerTemplate = () => {
  const [time, setTime] = useState<string | null>(null);
  const [format, setFormat] = useState<string>(TIME_FORMAT.H12);
  const [size, setSize] = useState<string>(FORM_ELEMENT_SIZE.MD);
  const [withSeconds, setWithSeconds] = useState(false);
  const [isError, setIsError] = useState(false);

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <TimePicker
          value={time}
          onChange={setTime}
          label="Pick a time"
          format={format as TIME_FORMAT}
          withSeconds={withSeconds}
          isError={isError}
          errorMessage="Please select a time"
          size={size as FORM_ELEMENT_SIZE}
          className="w-full sm:w-64"
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
        <SelectDropdown
          label="Format"
          options={formatOptions}
          value={format}
          onChange={(v) => { setFormat(v); setTime(null); }}
          className="w-full sm:w-48"
        />
        <SelectDropdown
          label="Size"
          options={sizeOptions}
          value={size}
          onChange={setSize}
          className="w-full sm:w-48"
        />
        <Switch
          label="With seconds"
          checked={withSeconds}
          onChange={(v) => { setWithSeconds(v); setTime(null); }}
        />
        <Switch
          label="Error state"
          checked={isError}
          onChange={setIsError}
        />
      </div>
    </div>
  );

  const [staticTime, setStaticTime] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center py-4">
        <TimePicker
          value={staticTime}
          onChange={setStaticTime}
          label="Meeting time"
          format={TIME_FORMAT.H12}
          className="w-64"
        />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default TimePickerTemplate;
