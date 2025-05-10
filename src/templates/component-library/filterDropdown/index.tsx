import FilterDropdown from "@/components/filterDropdown";

const FilterDropdowns = () => {
  return <FilterDropdown>{(_closeDropdown) => <FilterPanel />}</FilterDropdown>;
};

const FilterPanel = () => {
  return <div className="w-96 h-80 p-4"></div>;
};

export default FilterDropdowns;
