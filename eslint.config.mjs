import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    // Generated output: the tsup build and the coverage report. Not source.
    ignores: ["dist/**", "coverage/**"],
  },
];

export default eslintConfig;
