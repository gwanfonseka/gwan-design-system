import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { ensureDir, must, toolingRequire, walkFiles, writeJson } from "./lib.mjs";

const repo = path.resolve(must("repo"));
const outDir = path.resolve(must("out"));
const cssDir = path.join(outDir, "css-tokens");
ensureDir(cssDir);
ensureDir(path.join(cssDir, "emitted"));

let prettier = null;
try {
  prettier = toolingRequire()("prettier");
} catch {
  prettier = null;
}

async function prettify(source, parser) {
  if (!prettier) return { text: source.replace(/\r\n/g, "\n"), pretty: false };
  try {
    const text = await prettier.format(source, { parser, printWidth: 100 });
    return { text, pretty: true };
  } catch (error) {
    return { text: source.replace(/\r\n/g, "\n"), pretty: false, error: error.message };
  }
}

function extractCustomProperties(css) {
  const cleaned = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const lines = cleaned.split("\n");
  const stack = ["document"];
  const found = [];
  for (const line of lines) {
    const opens = line.split("{").length - 1;
    const closes = line.split("}").length - 1;
    const beforeBrace = line.split("{")[0].trim().replace(/\s+/g, " ");
    if (opens > 0 && beforeBrace && !beforeBrace.includes(":") && !beforeBrace.startsWith("--")) {
      stack.push(beforeBrace);
    }
    const re = /(--[A-Za-z0-9-_]+)\s*:\s*([^;]+);/g;
    let match;
    while ((match = re.exec(line))) {
      found.push({
        selector: stack[stack.length - 1],
        name: match[1],
        value: match[2].trim().replace(/\s+/g, " "),
      });
    }
    for (let i = 0; i < closes; i += 1) {
      if (stack.length > 1) stack.pop();
    }
  }
  found.sort((a, b) => a.selector.localeCompare(b.selector) || a.name.localeCompare(b.name) || a.value.localeCompare(b.value));
  return found;
}

function groupProps(props) {
  const grouped = {};
  for (const prop of props) {
    grouped[prop.selector] ||= {};
    grouped[prop.selector][prop.name] = prop.value;
  }
  return grouped;
}

const globalsPath = path.join(repo, "src", "app", "globals.css");
const globals = fs.existsSync(globalsPath) ? fs.readFileSync(globalsPath, "utf8") : "";
const prettyGlobals = await prettify(globals, "css");
fs.writeFileSync(path.join(cssDir, "globals.normalized.css"), prettyGlobals.text.endsWith("\n") ? prettyGlobals.text : `${prettyGlobals.text}\n`);
const globalsProps = extractCustomProperties(globals);

const otherCss = walkFiles(path.join(repo, "src"))
  .filter((file) => file.endsWith(".css") && path.resolve(file) !== path.resolve(globalsPath))
  .map((file) => path.relative(repo, file).split(path.sep).join("/"));

const tokenMod = await import(pathToFileURL(path.join(repo, "src", "templates", "themes", "token-data.ts")).href);
const scale = {};
for (const prop of globalsProps) {
  if (prop.selector === "@theme") {
    const match = prop.name.match(/^--color-primary-(\d+)$/);
    if (match) scale[match[1]] = prop.value;
  }
}
const generated = tokenMod.generateCSS(tokenMod.LIGHT_DEFAULTS, tokenMod.DARK_DEFAULTS, scale);
const prettyGenerated = await prettify(generated, "css");
fs.writeFileSync(path.join(cssDir, "token-data.generateCSS.css"), prettyGenerated.text.endsWith("\n") ? prettyGenerated.text : `${prettyGenerated.text}\n`);

const emittedNotes = [];
const emittedRoots = [
  path.join(repo, "dist"),
  path.join(repo, ".next", "static"),
];
let emittedCount = 0;
const docsSiteRaw = [];
const docsSitePretty = [];
for (const root of emittedRoots) {
  if (!fs.existsSync(root)) continue;
  for (const file of walkFiles(root).filter((item) => item.endsWith(".css"))) {
    const relPath = path.relative(repo, file).split(path.sep).join("/");
    const raw = fs.readFileSync(file, "utf8");
    const pretty = await prettify(raw, "css");
    const safe = relPath.replace(/[\\/]/g, "__");
    fs.writeFileSync(path.join(cssDir, "emitted", `${safe}.raw.css`), raw);
    fs.writeFileSync(path.join(cssDir, "emitted", `${safe}.normalized.css`), pretty.text.endsWith("\n") ? pretty.text : `${pretty.text}\n`);
    const props = extractCustomProperties(raw);
    writeJson(path.join(cssDir, "emitted", `${safe}.custom-properties.json`), props);
    emittedNotes.push({ path: relPath, bytes: Buffer.byteLength(raw), customProperties: props.length, prettier: pretty.pretty });
    if (relPath.startsWith(".next/")) {
      docsSiteRaw.push(`/* ${relPath} */\n${raw}`);
      docsSitePretty.push(`/* ${relPath} */\n${pretty.text}`);
    }
    emittedCount += 1;
  }
}
if (docsSiteRaw.length) {
  const raw = `${docsSiteRaw.join("\n")}\n`;
  const pretty = `${docsSitePretty.join("\n")}\n`;
  fs.writeFileSync(path.join(cssDir, "docs-site.raw.css"), raw.endsWith("\n") ? raw : `${raw}\n`);
  fs.writeFileSync(path.join(cssDir, "docs-site.normalized.css"), pretty.endsWith("\n") ? pretty : `${pretty}\n`);
}

writeJson(path.join(cssDir, "custom-properties.json"), globalsProps);
writeJson(path.join(cssDir, "tokens.json"), {
  formats: ["css", "json"],
  unavailableFormats: [
    "style-dictionary",
    "css-modules",
    "js-tokens",
    "ios",
    "android",
    "scss",
  ],
  note: "gwan-design-system does not compile a token package. Consumers copy CSS custom properties from documentation. The library build emits no CSS. Source of truth is src/app/globals.css. src/templates/themes/token-data.ts is a partial subset used by the themes page generator.",
  sourceStylesheets: ["src/app/globals.css", ...otherCss],
  libraryEmittedStylesheets: emittedNotes.filter((item) => item.path.startsWith("dist/")),
  docsSiteEmittedStylesheets: emittedNotes.filter((item) => item.path.startsWith(".next/")),
  globalsBySelector: groupProps(globalsProps),
  tokenData: {
    light: tokenMod.LIGHT_DEFAULTS,
    dark: tokenMod.DARK_DEFAULTS,
    groups: tokenMod.TOKEN_GROUPS,
    primaryScalePassedToGenerateCSS: scale,
  },
  customPropertyCount: globalsProps.length,
  prettier: prettyGlobals.pretty,
});

console.log(`css custom properties ${globalsProps.length}; emitted css files ${emittedCount}`);
