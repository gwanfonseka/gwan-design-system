# QA baseline gwan-design-system 1.0.8

- Commit: `c20878922bca856fd014949adb7bdb9b585392a6`
- Branch: `develop`
- Captured: 2026-10-28T14:37:27Z
- Node: v22.23.4
- npm: 10.9.9
- Lockfile: package-lock.json `0ee33b06aa7fc00d76d061ee8d3f635e4ad9d604963572d041c133e9c1b1c5d0`

## Counts

- Public exports: **398** (component 269, enum 59, interface 67, type 3)
- Components: **57** (53 exported), icons **216**
- Forwarded refs: 0. displayName set: 0
- Emitted files: **6**, raw 2395870 bytes, gzip 548955 bytes
- CSS custom properties in globals.css: **153**
- DOM snapshots rendered: **329** (failed 0), icon markup 216
- Screenshots: **162** (failed 0)
- npm pack files: 9

## Audit

| severity | count |
| --- | --- |
| critical | 1 |
| high | 12 |
| moderate | 8 |
| low | 1 |
| info | 0 |
| total | 22 |

## Tests

| suite | status | command | detail |
| --- | --- | --- | --- |
| lint | fail | `npm run lint` | exit 1, findings 0, failed 0, warnings 0 |
| eslint | fail | `npx eslint . -f json -o eslint-report.json` | exit 2, findings 0, failed 0, warnings 0 |
| typecheck | pass | `npx tsc --noEmit --pretty false --incremental false` | exit 0, findings 0, failed 0, warnings 0 |
| build-lib | pass | `npm run build:lib` | exit 0, findings 0, failed 0, warnings 0 |
| site-build | pass | `npm run build` | exit 0, findings 0, failed 0, warnings 0 |
| unit | not-present | `` | No test script and no *.test.* or *.spec.* files. |
| storybook | not-present | `` | No Storybook, no stories, no test-runner. |
| publish-dry-run | pass | `npm publish --dry-run --json` | exit 0, findings 0, failed 0, warnings 0 |

Pre-existing failures: lint (package.json script is next lint. Next 16 has no lint command, so the CLI treats lint as a project directory (/workspace/lint) and exits 1. Pre-existing on develop.) eslint (Direct ESLint run, not used by CI. ESLint 9.39.2 crashes while loading eslint.config.mjs (FlatCompat circular JSON in config validation) before any file is linted. No per-rule results exist.)

### Audit packages

- critical: next
- high: brace-expansion, browserslist, flatted, js-yaml, minimatch, nanoid, picomatch, postcss, rollup, sharp, source-map-js, zod
- moderate: @humanfs/node, @tailwindcss/typography, ajv, baseline-browser-mapping, postcss-selector-parser, resend, svix, uuid
- low: @babel/core
- info: (none)

## Visual

- No Storybook, no *.stories.* files, and no Storybook test-runner. Representative variants are the component-library page tabs (light and dark) plus an isolated render of each exported component with required props only.
- No Storybook (or test-runner) exists. The component-library page is the in-repo variant harness. Each sidebar tab is captured in light and dark.


Every generated component fixture rendered.

Committed dist matches a fresh tsup build: false.
Files that differ: index.d.mts, index.d.ts, index.js, index.js.map, index.mjs, index.mjs.map. CI runs build:lib before publish, so this capture's consumer artifact is the fresh build, not the bytes currently committed in dist/.

## Not captured

- Storybook and story tests: the repository has neither.
- Unit tests: package.json has no test script and the tree has no `*.test` / `*.spec` files.
- CI (`.github/workflows/publish.yml`) only installs, runs `build:lib`, and does `npm publish --dry-run`. It does not lint, typecheck, or run the Next.js site build. Those were run anyway and recorded under tests.
- CI pins Node 18. This capture uses the Node version above.
- The published library emits no CSS and no style-dictionary / iOS / Android token artifacts. Tokens are the source CSS custom properties. The docs site Tailwind bundle is saved as css-tokens/docs-site.normalized.css.
- @microsoft/api-extractor and react-docgen-typescript are not installed. The capture writes types/api-report.md from the TypeScript compiler instead (api-extractor style, sorted exports). Props come from the checker plus destructuring defaults.

