import { isValidElement } from "react";
import { toList } from "./resolve";
import { formatDate, jsx, serialize, type SerializeContext } from "./serialize";
import type { AnyStory, Args, ArgTypeBase, ArgValue, Binding, Control } from "./types";

type Entry = ArgTypeBase & { required?: boolean };

const enumKey = (enumObj: Record<string, string | number>, value: ArgValue) =>
  Object.keys(enumObj).find((k) => Number.isNaN(Number(k)) && enumObj[k] === value);

/** A value as it reads in TypeScript, e.g. `BUTTON_SIZE.MD`, `"Label"`, `false`. */
export const formatValue = (control: Control, value: ArgValue): string => {
  if (value === undefined || value === null) return "—";
  switch (control.kind) {
    case "enum": {
      const key = enumKey(control.enumObj, value);
      return key ? `${control.enumName}.${key}` : JSON.stringify(value);
    }
    case "icon":
      return `<${value} />`;
    case "date":
      return typeof value === "string" ? formatDate(value) : String(value);
    case "list":
      return JSON.stringify(toList(value));
    case "data":
      return String(value);
    case "action":
      return control.optional ? "—" : "() => {}";
    default:
      return typeof value === "string" ? JSON.stringify(value) : String(value);
  }
};

/** The type column when a story doesn't override it. */
export const typeLabel = (argType: ArgTypeBase): string => {
  if (argType.type) return argType.type;
  const { control } = argType;
  switch (control.kind) {
    case "text":
    case "textarea":
    case "color":
    case "time":
      return "string";
    case "number":
    case "range":
      return "number";
    case "boolean":
      return "boolean";
    case "enum":
      return control.enumName;
    case "options":
      return control.options.map((o) => JSON.stringify(o)).join(" | ");
    case "icon":
    case "data":
      return "ReactNode";
    case "date":
      return "Date";
    case "list":
      return "string[]";
    case "action":
      return "() => void";
  }
};

const isEmpty = (value: ArgValue) => value === undefined || value === null || value === "";
const isPlainString = (v: string) => !/["\n{}]/.test(v);
const setterName = (prop: string) => `set${prop[0].toUpperCase()}${prop.slice(1)}`;

/** The value as an expression, recording any imports it needs. */
const expression = (control: Control, value: ArgValue, ctx: SerializeContext): string => {
  if (control.kind === "enum" && enumKey(control.enumObj, value)) ctx.imports.add(control.enumName);
  if (control.kind === "icon" && typeof value === "string") ctx.imports.add(value);
  if (control.kind === "date") return typeof value === "string" ? formatDate(value) : "null";
  if (control.kind === "list") return JSON.stringify(toList(value)).replace(/","/g, '", "');
  if (control.kind === "icon") return `<${value} />`;
  if (value === undefined) return "undefined";
  return control.kind === "enum" || control.kind === "action"
    ? formatValue(control, value)
    : JSON.stringify(value);
};

interface Printed {
  attrs: string[];
  children: string | null;
  hoisted: string[];
  state: string[];
}

/** Writes one prop as a JSX attribute, children, or a hoisted constant. */
const printProp = (key: string, argType: Entry, value: ArgValue, ctx: SerializeContext, out: Printed) => {
  const { control } = argType;

  if (control.kind === "data") {
    const name = String(value);
    const entry = control.code?.[name];
    const handWritten = typeof entry === "string" ? entry : entry?.code;
    if (entry && typeof entry === "object") {
      entry.imports?.forEach((i) => ctx.imports.add(i));
      if (entry.setup) out.hoisted.push(entry.setup);
    }
    const resolved = control.presets[name];
    const code = handWritten ?? serialize(resolved, ctx, 0);

    if (key === "children") {
      if (!handWritten && typeof resolved === "string") out.children = resolved;
      else if (!handWritten && isValidElement(resolved)) out.children = jsx(resolved, ctx, 0);
      else out.children = `{${code}}`;
    } else if (typeof resolved === "string" && !handWritten && isPlainString(resolved)) {
      out.attrs.push(`${key}="${resolved}"`);
    } else if (code.includes("\n") || Array.isArray(resolved) || (resolved && typeof resolved === "object" && !isValidElement(resolved))) {
      out.hoisted.push(`const ${key} = ${code};`);
      out.attrs.push(`${key}={${key}}`);
    } else {
      out.attrs.push(`${key}={${code}}`);
    }
    return;
  }

  if (key === "children" && typeof value === "string") {
    out.children = value;
    return;
  }

  switch (control.kind) {
    case "boolean":
      out.attrs.push(value ? key : `${key}={false}`);
      return;
    case "text":
    case "textarea":
    case "options":
    case "color":
    case "time":
      out.attrs.push(
        typeof value === "string" && isPlainString(value)
          ? `${key}="${value}"`
          : `${key}={${JSON.stringify(value)}}`,
      );
      return;
    default:
      out.attrs.push(`${key}={${expression(control, value, ctx)}}`);
  }
};

export const generateCode = (story: AnyStory, args: Args): string => {
  const argTypes = story.argTypes as Record<string, Entry>;
  const ctx: SerializeContext = { imports: new Set([story.name]) };
  const out: Printed = { attrs: [], children: null, hoisted: [], state: [] };

  const bindings = (story.bindings ?? []) as Binding<Record<string, unknown>>[];
  const boundProp = new Map(bindings.flatMap((b) => [b.prop, ...(b.alsoControls ?? [])].map((p) => [p, b])));
  const boundEvent = new Map(bindings.map((b) => [b.event, b]));

  for (const [key, argType] of Object.entries(argTypes)) {
    if (argType.visible && !argType.visible(args)) continue;
    const { control, required, defaultValue } = argType;
    const value = args[key];

    if (boundProp.has(key)) {
      out.state.push(`const [${key}, ${setterName(key)}] = useState(${expression(control, value, ctx)});`);
      out.attrs.push(`${key}={${key}}`);
      continue;
    }
    const binding = boundEvent.get(key);
    if (binding) {
      out.attrs.push(`${key}={${binding.code ?? setterName(binding.prop)}}`);
      continue;
    }
    if (control.kind === "action") {
      if (required || (control.optional && value === true)) {
        out.attrs.push(`${key}={${control.signature ?? "() => {}"}}`);
      }
      continue;
    }
    if (isEmpty(value) && !required) continue;
    if (!required && value === defaultValue) continue;

    printProp(key, argType, value ?? "", ctx, out);
  }

  const from = story.importFrom ?? "gwan-design-system";
  const names = [...ctx.imports];
  const oneLineImport = `import { ${names.join(", ")} } from "${from}";`;
  const imports = [
    ...(out.state.length ? [`import { useState } from "react";`] : []),
    oneLineImport.length <= 80
      ? oneLineImport
      : `import {\n${names.map((n) => `  ${n},`).join("\n")}\n} from "${from}";`,
  ];

  const open = `<${story.name}`;
  const oneLine = `${open}${out.attrs.map((a) => ` ${a}`).join("")}`;
  const multiLine = `${open}\n${out.attrs.map((a) => `  ${a}`).join("\n")}\n`;
  const short = out.attrs.length <= 2 && oneLine.length <= 72;
  let element: string;
  if (out.children === null) {
    element = short ? `${oneLine} />` : `${multiLine}/>`;
  } else {
    const head = short ? `${oneLine}>` : `${multiLine}>`;
    const inline = `${head}${out.children}</${story.name}>`;
    element =
      short && inline.length <= 72 && !out.children.includes("\n")
        ? inline
        : `${head}\n  ${out.children.split("\n").join("\n  ")}\n</${story.name}>`;
  }

  const body = out.state.length
    ? [
        "const Example = () => {",
        ...out.state.map((s) => `  ${s}`),
        "",
        element.includes("\n")
          ? `  return (\n${element.split("\n").map((l) => `    ${l}`).join("\n")}\n  );`
          : `  return ${element};`,
        "};",
      ].join("\n")
    : element;

  return [imports.join("\n"), ...out.hoisted, body].join("\n\n");
};
