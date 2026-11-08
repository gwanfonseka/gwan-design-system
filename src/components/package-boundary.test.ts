import fs from "node:fs";
import path from "node:path";
import { expect, it } from "vitest";
import pkg from "../../package.json";

const shipped = new Set([...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies)]);
const packageOf = (specifier: string) => specifier.split("/").slice(0, specifier.startsWith("@") ? 2 : 1).join("/");

// Everything else is a devDependency, which apps don't install.
it("only imports packages that apps will have", () => {
  const index = fs.readFileSync(path.join(process.cwd(), "src/index.ts"), "utf8");
  const dirs = [...index.matchAll(/from "\.\/components\/(\w+)"/g)].map((m) => path.join("src/components", m[1]));
  const files = [...new Set(dirs)].flatMap((dir) =>
    fs
      .readdirSync(dir, { recursive: true, encoding: "utf8" })
      .filter((file) => file.endsWith(".tsx") && !file.endsWith(".test.tsx"))
      .map((file) => path.join(dir, file)),
  );
  expect(files.length).toBeGreaterThan(50);
  for (const file of files) {
    const source = fs.readFileSync(file, "utf8");
    for (const [, specifier] of source.matchAll(/from "((?!@\/)[^."][^"]*)"/g)) {
      expect(shipped, `${file} imports ${specifier}`).toContain(packageOf(specifier));
    }
  }
});
