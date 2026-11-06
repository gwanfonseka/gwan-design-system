import fs from "node:fs";
import path from "node:path";
import { expect, it } from "vitest";
import { countLibrary, withCounts } from "../../scripts/library-counts.mjs";
import counts from "./library-counts.json";

// CI doesn't run the script first, so stale committed numbers fail here.
it("matches the library's real exports", () => {
  expect(counts, "Run: node scripts/library-counts.mjs").toEqual(countLibrary());
});

it("matches the README", () => {
  const readme = fs.readFileSync(path.join(process.cwd(), "README.md"), "utf8");
  expect(withCounts(readme, counts), "Run: node scripts/library-counts.mjs").toBe(readme);
});

it("rewrites both README numbers", () => {
  const readme = "**1 components** and **2 SVG icon components**";
  expect(withCounts(readme, { components: 3, icons: 4 })).toBe("**3 components** and **4 SVG icon components**");
});
