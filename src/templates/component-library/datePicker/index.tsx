"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Switch from "@/components/switch";
import Callout, { CALLOUT_TYPE } from "@/components/callout";
import DatePicker, { DATE_PICKER_FORMAT } from "@/components/datePicker";
import { FORM_ELEMENT_SIZE } from "@/components/input";

const sizeOptions = Object.values(FORM_ELEMENT_SIZE).map((v) => ({
  value: v,
  label: v,
}));

const formatOptions = [
  // Date-only
  {
    value: DATE_PICKER_FORMAT.DD_MMM_YYYY,
    label: "DD MMM YYYY   →  15 Jan 2024",
  },
  {
    value: DATE_PICKER_FORMAT.DD_MM_YYYY,
    label: "DD-MM-YYYY    →  15-01-2024",
  },
  {
    value: DATE_PICKER_FORMAT.MM_DD_YYYY,
    label: "MM-DD-YYYY    →  01-15-2024",
  },
  {
    value: DATE_PICKER_FORMAT.YYYY_MM_DD,
    label: "YYYY-MM-DD    →  2024-01-15",
  },
  {
    value: DATE_PICKER_FORMAT.DD_MM_YYYY_SLASH,
    label: "DD/MM/YYYY    →  15/01/2024",
  },
  {
    value: DATE_PICKER_FORMAT.MM_DD_YYYY_SLASH,
    label: "MM/DD/YYYY    →  01/15/2024",
  },
  // 24-hour timestamp
  {
    value: DATE_PICKER_FORMAT.DD_MMM_YYYY_TIME,
    label: "DD MMM YYYY HH:mm  →  15 Jan 2024 14:30",
  },
  {
    value: DATE_PICKER_FORMAT.DD_MM_YYYY_TIME,
    label: "DD-MM-YYYY HH:mm   →  15-01-2024 14:30",
  },
  {
    value: DATE_PICKER_FORMAT.MM_DD_YYYY_TIME,
    label: "MM-DD-YYYY HH:mm   →  01-15-2024 14:30",
  },
  {
    value: DATE_PICKER_FORMAT.YYYY_MM_DD_TIME,
    label: "YYYY-MM-DD HH:mm   →  2024-01-15 14:30",
  },
  {
    value: DATE_PICKER_FORMAT.DD_MM_YYYY_SLASH_TIME,
    label: "DD/MM/YYYY HH:mm   →  15/01/2024 14:30",
  },
  {
    value: DATE_PICKER_FORMAT.MM_DD_YYYY_SLASH_TIME,
    label: "MM/DD/YYYY HH:mm   →  01/15/2024 14:30",
  },
  // 12-hour timestamp
  {
    value: DATE_PICKER_FORMAT.DD_MMM_YYYY_TIME_12,
    label: "DD MMM YYYY hh:mm A  →  15 Jan 2024 02:30 PM",
  },
  {
    value: DATE_PICKER_FORMAT.DD_MM_YYYY_TIME_12,
    label: "DD-MM-YYYY hh:mm A   →  15-01-2024 02:30 PM",
  },
  {
    value: DATE_PICKER_FORMAT.MM_DD_YYYY_TIME_12,
    label: "MM-DD-YYYY hh:mm A   →  01-15-2024 02:30 PM",
  },
  {
    value: DATE_PICKER_FORMAT.YYYY_MM_DD_TIME_12,
    label: "YYYY-MM-DD hh:mm A   →  2024-01-15 02:30 PM",
  },
  {
    value: DATE_PICKER_FORMAT.DD_MM_YYYY_SLASH_TIME_12,
    label: "DD/MM/YYYY hh:mm A   →  15/01/2024 02:30 PM",
  },
  {
    value: DATE_PICKER_FORMAT.MM_DD_YYYY_SLASH_TIME_12,
    label: "MM/DD/YYYY hh:mm A   →  01/15/2024 02:30 PM",
  },
];

const codeExample = `import { DatePicker, DATE_PICKER_FORMAT, FORM_ELEMENT_SIZE } from "gwan-design-system";
import { useState } from "react";

const Example = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <DatePicker
      value={date}
      onChange={setDate}               // always returns Date | null
      label="Select a date"            // optional
      placeholder="Select date"        // optional
      format={DATE_PICKER_FORMAT.DD_MMM_YYYY} // optional — 18 formats available
      timePicker                       // optional — manual time input; AM/PM for 12h formats
      minDate={new Date()}             // optional — disables dates before this
      maxDate={new Date(2026, 11, 31)} // optional — disables dates after this
      disabled={false}                 // optional
      isError={false}                  // optional — red border + label
      errorMessage="Required"          // optional — shown below when isError is true
      size={FORM_ELEMENT_SIZE.MD}      // optional — MD (default) | SM
    />
  );
};`;

const DatePickerTemplate = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [playDate, setPlayDate] = useState<Date | null>(null);
  const [size, setSize] = useState<FORM_ELEMENT_SIZE>(FORM_ELEMENT_SIZE.MD);
  const [format, setFormat] = useState<DATE_PICKER_FORMAT>(
    DATE_PICKER_FORMAT.DD_MMM_YYYY,
  );
  const [timePicker, setTimePicker] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [minDate, setMinDate] = useState<Date | null>(null);
  const [maxDate, setMaxDate] = useState<Date | null>(null);

  const reset = () => setPlayDate(null);

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center py-4">
        <DatePicker
          value={playDate}
          onChange={setPlayDate}
          label="Select a date"
          format={format}
          timePicker={timePicker}
          disabled={disabled}
          isError={isError}
          errorMessage={isError ? "Please select a valid date" : undefined}
          minDate={minDate ?? undefined}
          maxDate={maxDate ?? undefined}
          size={size}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-6 items-end">
        <SelectDropdown
          label="Format"
          options={formatOptions}
          value={format}
          onChange={(v) => {
            setFormat(v as DATE_PICKER_FORMAT);
            reset();
          }}
          className="w-80"
        />
        <SelectDropdown
          label="Size"
          options={sizeOptions}
          value={size}
          onChange={(v) => setSize(v as FORM_ELEMENT_SIZE)}
          className="w-32"
        />
        <DatePicker
          label="Min date"
          value={minDate}
          onChange={(d) => {
            setMinDate(d);
            reset();
          }}
          maxDate={maxDate ?? undefined}
          placeholder="No minimum"
          size={FORM_ELEMENT_SIZE.MD}
        />
        <DatePicker
          label="Max date"
          value={maxDate}
          onChange={(d) => {
            setMaxDate(d);
            reset();
          }}
          minDate={minDate ?? undefined}
          placeholder="No maximum"
          size={FORM_ELEMENT_SIZE.MD}
        />
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-medium text-muted-fg">Time picker</p>
          <Switch
            checked={timePicker}
            onChange={(v) => {
              setTimePicker(v);
              reset();
            }}
          />
        </div>
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
      {/* Single clean example */}
      <div className="flex justify-center py-4">
        <DatePicker
          value={date}
          onChange={setDate}
          label="Date of birth"
          placeholder="Select date"
        />
      </div>

      <Playground template={renderPlayground()} />

      <Callout type={CALLOUT_TYPE.INFO} title="Available formats">
        <div className="flex flex-col gap-4 text-sm">
          <div>
            <p className="font-semibold mb-1.5">Date-only</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
              {[
                [
                  "DD MMM YYYY",
                  "15 Jan 2024",
                  "Day · short month · year — default",
                ],
                [
                  "DD-MM-YYYY",
                  "15-01-2024",
                  "Day · month · year, hyphen-separated",
                ],
                ["MM-DD-YYYY", "01-15-2024", "US format, hyphen-separated"],
                [
                  "YYYY-MM-DD",
                  "2024-01-15",
                  "ISO 8601 — ideal for databases & APIs",
                ],
                [
                  "DD/MM/YYYY",
                  "15/01/2024",
                  "Day · month · year, slash-separated",
                ],
                ["MM/DD/YYYY", "01/15/2024", "US format, slash-separated"],
              ].map(([fmt, example, note]) => (
                <div key={fmt} className="flex flex-col">
                  <span className="font-mono text-xs text-primary-default">
                    {fmt}
                  </span>
                  <span className="text-xs text-muted-fg">
                    {example} — {note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold mb-1.5">
              24-hour timestamp{" "}
              <span className="font-normal text-muted-fg text-xs">
                (HH:mm — 00:00 to 23:59)
              </span>
            </p>
            <p className="text-xs text-muted-fg mb-1.5">
              All 6 date formats above are available with{" "}
              <span className="font-mono">HH:mm</span> appended. The time is
              auto-stamped from the system clock when a date is selected. Enable{" "}
              <span className="font-semibold">timePicker</span> to let users set
              it manually.
            </p>
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-xs text-primary-default">
                DD MMM YYYY HH:mm → 15 Jan 2024 14:30
              </span>
              <span className="font-mono text-xs text-primary-default">
                YYYY-MM-DD HH:mm → 2024-01-15 14:30
              </span>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-1.5">
              12-hour timestamp{" "}
              <span className="font-normal text-muted-fg text-xs">
                (hh:mm A — 01:00 AM to 12:59 PM)
              </span>
            </p>
            <p className="text-xs text-muted-fg mb-1.5">
              Same 6 date formats with{" "}
              <span className="font-mono">hh:mm A</span> appended. System clock
              is auto-stamped on selection. When{" "}
              <span className="font-semibold">timePicker</span> is on, an AM/PM
              toggle appears in the time inputs.
            </p>
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-xs text-primary-default">
                DD MMM YYYY hh:mm A → 15 Jan 2024 02:30 PM
              </span>
              <span className="font-mono text-xs text-primary-default">
                YYYY-MM-DD hh:mm A → 2024-01-15 02:30 PM
              </span>
            </div>
          </div>

          <div className="text-xs text-muted-fg border-t border-border pt-3">
            <span className="font-semibold text-foreground">timePicker</span>{" "}
            prop — when enabled, the calendar stays open after date selection so
            the user can set the time manually. Without it, the system clock
            time is stamped automatically and the calendar closes immediately.
            The{" "}
            <code className="font-mono bg-surface-raised px-1 rounded">
              onChange
            </code>{" "}
            callback always returns a full{" "}
            <code className="font-mono bg-surface-raised px-1 rounded">
              Date
            </code>{" "}
            object regardless of format.
          </div>
        </div>
      </Callout>

      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default DatePickerTemplate;
