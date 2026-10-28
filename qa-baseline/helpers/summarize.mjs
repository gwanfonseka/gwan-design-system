import fs from "node:fs";
import path from "node:path";
import { must, readJson, writeJson } from "./lib.mjs";

const outDir = path.resolve(must("out"));

function maybe(file) {
  const full = path.join(outDir, file);
  if (!fs.existsSync(full)) return null;
  return readJson(full);
}

function text(file) {
  const full = path.join(outDir, file);
  if (!fs.existsSync(full)) return "";
  return fs.readFileSync(full, "utf8");
}

const versions = maybe("environment/versions.json") || {};
const audit = maybe("environment/npm-audit-summary.json") || {};
const exportsList = maybe("public-api/exports.json") || [];
const components = maybe("components/index.json") || {};
const props = maybe("components/props.json") || { components: [], icons: [] };
const build = maybe("build/formats.json") || {};
const emitted = maybe("build/emitted-files.json") || { files: [], totals: {} };
const drift = maybe("build/dist-drift.json") || {};
const tokens = maybe("css-tokens/tokens.json") || {};
const tests = maybe("tests/results.json") || { suites: [] };
const dom = maybe("visual/dom-results.json") || {};
const shots = maybe("visual/screenshots.json") || {};
const pack = maybe("build/npm-pack-files.json") || {};
const visualNotes = text("visual/NOTES.md");

const counts = audit.counts || {};
const byKind = {};
for (const row of exportsList) byKind[row.kind] = (byKind[row.kind] || 0) + 1;

const manifest = {
  package: versions.packageName || null,
  version: versions.packageVersion || null,
  gitSha: versions.gitSha || null,
  gitBranch: versions.gitBranch || null,
  capturedAt: versions.capturedAt || null,
  node: versions.node || null,
  npm: versions.npm || null,
  lockfileSha256: versions.lockfileSha256 || null,
  exportCount: exportsList.length,
  exportsByKind: byKind,
  componentCount: components.componentCount || props.components.length,
  exportedComponentCount: components.exportedComponentCount || null,
  iconCount: components.iconCount || props.icons.length,
  forwardedRefCount: components.forwardedRefCount || 0,
  displayNameCount: components.displayNameCount || 0,
  emittedFileCount: emitted.files?.length || 0,
  emittedBytes: emitted.totals?.bytes || 0,
  emittedGzipBytes: emitted.totals?.gzipBytes || 0,
  emittedByFormat: build.byFormat || {},
  customPropertyCount: tokens.customPropertyCount || 0,
  audit: counts,
  tests: tests.suites.map((suite) => ({
    name: suite.name,
    status: suite.status,
    exitCode: suite.exitCode,
    failedCount: suite.failedCount || 0,
    warningCount: suite.warningCount || 0,
  })),
  domRendered: dom.rendered || 0,
  domFailed: dom.failed || 0,
  iconsRendered: dom.icons || 0,
  screenshots: shots.screenshotCount || 0,
  screenshotFailures: shots.failureCount || 0,
  committedDistMatchesFreshBuild: drift.committedMatchesFreshBuild ?? null,
  distChangedFiles: drift.changed || [],
};

writeJson(path.join(outDir, "manifest.json"), manifest);

const testLines = tests.suites.map((suite) => {
  const detail = suite.status === "not-present"
    ? suite.note
    : `exit ${suite.exitCode}, findings ${suite.testCount || 0}, failed ${suite.failedCount || 0}, warnings ${suite.warningCount || 0}`;
  return `| ${suite.name} | ${suite.status} | \`${suite.command || ""}\` | ${detail} |`;
});

const failedSuites = tests.suites.filter((suite) => suite.status === "fail");
const domFails = (dom.results || []).filter((row) => !row.ok);

const lines = [
  `# QA baseline ${versions.packageName || ""} ${versions.packageVersion || ""}`,
  "",
  `- Commit: \`${versions.gitSha || "unknown"}\``,
  `- Branch: \`${versions.gitBranch || "unknown"}\``,
  `- Captured: ${versions.capturedAt || "unknown"}`,
  `- Node: ${versions.node || "unknown"}`,
  `- npm: ${versions.npm || "unknown"}`,
  `- Lockfile: ${versions.lockfile || "package-lock.json"} \`${versions.lockfileSha256 || ""}\``,
  "",
  "## Counts",
  "",
  `- Public exports: **${manifest.exportCount}** (${Object.entries(byKind).map(([kind, count]) => `${kind} ${count}`).join(", ")})`,
  `- Components: **${manifest.componentCount}** (${manifest.exportedComponentCount} exported), icons **${manifest.iconCount}**`,
  `- Forwarded refs: ${manifest.forwardedRefCount}. displayName set: ${manifest.displayNameCount}`,
  `- Emitted files: **${manifest.emittedFileCount}**, raw ${manifest.emittedBytes} bytes, gzip ${manifest.emittedGzipBytes} bytes`,
  `- CSS custom properties in globals.css: **${manifest.customPropertyCount}**`,
  `- DOM snapshots rendered: **${manifest.domRendered}** (failed ${manifest.domFailed}), icon markup ${manifest.iconsRendered}`,
  `- Screenshots: **${manifest.screenshots}** (failed ${manifest.screenshotFailures})`,
  `- npm pack files: ${pack.packages?.[0]?.files?.length ?? "n/a"}`,
  "",
  "## Audit",
  "",
  `| severity | count |`,
  `| --- | --- |`,
  ...["critical", "high", "moderate", "low", "info", "total"].map((key) => `| ${key} | ${counts[key] ?? "n/a"} |`),
  "",
  "## Tests",
  "",
  "| suite | status | command | detail |",
  "| --- | --- | --- | --- |",
  ...testLines,
  "",
  failedSuites.length
    ? `Pre-existing failures: ${failedSuites.map((suite) => `${suite.name} (${suite.note || "see log"})`).join(" ")}`
    : "No suite exited non-zero.",
  "",
  "### Audit packages",
  "",
  ...["critical", "high", "moderate", "low", "info"].map((severity) => {
    const names = (audit.advisories || []).filter((item) => item.severity === severity).map((item) => item.name);
    return `- ${severity}: ${names.length ? names.join(", ") : "(none)"}`;
  }),
  "",
  "## Visual",
  "",
  visualNotes || "- No visual notes.",
  "",
  domFails.length
    ? `DOM render failures (${domFails.length}): ${domFails.slice(0, 20).map((row) => `${row.name}/${row.variant}`).join(", ")}`
    : "Every generated component fixture rendered.",
  "",
  `Committed dist matches a fresh tsup build: ${drift.committedMatchesFreshBuild === undefined ? "unknown" : drift.committedMatchesFreshBuild}.`,
  drift.committedMatchesFreshBuild === false
    ? `Files that differ: ${(drift.changed || []).join(", ") || "(see build/dist-drift.json)"}. CI runs build:lib before publish, so this capture's consumer artifact is the fresh build, not the bytes currently committed in dist/.`
    : "",
  "",
  "## Not captured",
  "",
  "- Storybook and story tests: the repository has neither.",
  "- Unit tests: package.json has no test script and the tree has no `*.test` / `*.spec` files.",
  "- CI (`.github/workflows/publish.yml`) only installs, runs `build:lib`, and does `npm publish --dry-run`. It does not lint, typecheck, or run the Next.js site build. Those were run anyway and recorded under tests.",
  "- CI pins Node 18. This capture uses the Node version above.",
  "- The published library emits no CSS and no style-dictionary / iOS / Android token artifacts. Tokens are the source CSS custom properties. The docs site Tailwind bundle is saved as css-tokens/docs-site.normalized.css.",
  "- @microsoft/api-extractor and react-docgen-typescript are not installed. The capture writes types/api-report.md from the TypeScript compiler instead (api-extractor style, sorted exports). Props come from the checker plus destructuring defaults.",
  "",
  "## Re-run",
  "",
  "From a checkout of the scripts (this does not modify library source or package.json):",
  "",
  "```bash",
  "bash qa-baseline/capture.sh --repo /path/to/checkout --out /tmp/qa-capture-upgrade",
  "bash qa-baseline/compare.sh /path/to/this-baseline /tmp/qa-capture-upgrade /tmp/qa-compare-report",
  "```",
  "",
  "compare.sh exits 0 when every category matches and 1 when any category differs. Behavior-contract differences are separate from audit, lockfile, and toolchain differences.",
  "",
];

fs.writeFileSync(path.join(outDir, "summary.md"), `${lines.join("\n")}\n`);
console.log(`summary ${versions.gitSha || ""} exports ${manifest.exportCount} components ${manifest.componentCount}`);
