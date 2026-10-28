# QA verify: PR 132 lint fixes

**Recommendation: GO.**

Head `f732f825bb4f1242757170e97818972145398207`, stacked on #135 `19cb9194cd2c319681b257e0979ba51e96443a80`. Node v22.23.4, npm 10.9.9. The PR branch was not pushed, commented on, reviewed, or merged.

The author's claims check out. Lint is 0 errors and 9 warnings, all `@next/next/no-img-element`. No test file changed. Both declaration files match #135 and the original baseline. The #135 behaviours that this diff touches still hold.

## Lint

`npm run lint` is `eslint .`. It exits 0. The separate `eslint . -f json` run also exits 0: **0 errors, 9 warnings**, every one `@next/next/no-img-element`:

- `src/components/avatar/index.tsx`
- `src/components/menuBar/index.tsx` (2)
- `src/components/navBar/index.tsx` (2)
- `src/components/state/index.tsx`
- `src/templates/blog/post-card.tsx`
- `src/templates/blog/post.tsx`
- `src/templates/home/founder.tsx`

The FlatCompat circular-JSON crash is gone. This branch has the flat `eslint-config-next` config from #130, and ESLint finishes. The diff does not add `eslint-disable`, turn a rule off, or change an ignore. The only disable comments on the tree are already on #135: one `react-hooks/exhaustive-deps` in `navBar`, and two `no-explicit-any` in `table`.

On #135 the same ESLint run still exits 1 with 26 errors. This PR removes those errors. It also drops the DateRangePicker `exhaustive-deps` warning by syncing the month during render instead of in an effect.

## Tests

`npm test` three times: **195 / 195**, exit 0, no flake. CI run 40717301032 also reports 195 passed. `git diff 19cb919 f732f82` has no test file, `vitest.config.ts`, `package.json`, or lockfile change, so the test names and count match #135.

Throwaway checks, not committed:

| Check | Result |
| --- | --- |
| Theme toggle SSR is the pulse placeholder; client render is the button | Pass. `useIsClient` matches the old mount effect. |
| DatePicker `value` set to null while open | Month becomes March 2026, time 14:30, under the suite clock. Clear-while-a-value-is-set is already in the 195 and passed. |
| DateRangePicker page to February, then a same-month day change | Left month stays February. A later August `startDate` moves the calendars to August / September. |
| SelectDropdown | Search keeps `"a b"`. A new `value` plus a new options array updates the closed label from Apple to Cherry. Mouse-select focus is covered by the existing suite. |
| TimePicker | `09:15` then `25:99` shows the placeholder, then `14:30` in 24h, then `02:30 PM` when only `format` changes. |
| TimeLine | Server HTML of a `success` log includes the title, the success icon, and Pending. `logs={[]}` renders an empty wrapper and no Pending. |
| MenuBar | Server HTML gives Home `tabindex="0"` and Docs `tabindex="-1"`. Arrow wrap and Tab-out stay in the existing suite. |

## API, types, size, CSS

| Check | Versus #135 | Versus `c208789` |
| --- | --- | --- |
| Exports | 398, same names, kinds, and type text | 398, same |
| `.d.ts` and `.d.mts` | SHA-256 `109b30a1e12f9c3ac96a4c59a82f6ec08860293a84ae25fb4221695ed17169c1`, 43749 bytes | Same sha and size |
| Props, defaults, refs, displayName | Identical | Identical (through #135, which matched develop) |
| Consumer fields and pack paths | Identical. Same 9 pack paths. `package.json` in the pack stays 2272 bytes | Consumer fields unchanged from the post-#129 develop contract |
| `tsc --noEmit` | Pass | Pass |
| CSS and tokens | Identical, including the docs-site bundle | Not re-diffed against `c208789` in this pass. #135 already matched current develop, and this diff does not touch CSS |

Dist versus #135:

| File | #135 | #132 | Raw | Gzip |
| --- | ---: | ---: | ---: | ---: |
| `index.mjs` | 495664 | 496752 | **+0.22%** | **+0.35%** |
| `index.js` | 532469 | 533519 | **+0.20%** | **+0.37%** |
| sourcemaps | | | about **+0.4%** | about **+0.7%** |

`npm audit` and `npm audit --omit=dev` are both 0. There is no dependency or lockfile change.

## DOM and screenshots

Compared with a fresh capture of #135 `19cb919` (the first library capture had attached to a stale server on port 4173; it was retaken against this worktree). Isolated DOM and the three pixel diffs below are from that good pair.

No library screenshot differs. The only library HTML diff is Menu Bar, light and dark.

| Diff | Severity | Why it is not a regression |
| --- | --- | --- |
| MenuBar `tabindex="-1"` to `"0"` on the active item, plus `role="menubar"` already present | none-for-consumers | Roving id is chosen during render instead of in an effect, so the server HTML has a tab stop immediately. After hydration #135 ended in the same place. Pixels match. |
| SelectDropdown closed value `""` to `"Sample"`, and Pagination's page-size field `""` to `"1"` | cosmetic | The label is derived while rendering. #135 left it blank until an effect. First paint now shows the controlled value. 199 px and 27 px. |
| TimeLine first paint is the steps, not an empty wrapper | cosmetic | Steps are derived during render. Empty `logs` is still an empty node. A non-empty list no longer flashes empty. 692 px. Status rules are unchanged. |

## Hook review

Nothing here reintroduces a #135 bug. The risky moves:

- **DatePicker.** The `value` effect is now the render-time "previous value" update. A real `value` still copies its month and clock. `null` still resets to `new Date()`. Clear still calls `setOpen(false)`. Placement is measured on the click that opens, not in an effect. Resize-while-open was already ignored.
- **DateRangePicker.** `startMonthKey` is still year-month only. A same-month day change does not move a paged calendar. Null does not move it. A new month does. The throwaway test confirmed both. Placement is measured on open.
- **SelectDropdown.** Label still snaps when `value` or the `options` array identity changes, including after an optimistic selection once the parent commits a new value. Search space and `mouseDown` focus restore are untouched. Closing still clears highlight and search; that work moved from the open effect into `closeMenu` and the outside-click handler. Filtering while open still does not reset the highlight. Upward placement uses the anchor measured at open plus the current list height, so a filter can still flip the panel. It no longer remeasures the rect when the list shrinks.
- **TimePicker.** Invalid and format re-parse still happen, now during render when `value` or `format` changes. The open scroll still runs only when `open` changes, so choosing a time does not scroll again. Columns are a module-level component, which removes the `static-components` error without changing the buttons.
- **TimeLine.** Same empty-list and case-insensitive rules, computed during render instead of in an effect. Server HTML now includes the steps.
- **MenuBar.** Arrow, Home, End, Escape, and Enter/Space handlers are unchanged. Active highlight still resets only when the parent passes a new `menuItems` array. Roving tabindex is repaired during render when the current id is missing, and arrow keys still set it directly. Ref truncation moved into the measurement effect so render does not write a ref.
- **useIsClient.** Replaces the mount `setState` in the theme toggles and the themes page. Server snapshot is false, client snapshot is true. The theme-tab sync still waits until a theme exists, and a manual tab click is not overwritten unless `theme` changes.

Docs-only edits: blog and library links use `next/link`, and `BlogPostMeta` is a type alias. Those are not in the component-library screenshot set except the library sidebar link, which did not show up as a pixel diff.

## CI

On `f732f82`, all completed successfully. None were still running.

- `test` (Actions run 40717301032), 43s, 195 passed
- Vercel
- Vercel Preview Comments

## Differences

| Difference | Severity |
| --- | --- |
| 26 ESLint errors removed; 9 `@next/next/no-img-element` warnings remain | none (the intended fix) |
| Dist JS about +0.2% raw versus #135 | none-for-consumers |
| First paint of SelectDropdown, Pagination's select, TimeLine, and MenuBar tabindex | cosmetic. Same state #135 reached after effects |
| `eslint@9.39.5` deprecation warning on `npm ci` | minor, already on #135 and develop. No dependency change in this PR |
