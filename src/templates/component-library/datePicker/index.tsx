import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import DatePicker from "@/components/datePicker";
import { FORM_ELEMENT_SIZE } from "@/components/input";
import { useState } from "react";

const sizeOptions = Object.values(FORM_ELEMENT_SIZE).map((v) => ({ value: v, label: v }));

const DatePickerTemplate = () => {
  const [date1, setDate1] = useState<Date | null>(null);
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [date3, setDate3] = useState<Date | null>(null);
  const [size, setSize] = useState<FORM_ELEMENT_SIZE>(FORM_ELEMENT_SIZE.MD);

  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 0);

  const codeExample = `import { DatePicker, FORM_ELEMENT_SIZE } from "gwan-design-system";
import { useState } from "react";

const Example = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <DatePicker
        value={date}
        onChange={setDate}
        label="Select date"
        placeholder="DD MMM YYYY"
        size={FORM_ELEMENT_SIZE.MD}    // MD | SM
      />

      {/* With min/max range */}
      <DatePicker
        value={date}
        onChange={setDate}
        label="Available dates"
        minDate={new Date()}
        maxDate={new Date(2026, 11, 31)}
      />

      {/* Disabled */}
      <DatePicker value={date} onChange={setDate} disabled />
    </>
  );
};`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row flex-wrap justify-center gap-8 py-4">
        <DatePicker
          value={date3}
          onChange={setDate3}
          label="Select a date"
          placeholder="DD MMM YYYY"
          size={size}
        />
      </div>
      <div className="flex justify-center">
        <SelectDropdown
          label="Size"
          options={sizeOptions}
          value={size}
          onChange={(v) => setSize(v as FORM_ELEMENT_SIZE)}
          className="w-36"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row flex-wrap gap-8 items-end justify-center">
        <DatePicker
          value={date1}
          onChange={setDate1}
          label="Start date"
          placeholder="Select start date"
        />
        <DatePicker
          value={date2}
          onChange={setDate2}
          label="Pre-selected"
        />
        <DatePicker
          value={null}
          onChange={() => {}}
          label="Disabled"
          disabled
        />
        <DatePicker
          value={date1}
          onChange={setDate1}
          label="Future dates only"
          minDate={minDate}
          maxDate={maxDate}
          placeholder="Available dates"
        />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default DatePickerTemplate;
