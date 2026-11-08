// Keeps every "N components and N icons" claim true. Runs before dev, build and test.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

export const COUNTS_FILE = "src/lib/library-counts.json";

export const countLibrary = () => ({
  components: read("src/index.ts").match(/^export \{ default as /gm).length,
  icons: read("src/components/icons/index.tsx").match(/^export \{/gm).length,
});

export const withCounts = (readme, { components, icons }) =>
  readme
    .replace(/\*\*\d+ components\*\*/, `**${components} components**`)
    .replace(/\*\*\d+ SVG icon components\*\*/, `**${icons} SVG icon components**`);

const writeIfChanged = (file, content) => {
  if (read(file) !== content) fs.writeFileSync(path.join(root, file), content);
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const counts = countLibrary();
  writeIfChanged(COUNTS_FILE, `${JSON.stringify(counts, null, 2)}\n`);
  writeIfChanged("README.md", withCounts(read("README.md"), counts));
}
