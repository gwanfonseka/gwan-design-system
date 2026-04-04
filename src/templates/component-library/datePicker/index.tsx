import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import DatePicker from "@/components/datePicker";
import { useState } from "react";

const DatePickerTemplate = () => {
  const [date1, setDate1] = useState<Date | null>(null);
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [date3, setDate3] = useState<Date | null>(null);

  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 0);

  const codeExample = `import { DatePicker } from "gwan-design-system";
import { useState } from "react";

const Example = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      {/* Basic */}
      <DatePicker
        value={date}
        onChange={setDate}
        label="Select date"
        placeholder="DD MMM YYYY"
      />

      {/* With min/max range */}
      <DatePicker
        value={date}
        onChange={setDate}
        label="Available dates"
        minDate={new Date()}
        maxDate={new Date(2025, 11, 31)}
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
