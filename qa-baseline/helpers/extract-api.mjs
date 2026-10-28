import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  cap,
  ensureDir,
  loadTypescript,
  must,
  readPackage,
  rel,
  toolingRequire,
  writeJson,
} from "./lib.mjs";

const repo = path.resolve(must("repo"));
const outDir = path.resolve(must("out"));
const ts = loadTypescript(repo);
const pkg = readPackage(repo);

const FORMAT =
  ts.TypeFormatFlags.NoTruncation |
  ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope |
  ts.TypeFormatFlags.InTypeAlias |
  ts.TypeFormatFlags.UseStructuralFallback |
  ts.TypeFormatFlags.MultilineObjectLiterals;

function sourceProgram() {
  const configPath = path.join(repo, "tsconfig.json");
  const read = ts.readConfigFile(configPath, ts.sys.readFile);
  if (read.error) {
    throw new Error(ts.flattenDiagnosticMessageText(read.error.messageText, "\n"));
  }
  const parsed = ts.parseJsonConfigFileContent(read.config, ts.sys, repo);
  const options = { ...parsed.options, noEmit: true, incremental: false, skipLibCheck: true };
  delete options.plugins;
  const files = parsed.fileNames.filter((file) => !file.includes(`${path.sep}.next${path.sep}`));
  const entry = path.join(repo, "src", "index.ts");
  if (!files.includes(entry)) files.push(entry);
  return { program: ts.createProgram({ rootNames: files, options }), entry };
}

function distProgram() {
  const dts = path.join(repo, "dist", "index.d.ts");
  if (!fs.existsSync(dts)) return null;
  const options = {
    strict: true,
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    jsx: ts.JsxEmit.ReactJSX,
    esModuleInterop: true,
    skipLibCheck: true,
    noEmit: true,
    allowSyntheticDefaultImports: true,
  };
  return { program: ts.createProgram({ rootNames: [dts], options }), entry: dts };
}

function isTypeOnlyExport(symbol) {
  const decls = symbol.declarations || [];
  return decls.some((decl) => {
    if (ts.isExportSpecifier(decl) && (decl.isTypeOnly || decl.parent?.isTypeOnly)) return true;
    return false;
  });
}

function declarationText(symbol) {
  const decls = symbol.declarations || [];
  const preferred = decls.find((decl) =>
    ts.isInterfaceDeclaration(decl) ||
    ts.isTypeAliasDeclaration(decl) ||
    ts.isEnumDeclaration(decl) ||
    ts.isFunctionDeclaration(decl) ||
    ts.isClassDeclaration(decl) ||
    ts.isVariableDeclaration(decl)
  );
  if (!preferred) return null;
  return preferred.getText().replace(/\r\n/g, "\n").trim();
}

function classify(checker, symbol, typeText) {
  const flags = symbol.flags;
  if (flags & ts.SymbolFlags.Enum) return "enum";
  if (flags & ts.SymbolFlags.Interface) return "interface";
  if (flags & ts.SymbolFlags.TypeAlias) return "type";
  if (flags & ts.SymbolFlags.Class) return "class";
  if (flags & ts.SymbolFlags.ValueModule) return "namespace";
  const decl = symbol.valueDeclaration || symbol.declarations?.[0];
  let call = false;
  if (decl) {
    try {
      const type = checker.getTypeOfSymbolAtLocation(symbol, decl);
      call = type.getCallSignatures().length > 0;
    } catch {
      call = false;
    }
  }
  if (call || flags & ts.SymbolFlags.Function) {
    if (
      /(?:^|\W)(?:FC|FunctionComponent|ForwardRefExoticComponent)\b/.test(typeText) ||
      /=>\s*(?:React\.)?(?:JSX\.Element|ReactNode|ReactElement|Element)\b/.test(typeText) ||
      /(?:JSX\.Element|ReactElement|ReactNode)/.test(typeText)
    ) {
      return "component";
    }
    return "function";
  }
  if (flags & (ts.SymbolFlags.Variable | ts.SymbolFlags.BlockScopedVariable | ts.SymbolFlags.FunctionScopedVariable)) {
    return "const";
  }
  return "unknown";
}

function collect(program, entry) {
  const checker = program.getTypeChecker();
  const sourceFile = program.getSourceFile(entry);
  if (!sourceFile) {
    return { exports: [], diagnostics: ["entry source file missing"] };
  }
  const moduleSymbol = checker.getSymbolAtLocation(sourceFile);
  if (!moduleSymbol) return { exports: [], diagnostics: ["no module symbol"] };
  const exported = checker.getExportsOfModule(moduleSymbol);
  const rows = [];
  for (const exp of exported) {
    const typeOnly = isTypeOnlyExport(exp);
    const resolved = exp.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(exp) : exp;
    const decl = resolved.valueDeclaration || resolved.declarations?.[0] || exp.declarations?.[0] || sourceFile;
    let typeText = "";
    try {
      const type = checker.getTypeOfSymbolAtLocation(resolved, decl);
      typeText = checker.typeToString(type, decl, FORMAT);
    } catch (error) {
      typeText = `<unresolved: ${error.message}>`;
    }
    const file = decl && decl.getSourceFile ? decl.getSourceFile().fileName : null;
    rows.push({
      name: exp.name,
      kind: classify(checker, resolved, typeText),
      typeOnly,
      type: cap(typeText),
      declaration: cap(declarationText(resolved), 30000),
      declaredIn: file ? rel(repo, file) : null,
    });
  }
  rows.sort((a, b) => a.name.localeCompare(b.name) || a.kind.localeCompare(b.kind));
  const diagnostics = ts.getPreEmitDiagnostics(program)
    .filter((diag) => diag.file && (diag.file.fileName === entry || diag.file.fileName.endsWith(`${path.sep}src${path.sep}index.ts`)))
    .slice(0, 50)
    .map((diag) => ts.flattenDiagnosticMessageText(diag.messageText, "\n"));
  return { exports: rows, diagnostics };
}

function entryPoints() {
  const exportsField = pkg.exports ?? null;
  const entries = [];
  const push = (subpath, target) => {
    entries.push({ subpath, target });
  };
  if (exportsField && typeof exportsField === "object" && !Array.isArray(exportsField)) {
    for (const [subpath, target] of Object.entries(exportsField)) {
      push(subpath, target);
    }
  } else if (typeof exportsField === "string") {
    push(".", exportsField);
  }
  return {
    package: pkg.name,
    version: pkg.version,
    main: pkg.main ?? null,
    module: pkg.module ?? null,
    types: pkg.types ?? null,
    exports: exportsField,
    entryPoints: entries.sort((a, b) => String(a.subpath).localeCompare(String(b.subpath))),
  };
}

function apiReport(rows, origin) {
  const lines = [
    `# API report for ${pkg.name}@${pkg.version}`,
    "",
    `Origin: ${origin}`,
    "Names are sorted. This is the consumer-facing export list.",
    "",
  ];
  for (const row of rows) {
    lines.push(`## ${row.name}`);
    lines.push("");
    lines.push(`- kind: ${row.kind}`);
    lines.push(`- typeOnly: ${row.typeOnly}`);
    if (row.declaredIn) lines.push(`- declaredIn: ${row.declaredIn}`);
    lines.push("");
    if (row.declaration && (row.kind === "interface" || row.kind === "type" || row.kind === "enum")) {
      lines.push("```ts");
      lines.push(row.declaration);
      lines.push("```");
    } else {
      lines.push("```ts");
      lines.push(row.type);
      lines.push("```");
    }
    lines.push("");
  }
  return `${lines.join("\n")}\n`;
}

function normalizeDts(text) {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .concat("\n");
}

function copyTypes() {
  const typesDir = path.join(outDir, "types");
  ensureDir(path.join(typesDir, "emitted"));
  ensureDir(path.join(typesDir, "normalized"));
  const dist = path.join(repo, "dist");
  const copied = [];
  if (!fs.existsSync(dist)) return copied;
  for (const file of fs.readdirSync(dist)) {
    if (!/\.d\.[cm]?ts$/.test(file)) continue;
    const raw = fs.readFileSync(path.join(dist, file), "utf8");
    fs.writeFileSync(path.join(typesDir, "emitted", file), raw);
    fs.writeFileSync(path.join(typesDir, "normalized", file), normalizeDts(raw));
    copied.push(file);
  }
  return copied.sort();
}

function runApiExtractor(noteFile) {
  const dts = path.join(repo, "dist", "index.d.ts");
  const reportDir = path.join(outDir, "types", "api-extractor");
  ensureDir(reportDir);
  if (!fs.existsSync(dts)) {
    fs.writeFileSync(noteFile, "api-extractor skipped: dist/index.d.ts missing\n");
    return { ok: false, reason: "missing dts" };
  }
  let extractor;
  try {
    extractor = toolingRequire()("@microsoft/api-extractor");
  } catch (error) {
    fs.writeFileSync(noteFile, `api-extractor unavailable: ${error.message}\n`);
    return { ok: false, reason: error.message };
  }
  const configPath = path.join(reportDir, "api-extractor.json");
  const config = {
    $schema: "https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json",
    projectFolder: repo,
    mainEntryPointFilePath: "<projectFolder>/dist/index.d.ts",
    bundledPackages: [],
    compiler: { skipLibCheck: true },
    dtsRollup: { enabled: false },
    apiReport: {
      enabled: true,
      reportFolder: reportDir,
      reportTempFolder: path.join(reportDir, "temp"),
      reportFileName: "api-extractor.md",
    },
    docModel: {
      enabled: true,
      apiJsonFilePath: path.join(reportDir, "api-extractor.api.json"),
    },
    tsdocMetadata: { enabled: false },
    newlineKind: "lf",
    messages: {
      compilerMessageReporting: { default: { logLevel: "none" } },
      extractorMessageReporting: { default: { logLevel: "none" } },
      tsdocMessageReporting: { default: { logLevel: "none" } },
    },
  };
  fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
  try {
    const prepared = extractor.ExtractorConfig.loadFileAndPrepare(configPath);
    const result = extractor.Extractor.invoke(prepared, {
      localBuild: true,
      showVerboseMessages: false,
      showDiagnostics: false,
      messageCallback: () => {},
    });
    const succeeded = Boolean(result.succeeded);
    fs.writeFileSync(
      noteFile,
      `api-extractor succeeded=${succeeded} apiReportChanged=${result.apiReportChanged} errorCount=${result.errorCount} warningCount=${result.warningCount}\n`,
    );
    return {
      ok: succeeded,
      errorCount: result.errorCount,
      warningCount: result.warningCount,
    };
  } catch (error) {
    fs.writeFileSync(noteFile, `api-extractor failed: ${error.stack || error.message}\n`);
    return { ok: false, reason: error.message };
  }
}

const publicDir = path.join(outDir, "public-api");
ensureDir(publicDir);
writeJson(path.join(publicDir, "entry-points.json"), entryPoints());

const source = sourceProgram();
const sourceExports = collect(source.program, source.entry);
writeJson(path.join(publicDir, "source-exports.json"), {
  entry: "src/index.ts",
  count: sourceExports.exports.length,
  diagnostics: sourceExports.diagnostics,
  exports: sourceExports.exports,
});

const dist = distProgram();
let consumer = sourceExports;
let consumerOrigin = "src/index.ts (dist/index.d.ts missing)";
if (dist) {
  const distExports = collect(dist.program, dist.entry);
  writeJson(path.join(publicDir, "dist-exports.json"), {
    entry: "dist/index.d.ts",
    count: distExports.exports.length,
    diagnostics: distExports.diagnostics,
    exports: distExports.exports,
  });
  consumer = distExports;
  consumerOrigin = "dist/index.d.ts";
}

const consumerList = consumer.exports.map((row) => ({
  entry: ".",
  name: row.name,
  kind: row.kind,
  typeOnly: row.typeOnly,
}));
writeJson(path.join(publicDir, "exports.json"), consumerList);

const typesDir = path.join(outDir, "types");
ensureDir(typesDir);
fs.writeFileSync(path.join(typesDir, "api-report.md"), apiReport(consumer.exports, consumerOrigin));
const copied = copyTypes();
const extractor = runApiExtractor(path.join(typesDir, "api-extractor.log"));
writeJson(path.join(typesDir, "index.json"), {
  origin: consumerOrigin,
  emittedDeclarationFiles: copied,
  apiExtractor: extractor,
  exportCount: consumer.exports.length,
});

console.log(`exports ${consumer.exports.length} from ${consumerOrigin}; dts files ${copied.length}; api-extractor ok=${extractor.ok}`);
