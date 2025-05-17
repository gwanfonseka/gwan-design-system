import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // entry point for your library
  format: ["esm", "cjs"], // output both ESM and CommonJS
  dts: true, // this is shorthand for generating types
  tsconfig: "tsconfig.tsup.json",
  outDir: "dist", // output folder
  clean: true, // clean dist before build
  sourcemap: true, // optional: useful for debugging consumers
  skipNodeModulesBundle: true, // don't bundle external deps like react
  external: ["react", "react-dom"], // mark react and react-dom as external
});
