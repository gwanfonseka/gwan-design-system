"use client";

import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
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
import TextAreas from "./textarea";
import Callouts from "./callout";
import Badges from "./badge";
import Switches from "./switches";
import TabsTemplate from "./tabs";
import AccordionTemplate from "./accordion";
import SkeletonTemplate from "./skeleton";
import ProgressBars from "./progressBar";
import Breadcrumbs from "./breadcrumb";
import DrawerTemplate from "./drawer";
import Popovers from "./popover";
import Alerts from "./alert";
import StepperTemplate from "./stepper";
import DatePickerTemplate from "./datePicker";
import CommandPaletteTemplate from "./commandPalette";
import ColorPickerTemplate from "./colorPicker";
import MenuBarTemplate from "./menuBar";
import CardTemplate from "./card";
import DividerTemplate from "./divider";
import SpinnerTemplate from "./spinner";

const menuGroups = [
  {
    group: "Foundations",
    items: [
      { name: "Icons", template: <Icons /> },
    ],
  },
  {
    group: "Actions",
    items: [
      { name: "Buttons", template: <Buttons /> },
    ],
  },
  {
    group: "Form Controls",
    items: [
      { name: "Input", template: <Inputs /> },
      { name: "Text Area", template: <TextAreas /> },
      { name: "Select Dropdown", template: <SelectDropdowns /> },
      { name: "Filter Dropdown", template: <FilterDropdowns /> },
      { name: "Checkbox", template: <Checkboxes /> },
      { name: "Radio Button", template: <RadioButtons /> },
      { name: "Switch", template: <Switches /> },
      { name: "Date Picker", template: <DatePickerTemplate /> },
      { name: "File Uploader", template: <FileUploaders /> },
      { name: "Color Picker", template: <ColorPickerTemplate /> },
    ],
  },
  {
    group: "Data Display",
    items: [
      { name: "Table", template: <Tables /> },
      { name: "Pagination", template: <Paginations /> },
      { name: "Progress Bar", template: <ProgressBars /> },
    ],
  },
  {
    group: "Navigation",
    items: [
      { name: "Side Menu", template: <NavBars /> },
      { name: "Menu Bar", template: <MenuBarTemplate /> },
      { name: "Tabs", template: <TabsTemplate /> },
      { name: "Breadcrumb", template: <Breadcrumbs /> },
      { name: "Ellipsis", template: <EllipsisTemplate /> },
    ],
  },
  {
    group: "Content & Layout",
    items: [
      { name: "Card", template: <CardTemplate /> },
      { name: "Divider", template: <DividerTemplate /> },
      { name: "Banner", template: <Banners /> },
      { name: "Carousel", template: <Carousels /> },
      { name: "Accordion", template: <AccordionTemplate /> },
      { name: "Timeline", template: <TimeLines /> },
      { name: "Stepper", template: <StepperTemplate /> },
    ],
  },
  {
    group: "Overlays",
    items: [
      { name: "Modal", template: <Modals /> },
      { name: "Drawer", template: <DrawerTemplate /> },
      { name: "Popover", template: <Popovers /> },
      { name: "Command Palette", template: <CommandPaletteTemplate /> },
    ],
  },
  {
    group: "Indicators",
    items: [
      { name: "Tags", template: <Tags /> },
      { name: "Chips", template: <Chips /> },
      { name: "Badge", template: <Badges /> },
      { name: "Avatar", template: <Avatars /> },
      { name: "Tooltip", template: <Tooltips /> },
      { name: "Skeleton", template: <SkeletonTemplate /> },
      { name: "Spinner", template: <SpinnerTemplate /> },
    ],
  },
  {
    group: "Feedback",
    items: [
      { name: "Snackbar", template: <SnackBars /> },
      { name: "Alert", template: <Alerts /> },
      { name: "Callout", template: <Callouts /> },
      { name: "State", template: <States /> },
    ],
  },
];

const menuItems = menuGroups.flatMap((g) => g.items);

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="w-8 h-8 rounded-sm bg-border dark:bg-white/10 animate-pulse" />
    );

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center rounded-sm border border-border dark:border-white/20 text-muted-fg dark:text-white/60 hover:text-foreground dark:hover:text-white hover:border-foreground dark:hover:border-white/40 transition-colors duration-200"
    >
      {isDark ? (
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 9.5A5.5 5.5 0 016.5 2.5a5.5 5.5 0 107 7z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

const LibraryTemplate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeMenuItem = searchParams.get("tab") || menuItems[0].name;

  const handleTabChange = (tab: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("tab", tab);
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
    setSidebarOpen(false);
  };

  return (
    <div className="custom-bg h-screen overflow-hidden">
      <div className="bg-transparent dark:bg-black/20 h-screen flex flex-col">
        {/* Mobile top bar */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-black/30 border-b border-border dark:border-white/20 shrink-0">
          <span className="font-black text-sm tracking-[0.25em] uppercase text-foreground dark:text-white">
            GWAN.DEV
          </span>
          <div className="flex items-center gap-3">
            <ThemeToggleButton />
            <button
              onClick={() => setSidebarOpen((v) => !v)}
              className="p-1.5 text-foreground dark:text-white"
              aria-label="Toggle menu"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main layout */}
        <div className="flex flex-row gap-8 flex-1 overflow-hidden">
          {/* Sidebar */}
          <div
            className={`
              fixed md:relative top-0 md:top-auto left-0 z-60 md:z-auto
              h-full md:h-screen
              flex flex-col gap-4
              bg-white/80 dark:bg-black/30 backdrop-blur-md
              py-4 px-6 md:px-8
              overflow-y-auto
              w-full md:w-68 lg:w-72 xl:w-87.5
              transition-transform duration-300 ease-in-out
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            `}
          >
            {/* Logo row */}
            <div className="flex items-center justify-between">
              <a
                href="/home"
                className="font-black text-sm tracking-[0.25em] uppercase text-foreground dark:text-white hover:opacity-70 transition-opacity duration-200"
              >
                GWAN.DEV
              </a>
              <div className="flex items-center gap-2">
                <ThemeToggleButton />
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1.5 text-foreground dark:text-white md:hidden"
                  aria-label="Close menu"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4l12 12M16 4L4 16"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <hr className="border-border dark:border-white/30 border-2" />

            {/* Nav links */}
            <div className="flex flex-col gap-1">
              <a
                href="/home"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-semibold text-muted-fg dark:text-white/60 hover:text-foreground dark:hover:text-white hover:bg-primary-default/10 dark:hover:bg-black/20 transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4 h-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1L1 6.5V15h5v-4h4v4h5V6.5L8 1z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
                Home
              </a>
              <a
                href="/docs"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-semibold text-muted-fg dark:text-white/60 hover:text-foreground dark:hover:text-white hover:bg-primary-default/10 dark:hover:bg-black/20 transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4 h-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="1"
                    width="12"
                    height="14"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M5 5h6M5 8h6M5 11h4"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
                Documentation
              </a>
              <a
                href="/themes"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-semibold text-muted-fg dark:text-white/60 hover:text-foreground dark:hover:text-white hover:bg-primary-default/10 dark:hover:bg-black/20 transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4 h-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <circle cx="5" cy="6.5" r="1.2" fill="currentColor" />
                  <circle cx="9" cy="5" r="1.2" fill="currentColor" />
                  <circle cx="11.5" cy="8" r="1.2" fill="currentColor" />
                  <circle cx="9" cy="11" r="1.2" fill="currentColor" />
                  <circle cx="5" cy="10" r="1.2" fill="currentColor" />
                </svg>
                Themes
              </a>
              <a
                href="/blog"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-semibold text-muted-fg dark:text-white/60 hover:text-foreground dark:hover:text-white hover:bg-primary-default/10 dark:hover:bg-black/20 transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4 h-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2h12v10H2V2z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 5.5h6M5 8h4"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 14h6"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 12v2"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
                Blog
              </a>
            </div>

            <hr className="border-border dark:border-white/30 border-2" />

            {/* Component menu groups */}
            {menuGroups.map((group) => (
              <div key={group.group} className="flex flex-col gap-1">
                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-muted-fg dark:text-white/30 px-1 pt-1">
                  {group.group}
                </p>
                {group.items.map((menuItem) => {
                  const isActive = activeMenuItem === menuItem.name;
                  return (
                    <div
                      key={menuItem.name}
                      className={`px-3 py-2 rounded-lg w-full cursor-pointer transition-colors duration-150 ${
                        isActive
                          ? "bg-primary-default/10 dark:bg-black/20"
                          : "hover:bg-primary-default/10 dark:hover:bg-black/30"
                      }`}
                      onClick={() => handleTabChange(menuItem.name)}
                    >
                      <p className={`text-sm font-medium ${isActive ? "text-foreground dark:text-white" : "text-muted-fg dark:text-white/60"}`}>
                        {menuItem.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Content area */}
          <div className="py-3 md:py-4 px-3 md:pr-8 md:pl-0 flex flex-1 overflow-y-auto w-full">
            <div className="bg-surface rounded-lg p-4 md:p-6 w-full h-full overflow-y-auto flex flex-col gap-8 md:gap-12">
              <p className="text-foreground text-xl font-medium">
                {activeMenuItem}
              </p>
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
