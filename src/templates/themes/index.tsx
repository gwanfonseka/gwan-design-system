"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import ThemesNavbar from "./navbar";
import SharedFooter from "../shared/footer";
import TokenEditor from "./token-editor";
import ComponentPreview from "./component-preview";
import CssOutput from "./css-output";
import TokenReference from "./token-reference";
import { LIGHT_DEFAULTS, DARK_DEFAULTS, TokenMap, TokenKey, generateCSS } from "./token-data";

const ThemesTemplate = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<"light" | "dark">("light");
  const [lightTokens, setLightTokens] = useState<TokenMap>({ ...LIGHT_DEFAULTS });
  const [darkTokens, setDarkTokens] = useState<TokenMap>({ ...DARK_DEFAULTS });
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (mounted && theme) {
      setActiveTab(theme === "dark" ? "dark" : "light");
    }
  }, [theme, mounted]);

  const handleTokenChange = useCallback((key: TokenKey, value: string) => {
    if (activeTab === "light") {
      setLightTokens((prev) => ({ ...prev, [key]: value }));
    } else {
      setDarkTokens((prev) => ({ ...prev, [key]: value }));
    }
  }, [activeTab]);

  const handleReset = () => {
    if (activeTab === "light") setLightTokens({ ...LIGHT_DEFAULTS });
    else setDarkTokens({ ...DARK_DEFAULTS });
  };

  const currentTokens = activeTab === "light" ? lightTokens : darkTokens;
  const cssOutput = generateCSS(lightTokens, darkTokens);

  const hasChanges =
    activeTab === "light"
      ? JSON.stringify(lightTokens) !== JSON.stringify(LIGHT_DEFAULTS)
      : JSON.stringify(darkTokens) !== JSON.stringify(DARK_DEFAULTS);

  const previewVars: Record<string, string> = Object.fromEntries(
    Object.entries(currentTokens).map(([k, v]) => [k, v])
  );

  return (
    <div className="min-h-screen bg-background">
      <ThemesNavbar />

      <div className="pt-20 pb-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">

          {/* Header */}
          <div className="flex flex-col gap-3 pt-6">
            <div className="inline-flex items-center border border-primary-400/40 text-primary-600 dark:text-primary-400 text-[9px] font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-sm w-fit">
              Theme Explorer
            </div>
            <h1 className="text-[clamp(28px,4vw,52px)] font-black uppercase leading-tight tracking-tight text-foreground">
              Customise Your Theme
            </h1>
            <p className="text-sm text-muted-fg leading-relaxed max-w-lg">
              Tweak the design tokens below to match your brand. Every change updates the live preview in real time. When you are happy, copy the generated CSS and drop it into your project&apos;s{" "}
              <code className="font-mono text-primary-600 dark:text-primary-400 text-xs">globals.css</code>.
            </p>
          </div>

          {/* Editor + Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-6 lg:gap-8 items-start">
            <TokenEditor
              activeTab={activeTab}
              currentTokens={currentTokens}
              hasChanges={hasChanges}
              onTabChange={setActiveTab}
              onTokenChange={handleTokenChange}
              onReset={handleReset}
            />
            <ComponentPreview vars={previewVars} />
          </div>

          <CssOutput cssOutput={cssOutput} />
          <TokenReference lightTokens={lightTokens} darkTokens={darkTokens} />

        </div>
      </div>
      <SharedFooter />
    </div>
  );
};

export default ThemesTemplate;
