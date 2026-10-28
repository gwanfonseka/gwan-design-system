# QA compare: PR 129 vs develop baseline

**Recommendation: GO**

The upgrade does not change the library consumers import. Fresh `tsup` output is byte-identical, public exports and component props match, DOM and pixel snapshots match, and `npm audit` on the locked install drops from 22 vulnerabilities to 0. The PR diff is dependency metadata plus one generated Next.js type reference. It does not change library source.

| | |
| --- | --- |
| PR | https://github.com/gwanfonseka/gwan-design-system/pull/129 |
| PR head | `5fb875094b11a80b4c295248d64550e85c2ad73f` (`cursor/fix-dependency-vulnerabilities-b5ce`) |
| Baseline | `develop` `c20878922bca856fd014949adb7bdb9b585392a6` |
| Capture | same `qa-baseline/capture.sh` as the develop baseline |
| Toolchain | Node v22.23.4, npm 10.9.9 (same as the baseline; not CI's Node 18) |
| Compare script | exit 1, because docs-site CSS and the dependency/audit sections differ. Library dist, exports, props, and snapshots do not. |

## Audit

| Severity | develop | PR head |
| --- | ---: | ---: |
| critical | 1 | 0 |
| high | 12 | 0 |
| moderate | 8 | 0 |
| low | 1 | 0 |
| info | 0 | 0 |
| total | 22 | 0 |

`npm audit --json` on the PR install has `metadata.vulnerabilities.total = 0` and an empty `vulnerabilities` object. Every advisory from the develop audit is gone, including critical `next` and the high findings (brace-expansion, browserslist, flatted, js-yaml, minimatch, nanoid, picomatch, postcss, rollup, sharp, source-map-js, zod). Nested `postcss@8.4.31` is gone. The install now has `postcss@8.5.32` at the root and `postcss@8.5.23` under `next`; neither is reported. `postcss-selector-parser` moved from 6.0.10 to 6.1.5. `resend` moved from 6.10.0 to 6.35.0, and its `svix` and `uuid` dependencies dropped out of the tree.

This is the repo lockfile install, including devDependencies. `next` is a devDependency, so publishing the package does not force consumer apps onto Next 16.4.3. `resend` is a production dependency, so consumers who install the package will resolve `resend@^6.35.0`.

## Differences

### 1. Docs-site CSS is not identical

**Severity: cosmetic (none-for-consumers)**

`css-tokens/docs-site.normalized.css` differs by 19 lines. Nothing else in source CSS or design tokens changed (`globals.normalized.css` and `token-data.generateCSS.css` are identical). The library build emits no CSS, and `npm pack` does not ship `.next`. Consumers do not receive this file.

The 19 lines are:

- Chunk filename in a comment: `e12651dae812f34b.css` to `0zurgyuehhd3t.css` (98829 bytes to 98782).
- `.rounded-full` and the two slider-thumb copies: `border-radius: 3.40282e38px` to `2147483647px`.
- Twelve `next/font` `woff2` URLs (Geist and Geist Mono), hash only.
- Four generated font class selectors, renamed with the same font hash change:
  - `.geist_a71539c9-module__T19VSG__className` to `.T19VSG_className`
  - `.geist_a71539c9-module__T19VSG__variable` to `.T19VSG_variable`
  - `.geist_mono_8d43a2aa-module__8Li5zG__className` to `._8Li5zG_className`
  - `.geist_mono_8d43a2aa-module__8Li5zG__variable` to `._8Li5zG_variable`

The author described font hashes and `rounded-full` serialization. That is right, and incomplete: the generated Geist class names moved with the font hash. Those classes belong to the docs layout (`next/font`), not to library components. `tokens.json` only records the new chunk path and byte size. All 162 screenshots matched, including pixels, so the radius change did not show up. The capture forces DejaVu Sans, so the Geist file swap itself was not judged visually.

### 2. Published `package.json` dependency metadata

**Severity: none-for-consumers (install metadata only)**

`peerDependencies` are still `react` / `react-dom` `^19.0.0`. There is still no `engines` field. `main`, `module`, `types`, `exports`, `files`, and `sideEffects` are unchanged.

`dependencies` changes only `resend` from `^6.10.0` to `^6.35.0`. Dev ranges are tightened: `next` `^16.1.1` to `^16.4.3`, `postcss` `^8.5.6` to `^8.5.32`, `eslint` `^9` to `^9.39.5`, `@eslint/eslintrc` `^3` to `^3.3.7`. A new `overrides` entry pins `@tailwindcss/typography` → `postcss-selector-parser@6.1.5`. That package is a devDependency, so the override does not affect a normal consumer install.

`npm pack --dry-run` still lists the same 9 paths. `package.json` inside the tarball grows from 1763 to 1875 bytes. Unpacked tarball size 2413496 to 2413608. Dist members of the pack are unchanged. The tarball is not byte-identical; the dist directory is.

### 3. Lockfile moves more packages than the PR summary lists

**Severity: none-for-consumers**

`git diff origin/develop...5fb8750` touches only `package.json`, `package-lock.json`, and `next-env.d.ts`. No library source. The lockfile is still dependency-only, but wider than the direct bumps in the PR text: 107 packages changed version, 7 added, 2 removed (`svix`, `uuid`). Direct resolutions checked: `next@16.4.3`, `resend@6.35.0`, `postcss@8.5.32`, `eslint@9.39.5`, `postcss-selector-parser@6.1.5`. `npm ci` did not rewrite the lockfile.

`npm ls --omit=dev` also shows `next@16.4.3` nested under `@vercel/analytics` and `@vercel/speed-insights` because those production packages depend on `next` and the install dedupes onto the hoisted devDependency. The lockfile is not published, so consumer apps still resolve that nested `next` from `@vercel/analytics`'s own range.

### 4. `next-env.d.ts` gains a generated import

**Severity: none-for-consumers**

The only non-package source change is:

```ts
import "./.next/types/root-params.d.ts";
```

That file is not in `files` and not in `npm pack`. `tsc --noEmit` still exits 0, as it did on develop (which already imported `./.next/types/routes.d.ts` the same way).

### 5. npm warns that ESLint 9.39.5 is unsupported

**Severity: minor**

`npm ci` on the PR prints `deprecated eslint@9.39.5: This version is no longer supported`. Install still succeeds. It does not change dist, exports, or the existing lint failure. The bump does not make `npm run lint` start working.

## Verified unchanged

| Check | Result |
| --- | --- |
| Public exports | 398 to 398. Names, kinds, and type text match. |
| Emitted `.d.ts` / `.d.mts` | SHA-256 `109b30a1e12f9c3ac96a4c59a82f6ec08860293a84ae25fb4221695ed17169c1` both files, both sides. 43749 bytes, gzip 8342. |
| `dist/index.mjs` | `c7e9747e24512acb8c8f68dd48fccad7020feeb64d7d3f513f64c0ac7448ed9e`, 488034 / gzip 118305 |
| `dist/index.js` | `7be567664d3d6c7126b4c1a5b26e4fff45f2ed3499cc418636140891fd3adf50`, 524650 / gzip 121295 |
| Sourcemaps | `index.mjs.map` and `index.js.map` hashes match. 0% size change on every dist file. |
| Props, defaults, refs, displayName | 53 exported components + 216 icons. No diffs. 0 forwarded refs and 0 displayNames on both sides. |
| DOM | 329 component fixtures and 216 icon markups, identical. |
| Pixels | 162 screenshots (54 component-library tabs, light and dark, plus 53 isolated defaults and 1 icon sheet). 0 pixel diffs. |
| `peerDependencies` / `engines` | Unchanged. No `engines` field. |
| Builds | `build:lib`, Next site build, and `npm publish --dry-run` pass on both. |
| Typecheck | `tsc --noEmit` exit 0 on both. |

## Pre-existing failures, not caused by this PR

- `npm run lint` exits 1 on both. Next 16 has no `lint` command, so the CLI treats `lint` as a project directory (`…/lint`). The PR message differs only by checkout path (`/workspace/lint` vs `/tmp/pr129/lint`).
- `npx eslint .` exits 2 on both. ESLint 9 crashes while loading `eslint.config.mjs` (`FlatCompat` circular JSON in config validation) before any file is linted. No per-rule results on either side.
- No unit tests and no Storybook on either side.
- On develop, the committed `dist/` does not match a fresh `tsup` build. This PR's fresh build matches the baseline's fresh build byte for byte. CI rebuilds before publish, so the fresh build is the consumer artifact.

## Author claims

| Claim | Verdict |
| --- | --- |
| Dependency-only | True for library source. Also updates generated `next-env.d.ts` and a new `overrides` field. The lockfile updates 107 packages, not only the four direct bumps named in the summary. |
| next 16.1.1 to 16.4.3, resend 6.35.0, postcss 8.5.32, eslint patch, postcss-selector-parser override | Resolved versions match. `eslint-config-next` stays at 16.0.7. |
| Byte-identical tsup dist | True, including sourcemaps. The npm tarball is not byte-identical, because `package.json` changed. |
| Unchanged exports | True. |
| Docs CSS differs only by font hashes and `rounded-full` | Mostly true. Also the four generated `next/font` class selectors. Still docs-site only. |
| `npm run lint` already fails on develop | True, same failure. |
| No tests in the repo | True. |

## Not verified

- `@microsoft/api-extractor` and `react-docgen-typescript` were not installed. The compiler API report and the props extractor matched instead.
- Per-file ESLint results, because ESLint crashes on both commits before linting files.
- Node 18, which CI uses. Both captures used Node v22.23.4.
- Pixel comparison of the Geist font files. The visual harness forces DejaVu Sans so font CDN and `next/font` files do not flake. Border-radius is covered by the pixel compare.
- A consumer install that ignores this repo's lockfile. `npm audit` here is the locked repo install. It does not prove every downstream app's nested `next` (via `@vercel/analytics`) moves to 16.4.3, because `next` is not a production dependency of the published package.
