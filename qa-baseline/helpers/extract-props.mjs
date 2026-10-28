import fs from "node:fs";
import path from "node:path";
import {
  cap,
  ensureDir,
  loadTypescript,
  must,
  rel,
  slug,
  toolingRequire,
  walkFiles,
  writeJson,
} from "./lib.mjs";

const repo = path.resolve(must("repo"));
const outDir = path.resolve(must("out"));
const ts = loadTypescript(repo);

const FORMAT =
  ts.TypeFormatFlags.NoTruncation |
  ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope |
  ts.TypeFormatFlags.InTypeAlias |
  ts.TypeFormatFlags.UseStructuralFallback;

const BOOLEAN_VARIANTS = new Set([
  "disabled",
  "checked",
  "isError",
  "dot",
  "open",
  "striped",
  "bordered",
  "dismissible",
  "isLoading",
  "allowMultiple",
  "mask",
  "withSeconds",
  "showLabel",
  "isCollapsed",
]);

function createProgram() {
  const configPath = path.join(repo, "tsconfig.json");
  const read = ts.readConfigFile(configPath, ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(read.config, ts.sys, repo);
  const options = { ...parsed.options, noEmit: true, incremental: false, skipLibCheck: true };
  delete options.plugins;
  const files = parsed.fileNames.filter((file) => !file.includes(`${path.sep}.next${path.sep}`));
  return ts.createProgram({ rootNames: files, options });
}

function readDefaults(fn) {
  const map = {};
  const param = fn.parameters?.[0];
  if (!param || !ts.isObjectBindingPattern(param.name)) return map;
  for (const el of param.name.elements) {
    if (!ts.isBindingElement(el) || !el.initializer) continue;
    const name = ts.isIdentifier(el.name)
      ? el.name.text
      : el.propertyName && ts.isIdentifier(el.propertyName)
        ? el.propertyName.text
        : null;
    if (!name) continue;
    map[name] = el.initializer.getText();
  }
  return map;
}

function analyzeAst(sourceFile) {
  let forwardedRef = false;
  let displayName = null;
  const defaultsByLocal = {};
  function visit(node) {
    if (ts.isCallExpression(node)) {
      const text = node.expression.getText(sourceFile);
      if (text === "forwardRef" || text === "React.forwardRef" || text.endsWith(".forwardRef")) {
        forwardedRef = true;
      }
    }
    if (
      ts.isBinaryExpression(node) &&
      node.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
      ts.isPropertyAccessExpression(node.left) &&
      node.left.name.text === "displayName" &&
      ts.isStringLiteral(node.right)
    ) {
      displayName = node.right.text;
    }
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.initializer &&
      (ts.isArrowFunction(node.initializer) || ts.isFunctionExpression(node.initializer))
    ) {
      defaultsByLocal[node.name.text] = readDefaults(node.initializer);
    }
    if (ts.isFunctionDeclaration(node) && node.name) {
      defaultsByLocal[node.name.text] = readDefaults(node);
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return { forwardedRef, displayName, defaultsByLocal };
}

function isReactNode(checker, type) {
  const name = type.aliasSymbol?.name || type.symbol?.name;
  if (name === "ReactNode" || name === "ReactElement" || name === "JSX.Element" || name === "Element") {
    return true;
  }
  const text = checker.typeToString(type);
  return /^(?:React\.)?(?:ReactNode|ReactElement(?:<[\s\S]+>)?|JSX\.Element)$/.test(text);
}

function enumMemberValues(checker, type) {
  const symbol = type.aliasSymbol?.flags & ts.SymbolFlags.Enum
    ? type.aliasSymbol
    : type.symbol?.flags & ts.SymbolFlags.Enum
      ? type.symbol
      : null;
  if (!symbol || !symbol.exports) return null;
  const values = [];
  symbol.exports.forEach((member) => {
    const decl = member.valueDeclaration || member.declarations?.[0];
    if (!decl) return;
    const memberType = checker.getTypeOfSymbolAtLocation(member, decl);
    if (memberType.isStringLiteral() || memberType.isNumberLiteral()) values.push(memberType.value);
  });
  return values.length ? values : null;
}

function literalUnionValues(type) {
  if (!(type.flags & ts.TypeFlags.Union)) return null;
  const members = type.types.filter((part) => !(part.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null)));
  if (members.length < 2 || members.length > 12) return null;
  if (!members.every((part) => part.isStringLiteral() || part.isNumberLiteral())) return null;
  return members.map((part) => part.value);
}

function sampleString(name) {
  const n = name.toLowerCase();
  if (n.includes("email")) return "user@example.com";
  if (n.includes("color") || n === "hex") return "#3b82f6";
  if (n.includes("class")) return "";
  if (n.includes("placeholder")) return "Placeholder";
  if (n.includes("message") || n.includes("description") || n.includes("subtitle") || n.includes("subTitle")) {
    return "Sample message";
  }
  if (n.includes("label") || n.includes("title") || n.includes("name") || n.includes("header")) return "Label";
  if (n.includes("route") || n.includes("href") || n.includes("src") || n.includes("url") || n.includes("image")) {
    return "/images/placeholder.png";
  }
  if (n === "key" || n.endsWith("id") || n === "id") return "item-1";
  if (n.includes("code")) return "const value = 1;";
  if (n.includes("time")) return "12:00";
  if (n.includes("format")) return "YYYY-MM-DD";
  return "Sample";
}

function synthesize(checker, type, name, depth, stack) {
  if (depth > 6) return { __fixture: "text", value: "Sample" };
  const key = `${name}:${checker.typeToString(type)}`;
  if (stack.has(key)) return { __fixture: "text", value: "Sample" };
  stack.add(key);
  try {
    if (isReactNode(checker, type)) return { __fixture: "text", value: sampleString(name) };
    if (type.flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown | ts.TypeFlags.Never)) {
      if (name === "data") return [{ id: "row-1", name: "Sample" }];
      return { __fixture: "text", value: "Sample" };
    }
    if (type.isStringLiteral()) return type.value;
    if (type.isNumberLiteral()) return type.value;
    if (type.flags & ts.TypeFlags.StringLike || type.flags & ts.TypeFlags.String) return sampleString(name);
    if (type.flags & ts.TypeFlags.NumberLike || type.flags & ts.TypeFlags.Number) {
      if (/interval/i.test(name)) return 1000;
      if (/value|percent|progress|length|max|min|step|count|width|height/i.test(name)) return 40;
      return 1;
    }
    if (type.flags & ts.TypeFlags.BooleanLiteral) return checker.typeToString(type) === "true";
    if (type.flags & ts.TypeFlags.Boolean) return false;
    if (type.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Void | ts.TypeFlags.Null)) return null;
    const enumVals = enumMemberValues(checker, type);
    if (enumVals?.length) return enumVals[0];
    const unionVals = literalUnionValues(type);
    if (unionVals?.length) return unionVals[0];
    if (type.flags & ts.TypeFlags.Union) {
      const members = type.types.filter((part) => !(part.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null)));
      if (members.length) return synthesize(checker, members[0], name, depth + 1, stack);
    }
    const signatures = type.getCallSignatures();
    if (signatures.length) {
      const ret = checker.typeToString(signatures[0].getReturnType());
      if (/JSX\.Element|ReactNode|ReactElement/.test(ret)) return { __fixture: "function", returns: "element" };
      return { __fixture: "function" };
    }
    if (checker.isArrayType(type)) {
      const element = checker.getElementTypeOfArrayType(type);
      if (element.flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown)) {
        if (name === "data") return [{ id: "row-1", name: "Sample" }];
        return ["Sample"];
      }
      return [synthesize(checker, element, name.replace(/s$/, "") || "item", depth + 1, stack)];
    }
    const symbolName = type.symbol?.name || type.aliasSymbol?.name;
    if (symbolName === "Date") return { __fixture: "date", value: "2026-01-15T12:00:00.000Z" };
    const props = type.getApparentProperties?.() || type.getProperties();
    if (props.length) {
      const obj = {};
      for (const prop of props) {
        if (prop.name.startsWith("__")) continue;
        const decl = prop.valueDeclaration || prop.declarations?.[0];
        const optional = Boolean(prop.flags & ts.SymbolFlags.Optional) || Boolean(decl?.questionToken);
        if (optional) continue;
        const propType = checker.getTypeOfSymbolAtLocation(prop, decl || prop.declarations?.[0]);
        obj[prop.name] = synthesize(checker, propType, prop.name, depth + 1, stack);
      }
      return obj;
    }
    return { __fixture: "text", value: "Sample" };
  } finally {
    stack.delete(key);
  }
}

function typeText(checker, type, node) {
  return cap(checker.typeToString(type, node, FORMAT));
}

function describeProp(checker, prop, defaults) {
  const decl = prop.valueDeclaration || prop.declarations?.[0];
  const propType = checker.getTypeOfSymbolAtLocation(prop, decl);
  const inherited = Boolean(decl && decl.getSourceFile().fileName.includes(`${path.sep}node_modules${path.sep}`));
  const typeOptional = Boolean(prop.flags & ts.SymbolFlags.Optional) || Boolean(decl?.questionToken);
  const defaultSource = defaults[prop.name] ?? null;
  const variants = inherited ? null : (enumMemberValues(checker, propType) || literalUnionValues(propType));
  return {
    name: prop.name,
    type: typeText(checker, propType, decl),
    typeOptional,
    hasDefault: defaultSource != null,
    defaultSource,
    required: !typeOptional && defaultSource == null,
    inherited,
    declaredIn: decl ? rel(repo, decl.getSourceFile().fileName) : null,
    variantValues: variants,
    fixture: synthesize(checker, propType, prop.name, 0, new Set()),
  };
}

function buildVariants(props) {
  const base = {};
  for (const prop of props) {
    if (prop.inherited || prop.hasDefault || !prop.required) continue;
    base[prop.name] = prop.fixture;
  }
  const variants = [{ id: "defaults", props: base }];
  for (const prop of props) {
    if (prop.inherited || !prop.variantValues) continue;
    for (const value of prop.variantValues) {
      variants.push({
        id: `${prop.name}--${slug(value)}`,
        props: { ...base, [prop.name]: value },
      });
    }
  }
  for (const prop of props) {
    if (prop.inherited || !BOOLEAN_VARIANTS.has(prop.name)) continue;
    if (!/^boolean\b/.test(prop.type)) continue;
    variants.push({
      id: `${prop.name}--true`,
      props: { ...base, [prop.name]: true },
    });
  }
  const seen = new Set();
  const unique = [];
  for (const variant of variants) {
    if (seen.has(variant.id)) continue;
    seen.add(variant.id);
    unique.push(variant);
    if (unique.length >= 40) break;
  }
  return unique;
}

function publicExportIndex(program) {
  const checker = program.getTypeChecker();
  const entry = program.getSourceFile(path.join(repo, "src", "index.ts"));
  const map = new Map();
  if (!entry) return map;
  const moduleSymbol = checker.getSymbolAtLocation(entry);
  if (!moduleSymbol) return map;
  for (const exp of checker.getExportsOfModule(moduleSymbol)) {
    const resolved = exp.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(exp) : exp;
    const decl = resolved.valueDeclaration || resolved.declarations?.[0];
    if (!decl?.getSourceFile) continue;
    const file = rel(repo, decl.getSourceFile().fileName);
    const list = map.get(file) || [];
    list.push({ exportName: exp.name, localName: resolved.name });
    map.set(file, list);
  }
  return map;
}

function componentFiles() {
  const root = path.join(repo, "src", "components");
  return walkFiles(root).filter((file) => file.endsWith(".tsx") && !file.includes(`${path.sep}icons${path.sep}`));
}

function exportedComponents(checker, sourceFile) {
  const moduleSymbol = checker.getSymbolAtLocation(sourceFile);
  if (!moduleSymbol) return [];
  const rows = [];
  for (const exp of checker.getExportsOfModule(moduleSymbol)) {
    if (isTypeOnlyName(exp)) continue;
    const resolved = exp.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(exp) : exp;
    if (resolved.flags & (ts.SymbolFlags.Interface | ts.SymbolFlags.TypeAlias | ts.SymbolFlags.Enum)) continue;
    const decl = resolved.valueDeclaration || resolved.declarations?.[0];
    if (!decl) continue;
    const type = checker.getTypeOfSymbolAtLocation(resolved, decl);
    const signature = type.getCallSignatures()[0];
    if (!signature) continue;
    rows.push({
      exportName: exp.name,
      localName: resolved.name,
      signature,
    });
  }
  return rows;
}

function isTypeOnlyName(symbol) {
  return (symbol.declarations || []).some((decl) => ts.isExportSpecifier(decl) && (decl.isTypeOnly || decl.parent?.isTypeOnly));
}

function propsOfSignature(checker, signature, defaults) {
  const param = signature.getParameters()[0];
  if (!param) return [];
  const decl = param.valueDeclaration || param.declarations?.[0];
  let paramType = checker.getTypeOfSymbolAtLocation(param, decl);
  if (decl && ts.isParameter(decl) && decl.type) {
    const annotated = checker.getTypeFromTypeNode(decl.type);
    const annotatedCount = annotated.getApparentProperties().length;
    const currentCount = paramType.getApparentProperties().length;
    if (annotatedCount > currentCount) paramType = annotated;
  }
  const declared = [];
  const inherited = [];
  for (const prop of paramType.getApparentProperties()) {
    if (prop.name.startsWith("__")) continue;
    const described = describeProp(checker, prop, defaults);
    if (described.inherited) inherited.push(described);
    else declared.push(described);
  }
  inherited.sort((a, b) => a.name.localeCompare(b.name));
  return [...declared, ...inherited];
}

function stripFixtures(props) {
  return props.map(({ fixture, ...rest }) => rest);
}

function runDocgen(files) {
  const destination = path.join(outDir, "components", "react-docgen.json");
  ensureDir(path.dirname(destination));
  try {
    const docgen = toolingRequire()("react-docgen-typescript");
    const parser = docgen.withCustomConfig(path.join(repo, "tsconfig.json"), {
      savePropValueAsString: true,
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: false,
      shouldIncludePropTagMap: false,
      propFilter: (prop) => {
        if (!prop.parent) return true;
        return !String(prop.parent.fileName || "").includes("node_modules");
      },
    });
    const docs = [];
    const errors = [];
    for (const file of files) {
      try {
        docs.push(...parser.parse(file));
      } catch (error) {
        errors.push({ file: rel(repo, file), message: error.message });
      }
    }
    const normalized = docs
      .map((doc) => ({
        displayName: doc.displayName,
        file: rel(repo, doc.filePath || ""),
        description: doc.description || "",
        props: Object.values(doc.props || {})
          .map((prop) => ({
            name: prop.name,
            type: prop.type?.name || "",
            required: Boolean(prop.required),
            defaultValue: prop.defaultValue?.value ?? null,
            description: prop.description || "",
          }))
          .sort((a, b) => a.name.localeCompare(b.name)),
      }))
      .sort((a, b) => a.displayName.localeCompare(b.displayName) || a.file.localeCompare(b.file));
    writeJson(destination, { ok: true, components: normalized, errors });
    return { ok: true, count: normalized.length, errors: errors.length };
  } catch (error) {
    writeJson(destination, { ok: false, error: error.stack || error.message, components: [], errors: [] });
    return { ok: false, error: error.message };
  }
}

const program = createProgram();
const checker = program.getTypeChecker();
const publicNames = publicExportIndex(program);
const files = componentFiles();
const components = [];

for (const file of files) {
  const sourceFile = program.getSourceFile(file);
  if (!sourceFile) continue;
  const ast = analyzeAst(sourceFile);
  const exported = exportedComponents(checker, sourceFile);
  const fileRel = rel(repo, file);
  const publicExportNames = publicNames.get(fileRel) || [];
  for (const item of exported) {
    const defaults = ast.defaultsByLocal[item.localName] || ast.defaultsByLocal[item.exportName] || {};
    const props = propsOfSignature(checker, item.signature, defaults);
    const match = publicExportNames.find((entry) => entry.localName === item.localName)
      || publicExportNames.find((entry) => entry.exportName === item.exportName);
    const publicExportName = match?.exportName ?? null;
    const name = publicExportName || (item.exportName === "default" ? item.localName : item.exportName);
    components.push({
      name,
      localName: item.localName,
      exportName: item.exportName,
      publicExportName,
      exported: Boolean(publicExportName),
      file: fileRel,
      displayName: ast.displayName,
      forwardedRef: ast.forwardedRef,
      props: stripFixtures(props),
      variants: buildVariants(props).map((variant) => ({
        id: variant.id,
        props: variant.props,
      })),
    });
  }
}

components.sort((a, b) => a.name.localeCompare(b.name) || a.file.localeCompare(b.file));

const iconDir = path.join(repo, "src", "components", "icons");
const icons = [];
if (fs.existsSync(iconDir)) {
  for (const [file, names] of publicNames.entries()) {
    if (!file.includes("components/icons/")) continue;
    for (const entry of names) {
      icons.push({
        name: entry.exportName,
        localName: entry.localName,
        file,
        kind: "component",
        exported: true,
        displayName: null,
        forwardedRef: false,
        props: [],
        variants: [{ id: "defaults", props: {} }],
      });
    }
  }
}
icons.sort((a, b) => a.name.localeCompare(b.name));

const componentsDir = path.join(outDir, "components");
ensureDir(componentsDir);
writeJson(path.join(componentsDir, "props.json"), {
  generatedBy: "typescript-checker and destructuring defaults; no defaultProps or forwardRef were found by the scan",
  componentCount: components.length,
  iconCount: icons.length,
  components,
  icons,
});

const docgen = runDocgen(files);
writeJson(path.join(componentsDir, "index.json"), {
  componentCount: components.length,
  exportedComponentCount: components.filter((item) => item.exported).length,
  iconCount: icons.length,
  forwardedRefCount: components.filter((item) => item.forwardedRef).length,
  displayNameCount: components.filter((item) => item.displayName).length,
  reactDocgen: docgen,
});

console.log(
  `components ${components.length} (exported ${components.filter((item) => item.exported).length}), icons ${icons.length}, docgen ok=${docgen.ok}`,
);
