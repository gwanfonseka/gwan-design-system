import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { SERVER_SUPPORT } from "./server-support";

const root = process.cwd();
const index = fs.readFileSync(path.join(root, "src/index.ts"), "utf8");
const dirOf = Object.fromEntries(
  [...index.matchAll(/export \{ default as (\w+) \} from "\.\/components\/(\w+)"/g)].map((m) => [m[1], m[2]]),
);
const source = (component: string) =>
  fs.readFileSync(path.join(root, "src/components", dirOf[component], "index.tsx"), "utf8");

// Server Components may use useId; every other hook is client-only.
const CLIENT_HOOK = /\buse(State|Effect|LayoutEffect|Ref|Reducer|Callback|Memo|Context|SyncExternalStore|Transition)\b/;
/** The value of every `onX={…}` attribute, matching nested braces. */
const handlers = (code: string) =>
  [...code.matchAll(/\bon[A-Z]\w*=\{/g)].map((m) => {
    let depth = 1;
    let i = m.index! + m[0].length;
    const start = i;
    for (; i < code.length && depth > 0; i++) {
      if (code[i] === "{") depth++;
      else if (code[i] === "}") depth--;
    }
    return code.slice(start, i - 1).trim();
  });

describe("Server Component support table", () => {
  it("covers every exported component", () => {
    const listed = SERVER_SUPPORT.map(([name]) => name).filter((n) => n !== "Icons");
    expect(listed.sort()).toEqual(Object.keys(dirOf).sort());
  });

  describe.each(SERVER_SUPPORT.filter(([name, support]) => name !== "Icons" && support !== "client"))(
    "%s (%s)",
    (name, support) => {
      const code = source(name);

      it("uses no client-only hooks", () => {
        expect(code).not.toMatch(CLIENT_HOOK);
      });

      it(support === "yes" ? "attaches no event handlers" : "only attaches handlers it was given", () => {
        for (const value of handlers(code)) {
          if (support === "yes") throw new Error(`${name} attaches a handler: ${value}`);
          // A prop passed straight through, or only when given: `onClick={onClear}`, `onX={a ? b : undefined}`.
          const passThrough = /^[\w.]+$/.test(value) || /\?[\s\S]*:\s*undefined$/.test(value);
          expect(passThrough, `${name} always attaches: ${value}`).toBe(true);
        }
      });
    },
  );
});

it("matches the S / H / C column in the README", () => {
  const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
  const letter = { yes: "S", handlers: "H", client: "C" } as const;
  for (const [name, support] of SERVER_SUPPORT) {
    if (name === "Icons") continue;
    const row = readme.match(new RegExp(`\\| \`${name}\`\\s*\\| \`([SHC])\``));
    expect(row?.[1], name).toBe(letter[support]);
  }
});
