import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { gzipSync } from "node:zlib";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

export function arg(name, fallback = undefined) {
  const argv = process.argv.slice(2);
  const idx = argv.indexOf(`--${name}`);
  if (idx === -1) return fallback;
  const next = argv[idx + 1];
  if (next === undefined || next.startsWith("--")) return true;
  return next;
}

export function must(name) {
  const value = arg(name);
  if (!value || value === true) {
    throw new Error(`Missing --${name}`);
  }
  return value;
}

export function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

export function writeJson(file, value) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
}

export function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export function sha256(buf) {
  return createHash("sha256").update(buf).digest("hex");
}

export function sha256File(file) {
  return sha256(fs.readFileSync(file));
}

export function gzipSize(buf) {
  return gzipSync(buf).length;
}

export function rel(repo, file) {
  return path.relative(repo, file).split(path.sep).join("/");
}

export function repoRequire(repo) {
  return createRequire(path.join(repo, "package.json"));
}

export function toolingRequire() {
  const dir = process.env.QA_TOOLING_DIR;
  if (!dir) throw new Error("QA_TOOLING_DIR is not set");
  return createRequire(path.join(dir, "package.json"));
}

export function loadTypescript(repo) {
  return repoRequire(repo)("typescript");
}

export function readPackage(repo) {
  return JSON.parse(fs.readFileSync(path.join(repo, "package.json"), "utf8"));
}

export function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    for (const ent of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, ent.name);
      if (ent.isDirectory()) stack.push(full);
      else if (ent.isFile()) out.push(full);
    }
  }
  return out.sort();
}

export function formatOf(file) {
  if (file.endsWith(".d.ts") || file.endsWith(".d.mts") || file.endsWith(".d.cts")) return "types";
  if (file.endsWith(".map")) return "sourcemap";
  if (file.endsWith(".css")) return "css";
  if (file.endsWith(".mjs")) return "esm";
  if (file.endsWith(".cjs")) return "cjs";
  if (file.endsWith(".js")) return "cjs";
  return "other";
}

export function cap(text, max = 20000) {
  if (text == null) return "";
  const value = String(text);
  if (value.length <= max) return value;
  return `${value.slice(0, max)}\n/* truncated ${value.length - max} chars */`;
}

export function run(cmd, args, opts = {}) {
  const result = spawnSync(cmd, args, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    ...opts,
  });
  return {
    status: result.status,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
    error: result.error ? String(result.error) : null,
  };
}

export function slug(value) {
  return String(value)
    .replace(/[^A-Za-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "value";
}
