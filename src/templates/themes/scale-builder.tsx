"use client";

import { FC, useCallback, useRef, useState } from "react";

// ─── Colour utilities ────────────────────────────────────────────────────────

function hexToRGB(hex: string): [number, number, number] | null {
  const c = hex.replace("#", "");
  if (!/^[0-9a-fA-F]{6}$/.test(c)) return null;
  return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)];
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => Math.round(Math.max(0, Math.min(255, x))).toString(16).padStart(2, "0"))
      .join("")
  );
}

function rgbToHSL(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l * 100];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const h =
    max === r ? ((g - b) / d + (g < b ? 6 : 0)) / 6
    : max === g ? ((b - r) / d + 2) / 6
    : ((r - g) / d + 4) / 6;
  return [h * 360, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  h /= 360; s /= 100; l /= 100;
  if (s === 0) { const v = Math.round(l * 255); return rgbToHex(v, v, v); }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const h2 = (t: number) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  return rgbToHex(Math.round(h2(h + 1/3) * 255), Math.round(h2(h) * 255), Math.round(h2(h - 1/3) * 255));
}

// ─── Scale generation ────────────────────────────────────────────────────────

// Seed is treated as the mid-point (500 step). Lighter steps reduce saturation,
// darker steps maintain it. Hue is held constant throughout.
const STEP_CONFIG = [
  { key: "50",  L: 97, sScale: 0.20 },
  { key: "100", L: 93, sScale: 0.35 },
  { key: "200", L: 85, sScale: 0.55 },
  { key: "300", L: 75, sScale: 0.72 },
  { key: "400", L: 64, sScale: 0.88 },
  { key: "500", L: 54, sScale: 1.00 },
  { key: "600", L: 44, sScale: 1.00 },
  { key: "700", L: 34, sScale: 1.00 },
  { key: "800", L: 24, sScale: 0.95 },
  { key: "900", L: 14, sScale: 0.90 },
];

export type ScaleMap = Record<string, string>;

function generateScaleFromSeed(seed: string): ScaleMap {
  const rgb = hexToRGB(seed);
  if (!rgb) return generateScaleFromSeed(DEFAULT_SEED);
  const [h, s] = rgbToHSL(...rgb);
  return Object.fromEntries(
    STEP_CONFIG.map(({ key, L, sScale }) => [key, hslToHex(h, Math.min(100, s * sScale), L)])
  );
}

// Gwan default primary scale — used as the initial state
const DEFAULT_SEED = "#9ea593";
export const DEFAULT_SCALE: ScaleMap = {
  "50":  "#f4f7f1",
  "100": "#e2eada",
  "200": "#c8d5be",
  "300": "#adc09e",
  "400": "#a4b496",
  "500": "#9ea593",
  "600": "#7e8c73",
  "700": "#60705a",
  "800": "#435240",
  "900": "#2c3629",
};

// ─── Component ───────────────────────────────────────────────────────────────

interface IScaleBuilder {
  onScaleChange: (scale: ScaleMap) => void;
}

const ScaleBuilder: FC<IScaleBuilder> = ({ onScaleChange }) => {
  const [seed, setSeed] = useState(DEFAULT_SEED);
  const [scale, setScale] = useState<ScaleMap>(DEFAULT_SCALE);
  const onChangeRef = useRef(onScaleChange);
  onChangeRef.current = onScaleChange;

  const updateScale = useCallback((next: ScaleMap) => {
    setScale(next);
    onChangeRef.current(next);
  }, []);

  const handleSeedChange = useCallback(
    (hex: string) => {
      setSeed(hex);
      updateScale(generateScaleFromSeed(hex));
    },
    [updateScale],
  );

  const handleStepChange = useCallback(
    (key: string, hex: string) => {
      setScale((prev) => {
        const next = { ...prev, [key]: hex };
        onChangeRef.current(next);
        return next;
      });
    },
    [],
  );

  const handleReset = useCallback(() => {
    setSeed(DEFAULT_SEED);
    updateScale(DEFAULT_SCALE);
  }, [updateScale]);

  const seedScale = generateScaleFromSeed(seed);

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-black uppercase tracking-tight text-foreground">
            Primary Colour Scale
          </h2>
          <p className="text-xs text-muted-fg max-w-lg">
            Pick a seed colour — the full 10-step scale is generated automatically.
            Click any swatch to fine-tune individual steps.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Seed picker */}
          <div className="flex items-center gap-2.5 bg-surface border border-border rounded-lg px-3 py-2">
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-fg">
              Seed
            </span>
            <div className="relative flex items-center">
              <div
                className="w-5 h-5 rounded border border-border/50 shadow-sm shrink-0"
                style={{ backgroundColor: seed }}
              />
              <input
                type="color"
                value={seed}
                onChange={(e) => handleSeedChange(e.target.value)}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              />
            </div>
            <span className="font-mono text-xs text-foreground uppercase tracking-wide">
              {seed}
            </span>
          </div>

          <button
            onClick={handleReset}
            className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-fg hover:text-foreground border border-border rounded-lg px-3 py-2 transition-colors"
          >
            Reset to seed
          </button>
        </div>
      </div>

      {/* Swatches */}
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
        {STEP_CONFIG.map(({ key }) => {
          const hex = scale[key];
          const isOverridden = hex !== seedScale[key];
          return (
            <div key={key} className="flex flex-col gap-1.5">
              <div className="relative group">
                <div
                  className={`w-full aspect-square rounded-lg cursor-pointer transition-transform duration-150 group-hover:scale-105 ${isOverridden ? "ring-2 ring-offset-1 ring-offset-background ring-primary-default" : ""}`}
                  style={{ backgroundColor: hex }}
                />
                <input
                  type="color"
                  value={hex}
                  onChange={(e) => handleStepChange(key, e.target.value)}
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                  title={`Step ${key}`}
                />
              </div>
              <div className="flex flex-col items-center gap-0.5 overflow-hidden">
                <span className="text-[9px] font-bold text-muted-fg">{key}</span>
                <span className="text-[8px] font-mono text-muted-fg uppercase truncate w-full text-center">
                  {hex}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScaleBuilder;
