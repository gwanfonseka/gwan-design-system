"use client";

import Checkbox from "@/components/checkbox";
import CodeSnippet from "@/components/codeSnippet";
import Input, { FORM_ELEMENT_EDGE_STYLE, FORM_ELEMENT_SIZE } from "@/components/input";
import Playground from "@/components/playground";
import SelectDropdown, { type ISelectDropdownOption } from "@/components/selectDropdown";
import Switch from "@/components/switch";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

const baseOptions: ISelectDropdownOption[] = Array.from({ length: 34 }, (_, i) => ({
  value: String(i + 1),
  label: `Option ${i + 1}`,
}));

const codeExample = `import { SelectDropdown, type ISelectDropdownOption, FORM_ELEMENT_SIZE, FORM_ELEMENT_EDGE_STYLE } from "gwan-design-system";
import { useState, useCallback, useRef } from "react";

const options: ISelectDropdownOption[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

// ── Local search (filter options in memory) ───────────────────────
const LocalSearchExample = () => {
  const [value, setValue] = useState("");
  return (
    <SelectDropdown
      label="Framework"
      options={options}
      value={value}
      onChange={setValue}
      searchable       // enables the search box, filters options locally
    />
  );
};

// ── Async / server-side search with debounce ──────────────────────
const AsyncSearchExample = () => {
  const [value, setValue] = useState("");
  const [asyncOptions, setAsyncOptions] = useState<ISelectDropdownOption[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchOptions = useCallback(async (query: string) => {
    setLoading(true);
    const results = await myApi.search(query); // your API call
    setAsyncOptions(results);
    setLoading(false);
  }, []);

  return (
    <SelectDropdown
      label="User"
      options={asyncOptions}
      value={value}
      onChange={setValue}
      searchable
      onSearch={fetchOptions}  // triggers after debounce delay
      debounce={300}           // ms, default 300
      isLoading={loading}      // shows spinner while fetching
      emptyMessage="No users found"
    />
  );
};`;

const SelectDropdowns = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [dropdownLabel, setDropdownLabel] = useState<string>("Label");
  const [dropdownPlaceholder, setDropdownPlaceholder] = useState<string>("Placeholder");
  const [isRequired, setIsRequired] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("This is an error message");
  const [edges, setEdges] = useState<string>(FORM_ELEMENT_EDGE_STYLE.ROUNDED);
  const [size, setSize] = useState<FORM_ELEMENT_SIZE>(FORM_ELEMENT_SIZE.MD);
  const [searchable, setSearchable] = useState(false);
  const [asyncMode, setAsyncMode] = useState(false);
  const [asyncOptions, setAsyncOptions] = useState<ISelectDropdownOption[]>(baseOptions);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sizeOptions = Object.values(FORM_ELEMENT_SIZE).map((v) => ({ value: v, label: v }));
  const edgesOptions = [
    { value: FORM_ELEMENT_EDGE_STYLE.ROUNDED, label: "rounded" },
    { value: FORM_ELEMENT_EDGE_STYLE.SQUARED, label: "squared" },
  ];

  // Simulated async search — filters baseOptions after a fake 600ms network delay
  const handleAsyncSearch = useCallback((query: string) => {
    setIsLoading(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setAsyncOptions(
        baseOptions.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()))
      );
      setIsLoading(false);
    }, 600);
  }, []);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row flex-wrap justify-center gap-8 items-center">
        <SelectDropdown
          options={asyncMode ? asyncOptions : baseOptions}
          label={dropdownLabel}
          placeholder={dropdownPlaceholder}
          value={selectedOption}
          onChange={(option) => setSelectedOption(option)}
          className="w-full sm:w-80"
          disabled={isDisabled}
          isError={isError}
          errorMessage={errorMessage}
          required={isRequired}
          edges={edges as FORM_ELEMENT_EDGE_STYLE}
          size={size}
          searchable={searchable || asyncMode}
          onSearch={asyncMode ? handleAsyncSearch : undefined}
          debounce={300}
          isLoading={isLoading}
          emptyMessage="No options found"
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-8 items-end">
        <Input
          label="Dropdown label"
          value={dropdownLabel}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDropdownLabel(e.target.value)}
          className="w-full sm:w-56"
        />
        <Input
          label="Dropdown placeholder"
          value={dropdownPlaceholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDropdownPlaceholder(e.target.value)}
          className="w-full sm:w-56"
        />
        <SelectDropdown
          label="Edges style"
          options={edgesOptions}
          value={edges}
          onChange={setEdges}
          className="w-full sm:w-48"
        />
        <SelectDropdown
          label="Size"
          options={sizeOptions}
          value={size}
          onChange={(v) => setSize(v as FORM_ELEMENT_SIZE)}
          className="w-full sm:w-48"
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-6 items-center">
        <Switch label="Searchable (local)" checked={searchable} onChange={(v) => { setSearchable(v); if (v) setAsyncMode(false); }} />
        <Switch label="Async search (simulated)" checked={asyncMode} onChange={(v) => { setAsyncMode(v); if (v) setSearchable(false); }} />
        <div className="flex flex-col gap-2">
          <Checkbox label="Required" checked={isRequired} onChange={setIsRequired} />
          <Checkbox label="Disabled" checked={isDisabled} onChange={setIsDisabled} />
          <Checkbox label="Error state" checked={isError} onChange={setIsError} />
        </div>
      </div>
    </div>
  );

  const [staticVal, setStaticVal] = useState("");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center py-4">
        <SelectDropdown
          options={baseOptions}
          label="Select dropdown"
          placeholder="Select an option"
          value={staticVal}
          onChange={setStaticVal}
          searchable
          className="w-full sm:w-80"
        />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default SelectDropdowns;
