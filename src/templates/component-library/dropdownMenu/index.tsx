"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Button from "@/components/button";
import { BUTTON_VARIANTS } from "@/components/button";
import DropdownMenu, { DROPDOWN_PLACEMENT } from "@/components/dropdownMenu";
import type { IDropdownMenuItem } from "@/components/dropdownMenu";
import {
  EditSVG,
  CopySVG,
  TrashSVG,
  DownloadSVG,
  LinkSVG,
  ChevDownSVG,
} from "@/components/icons";

const placementOptions = Object.values(DROPDOWN_PLACEMENT).map((v) => ({
  value: v,
  label: v,
}));

const baseItems: IDropdownMenuItem[] = [
  { label: "Edit", icon: <EditSVG /> },
  { label: "Copy link", icon: <LinkSVG /> },
  { label: "Download", icon: <DownloadSVG /> },
  { isDivider: true },
  { label: "Duplicate", icon: <CopySVG /> },
  { label: "Delete", icon: <TrashSVG />, destructive: true },
];

const codeExample = `import { DropdownMenu, DROPDOWN_PLACEMENT } from "gwan-design-system";
import type { IDropdownMenuItem } from "gwan-design-system";
import { Button, BUTTON_VARIANTS } from "gwan-design-system";
import { EditSVG, TrashSVG, LinkSVG, DownloadSVG } from "gwan-design-system";

const items: IDropdownMenuItem[] = [
  {
    label: "Edit",
    icon: <EditSVG />,
    onClick: () => console.log("Edit clicked"),   // wire any function here
  },
  {
    label: "Copy link",
    icon: <LinkSVG />,
    onClick: () => navigator.clipboard.writeText(url),
  },
  {
    label: "Download",
    icon: <DownloadSVG />,
    onClick: () => handleDownload(),
    disabled: true,                               // greys out and blocks click
  },
  { isDivider: true },                            // renders a separator line
  {
    label: "Delete",
    icon: <TrashSVG />,
    onClick: () => setConfirmDelete(true),        // e.g. open a confirm modal
    destructive: true,                            // renders in danger color
  },
];

const Example = () => (
  <DropdownMenu
    trigger={<Button variant={BUTTON_VARIANTS.TERTIARY} label="Options" onClick={() => {}} />}
    items={items}
    placement={DROPDOWN_PLACEMENT.BOTTOM_LEFT}    // BOTTOM_LEFT | BOTTOM_RIGHT | TOP_LEFT | TOP_RIGHT
  />
);`;

const DropdownMenuTemplate = () => {
  const [placement, setPlacement] = useState<DROPDOWN_PLACEMENT>(
    DROPDOWN_PLACEMENT.BOTTOM_LEFT,
  );

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center py-8">
        <DropdownMenu
          trigger={
            <Button
              variant={BUTTON_VARIANTS.TERTIARY}
              label="Options"
              onClick={() => {}}
              rightIcon={<ChevDownSVG />}
            />
          }
          items={baseItems}
          placement={placement}
        />
      </div>
      <div className="flex justify-center">
        <SelectDropdown
          label="Placement"
          options={placementOptions}
          value={placement}
          onChange={(v) => setPlacement(v as DROPDOWN_PLACEMENT)}
          className="w-52"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Static examples — four placements */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center py-4">
        {Object.values(DROPDOWN_PLACEMENT).map((p) => (
          <div key={p} className="flex flex-col items-center gap-2">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-fg">
              {p.replace("_", " ")}
            </p>
            <DropdownMenu
              trigger={
                <Button
                  variant={BUTTON_VARIANTS.TERTIARY}
                  label="Options"
                  onClick={() => {}}
                />
              }
              items={baseItems}
              placement={p}
            />
          </div>
        ))}
      </div>

      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default DropdownMenuTemplate;
