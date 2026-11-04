import { isValidElement, type ReactElement } from "react";
import * as Library from "@/index";

/** Component → its exported name, so printed JSX uses `<ProductsSVG />`, not `<Products />`. */
const EXPORT_NAMES = new Map<unknown, string>(
  Object.entries(Library)
    .filter(([, v]) => typeof v === "function")
    .map(([k, v]) => [v, k]),
);

export interface SerializeContext {
  /** Library exports the printed code uses. */
  imports: Set<string>;
}

const pad = (depth: number) => "  ".repeat(depth);
const IDENTIFIER = /^[A-Za-z_$][\w$]*$/;

/** Short lists and objects stay on one line; anything longer is broken up. */
const wrap = (open: string, close: string, items: string[], depth: number, spaced: boolean) => {
  if (items.length === 0) return `${open}${close}`;
  const inline = spaced ? `${open} ${items.join(", ")} ${close}` : `${open}${items.join(", ")}${close}`;
  if (inline.length <= 72 && !inline.includes("\n")) return inline;
  return `${open}\n${items.map((i) => `${pad(depth + 1)}${i},`).join("\n")}\n${pad(depth)}${close}`;
};

export const formatDate = (iso: string) => {
  const day = iso.endsWith("T00:00:00.000Z") ? iso.slice(0, 10) : iso;
  return `new Date(${JSON.stringify(day)})`;
};

const elementName = (el: ReactElement, ctx: SerializeContext): string => {
  const { type } = el;
  if (typeof type === "string") return type;
  const exported = EXPORT_NAMES.get(type);
  if (exported) {
    ctx.imports.add(exported);
    return exported;
  }
  // forwardRef and memo components are objects; their name lives on the wrapped render.
  const fn = type as { displayName?: string; name?: string; render?: { name?: string }; type?: { name?: string } };
  return fn.displayName || fn.name || fn.render?.name || fn.type?.name || "Component";
};

const jsxChild = (child: unknown, ctx: SerializeContext, depth: number): string =>
  typeof child === "string" || typeof child === "number"
    ? String(child)
    : isValidElement(child)
      ? jsx(child, ctx, depth)
      : `{${serialize(child, ctx, depth)}}`;

export const jsx = (el: ReactElement, ctx: SerializeContext, depth = 0): string => {
  const name = elementName(el, ctx);
  const { children, ...rest } = (el.props ?? {}) as Record<string, unknown>;

  const attrs = Object.entries(rest)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => {
      if (v === true) return k;
      if (typeof v === "string" && !/["\n{}]/.test(v)) return `${k}="${v}"`;
      return `${k}={${serialize(v, ctx, depth)}}`;
    });
  const open = `<${name}${attrs.map((a) => ` ${a}`).join("")}`;

  const kids = (Array.isArray(children) ? children : [children]).filter(
    (c) => c !== undefined && c !== null && c !== false,
  );
  if (kids.length === 0) return `${open} />`;

  const printed = kids.map((c) => jsxChild(c, ctx, depth + 1));
  const inline = `${open}>${printed.join("")}</${name}>`;
  if (inline.length <= 72 && !inline.includes("\n")) return inline;
  return `${open}>\n${printed.map((p) => `${pad(depth + 1)}${p}`).join("\n")}\n${pad(depth)}</${name}>`;
};

/** Prints a value as TypeScript/JSX source. */
export const serialize = (value: unknown, ctx: SerializeContext, depth = 0): string => {
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (typeof value === "function") return "() => {}";
  if (value instanceof Date) return formatDate(value.toISOString());
  if (isValidElement(value)) return jsx(value, ctx, depth);
  if (Array.isArray(value)) {
    return wrap("[", "]", value.map((v) => serialize(v, ctx, depth + 1)), depth, false);
  }
  const entries = Object.entries(value as Record<string, unknown>)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${IDENTIFIER.test(k) ? k : JSON.stringify(k)}: ${serialize(v, ctx, depth + 1)}`);
  return wrap("{", "}", entries, depth, true);
};
