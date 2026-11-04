import type { HighlighterCore, ThemedToken } from "shiki/core";

// Same theme as the blog's code blocks.
const THEME = "github-dark-dimmed";

let highlighter: HighlighterCore | null = null;
let loading: Promise<HighlighterCore> | null = null;

/**
 * Loads a TSX-only highlighter on first use. The JavaScript regex engine avoids
 * shipping WebAssembly, and only the one grammar and theme are fetched.
 */
export const loadHighlighter = (): Promise<HighlighterCore> => {
  loading ??= (async () => {
    const [{ createHighlighterCore }, { createJavaScriptRegexEngine }, { bundledLanguages }, { bundledThemes }] =
      await Promise.all([
        import("shiki/core"),
        import("shiki/engine/javascript"),
        import("shiki/langs"),
        import("shiki/themes"),
      ]);
    highlighter = await createHighlighterCore({
      themes: [bundledThemes[THEME]()],
      langs: [bundledLanguages.tsx()],
      engine: createJavaScriptRegexEngine(),
    });
    return highlighter;
  })();
  return loading;
};

/** Tokens for `code`, or null until the highlighter has loaded. */
export const highlightTsx = (code: string): ThemedToken[][] | null =>
  highlighter ? highlighter.codeToTokens(code, { lang: "tsx", theme: THEME }).tokens : null;
