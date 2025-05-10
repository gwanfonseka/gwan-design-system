import FilterDropdown from "@/components/filterDropdown";

const FilterDropdowns = () => {
  return (
    <FilterDropdown>
      {(closeDropdown) => <FilterPanel dismissPanel={closeDropdown} />}
    </FilterDropdown>
  );
};

const FilterPanel = ({ dismissPanel }: { dismissPanel: () => void }) => {
  return (
    <div className="w-96 h-80 p-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Filter</h2>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Category</label>
          <select
            className="border border-neutrola-300 rounded-lg p-2"
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
          className="bg-blue-500 text-white rounded-lg p-2"
          onClick={dismissPanel}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterDropdowns;
