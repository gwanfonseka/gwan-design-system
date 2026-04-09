import TokenRow from "./token-row";
import { TokenMap, TokenKey, TOKEN_GROUPS } from "./token-data";

const TokenEditor = ({
  activeTab,
  currentTokens,
  hasChanges,
  onTabChange,
  onTokenChange,
  onReset,
}: {
  activeTab: "light" | "dark";
  currentTokens: TokenMap;
  hasChanges: boolean;
  onTabChange: (tab: "light" | "dark") => void;
  onTokenChange: (key: TokenKey, val: string) => void;
  onReset: () => void;
}) => {
  return (
    <div className="flex flex-col gap-0 rounded-xl border border-border overflow-hidden bg-surface lg:sticky lg:top-24">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-surface-raised">
        <div className="flex rounded-md overflow-hidden border border-border">
          <button
            onClick={() => onTabChange("light")}
            className={`px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-200 ${
              activeTab === "light"
                ? "bg-foreground text-background"
                : "bg-transparent text-muted-fg hover:text-foreground"
            }`}
          >
            Light
          </button>
          <button
            onClick={() => onTabChange("dark")}
            className={`px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-200 ${
              activeTab === "dark"
                ? "bg-foreground text-background"
                : "bg-transparent text-muted-fg hover:text-foreground"
            }`}
          >
            Dark
          </button>
        </div>
        {hasChanges && (
          <button
            onClick={onReset}
            className="text-[10px] font-semibold text-muted-fg hover:text-danger-default transition-colors duration-200"
          >
            Reset
          </button>
        )}
      </div>

      {/* Token groups */}
      <div className="overflow-y-auto max-h-148">
        {TOKEN_GROUPS.map((group) => (
          <div
            key={group.label}
            className="border-b border-border last:border-0"
          >
            <div className="px-5 py-3 bg-surface-overlay/50">
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-muted-fg">
                {group.label}
              </span>
            </div>
            <div className="px-5 py-4 flex flex-col gap-4">
              {group.tokens.map((t) => (
                <TokenRow
                  key={t.key}
                  label={t.label}
                  tokenKey={t.key}
                  value={currentTokens[t.key]}
                  onChange={onTokenChange}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tip */}
      <div className="px-5 py-3 border-t border-border bg-surface-raised">
        <p className="text-[10px] text-muted-fg leading-relaxed">
          Click any colour swatch to open the picker. Toggle your site theme to
          edit the other mode.
        </p>
      </div>
    </div>
  );
};

export default TokenEditor;
