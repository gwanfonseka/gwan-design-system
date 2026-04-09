"use client";

import { useState } from "react";
import * as svgList from "@/components/icons";

const Icons = () => {
  const [query, setQuery] = useState("");
  const allIcons = Object.keys(svgList);
  const filtered = query.trim()
    ? allIcons.filter((name) => name.toLowerCase().includes(query.toLowerCase()))
    : allIcons;

  return (
    <div className="flex flex-col gap-6">
      {/* Search */}
      <div className="relative w-full sm:max-w-xs">
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-fg pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10.5 10.5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
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
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>

      {/* Count */}
      <p className="text-xs text-muted-fg -mt-2">
        {filtered.length} of {allIcons.length} icons
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(6rem,1fr))] gap-3">
          {filtered.map((svg, index) => (
            <div
              className="flex flex-col items-center gap-3 border border-border bg-surface-raised aspect-square p-3 rounded-lg justify-center w-full"
              key={`svg_${index}`}
            >
              <div className="size-8">
                {svgList[svg as keyof typeof svgList]()}
              </div>
              <span className="text-[10px] font-medium text-center break-all leading-tight">
                {svg}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 py-16 text-muted-fg">
          <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 opacity-40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M15.5 15.5l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p className="text-sm font-medium">No icons match &ldquo;{query}&rdquo;</p>
        </div>
      )}
    </div>
  );
};

export default Icons;
