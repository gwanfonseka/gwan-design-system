import { defineConfig } from "tsup";

const shared = {
  tsconfig: "tsconfig.tsup.json",
  dts: { entry: "src/index.ts" }, // this is shorthand for generating types
  outDir: "dist", // output folder
  sourcemap: true, // optional: useful for debugging consumers
  skipNodeModulesBundle: true, // don't bundle external deps like react
  external: ["react", "react-dom"], // mark react and react-dom as external
};

export default defineConfig([
  {
    ...shared,
    // One file per component and icon, so an app's routes only load what they use.
    entry: ["src/index.ts", "src/components/*/index.tsx", "src/components/icons/*/index.tsx"],
    format: ["esm"],
    splitting: true,
  },
  {
    ...shared,
    entry: ["src/index.ts"], // entry point for your library
    format: ["cjs"],
  },
]);
