import Button, { BUTTON_SIZE, BUTTON_VARIANTS } from "@/components/button";
import Checkbox from "@/components/checkbox";
import FilterDropdown, { type IFilter } from "@/components/filterDropdown";
import SelectDropdown from "@/components/selectDropdown";
import { data, defineStory, text } from "@/playground";

const FilterPanel = ({ close }: { close: () => void }) => (
  <div className="w-72 p-4 flex flex-col gap-4">
    <p className="text-sm font-semibold text-foreground">Filter orders</p>
    <SelectDropdown
      label="Status"
      options={[{ label: "Any" }, { label: "Pending" }, { label: "Delivered" }]}
      value="Any"
      onChange={() => {}}
    />
    <Checkbox label="Only my orders" checked={false} onChange={() => {}} />
    <div className="flex justify-end gap-2">
      <Button label="Cancel" variant={BUTTON_VARIANTS.TERTIARY} size={BUTTON_SIZE.SM} onClick={close} />
      <Button label="Apply" size={BUTTON_SIZE.SM} onClick={close} />
    </div>
  </div>
);

const PANEL_CODE = `{(closeDropdown) => (
  <div className="w-72 p-4 flex flex-col gap-4">
    <p className="text-sm font-semibold">Filter orders</p>
    {/* your filter controls */}
    <Button label="Apply" size={BUTTON_SIZE.SM} onClick={closeDropdown} />
  </div>
)}`;

const LIST_CODE = `{(closeDropdown) => (
  <ul className="w-48 py-1 text-sm">
    {["Newest", "Oldest", "Price"].map((sort) => (
      <li key={sort}>
        <button className="w-full px-4 py-2 text-left" onClick={closeDropdown}>{sort}</button>
      </li>
    ))}
  </ul>
)}`;

export default defineStory<IFilter>({
  name: "FilterDropdown",
  component: FilterDropdown,
  args: { children: "Filter panel" },
  argTypes: {
    children: {
      description:
        "Render function for the panel. It receives `closeDropdown`; call it when the user applies or cancels.",
      control: data(
        {
          "Filter panel": (close: () => void) => <FilterPanel close={close} />,
          "Sort list": (close: () => void) => (
            <ul className="w-48 py-1 text-sm text-foreground">
              {["Newest", "Oldest", "Price"].map((sort) => (
                <li key={sort}>
                  <button className="w-full px-4 py-2 text-left hover:bg-surface-raised" onClick={close}>
                    {sort}
                  </button>
                </li>
              ))}
            </ul>
          ),
        },
        {
          "Filter panel": { code: PANEL_CODE, imports: ["Button", "BUTTON_SIZE"] },
          "Sort list": LIST_CODE,
        },
      ),
      type: "(closeDropdown: () => void) => ReactNode",
      required: true,
      group: "Content",
    },
    className: {
      description: "Extra classes on the wrapper around the trigger and panel.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
