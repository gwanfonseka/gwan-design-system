import { TokenKey } from "./token-data";

const TokenRow = ({
  label,
  tokenKey,
  value,
  onChange,
}: {
  label: string;
  tokenKey: string;
  value: string;
  onChange: (key: TokenKey, val: string) => void;
}) => {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor={`picker-${tokenKey}`}
        className="relative w-7 h-7 rounded-md border border-border cursor-pointer shrink-0 hover:scale-110 transition-transform duration-150 overflow-hidden"
        style={{ backgroundColor: value }}
      >
        <input
          id={`picker-${tokenKey}`}
          type="color"
          value={value}
          onChange={(e) => onChange(tokenKey as TokenKey, e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </label>
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <span className="text-[11px] font-semibold text-foreground truncate">{label}</span>
        <span className="text-[10px] text-muted-fg font-mono truncate">{tokenKey}</span>
      </div>
      <span className="text-[10px] font-mono text-muted-fg shrink-0">{value.toUpperCase()}</span>
    </div>
  );
};

export default TokenRow;
