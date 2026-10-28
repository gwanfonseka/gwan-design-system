import fs from "node:fs";
import path from "node:path";
import { ensureDir, must, readJson, slug, toolingRequire, walkFiles, writeJson } from "./lib.mjs";

const repo = path.resolve(must("repo"));
const outDir = path.resolve(must("out"));
const baseUrl = process.env.QA_LIBRARY_URL || "";
const shotDir = path.join(outDir, "visual", "screenshots");
ensureDir(shotDir);

const { chromium } = toolingRequire()("playwright");

const FIXED_ISO = "2026-01-15T12:00:00.000Z";
const notes = [
  "No Storybook, no *.stories.* files, and no Storybook test-runner. Representative variants are the component-library page tabs (light and dark) plus an isolated render of each exported component with required props only.",
];
const shots = [];

function libraryTabs() {
  const file = path.join(repo, "src", "templates", "component-library", "index.tsx");
  if (!fs.existsSync(file)) return [];
  const source = fs.readFileSync(file, "utf8");
  return [...source.matchAll(/\{\s*name:\s*"([^"]+)"\s*,\s*template:/g)].map((match) => match[1]);
}

function usableCss(css) {
  return css
    .split("\n")
    .filter((line) => {
      const trimmed = line.trim();
      return !trimmed.startsWith("@import") && !trimmed.startsWith("@plugin");
    })
    .join("\n");
}

function readCss() {
  const chunks = [];
  const globals = path.join(outDir, "css-tokens", "globals.normalized.css");
  if (fs.existsSync(globals)) chunks.push(usableCss(fs.readFileSync(globals, "utf8")));
  const emitted = path.join(outDir, "css-tokens", "emitted");
  if (fs.existsSync(emitted)) {
    for (const file of walkFiles(emitted)) {
      if (file.endsWith(".normalized.css") && file.includes(".next")) {
        chunks.push(fs.readFileSync(file, "utf8"));
      }
    }
  }
  return chunks.join("\n");
}

async function preparePage(page, theme) {
  await page.emulateMedia({ colorScheme: theme, reducedMotion: "reduce" });
  await page.addInitScript((lockedTheme) => {
    try {
      localStorage.setItem("theme", lockedTheme);
    } catch {
      /* ignore */
    }
    let seed = 1;
    Math.random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    const fixed = new Date("2026-01-15T12:00:00.000Z").getTime();
    const RealDate = Date;
    class LockedDate extends RealDate {
      constructor(...args) {
        if (args.length === 0) super(fixed);
        else super(...args);
      }
      static now() {
        return fixed;
      }
    }
    globalThis.Date = LockedDate;
    const original = window.setInterval;
    window.setInterval = (fn, timeout, ...args) => {
      if (typeof timeout === "number" && timeout >= 200) return 0;
      return original(fn, timeout, ...args);
    };
  }, theme);
  await page.route("**/*", (route) => {
    const url = route.request().url();
    let host = "";
    try {
      host = new URL(url).hostname;
    } catch {
      host = "";
    }
    if (
      host.includes("fonts.googleapis") ||
      host.includes("fonts.gstatic") ||
      host.includes("vercel") ||
      host.includes("google-analytics") ||
      host.includes("googletagmanager")
    ) {
      return route.abort();
    }
    return route.continue();
  });
}

async function freezeTheme(page, theme) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
      }
      html, body, button, input, textarea, select {
        font-family: "DejaVu Sans", "Liberation Sans", sans-serif !important;
      }
    `,
  });
  await page.evaluate((locked) => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(locked);
    document.documentElement.style.colorScheme = locked;
  }, theme);
}

async function shootLocator(page, locator, file) {
  ensureDir(path.dirname(file));
  await locator.evaluate((el) => {
    const height = Math.min(el.scrollHeight || el.getBoundingClientRect().height, 16000);
    el.style.height = `${height}px`;
    el.style.maxHeight = "none";
    el.style.overflow = "visible";
    let node = el.parentElement;
    while (node && node !== document.body) {
      node.style.overflow = "visible";
      node.style.maxHeight = "none";
      node.style.height = "auto";
      node = node.parentElement;
    }
    document.body.style.height = "auto";
    document.documentElement.style.height = "auto";
  });
  await locator.screenshot({ path: file, animations: "disabled" });
}

async function captureLibrary(browser) {
  if (!baseUrl) {
    notes.push("Library screenshots skipped: QA_LIBRARY_URL was not set (site build or server did not start).");
    return;
  }
  const tabs = libraryTabs();
  if (!tabs.length) {
    notes.push("No component-library tabs found in src/templates/component-library/index.tsx.");
    return;
  }
  notes.push("No Storybook (or test-runner) exists. The component-library page is the in-repo variant harness. Each sidebar tab is captured in light and dark.");
  for (const theme of ["light", "dark"]) {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
      locale: "en-US",
      timezoneId: "UTC",
      colorScheme: theme,
    });
    await preparePage(page, theme);
    for (const tab of tabs) {
      const url = `${baseUrl}/components-library?tab=${encodeURIComponent(tab)}`;
      const safe = slug(tab);
      const png = path.join(shotDir, "library", theme, `${safe}.png`);
      const htmlFile = path.join(outDir, "visual", "library-html", theme, `${safe}.html`);
      try {
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
        await page.waitForSelector("p.text-xl", { timeout: 30000 });
        await page.waitForTimeout(400);
        await freezeTheme(page, theme);
        const panel = page.locator("p.text-xl").locator("xpath=ancestor::div[contains(@class,'bg-surface')][1]");
        await panel.waitFor({ state: "visible", timeout: 15000 });
        const html = await panel.evaluate((el) => el.innerHTML);
        ensureDir(path.dirname(htmlFile));
        fs.writeFileSync(htmlFile, `${html.trim()}\n`);
        await shootLocator(page, panel, png);
        shots.push({ kind: "library", theme, name: tab, ok: true, file: path.relative(outDir, png) });
      } catch (error) {
        shots.push({ kind: "library", theme, name: tab, ok: false, error: error.message });
        notes.push(`Library tab failed (${theme} / ${tab}): ${error.message}`);
      }
    }
    await page.close();
  }
}

async function captureIsolated(browser) {
  const props = readJson(path.join(outDir, "components", "props.json"));
  const css = readCss();
  const page = await browser.newPage({
    viewport: { width: 960, height: 700 },
    deviceScaleFactor: 1,
    locale: "en-US",
    timezoneId: "UTC",
  });
  await preparePage(page, "light");
  const targets = [];
  for (const component of props.components.filter((item) => item.exported)) {
    const variant = component.variants.find((item) => item.id === "defaults");
    if (!variant) continue;
    const htmlFile = path.join(outDir, "visual", "dom", "components", `${slug(component.name)}--defaults.html`);
    if (!fs.existsSync(htmlFile)) continue;
    targets.push({ name: component.name, html: fs.readFileSync(htmlFile, "utf8") });
  }
  for (const target of targets) {
    const png = path.join(shotDir, "isolated", `${slug(target.name)}.png`);
    try {
      await page.setContent(pageHtml(css, target.html, "light"), { waitUntil: "domcontentloaded" });
      await freezeTheme(page, "light");
      await page.screenshot({ path: png, fullPage: true, animations: "disabled" });
      shots.push({ kind: "isolated", theme: "light", name: target.name, ok: true, file: path.relative(outDir, png) });
    } catch (error) {
      shots.push({ kind: "isolated", theme: "light", name: target.name, ok: false, error: error.message });
    }
  }

  const icons = readJson(path.join(outDir, "visual", "dom", "icons.json"));
  const cells = icons
    .map((icon) => `<figure data-icon="${icon.name}"><div class="icon">${icon.html}</div><figcaption>${icon.name}</figcaption></figure>`)
    .join("\n");
  const sheet = pageHtml(
    css,
    `<div class="sheet">${cells}</div>`,
    "light",
  );
  try {
    await page.setContent(sheet, { waitUntil: "domcontentloaded" });
    await freezeTheme(page, "light");
    await page.addStyleTag({
      content: `.sheet{display:grid;grid-template-columns:repeat(6,1fr);gap:12px}.icon{width:32px;height:32px}figure{margin:0;font-size:10px;color:#333}figcaption{word-break:break-all}`,
    });
    const png = path.join(shotDir, "icons-sheet.png");
    await page.screenshot({ path: png, fullPage: true, animations: "disabled" });
    shots.push({ kind: "icons", theme: "light", name: "icons-sheet", ok: true, file: path.relative(outDir, png) });
  } catch (error) {
    shots.push({ kind: "icons", theme: "light", name: "icons-sheet", ok: false, error: error.message });
  }
  await page.close();
}

function pageHtml(css, body, theme) {
  return `<!doctype html>
<html class="${theme}">
<head>
<meta charset="utf-8" />
<style>
${css}
html, body { margin: 0; padding: 16px; background: var(--background, #fff); color: var(--foreground, #111); }
</style>
</head>
<body>${body}</body>
</html>`;
}

let browser;
try {
  browser = await chromium.launch({ headless: true, channel: process.env.QA_CHROME_CHANNEL || "chrome" });
} catch (error) {
  notes.push(`Chrome channel launch failed (${error.message}). Falling back to ${process.env.QA_CHROME_PATH || "/opt/google/chrome/chrome"}.`);
  browser = await chromium.launch({
    headless: true,
    executablePath: process.env.QA_CHROME_PATH || "/opt/google/chrome/chrome",
  });
}
try {
  await captureLibrary(browser);
  await captureIsolated(browser);
} finally {
  await browser.close();
}

const ok = shots.filter((shot) => shot.ok).length;
const failed = shots.filter((shot) => !shot.ok);
writeJson(path.join(outDir, "visual", "screenshots.json"), {
  fixedTime: FIXED_ISO,
  font: "DejaVu Sans",
  animations: "disabled",
  externalFonts: "blocked",
  intervalsAtLeast200ms: "disabled",
  mathRandom: "seeded",
  screenshotCount: ok,
  failureCount: failed.length,
  shots,
});
fs.writeFileSync(path.join(outDir, "visual", "NOTES.md"), `${notes.map((note) => `- ${note}`).join("\n")}\n`);
console.log(`screenshots ${ok} failed ${failed.length}`);
