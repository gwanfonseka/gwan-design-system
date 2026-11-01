import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    // Generated tsup output (committed under dist/). Not source.
    ignores: ["dist/**"],
  },
];

export default eslintConfig;
