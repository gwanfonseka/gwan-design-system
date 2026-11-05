import path from "node:path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Blog examples import the package by name, exactly as readers will.
      "gwan-design-system": path.resolve(__dirname, "./src/index.ts"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    env: { TZ: "UTC" },
    css: false,
    restoreMocks: true,
    clearMocks: true,
    coverage: {
      provider: "v8",
      include: ["src/components/**/*.tsx"],
      exclude: ["**/*.test.tsx"],
      reporter: ["text-summary", "json", "json-summary", "html"],
      // Every component must stay fully covered. Checked per file, so one can't hide behind the rest.
      thresholds: { 100: true, perFile: true },
    },
  },
});
