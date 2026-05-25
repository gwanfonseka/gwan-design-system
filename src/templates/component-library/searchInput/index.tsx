"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import Switch from "@/components/switch";
import SelectDropdown from "@/components/selectDropdown";
import SearchInput from "@/components/searchInput";
import { FORM_ELEMENT_SIZE } from "@/components/input";

const codeExample = `import { SearchInput, FORM_ELEMENT_SIZE } from "gwan-design-system";
import { useState } from "react";

const Example = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (q: string) => {
    if (!q) return;
    setLoading(true);
    await fetchResults(q);
    setLoading(false);
  };

  return (
    <SearchInput
      label="Search users"             // optional label
      value={query}
      onChange={setQuery}              // called on every keystroke
      onSearch={handleSearch}          // debounced — fires after typing stops
      debounce={300}                   // ms to wait (default 300)
      placeholder="Search…"
      isLoading={loading}              // shows spinner on right
      size={FORM_ELEMENT_SIZE.MD}      // MD | SM
      disabled={false}
    />
  );
};`;

const sizeOptions = Object.values(FORM_ELEMENT_SIZE).map((v) => ({ value: v, label: v }));

const SearchInputTemplate = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState<FORM_ELEMENT_SIZE>(FORM_ELEMENT_SIZE.MD);

  const handleSearch = (q: string) => {
    if (!q) return;
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1200);
  };

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center py-4">
        <SearchInput
          label="Search users"
          value={query}
          onChange={setQuery}
          onSearch={handleSearch}
          debounce={400}
          placeholder="Type to search…"
          isLoading={isLoading}
          disabled={disabled}
          size={size}
          className="w-full max-w-sm"
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-medium text-muted-fg">Loading</p>
          <Switch checked={isLoading} onChange={setIsLoading} />
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-medium text-muted-fg">Disabled</p>
          <Switch checked={disabled} onChange={setDisabled} />
        </div>
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
      <div className="flex justify-center py-4">
        <SearchInput
          label="Search"
          value=""
          onChange={() => {}}
          placeholder="Search…"
          className="w-72"
        />
      </div>

      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default SearchInputTemplate;
