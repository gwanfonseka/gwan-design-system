"use client";

import { useState } from "react";
import * as svgList from "@/components/icons";
import Ellipsis from "@/components/ellipsis";
import Drawer, { DRAWER_PLACEMENT, DRAWER_SIZE } from "@/components/drawer";

const SIZES = [
  { label: "12", px: "size-3" },
  { label: "16", px: "size-4" },
  { label: "20", px: "size-5" },
  { label: "24", px: "size-6" },
  { label: "32", px: "size-8" },
  { label: "48", px: "size-12" },
];

const Icons = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [copied, setCopied] = useState<"import" | "usage" | null>(null);

  const allIcons = Object.keys(svgList);
  const filtered = query.trim()
    ? allIcons.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase()),
      )
    : allIcons;

  const IconComponent = selected
    ? svgList[selected as keyof typeof svgList]
    : null;

  const importCode = selected
    ? `import { ${selected} } from "gwan-design-system";`
    : "";
  const usageCode = selected ? `<${selected} />` : "";

  const copyToClipboard = (text: string, type: "import" | "usage") => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Search */}
      <div className="flex flex-row justify-end">
        <div className="relative w-full sm:max-w-xs">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-fg pointer-events-none">
            <svgList.SearchSVG />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search icons…"
            className="w-full pl-9 pr-9 py-2.5 rounded-lg border border-border bg-surface text-sm text-foreground placeholder:text-muted-fg focus:outline-none focus:border-foreground transition-colors duration-200"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-fg hover:text-foreground transition-colors duration-200"
            >
              <div className="size-4">
                <svgList.CrossSVG />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Count */}
      <p className="text-xs text-muted-fg -mt-2">
        {filtered.length} of {allIcons.length} icons
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(6rem,1fr))] gap-3">
          {filtered.map((svg, index) => (
            <button
              key={`svg_${index}`}
              onClick={() => setSelected(svg)}
              className="flex flex-col items-center gap-3 border border-border bg-surface-raised aspect-square p-3 rounded-lg justify-center w-full hover:border-primary-500 hover:bg-surface-overlay transition-colors duration-150 cursor-pointer"
            >
              <div className="size-8">
                {svgList[svg as keyof typeof svgList]()}
              </div>
              <Ellipsis
                label={svg}
                labelMaxWidth="w-16"
                className="text-[10px] font-medium text-center leading-tight"
              />
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 py-16 text-muted-fg">
          <div className="size-8">
            <svgList.SearchSVG />
          </div>
          <p className="text-sm font-medium">
            No icons match &ldquo;{query}&rdquo;
          </p>
        </div>
      )}

      {/* Icon detail drawer */}
      <Drawer
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected ?? ""}
        placement={DRAWER_PLACEMENT.RIGHT}
        size={DRAWER_SIZE.LARGE}
      >
        {selected && IconComponent && (
          <div className="flex flex-col gap-6 p-4">
            {/* Large preview */}
            <div className="flex items-center justify-center bg-surface-raised rounded-xl p-10 border border-border">
              <div className="size-16 text-foreground">
                <IconComponent />
              </div>
            </div>

            {/* Sizes */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-muted-fg uppercase tracking-widest">
                Sizes
              </p>
              <div className="flex items-end justify-center gap-5 flex-wrap">
                {SIZES.map(({ label, px }) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div className={`${px} text-foreground`}>
                      <IconComponent />
                    </div>
                    <span className="text-[10px] text-muted-fg">{label}px</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Import */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-muted-fg uppercase tracking-widest">
                Import
              </p>
              <div className="flex items-center justify-between gap-2 bg-surface-raised border border-border rounded px-3 py-2.5">
                <code className="text-xs text-foreground font-mono truncate">
                  {importCode}
                </code>
                <button
                  onClick={() => copyToClipboard(importCode, "import")}
                  className="shrink-0 text-muted-fg hover:text-foreground transition-colors duration-150 cursor-pointer"
                  title="Copy import"
                >
                  {copied === "import" ? (
                    <div className="size-4">
                      <svgList.CheckSVG />
                    </div>
                  ) : (
                    <div className="size-4">
                      <svgList.CopySVG />
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Usage */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-muted-fg uppercase tracking-widest">
                Usage
              </p>
              <div className="flex items-center justify-between gap-2 bg-surface-raised border border-border rounded px-3 py-2.5">
                <code className="text-xs text-foreground font-mono">
                  {usageCode}
                </code>
                <button
                  onClick={() => copyToClipboard(usageCode, "usage")}
                  className="shrink-0 text-muted-fg hover:text-foreground transition-colors duration-150 cursor-pointer"
                  title="Copy usage"
                >
                  {copied === "usage" ? (
                    <div className="size-4">
                      <svgList.CheckSVG />
                    </div>
                  ) : (
                    <div className="size-4">
                      <svgList.CopySVG />
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Sizing guide */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-muted-fg uppercase tracking-widest">
                Sizing
              </p>
              <div className="bg-surface-raised border border-border rounded px-3 py-2.5">
                <code className="text-xs text-foreground font-mono whitespace-pre">{`<div className="size-4">
  <${selected} /> {/* 16px */}
</div>

<div className="size-6">
  <${selected} /> {/* 24px */}
</div>

<div className="size-8">
  <${selected} />   {/* 32px */}
</div`}</code>
              </div>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Icons;
