import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import { readJson, sha256, writeJson } from "./lib.mjs";

const leftRoot = path.resolve(process.argv[2] || "");
const rightRoot = path.resolve(process.argv[3] || "");
const reportDir = path.resolve(process.argv[4] || path.join(process.cwd(), "qa-compare-report"));

if (!leftRoot || !rightRoot || !fs.existsSync(leftRoot) || !fs.existsSync(rightRoot)) {
  console.error("Usage: compare.sh <left-capture> <right-capture> [report-dir]");
  process.exit(2);
}

fs.mkdirSync(reportDir, { recursive: true });

function exists(root, file) {
  return fs.existsSync(path.join(root, file));
}

function read(root, file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function json(root, file) {
  if (!exists(root, file)) return null;
  return readJson(path.join(root, file));
}

function listFiles(dir, predicate = () => true) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    for (const ent of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, ent.name);
      if (ent.isDirectory()) stack.push(full);
      else if (predicate(full)) out.push(full);
    }
  }
  return out.sort();
}

function relFiles(root, sub, predicate) {
  const base = path.join(root, sub);
  return listFiles(base, predicate).map((file) => path.relative(base, file).split(path.sep).join("/"));
}

function percent(before, after) {
  if (before === 0 && after === 0) return 0;
  if (before === 0) return null;
  return ((after - before) / before) * 100;
}

function fmtPct(value) {
  if (value == null) return "n/a";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function unified(aFile, bFile) {
  const diff = spawnSync("diff", ["-u", aFile, bFile], { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
  return diff.stdout || "";
}

const sections = [];
const contractBreaks = [];
const infoBreaks = [];

function add(kind, title, body, contract = false) {
  sections.push({ kind, title, body, contract });
  if (body.some((line) => line.startsWith("DIFF") || line.startsWith("CHANGED") || line.startsWith("ADDED") || line.startsWith("REMOVED"))) {
    if (contract) contractBreaks.push(title);
    else infoBreaks.push(title);
  }
}

function compareExports() {
  const left = json(leftRoot, "public-api/exports.json") || [];
  const right = json(rightRoot, "public-api/exports.json") || [];
  const key = (row) => `${row.entry || "."}:${row.name}`;
  const leftMap = new Map(left.map((row) => [key(row), row]));
  const rightMap = new Map(right.map((row) => [key(row), row]));
  const added = [];
  const removed = [];
  const changed = [];
  for (const [id, row] of rightMap) {
    if (!leftMap.has(id)) added.push(id);
    else {
      const prev = leftMap.get(id);
      if (prev.kind !== row.kind || prev.typeOnly !== row.typeOnly) {
        changed.push(`${id} kind ${prev.kind}/${prev.typeOnly} -> ${row.kind}/${row.typeOnly}`);
      }
    }
  }
  for (const id of leftMap.keys()) if (!rightMap.has(id)) removed.push(id);
  const lines = [
    `exports ${left.length} -> ${right.length}`,
  ];
  if (added.length) lines.push(`ADDED ${added.length}: ${added.slice(0, 40).join(", ")}`);
  if (removed.length) lines.push(`REMOVED ${removed.length}: ${removed.slice(0, 40).join(", ")}`);
  if (changed.length) lines.push(`CHANGED ${changed.length}: ${changed.slice(0, 40).join("; ")}`);
  if (!added.length && !removed.length && !changed.length) lines.push("identical names and kinds");

  const leftTypes = json(leftRoot, "public-api/dist-exports.json");
  const rightTypes = json(rightRoot, "public-api/dist-exports.json");
  if (leftTypes && rightTypes) {
    const lt = new Map(leftTypes.exports.map((row) => [row.name, row.type]));
    const rt = new Map(rightTypes.exports.map((row) => [row.name, row.type]));
    const typeChanged = [];
    for (const [name, type] of rt) {
      if (lt.has(name) && lt.get(name) !== type) typeChanged.push(name);
    }
    if (typeChanged.length) lines.push(`CHANGED type text ${typeChanged.length}: ${typeChanged.slice(0, 40).join(", ")}`);
    else lines.push("type text identical for shared export names");
  }
  add("api", "Public API", lines, true);
}

function compareText(kind, title, relativePath, contract) {
  const a = path.join(leftRoot, relativePath);
  const b = path.join(rightRoot, relativePath);
  if (!fs.existsSync(a) && !fs.existsSync(b)) {
    add(kind, title, ["both missing"], contract);
    return;
  }
  if (!fs.existsSync(a) || !fs.existsSync(b)) {
    add(kind, title, [`CHANGED presence left=${fs.existsSync(a)} right=${fs.existsSync(b)}`], contract);
    return;
  }
  const aHash = sha256(fs.readFileSync(a));
  const bHash = sha256(fs.readFileSync(b));
  if (aHash === bHash) {
    add(kind, title, ["identical"], contract);
    return;
  }
  const diff = unified(a, b);
  const diffFile = path.join(reportDir, `${kind}-${path.basename(relativePath)}.diff`);
  fs.writeFileSync(diffFile, diff);
  const diffLines = diff.split("\n");
  const plus = diffLines.filter((line) => line.startsWith("+") && !line.startsWith("+++")).length;
  const minus = diffLines.filter((line) => line.startsWith("-") && !line.startsWith("---")).length;
  add(kind, title, [
    `CHANGED +${plus} -${minus} lines`,
    `diff: ${diffFile}`,
    ...diffLines.slice(0, 80),
    diffLines.length > 80 ? `... ${diffLines.length - 80} more lines` : "",
  ].filter(Boolean), contract);
}

function compareProps() {
  const left = json(leftRoot, "components/props.json");
  const right = json(rightRoot, "components/props.json");
  if (!left || !right) {
    add("props", "Props and defaults", ["CHANGED props.json missing on one side"], true);
    return;
  }
  const simplify = (doc) => {
    const rows = [...(doc.components || []), ...(doc.icons || [])];
    const map = new Map();
    for (const row of rows) {
      map.set(row.name, {
        exported: row.exported,
        displayName: row.displayName,
        forwardedRef: row.forwardedRef,
        props: (row.props || []).map((prop) => ({
          name: prop.name,
          type: prop.type,
          required: prop.required,
          typeOptional: prop.typeOptional,
          hasDefault: prop.hasDefault,
          defaultSource: prop.defaultSource,
          inherited: prop.inherited,
        })),
      });
    }
    return map;
  };
  const lmap = simplify(left);
  const rmap = simplify(right);
  const added = [];
  const removed = [];
  const changed = [];
  for (const [name, row] of rmap) {
    if (!lmap.has(name)) {
      added.push(name);
      continue;
    }
    const prev = lmap.get(name);
    if (JSON.stringify(prev) !== JSON.stringify(row)) {
      const prevProps = new Map(prev.props.map((prop) => [prop.name, prop]));
      const nextProps = new Map(row.props.map((prop) => [prop.name, prop]));
      const bits = [];
      if (prev.displayName !== row.displayName) bits.push(`displayName ${prev.displayName} -> ${row.displayName}`);
      if (prev.forwardedRef !== row.forwardedRef) bits.push(`forwardedRef ${prev.forwardedRef} -> ${row.forwardedRef}`);
      for (const [propName, prop] of nextProps) {
        if (!prevProps.has(propName)) bits.push(`+prop ${propName}`);
        else if (JSON.stringify(prevProps.get(propName)) !== JSON.stringify(prop)) bits.push(`~prop ${propName}`);
      }
      for (const propName of prevProps.keys()) if (!nextProps.has(propName)) bits.push(`-prop ${propName}`);
      changed.push(`${name}: ${bits.slice(0, 12).join(", ")}`);
    }
  }
  for (const name of lmap.keys()) if (!rmap.has(name)) removed.push(name);
  const lines = [`components+icons ${lmap.size} -> ${rmap.size}`];
  if (added.length) lines.push(`ADDED ${added.join(", ")}`);
  if (removed.length) lines.push(`REMOVED ${removed.join(", ")}`);
  if (changed.length) lines.push(`CHANGED ${changed.length}`, ...changed.slice(0, 60));
  if (!added.length && !removed.length && !changed.length) lines.push("identical props, defaults, refs, displayNames");
  add("props", "Props and defaults", lines, true);
}

function compareBuild() {
  const left = json(leftRoot, "build/emitted-files.json");
  const right = json(rightRoot, "build/emitted-files.json");
  const lines = [];
  if (!left || !right) {
    add("build", "Build and size", ["CHANGED emitted-files.json missing"], true);
    return;
  }
  const lmap = new Map(left.files.map((file) => [file.path, file]));
  const rmap = new Map(right.files.map((file) => [file.path, file]));
  const added = [...rmap.keys()].filter((file) => !lmap.has(file));
  const removed = [...lmap.keys()].filter((file) => !rmap.has(file));
  if (added.length) lines.push(`ADDED ${added.join(", ")}`);
  if (removed.length) lines.push(`REMOVED ${removed.join(", ")}`);
  lines.push("file | raw | gzip | raw % | gzip % | contract");
  let contentChanged = 0;
  let contractChanged = 0;
  for (const [file, next] of [...rmap.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const prev = lmap.get(file);
    if (!prev) continue;
    const rawDelta = next.bytes - prev.bytes;
    const gzipDelta = next.gzipBytes - prev.gzipBytes;
    const same = prev.sha256 === next.sha256;
    const contractFile = !file.endsWith(".map");
    if (!same) {
      contentChanged += 1;
      if (contractFile) contractChanged += 1;
    }
    if (!same || rawDelta !== 0) {
      lines.push(
        `${file} | ${prev.bytes} -> ${next.bytes} (${rawDelta >= 0 ? "+" : ""}${rawDelta}) | ${prev.gzipBytes} -> ${next.gzipBytes} (${gzipDelta >= 0 ? "+" : ""}${gzipDelta}) | ${fmtPct(percent(prev.bytes, next.bytes))} | ${fmtPct(percent(prev.gzipBytes, next.gzipBytes))} | ${contractFile ? "yes" : "sourcemap"}`,
      );
    }
  }
  if (!added.length && !removed.length && contentChanged === 0) lines.push("identical file set and hashes");
  else if (contractChanged) lines.push(`CHANGED ${contractChanged} consumer file hashes`);
  else lines.push(`sourcemap-only hash changes: ${contentChanged}`);
  const leftFields = json(leftRoot, "build/consumer-fields.json");
  const rightFields = json(rightRoot, "build/consumer-fields.json");
  const stripDeps = (fields) => {
    if (!fields) return fields;
    const { dependencies, ...rest } = fields;
    return rest;
  };
  if (JSON.stringify(stripDeps(leftFields)) !== JSON.stringify(stripDeps(rightFields))) {
    lines.push("CHANGED package.json consumer fields (dependencies are reported separately)");
    fs.writeFileSync(
      path.join(reportDir, "consumer-fields.diff"),
      unified(
        path.join(leftRoot, "build/consumer-fields.json"),
        path.join(rightRoot, "build/consumer-fields.json"),
      ),
    );
  } else {
    lines.push("consumer fields identical aside from dependencies");
  }
  const leftPack = json(leftRoot, "build/npm-pack-files.json");
  const rightPack = json(rightRoot, "build/npm-pack-files.json");
  const packLeft = (leftPack?.packages?.[0]?.files || []).map((file) => file.path).sort();
  const packRight = (rightPack?.packages?.[0]?.files || []).map((file) => file.path).sort();
  if (JSON.stringify(packLeft) !== JSON.stringify(packRight)) {
    lines.push(`CHANGED npm pack file list ${packLeft.length} -> ${packRight.length}`);
  } else {
    lines.push(`npm pack file list identical (${packLeft.length})`);
  }
  add("build", "Build and size", lines, true);
}

function compareDeps() {
  const left = json(leftRoot, "environment/npm-ls-prod.normalized.json");
  const right = json(rightRoot, "environment/npm-ls-prod.normalized.json");
  const lines = [];
  if (!left || !right) {
    add("deps", "Consumer dependencies", ["missing prod tree"], false);
    return;
  }
  if (JSON.stringify(left.tree) === JSON.stringify(right.tree)) lines.push("production tree identical");
  else lines.push("CHANGED production dependency tree (consumer install)");
  const fieldsLeft = json(leftRoot, "build/consumer-fields.json") || {};
  const fieldsRight = json(rightRoot, "build/consumer-fields.json") || {};
  if (JSON.stringify(fieldsLeft.dependencies || null) === JSON.stringify(fieldsRight.dependencies || null)) {
    lines.push("package.json dependencies identical");
  } else {
    lines.push("CHANGED package.json dependencies");
  }
  const auditLeft = json(leftRoot, "environment/npm-audit-summary.json");
  const auditRight = json(rightRoot, "environment/npm-audit-summary.json");
  const c1 = auditLeft?.counts || {};
  const c2 = auditRight?.counts || {};
  lines.push(
    `audit total ${c1.total ?? "?"} -> ${c2.total ?? "?"}; critical ${c1.critical ?? "?"} -> ${c2.critical ?? "?"}; high ${c1.high ?? "?"} -> ${c2.high ?? "?"}; moderate ${c1.moderate ?? "?"} -> ${c2.moderate ?? "?"}; low ${c1.low ?? "?"} -> ${c2.low ?? "?"}`,
  );
  if (JSON.stringify(c1) !== JSON.stringify(c2)) lines.push("CHANGED audit counts");
  else lines.push("audit counts identical");
  const v1 = json(leftRoot, "environment/versions.json") || {};
  const v2 = json(rightRoot, "environment/versions.json") || {};
  lines.push(`node ${v1.node} -> ${v2.node}`);
  lines.push(`npm ${v1.npm} -> ${v2.npm}`);
  lines.push(`lockfile ${v1.lockfileSha256 === v2.lockfileSha256 ? "identical" : "CHANGED"}`);
  if (v1.node !== v2.node || v1.npm !== v2.npm) lines.push("CHANGED toolchain version");
  add("deps", "Dependencies, audit, toolchain", lines, false);
}

function compareTests() {
  const left = json(leftRoot, "tests/results.json");
  const right = json(rightRoot, "tests/results.json");
  if (!left || !right) {
    add("tests", "Tests", ["CHANGED results.json missing"], true);
    return;
  }
  const lmap = new Map(left.suites.map((suite) => [suite.name, suite]));
  const rmap = new Map(right.suites.map((suite) => [suite.name, suite]));
  const lines = ["suite | left | right | failed left -> right"];
  let changed = false;
  const names = [...new Set([...lmap.keys(), ...rmap.keys()])].sort();
  for (const name of names) {
    const a = lmap.get(name);
    const b = rmap.get(name);
    const statusChanged = (a?.status || "missing") !== (b?.status || "missing");
    const failedChanged = (a?.failedCount || 0) !== (b?.failedCount || 0);
    if (statusChanged || failedChanged) changed = true;
    lines.push(`${name} | ${a?.status || "missing"} | ${b?.status || "missing"} | ${a?.failedCount || 0} -> ${b?.failedCount || 0}`);
    const aIds = new Set((a?.tests || []).filter((test) => test.status === "fail").map((test) => test.id));
    const bIds = new Set((b?.tests || []).filter((test) => test.status === "fail").map((test) => test.id));
    const newFails = [...bIds].filter((id) => !aIds.has(id));
    const fixed = [...aIds].filter((id) => !bIds.has(id));
    if (newFails.length) lines.push(`ADDED failures in ${name}: ${newFails.slice(0, 20).join(", ")}`);
    if (fixed.length) lines.push(`REMOVED failures in ${name}: ${fixed.slice(0, 20).join(", ")}`);
  }
  if (!changed) lines.push("suite status identical");
  else lines.push("CHANGED suite status or failure counts");
  add("tests", "Tests", lines, true);
}

async function compareVisual() {
  const pairs = [
    ["visual/dom/components", (file) => file.endsWith(".html")],
    ["visual/dom/internal", (file) => file.endsWith(".html")],
    ["visual/library-html", (file) => file.endsWith(".html")],
  ];
  const lines = [];
  let htmlChanged = 0;
  for (const [sub, predicate] of pairs) {
    const leftFiles = new Set(relFiles(leftRoot, sub, predicate));
    const rightFiles = new Set(relFiles(rightRoot, sub, predicate));
    const added = [...rightFiles].filter((file) => !leftFiles.has(file));
    const removed = [...leftFiles].filter((file) => !rightFiles.has(file));
    if (added.length) lines.push(`ADDED ${sub} ${added.length}`);
    if (removed.length) lines.push(`REMOVED ${sub} ${removed.length}`);
    for (const file of [...leftFiles].filter((item) => rightFiles.has(item)).sort()) {
      const a = path.join(leftRoot, sub, file);
      const b = path.join(rightRoot, sub, file);
      if (sha256(fs.readFileSync(a)) !== sha256(fs.readFileSync(b))) {
        htmlChanged += 1;
        if (htmlChanged <= 30) lines.push(`CHANGED html ${sub}/${file}`);
      }
    }
  }
  const iconA = path.join(leftRoot, "visual/dom/icons.json");
  const iconB = path.join(rightRoot, "visual/dom/icons.json");
  if (fs.existsSync(iconA) && fs.existsSync(iconB)) {
    if (sha256(fs.readFileSync(iconA)) === sha256(fs.readFileSync(iconB))) lines.push("icon markup identical");
    else {
      lines.push("CHANGED icon markup");
      htmlChanged += 1;
    }
  }
  if (htmlChanged === 0 && !lines.some((line) => line.startsWith("ADDED") || line.startsWith("REMOVED") || line.startsWith("CHANGED"))) {
    lines.push("DOM/HTML snapshots identical");
  } else if (htmlChanged) lines.push(`CHANGED html files ${htmlChanged}`);

  const shotSub = "visual/screenshots";
  const leftShots = relFiles(leftRoot, shotSub, (file) => file.endsWith(".png"));
  const rightShots = relFiles(rightRoot, shotSub, (file) => file.endsWith(".png"));
  const leftSet = new Set(leftShots);
  const rightSet = new Set(rightShots);
  const addedShots = rightShots.filter((file) => !leftSet.has(file));
  const removedShots = leftShots.filter((file) => !rightSet.has(file));
  if (addedShots.length) lines.push(`ADDED screenshots ${addedShots.length}`);
  if (removedShots.length) lines.push(`REMOVED screenshots ${removedShots.length}`);
  let pixelFiles = 0;
  let pixelTotal = 0;
  let compared = 0;
  const pixelmatch = await loadPixelmatch();
  const PNG = loadPng();
  const diffDir = path.join(reportDir, "pixel-diffs");
  fs.mkdirSync(diffDir, { recursive: true });
  if (!pixelmatch || !PNG) {
    lines.push("pixelmatch/pngjs unavailable; screenshot bytes compared by hash only");
  }
  for (const file of leftShots.filter((item) => rightSet.has(item))) {
    const aPath = path.join(leftRoot, shotSub, file);
    const bPath = path.join(rightRoot, shotSub, file);
    if (sha256(fs.readFileSync(aPath)) === sha256(fs.readFileSync(bPath))) {
      compared += 1;
      continue;
    }
    if (!pixelmatch || !PNG) {
      pixelFiles += 1;
      lines.push(`CHANGED screenshot hash ${file}`);
      continue;
    }
    const a = PNG.sync.read(fs.readFileSync(aPath));
    const b = PNG.sync.read(fs.readFileSync(bPath));
    compared += 1;
    if (a.width !== b.width || a.height !== b.height) {
      pixelFiles += 1;
      lines.push(`CHANGED dimensions ${file} ${a.width}x${a.height} -> ${b.width}x${b.height}`);
      continue;
    }
    const diff = new PNG({ width: a.width, height: a.height });
    const mismatched = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1 });
    if (mismatched > 0) {
      pixelFiles += 1;
      pixelTotal += mismatched;
      const diffName = file.replace(/[\\/]/g, "__");
      fs.writeFileSync(path.join(diffDir, diffName), PNG.sync.write(diff));
      const pct = (mismatched / (a.width * a.height)) * 100;
      lines.push(`CHANGED pixels ${file} ${mismatched} (${pct.toFixed(3)}%)`);
    }
  }
  if (pixelFiles === 0 && addedShots.length === 0 && removedShots.length === 0) {
    lines.push(`screenshots identical (${compared} compared)`);
  } else {
    lines.push(`CHANGED screenshots ${pixelFiles}, mismatched pixels ${pixelTotal}`);
  }
  add("visual", "Visual DOM and pixels", lines, true);
}

function loadFromTooling(name) {
  const dir = process.env.QA_TOOLING_DIR;
  if (!dir) return null;
  try {
    const require = createRequire(path.join(dir, "package.json"));
    return require(name);
  } catch {
    return null;
  }
}

function loadPng() {
  const mod = loadFromTooling("pngjs");
  return mod?.PNG || null;
}

async function main() {
  compareExports();
  compareText("types", "Generated types (api report)", "types/api-report.md", true);
  compareText("types", "Generated types (normalized d.ts)", "types/normalized/index.d.ts", true);
  compareText("types", "API extractor report", "types/api-extractor/api-extractor.md", true);
  compareProps();
  compareBuild();
  compareText("css", "CSS globals", "css-tokens/globals.normalized.css", true);
  compareText("css", "Docs site CSS", "css-tokens/docs-site.normalized.css", true);
  compareText("css", "Token JSON", "css-tokens/tokens.json", true);
  compareText("css", "Token generator CSS", "css-tokens/token-data.generateCSS.css", true);
  compareDeps();
  compareTests();
  await compareVisual();

  const lines = [];
  lines.push("QA BASELINE COMPARE");
  lines.push(`left:  ${leftRoot}`);
  lines.push(`right: ${rightRoot}`);
  const leftManifest = json(leftRoot, "manifest.json") || {};
  const rightManifest = json(rightRoot, "manifest.json") || {};
  lines.push(`sha: ${leftManifest.gitSha || "?"} -> ${rightManifest.gitSha || "?"}`);
  lines.push("");
  for (const section of sections) {
    lines.push(`## ${section.title}`);
    for (const line of section.body) lines.push(line);
    lines.push("");
  }
  const behaviorIdentical = contractBreaks.length === 0;
  lines.push(behaviorIdentical ? "BEHAVIOR CONTRACT: identical" : `BEHAVIOR CONTRACT: DIFFERENT (${contractBreaks.join("; ")})`);
  lines.push(infoBreaks.length ? `ENVIRONMENT: DIFFERENT (${infoBreaks.join("; ")})` : "ENVIRONMENT: identical");
  lines.push(`report: ${reportDir}`);
  const text = `${lines.join("\n")}\n`;
  fs.writeFileSync(path.join(reportDir, "report.md"), text);
  writeJson(path.join(reportDir, "report.json"), {
    behaviorIdentical,
    contractBreaks,
    infoBreaks,
    left: leftRoot,
    right: rightRoot,
  });
  process.stdout.write(text);
  process.exit(behaviorIdentical && infoBreaks.length === 0 ? 0 : 1);
}

async function loadPixelmatch() {
  const dir = process.env.QA_TOOLING_DIR;
  if (!dir) return null;
  try {
    const require = createRequire(path.join(dir, "package.json"));
    const loaded = require("pixelmatch");
    return loaded.default || loaded;
  } catch {
    try {
      const mod = await import(pathToFileURL(path.join(dir, "node_modules", "pixelmatch", "index.js")).href);
      return mod.default || mod;
    } catch {
      return null;
    }
  }
}

await main();
