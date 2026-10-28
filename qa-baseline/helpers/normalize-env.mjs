import fs from "node:fs";
import path from "node:path";
import { must, writeJson } from "./lib.mjs";

const outDir = path.resolve(must("out"));
const envDir = path.join(outDir, "environment");

function read(file) {
  if (!fs.existsSync(file)) return "";
  return fs.readFileSync(file, "utf8");
}

function parseJson(file) {
  const text = read(file).trim();
  if (!text) return null;
  const start = Math.min(
    ...["{", "["].map((ch) => {
      const idx = text.indexOf(ch);
      return idx === -1 ? Number.POSITIVE_INFINITY : idx;
    }),
  );
  if (!Number.isFinite(start)) return null;
  try {
    return JSON.parse(text.slice(start));
  } catch {
    return null;
  }
}

function normNode(node) {
  if (!node || typeof node !== "object") return null;
  const out = {
    name: node.name ?? null,
    version: node.version ?? null,
  };
  for (const flag of ["missing", "invalid", "extraneous", "dev", "peerMissing", "optional"]) {
    if (node[flag]) out[flag] = true;
  }
  const deps = node.dependencies || {};
  const keys = Object.keys(deps).sort();
  if (keys.length) {
    out.dependencies = {};
    for (const key of keys) out.dependencies[key] = normNode(deps[key]);
  }
  return out;
}

function writeTree(source, destination) {
  const parsed = parseJson(source);
  if (!parsed) {
    writeJson(destination, { ok: false });
    return;
  }
  writeJson(destination, {
    ok: true,
    name: parsed.name ?? null,
    version: parsed.version ?? null,
    problems: parsed.problems || [],
    tree: normNode(parsed),
  });
}

writeTree(path.join(envDir, "npm-ls.json"), path.join(envDir, "npm-ls.normalized.json"));
writeTree(path.join(envDir, "npm-ls-prod.json"), path.join(envDir, "npm-ls-prod.normalized.json"));

const audit = parseJson(path.join(envDir, "npm-audit.json"));
if (!audit) {
  writeJson(path.join(envDir, "npm-audit-summary.json"), { ok: false });
} else {
  const counts = audit.metadata?.vulnerabilities || {};
  const advisories = Object.values(audit.vulnerabilities || {})
    .map((item) => ({
      name: item.name,
      severity: item.severity,
      range: item.range ?? null,
      fixAvailable: item.fixAvailable && typeof item.fixAvailable === "object"
        ? {
            name: item.fixAvailable.name ?? null,
            version: item.fixAvailable.version ?? null,
            isSemVerMajor: Boolean(item.fixAvailable.isSemVerMajor),
          }
        : Boolean(item.fixAvailable),
      via: (item.via || []).map((via) => (
        typeof via === "string"
          ? via
          : {
              name: via.name ?? null,
              severity: via.severity ?? null,
              title: via.title ?? null,
              url: via.url ?? null,
              range: via.range ?? null,
            }
      )),
      nodes: item.nodes || [],
    }))
    .sort((a, b) => a.severity.localeCompare(b.severity) || a.name.localeCompare(b.name));
  writeJson(path.join(envDir, "npm-audit-summary.json"), {
    ok: true,
    counts,
    advisoryCount: advisories.length,
    advisories,
  });
  console.log(`audit ${JSON.stringify(counts)} advisories ${advisories.length}`);
}
