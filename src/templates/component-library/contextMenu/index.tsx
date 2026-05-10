"use client";

import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import ContextMenu from "@/components/contextMenu";
import type { IDropdownMenuItem } from "@/components/dropdownMenu";
import { EditSVG, CopySVG, TrashSVG, DownloadSVG, LinkSVG } from "@/components/icons";

const items: IDropdownMenuItem[] = [
  { label: "Open",     icon: <LinkSVG />,     onClick: () => alert("Open")     },
  { label: "Edit",     icon: <EditSVG />,     onClick: () => alert("Edit")     },
  { label: "Copy",     icon: <CopySVG />,     onClick: () => alert("Copy")     },
  { label: "Download", icon: <DownloadSVG />, onClick: () => alert("Download"), disabled: true },
  { isDivider: true },
  { label: "Delete",   icon: <TrashSVG />,    onClick: () => alert("Delete"),  destructive: true },
];

const codeExample = `import { ContextMenu } from "gwan-design-system";
import type { IDropdownMenuItem } from "gwan-design-system";
import { EditSVG, TrashSVG, CopySVG, LinkSVG, DownloadSVG } from "gwan-design-system";

const items: IDropdownMenuItem[] = [
  {
    label: "Open",
    icon: <LinkSVG />,
    onClick: () => window.open(url),              // wire any function here
  },
  {
    label: "Edit",
    icon: <EditSVG />,
    onClick: () => router.push(\`/edit/\${id}\`),
  },
  {
    label: "Copy",
    icon: <CopySVG />,
    onClick: () => navigator.clipboard.writeText(value),
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
  <ContextMenu items={items}>
    <div className="border border-border rounded-lg p-6 text-sm text-muted-fg">
      Right-click anywhere in this area
    </div>
  </ContextMenu>
);`;

const DemoArea = () => (
  <ContextMenu items={items}>
    <div className="border-2 border-dashed border-border rounded-xl p-12 flex items-center justify-center select-none cursor-default">
      <p className="text-sm text-muted-fg">Right-click anywhere in this area</p>
    </div>
  </ContextMenu>
);

const ContextMenuTemplate = () => (
  <div className="flex flex-col gap-8">
    <DemoArea />
    <Playground template={<DemoArea />} />
    <CodeSnippet code={codeExample} />
  </div>
);

export default ContextMenuTemplate;
