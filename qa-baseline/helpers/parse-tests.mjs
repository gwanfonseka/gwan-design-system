import fs from "node:fs";
import path from "node:path";
import { must, readJson, writeJson } from "./lib.mjs";

const outDir = path.resolve(must("out"));
const testsDir = path.join(outDir, "tests");
const suites = fs.existsSync(path.join(testsDir, "suites.json"))
  ? readJson(path.join(testsDir, "suites.json"))
  : [];

function logOf(suite) {
  const file = path.join(testsDir, `${suite.name}.log`);
  if (!fs.existsSync(file)) return "";
  return fs.readFileSync(file, "utf8");
}

function exitOf(suite) {
  const file = path.join(testsDir, `${suite.name}.exit`);
  if (!fs.existsSync(file)) return null;
  const text = fs.readFileSync(file, "utf8").trim();
  if (text === "") return null;
  return Number(text);
}

function warningsFrom(log) {
  return log
    .split("\n")
    .filter((line) => /\bwarning\b/i.test(line) && !/^\s*$/.test(line))
    .slice(0, 200);
}

function parseTsc(log) {
  const tests = [];
  const re = /^(.*)\((\d+),(\d+)\):\s+(error|warning)\s+(TS\d+):\s+(.*)$/;
  for (const line of log.split("\n")) {
    const match = line.match(re);
    if (!match) continue;
    tests.push({
      id: `${match[1]}:${match[2]}:${match[3]}:${match[5]}`,
      file: match[1],
      line: Number(match[2]),
      column: Number(match[3]),
      level: match[4],
      code: match[5],
      message: match[6],
      status: match[4] === "error" ? "fail" : "warn",
    });
  }
  return tests;
}

function parseEslint(suite) {
  const file = path.join(testsDir, "eslint-report.json");
  if (!fs.existsSync(file)) return [];
  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return [];
  }
  const tests = [];
  for (const entry of parsed) {
    for (const message of entry.messages || []) {
      tests.push({
        id: `${entry.filePath}:${message.line}:${message.column}:${message.ruleId || "parse"}`,
        file: entry.filePath,
        line: message.line,
        column: message.column,
        level: message.severity === 2 ? "error" : "warning",
        code: message.ruleId,
        message: message.message,
        status: message.severity === 2 ? "fail" : "warn",
      });
    }
  }
  tests.sort((a, b) => a.id.localeCompare(b.id));
  return tests;
}

const results = [];
for (const suite of suites) {
  const log = logOf(suite);
  const exitCode = exitOf(suite);
  if (suite.kind === "absent") {
    results.push({
      name: suite.name,
      command: suite.command,
      status: "not-present",
      exitCode: null,
      tests: [],
      warnings: [],
      note: suite.note || "",
    });
    continue;
  }
  let tests = [];
  if (suite.kind === "tsc") tests = parseTsc(log);
  if (suite.kind === "eslint-json") tests = parseEslint(suite);
  const status = exitCode === 0 ? "pass" : exitCode == null ? "not-run" : "fail";
  results.push({
    name: suite.name,
    command: suite.command,
    status,
    exitCode,
    testCount: tests.length,
    failedCount: tests.filter((test) => test.status === "fail").length,
    warningCount: tests.filter((test) => test.status === "warn").length + warningsFrom(log).length,
    tests,
    warnings: warningsFrom(log),
    note: suite.note || "",
    logBytes: Buffer.byteLength(log),
  });
}

writeJson(path.join(testsDir, "results.json"), { suites: results });
const brief = results.map((suite) => `${suite.name}:${suite.status}`).join(" ");
console.log(brief);
