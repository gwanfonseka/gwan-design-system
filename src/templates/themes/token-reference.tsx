import { TokenMap, TOKEN_GROUPS } from "./token-data";

const TokenReference = ({
  lightTokens,
  darkTokens,
}: {
  lightTokens: TokenMap;
  darkTokens: TokenMap;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-black uppercase tracking-tight text-foreground">Token Reference</h2>
        <p className="text-xs text-muted-fg">All semantic design tokens and their current values for both themes.</p>
      </div>

      <div className="rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-raised">
                <th className="text-left px-5 py-3 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">Token</th>
                <th className="text-left px-5 py-3 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">Label</th>
                <th className="text-left px-5 py-3 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">Light</th>
                <th className="text-left px-5 py-3 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">Dark</th>
              </tr>
            </thead>
            <tbody>
              {TOKEN_GROUPS.flatMap((g) => g.tokens).map((t, i) => (
                <tr key={t.key} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-surface" : "bg-surface-raised/40"}`}>
                  <td className="px-5 py-3 font-mono text-[11px] text-primary-600 dark:text-primary-400">{t.key}</td>
                  <td className="px-5 py-3 text-[12px] text-foreground font-medium">{t.label}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded border border-border shrink-0" style={{ backgroundColor: lightTokens[t.key] }} />
                      <span className="font-mono text-[11px] text-muted-fg">{lightTokens[t.key].toUpperCase()}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded border border-border shrink-0" style={{ backgroundColor: darkTokens[t.key] }} />
                      <span className="font-mono text-[11px] text-muted-fg">{darkTokens[t.key].toUpperCase()}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TokenReference;
