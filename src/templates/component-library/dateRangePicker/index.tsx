"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Switch from "@/components/switch";
import DateRangePicker from "@/components/dateRangePicker";
import { DATE_PICKER_FORMAT } from "@/components/datePicker";
import { FORM_ELEMENT_SIZE } from "@/components/input";

const formatOptions = [
  { value: DATE_PICKER_FORMAT.DD_MMM_YYYY, label: "DD MMM YYYY" },
  { value: DATE_PICKER_FORMAT.DD_MM_YYYY,  label: "DD-MM-YYYY" },
  { value: DATE_PICKER_FORMAT.MM_DD_YYYY,  label: "MM-DD-YYYY" },
  { value: DATE_PICKER_FORMAT.YYYY_MM_DD,  label: "YYYY-MM-DD" },
];
const sizeOptions = Object.values(FORM_ELEMENT_SIZE).map((v) => ({ value: v, label: v }));

const codeExample = `import { DateRangePicker, DATE_PICKER_FORMAT } from "gwan-design-system";
import { useState } from "react";

const Example = () => {
  const [range, setRange] = useState<{ startDate: Date | null; endDate: Date | null }>({
    startDate: null,
    endDate: null,
  });

  return (
    <DateRangePicker
      startDate={range.startDate}
      endDate={range.endDate}
      onChange={setRange}
      label="Date range"
      startPlaceholder="Start date"    // optional
      endPlaceholder="End date"        // optional
      format={DATE_PICKER_FORMAT.DD_MMM_YYYY}
      disabled={false}
      isError={false}
      errorMessage="Required"
      size={FORM_ELEMENT_SIZE.MD}
    />
  );
};`;

const DateRangePickerTemplate = () => {
  const [range, setRange] = useState<{ startDate: Date | null; endDate: Date | null }>({ startDate: null, endDate: null });
  const [format, setFormat] = useState<string>(DATE_PICKER_FORMAT.DD_MMM_YYYY);
  const [size, setSize] = useState<string>(FORM_ELEMENT_SIZE.MD);
  const [isError, setIsError] = useState(false);

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <DateRangePicker
          startDate={range.startDate}
          endDate={range.endDate}
          onChange={setRange}
          label="Date range"
          format={format as DATE_PICKER_FORMAT}
          size={size as FORM_ELEMENT_SIZE}
          isError={isError}
          errorMessage="Please select a date range"
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
        <SelectDropdown
          label="Format"
          options={formatOptions}
          value={format}
          onChange={setFormat}
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
          label="Error state"
          checked={isError}
          onChange={setIsError}
        />
      </div>
    </div>
  );

  const [staticRange, setStaticRange] = useState<{ startDate: Date | null; endDate: Date | null }>({ startDate: null, endDate: null });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center py-4">
        <DateRangePicker
          startDate={staticRange.startDate}
          endDate={staticRange.endDate}
          onChange={setStaticRange}
          label="Select date range"
          format={DATE_PICKER_FORMAT.DD_MMM_YYYY}
        />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default DateRangePickerTemplate;
