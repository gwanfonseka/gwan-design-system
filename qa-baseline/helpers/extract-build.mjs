import fs from "node:fs";
import path from "node:path";
import { arg, formatOf, gzipSize, must, readPackage, sha256, walkFiles, writeJson } from "./lib.mjs";

const repo = path.resolve(must("repo"));
const outDir = path.resolve(must("out"));
const pkg = readPackage(repo);

function hashTree(dir) {
  if (!fs.existsSync(dir)) return { exists: false, files: [] };
  const root = path.resolve(dir);
  const files = walkFiles(root).map((file) => {
    const buf = fs.readFileSync(file);
    const relPath = path.relative(root, file).split(path.sep).join("/");
    return {
      path: relPath,
      bytes: buf.length,
      gzipBytes: gzipSize(buf),
      sha256: sha256(buf),
      format: formatOf(relPath),
    };
  });
  files.sort((a, b) => a.path.localeCompare(b.path));
  const totals = files.reduce(
    (acc, file) => {
      acc.bytes += file.bytes;
      acc.gzipBytes += file.gzipBytes;
      acc.count += 1;
      return acc;
    },
    { bytes: 0, gzipBytes: 0, count: 0 },
  );
  return { exists: true, root: path.relative(repo, root).split(path.sep).join("/") || ".", totals, files };
}

const snapshot = arg("snapshot");
if (snapshot && snapshot !== true) {
  writeJson(path.resolve(snapshot), hashTree(path.join(repo, "dist")));
  process.exit(0);
}

const consumerFields = {
  name: pkg.name ?? null,
  version: pkg.version ?? null,
  description: pkg.description ?? null,
  type: pkg.type ?? null,
  main: pkg.main ?? null,
  module: pkg.module ?? null,
  types: pkg.types ?? null,
  exports: pkg.exports ?? null,
  sideEffects: Object.prototype.hasOwnProperty.call(pkg, "sideEffects") ? pkg.sideEffects : null,
  sideEffectsFieldPresent: Object.prototype.hasOwnProperty.call(pkg, "sideEffects"),
  browser: pkg.browser ?? null,
  unpkg: pkg.unpkg ?? null,
  jsdelivr: pkg.jsdelivr ?? null,
  files: pkg.files ?? null,
  peerDependencies: pkg.peerDependencies ?? null,
  peerDependenciesMeta: pkg.peerDependenciesMeta ?? null,
  dependencies: pkg.dependencies ?? null,
  optionalDependencies: pkg.optionalDependencies ?? null,
};

const buildDir = path.join(outDir, "build");
fs.mkdirSync(buildDir, { recursive: true });
const emitted = hashTree(path.join(repo, "dist"));
writeJson(path.join(buildDir, "emitted-files.json"), emitted);
writeJson(path.join(buildDir, "consumer-fields.json"), consumerFields);

const byFormat = {};
for (const file of emitted.files) {
  const bucket = byFormat[file.format] || { count: 0, bytes: 0, gzipBytes: 0 };
  bucket.count += 1;
  bucket.bytes += file.bytes;
  bucket.gzipBytes += file.gzipBytes;
  byFormat[file.format] = bucket;
}
writeJson(path.join(buildDir, "formats.json"), {
  moduleFormats: {
    esm: "dist/index.mjs (package.json exports.import)",
    cjs: "dist/index.js (package.json main, module, and exports.require)",
    types: "dist/index.d.ts (package.json types and exports.types)",
    note: "tsup emits esm and cjs. package.json module points at the cjs file dist/index.js while exports.import points at dist/index.mjs.",
  },
  byFormat,
  totals: emitted.totals,
});

function normalizePack(file, destination) {
  if (!fs.existsSync(file)) {
    writeJson(destination, { ok: false, reason: "pack output missing" });
    return;
  }
  const raw = fs.readFileSync(file, "utf8");
  const start = raw.indexOf("[");
  const startObj = raw.indexOf("{");
  const jsonStart = start === -1 ? startObj : startObj === -1 ? start : Math.min(start, startObj);
  if (jsonStart === -1) {
    writeJson(destination, { ok: false, reason: "no json in pack output" });
    return;
  }
  let parsed;
  try {
    parsed = JSON.parse(raw.slice(jsonStart));
  } catch (error) {
    writeJson(destination, { ok: false, reason: error.message });
    return;
  }
  const entries = Array.isArray(parsed) ? parsed : [parsed];
  const normalized = entries.map((entry) => ({
    name: entry.name ?? null,
    version: entry.version ?? null,
    filename: entry.filename ?? null,
    entryCount: entry.entryCount ?? (entry.files ? entry.files.length : null),
    unpackedSize: entry.unpackedSize ?? null,
    size: entry.size ?? null,
    files: (entry.files || [])
      .map((item) => ({
        path: item.path,
        size: item.size,
        mode: item.mode ?? null,
      }))
      .sort((a, b) => a.path.localeCompare(b.path)),
  }));
  writeJson(destination, { ok: true, packages: normalized });
}

normalizePack(path.join(outDir, "build", "npm-pack-dry-run.raw.json"), path.join(buildDir, "npm-pack-files.json"));
normalizePack(path.join(outDir, "build", "npm-publish-dry-run.raw.json"), path.join(buildDir, "npm-publish-dry-run.json"));

const committedPath = path.join(buildDir, "committed-dist.json");
if (fs.existsSync(committedPath)) {
  const committed = JSON.parse(fs.readFileSync(committedPath, "utf8"));
  const before = new Map((committed.files || []).map((file) => [file.path, file.sha256]));
  const after = new Map(emitted.files.map((file) => [file.path, file.sha256]));
  const changed = [];
  const added = [];
  const removed = [];
  for (const [file, hash] of after) {
    if (!before.has(file)) added.push(file);
    else if (before.get(file) !== hash) changed.push(file);
  }
  for (const file of before.keys()) if (!after.has(file)) removed.push(file);
  writeJson(path.join(buildDir, "dist-drift.json"), {
    committedMatchesFreshBuild: added.length === 0 && removed.length === 0 && changed.length === 0,
    added,
    removed,
    changed,
  });
}

console.log(`emitted files ${emitted.files.length} bytes ${emitted.totals?.bytes ?? 0}`);
