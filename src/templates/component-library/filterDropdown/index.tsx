import FilterDropdown from "@/components/filterDropdown";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";

const FilterPanel = ({ dismissPanel }: { dismissPanel: () => void }) => {
  return (
    <div className="w-full sm:w-96 h-auto p-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Filter</h2>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Category</label>
          <select
            className="border border-border rounded-lg p-2 bg-surface text-foreground"
            onChange={dismissPanel}
          >
            <option value="">Select a category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Price Range</label>
          <input
            type="range"
            min="0"
            max="100"
            className="w-full"
            onChange={dismissPanel}
          />
        </div>
        <button
          className="bg-accent text-accent-fg rounded-lg p-2"
          onClick={dismissPanel}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

const codeExample = `import FilterDropdown from "gwan-design-system";

const Example = () => {
  return (
    <FilterDropdown>
      {(closeDropdown) => (
        <div className="w-96 p-4 flex flex-col gap-4">
          <h2 className="text-lg font-bold">Filter</h2>

          {/* Your filter controls here */}
          <select onChange={closeDropdown}>
            <option value="">Select a category</option>
            <option value="a">Category A</option>
          </select>

          <button onClick={closeDropdown}>
            Apply Filters
          </button>
        </div>
      )}
    </FilterDropdown>
  );
};`;

const FilterDropdowns = () => {
  const renderPlayground = () => (
    <div className="flex justify-center">
      <FilterDropdown>
        {(closeDropdown) => <FilterPanel dismissPanel={closeDropdown} />}
      </FilterDropdown>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default FilterDropdowns;
