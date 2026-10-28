import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import { ensureDir, must, readJson, slug, writeJson } from "./lib.mjs";

const repo = path.resolve(must("repo"));
const outDir = path.resolve(must("out"));
const require = createRequire(path.join(repo, "package.json"));
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const FIXED = new Date("2026-01-15T12:00:00.000Z");
const RealDate = Date;
class FixedDate extends RealDate {
  constructor(...args) {
    if (args.length === 0) super(FIXED.getTime());
    else super(...args);
  }
  static now() {
    return FIXED.getTime();
  }
}
globalThis.Date = FixedDate;

let seed = 1;
Math.random = () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

function revive(value) {
  if (Array.isArray(value)) return value.map(revive);
  if (value && typeof value === "object") {
    if (value.__fixture === "function") {
      if (value.returns === "element") return () => React.createElement("span", null, "Cell");
      return () => {};
    }
    if (value.__fixture === "element") return React.createElement("span", null, value.text || "Cell");
    if (value.__fixture === "date") return new RealDate(value.value);
    if (value.__fixture === "text") return value.value;
    const obj = {};
    for (const [key, inner] of Object.entries(value)) obj[key] = revive(inner);
    return obj;
  }
  return value;
}

function normalizeHtml(html) {
  return `${html.replace(/\r\n/g, "\n").trim()}\n`;
}

const propsDoc = readJson(path.join(outDir, "components", "props.json"));
const domDir = path.join(outDir, "visual", "dom");
ensureDir(path.join(domDir, "components"));
ensureDir(path.join(domDir, "internal"));

const lib = await import(pathToFileURL(path.join(repo, "src", "index.ts")).href);
const results = [];

function record(row) {
  results.push(row);
}

async function loadInternal(file, exportName) {
  const mod = await import(pathToFileURL(path.join(repo, file)).href);
  if (exportName === "default") return mod.default;
  return mod[exportName] || mod.default;
}

async function renderOne(component, variant, Comp) {
  const warnings = [];
  const origError = console.error;
  const origWarn = console.warn;
  console.error = (...args) => warnings.push(args.map(String).join(" "));
  console.warn = (...args) => warnings.push(args.map(String).join(" "));
  try {
    const props = revive(variant.props);
    const html = normalizeHtml(renderToStaticMarkup(React.createElement(Comp, props)));
    return { html, warnings };
  } finally {
    console.error = origError;
    console.warn = origWarn;
  }
}

for (const component of propsDoc.components) {
  let Comp = component.publicExportName ? lib[component.publicExportName] : null;
  if (!Comp) {
    try {
      Comp = await loadInternal(component.file, component.exportName);
    } catch (error) {
      record({
        name: component.name,
        variant: null,
        ok: false,
        error: `load failed: ${error.message}`,
      });
      continue;
    }
  }
  if (typeof Comp !== "function") {
    record({ name: component.name, variant: null, ok: false, error: "export is not a function" });
    continue;
  }
  for (const variant of component.variants) {
    const fileName = `${slug(component.name)}--${slug(variant.id)}.html`;
    const bucket = component.exported ? "components" : "internal";
    try {
      const rendered = await renderOne(component, variant, Comp);
      fs.writeFileSync(path.join(domDir, bucket, fileName), rendered.html);
      record({
        name: component.name,
        variant: variant.id,
        exported: component.exported,
        ok: true,
        file: `visual/dom/${bucket}/${fileName}`,
        bytes: Buffer.byteLength(rendered.html),
        warnings: rendered.warnings.slice(0, 8),
      });
    } catch (error) {
      record({
        name: component.name,
        variant: variant.id,
        exported: component.exported,
        ok: false,
        error: error.stack || error.message,
      });
    }
  }
}

const iconHtml = [];
const iconFailures = [];
for (const icon of propsDoc.icons) {
  const Comp = lib[icon.name];
  if (typeof Comp !== "function") {
    iconFailures.push({ name: icon.name, error: "missing export" });
    continue;
  }
  try {
    const html = normalizeHtml(renderToStaticMarkup(React.createElement(Comp, {}))).trim();
    iconHtml.push({ name: icon.name, html });
  } catch (error) {
    iconFailures.push({ name: icon.name, error: error.message });
  }
}
iconHtml.sort((a, b) => a.name.localeCompare(b.name));
fs.writeFileSync(
  path.join(domDir, "icons.html"),
  iconHtml.map((icon) => `<!-- ${icon.name} -->\n${icon.html}`).join("\n") + "\n",
);
writeJson(path.join(domDir, "icons.json"), iconHtml);

const ok = results.filter((row) => row.ok).length;
const failed = results.filter((row) => !row.ok);
writeJson(path.join(outDir, "visual", "dom-results.json"), {
  rendered: ok,
  failed: failed.length,
  icons: iconHtml.length,
  iconFailures,
  results,
});
console.log(`dom rendered ${ok} failed ${failed.length} icons ${iconHtml.length} iconFailures ${iconFailures.length}`);
if (failed.length) {
  console.log(failed.slice(0, 12).map((row) => `${row.name}/${row.variant}: ${row.error?.split("\n")[0]}`).join("\n"));
}
