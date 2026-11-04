"use client";

export interface ILoggedAction {
  id: number;
  name: string;
  args: string;
  time: string;
}

const describe = (value: unknown): string => {
  if (value === undefined) return "undefined";
  if (typeof value === "function") return "ƒ";
  if (value && typeof value === "object" && "nativeEvent" in value) {
    return `${(value as { type?: string }).type ?? "Synthetic"}Event`;
  }
  try {
    const json = JSON.stringify(value);
    return json.length > 80 ? `${json.slice(0, 77)}…` : json;
  } catch {
    return String(value);
  }
};

export const formatCallArgs = (args: unknown[]) => args.map(describe).join(", ");

const ActionsLog = ({ entries, onClear }: { entries: ILoggedAction[]; onClear: () => void }) => (
  <div className="border-t border-border">
    <div className="flex items-center justify-between px-4 py-2">
      <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-muted-fg">
        Actions{entries.length > 0 && ` (${entries.length})`}
      </span>
      {entries.length > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="text-[10px] font-semibold text-muted-fg hover:text-foreground"
        >
          Clear
        </button>
      )}
    </div>
    <ol aria-label="Action log" aria-live="polite" className="max-h-32 overflow-y-auto px-4 pb-3 font-mono text-[11px]">
      {entries.length === 0 ? (
        <li className="text-muted-fg font-sans">Interact with the preview to see callbacks fire.</li>
      ) : (
        entries.map((e) => (
          <li key={e.id} className="flex gap-3 py-0.5">
            <span className="text-muted-fg tabular-nums">{e.time}</span>
            <span className="text-accent font-semibold">{e.name}</span>
            <span className="text-foreground truncate">({e.args})</span>
          </li>
        ))
      )}
    </ol>
  </div>
);

export default ActionsLog;
