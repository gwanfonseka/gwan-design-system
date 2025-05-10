"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Icons from "./icons";
import Tags from "./tags";
import Buttons from "./buttons";
import Chips from "./chips";
import TimeLines from "./timeLines";
import Tables from "./tables";
import Paginations from "./pagination";
import FilterDropdowns from "./filterDropdown";
import SelectDropdowns from "./selectDropdown";
import Inputs from "./input";
import Modals from "./modals";
import Avatars from "./avatars";
import Tooltips from "./tooltips";
import EllipsisTemplate from "./ellipsis";
import NavBars from "./navBars";
import FileUploaders from "./fileUploaders";
import Checkboxes from "./checkboxes";
import RadioButtons from "./radioButtons";
import Banners from "./banners";
import Carousels from "./carousels";
import SnackBars from "./snackBars";
import States from "./states";

const menuItems = [
  {
    name: "Icons",
    template: <Icons />,
  },
  {
    name: "Tags",
    template: <Tags />,
  },
  {
    name: "Buttons",
    template: <Buttons />,
  },
  {
    name: "Chips",
    template: <Chips />,
  },
  {
    name: "Timeline",
    template: <TimeLines />,
  },
  {
    name: "Table",
    template: <Tables />,
  },
  {
    name: "Pagination",
    template: <Paginations />,
  },
  {
    name: "Filter Dropdown",
    template: <FilterDropdowns />,
  },
  {
    name: "Select Dropdown",
    template: <SelectDropdowns />,
  },
  {
    name: "Input",
    template: <Inputs />,
  },
  {
    name: "Modal",
    template: <Modals />,
  },
  {
    name: "Avatar",
    template: <Avatars />,
  },
  {
    name: "Tooltip",
    template: <Tooltips />,
  },
  {
    name: "Ellipsis",
    template: <EllipsisTemplate />,
  },
  {
    name: "Navigation",
    template: <NavBars />,
  },
  {
    name: "File Uploader",
    template: <FileUploaders />,
  },
  {
    name: "Checkbox",
    template: <Checkboxes />,
  },
  {
    name: "Radio Button",
    template: <RadioButtons />,
  },
  {
    name: "Banner",
    template: <Banners />,
  },
  {
    name: "Carousel",
    template: <Carousels />,
  },
  {
    name: "Snackbar",
    template: <SnackBars />,
  },
  {
    name: "State",
    template: <States />,
  },
];

const LibraryTemplate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeMenuItem = searchParams.get("tab") || menuItems[0].name;

  const handleTabChange = (tab: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("tab", tab);
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <div className="custom-bg h-[100vh] overflow-hidden">
      <div className="bg-[#FFFFFF4D] h-[100vh]">
        <div className="flex flex-row gap-8 justify-start items-start">
          <div className="flex flex-col gap-4 bg-[#0000004D] h-[100vh] py-4 px-8 overflow-y-auto w-[350px]">
            <p className="text-white text-2xl font-medium">
              Components Library
            </p>
            <hr className="opacity-50 border-2" />
            {menuItems.map((menuItem, index) => {
              const menuItemClass =
                activeMenuItem === menuItem.name
                  ? "bg-[rgba(0,0,0,0.2)]"
                  : "bg-transparent border-2 border-[rgba(255,255,255,0.2)]";

              return (
                <div
                  key={`menu_${menuItem.name}_${index}`}
                  className={`p-4 rounded-lg w-full cursor-pointer hover:bg-[rgba(0,0,0,0.3)] ${menuItemClass}`}
                  onClick={() => handleTabChange(menuItem.name)}
                >
                  <p className="text-white text-lg font-semibold">
                    {menuItem.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="py-4 pr-8 flex flex-1 overflow-y-auto">
            <div className="bg-white rounded-lg p-6 w-full h-[95vh] overflow-y-auto flex flex-col gap-12">
              <p className="text-black text-xl font-medium">{activeMenuItem}</p>
              <div>
                {
                  menuItems.find(({ name }) => name === activeMenuItem)
                    ?.template
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryTemplate;
