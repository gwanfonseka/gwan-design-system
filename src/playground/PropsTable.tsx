"use client";

import ControlField from "./ControlField";
import { formatValue, typeLabel } from "./codegen";
import type { ArgGroup, Args, ArgTypeBase, ArgValue } from "./types";

type Row = [string, ArgTypeBase & { required?: boolean }];

interface IPropsTable {
  idPrefix: string;
  argTypes: Record<string, ArgTypeBase & { required?: boolean }>;
  args: Args;
  isChanged: (key: string) => boolean;
  onChange: (key: string, value: ArgValue) => void;
}

const GROUP_ORDER: ArgGroup[] = ["Content", "Appearance", "Behaviour", "Events", "Advanced"];

const grid =
  "grid grid-cols-1 md:grid-cols-[minmax(9rem,1fr)_minmax(0,2fr)_minmax(6rem,1fr)_minmax(12rem,1.4fr)] gap-x-4";

const PropsTable = ({ idPrefix, argTypes, args, isChanged, onChange }: IPropsTable) => {
  const rows = (Object.entries(argTypes) as Row[]).filter(([, a]) => !a.visible || a.visible(args));
  const hasGroups = rows.some(([, a]) => a.group);
  const sections: [string | null, Row[]][] = hasGroups
    ? GROUP_ORDER.map((g) => [g, rows.filter(([, a]) => (a.group ?? "Content") === g)] as [string, Row[]]).filter(
        ([, r]) => r.length > 0,
      )
    : [[null, rows]];

  return (
    <div role="table" aria-label="Props" className="text-xs">
      <div
        role="row"
        className={`${grid} hidden md:grid px-4 py-2 border-b border-border text-[9px] font-bold tracking-[0.18em] uppercase text-muted-fg`}
      >
        <span role="columnheader">Name</span>
        <span role="columnheader">Description</span>
        <span role="columnheader">Default</span>
        <span role="columnheader">Control</span>
      </div>

      {sections.map(([group, sectionRows]) => (
        <div key={group ?? "all"} role="rowgroup">
          {group && (
            <div
              role="row"
              className="px-4 pt-4 pb-1.5 text-[10px] font-semibold tracking-wide uppercase text-muted-fg"
            >
              <span role="cell">{group}</span>
            </div>
          )}
          {sectionRows.map(([key, argType]) => {
            const id = `${idPrefix}-${key}`;
            const changed = isChanged(key);
            return (
              <div
                key={key}
                role="row"
                className={`${grid} gap-y-2 items-start px-4 py-3 border-b border-border-subtle last:border-b-0 ${
                  changed ? "bg-surface-raised/50" : ""
                }`}
              >
                <div role="cell" className="flex flex-col gap-1 min-w-0">
                  <label htmlFor={id} className="font-mono font-semibold text-foreground break-all">
                    {key}
                    {argType.required && (
                      <span className="text-danger ml-0.5" title="Required">
                        *
                      </span>
                    )}
                  </label>
                  <code className="font-mono text-[10px] text-muted-fg break-all">
                    {typeLabel(argType)}
                  </code>
                </div>
                <p role="cell" className="text-muted-fg leading-relaxed">
                  {argType.description}
                </p>
                <div role="cell" className="min-w-0">
                  <span className="md:hidden text-[10px] font-semibold uppercase tracking-wide text-muted-fg mr-2">
                    Default
                  </span>
                  <code className="font-mono text-[11px] text-foreground break-all">
                    {formatValue(argType.control, argType.defaultValue)}
                  </code>
                </div>
                <div role="cell" className="min-w-0">
                  <ControlField
                    id={id}
                    name={key}
                    control={argType.control}
                    value={args[key]}
                    onChange={(v) => onChange(key, v)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default PropsTable;
