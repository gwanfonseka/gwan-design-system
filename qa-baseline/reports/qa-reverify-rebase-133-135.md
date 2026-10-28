# Re-verify: #133 and #135 rebased onto current develop

**#133: GO. #135: GO.**

Node v22.23.4, npm 10.9.9. Neither PR was pushed, commented on, reviewed, or merged.

## Current develop

Head: `646ad24fe447e18ac61280f5668449d57c6e7ae7` (captured with `qa-baseline/capture.sh`).

Since the original baseline `c20878922bca856fd014949adb7bdb9b585392a6`, develop contains:

- **#129** (`7ebc24e`, merge `279539c`). Dependency upgrade. Fresh `tsup` output is unchanged from that baseline.
- **#130** (`7ead138`, merge `95be321`). `npm run lint` is now `eslint .`. `eslint.config.mjs` loads `eslint-config-next` flat configs directly instead of `FlatCompat`. Docs templates under `src/templates/component-library/` drop a few unused imports and fix lint nits. No library component implementation change.
- **#131** (`e6a6a51`, merge `646ad24`). `dist/` is no longer committed and is gitignored. `prepack` runs `build:lib`, so `npm pack` / `npm publish` still ship a fresh build.

On this develop head, `npm audit` is 0. Public exports are still **398**. `dist/index.d.ts` and `dist/index.d.mts` are still SHA-256 `109b30a1e12f9c3ac96a4c59a82f6ec08860293a84ae25fb4221695ed17169c1`, **43749** bytes. `build:lib` and `tsc --noEmit` pass. `eslint .` now actually runs and exits 1: **26 errors, 13 warnings**, mostly `react-hooks/set-state-in-effect`. That is the new develop, not something #133 or #135 introduced. The old `next lint` directory error is gone.

## #133 `4eba662f163360cbb8e6c2111b953f80072b2ff2`

**GO.**

| Check | Result |
| --- | --- |
| `npm test` × 3 | **196 / 196**, exit 0 every time. CI run 40716369956 also 196 passed. |
| `npm audit` and `npm audit --omit=dev` | **0** and **0**. |
| Exports | 398, identical to develop and to `c208789`. |
| `.d.ts` / `.d.mts` | Same sha and 43749 bytes as develop and `c208789`. |
| Props, defaults, refs, displayName | Identical to develop. |
| Consumer `package.json` fields | Identical (`dependencies`, `peerDependencies`, `exports`, `files`, `main`, `module`, `types`, `sideEffects`). No `engines`. |
| Pack paths | Same 9 files. `package.json` inside the tarball is 1910 → 2272 bytes because of the test scripts and devDependencies. Dist members match develop byte for byte. |
| `tsc --noEmit` | Exit 0. |
| `build:lib` vs develop | **0%**. `index.js` 524650, `index.mjs` 488034, same hashes as develop. |
| Diff vs develop | Tests, `src/test/**`, `vitest.config.ts`, `.github/workflows/test.yml`, `.nvmrc` (`22.23.4`), `package.json` scripts and devDependencies, `package-lock.json`, and `tsconfig.json`. No component implementation file. |
| GitHub checks | `test` pass, Vercel pass, Vercel Preview Comments pass. None still running. |

`tsconfig.json` is the one file outside a narrow reading of "tests, workflow, nvmrc, scripts, lockfile". It only adds `vitest.config.ts`, `src/test`, and `**/*.test.ts(x)` to `exclude`, so the app typecheck does not compile the suite. That is test wiring, not a component change.

The regenerated lockfile matches the claim and is wider than those two packages, because the Vitest, jsdom, and Testing Library tree is new. The two pre-existing transitive bumps are real: `@jridgewell/sourcemap-codec` 1.5.5 → 1.6.0, `tinyglobby` 0.2.15 → 0.2.17. `npm ci` still prints the existing deprecation warning for `eslint@9.39.5`.

## #135 `19cb9194cd2c319681b257e0979ba51e96443a80`

**GO.** Rebased on `4eba662`. The `src/` patch against that parent is byte-identical to the earlier `054cbdb..d92fd07` patch (52288 bytes). Same nine commits, same files, same hunks.

| Check | Result |
| --- | --- |
| `npm test` × 3 | **195 / 195**, exit 0 every time. CI run 40716371047 also 195 passed. |
| `npm audit` and `npm audit --omit=dev` | **0** and **0**. |
| Exports | 398, identical to develop and to `c208789`. |
| `.d.ts` / `.d.mts` | Same sha and 43749 bytes as develop and `c208789`. |
| Props, defaults, refs, displayName | Identical to develop. |
| Consumer fields and pack paths | Same as #133. Dist members grow; `package.json` in the pack stays 2272 bytes. |
| `tsc --noEmit` | Exit 0. |
| `build:lib` vs develop | `index.mjs` 488034 → 495664 (**+1.56%**, gzip **+1.53%**). `index.js` 524650 → 532469 (**+1.49%**, gzip **+1.61%**). Sourcemaps about **+2.0%** raw / **+2.4%** gzip. Same growth as the pre-rebase `d92fd07` build. |
| Diff vs #133 | The nine component files and their tests only. |
| GitHub checks | `test` pass, Vercel pass, Vercel Preview Comments pass. None still running. |

ESLint stays at 26 errors. #135 adds one warning that #133 and develop do not have: `react-hooks/exhaustive-deps` on the new DateRangePicker effect (`startMonthKey` is the dependency, not `startDate`). That omission is intentional so a same-month day change does not reset the calendar. It does not fail the test job.

The consumer-visible behavior is unchanged from the previous verification of `d92fd07`: Avatar colours become stable and different, MenuBar tab order becomes roving, empty TimeLine no longer throws, invalid TimePicker values show the placeholder, Clear closes the date pickers, SelectDropdown keeps spaces and focus, Modal and Switch accessibility names change. Those are the fixes, and they are why this is not a silent patch.
