# QA verify: PR 135 component bugfixes

**Recommendation: GO**, as a behavior-changing bugfix. Nothing unexplained failed. Several fixes are visible to existing consumers, so the version bump should not be treated as a pure patch. Details are in the versioning section.

| | |
| --- | --- |
| PR | https://github.com/gwanfonseka/gwan-design-system/pull/135 |
| Head | `d92fd07d6475cafdd3588a621e47232cf860bc85` (`cursor/fix-component-bugs-4579`) |
| Stack parent | PR 133 `054cbdb53d791159eac7faa9a6c28ce5bd46effb` (`cursor/component-test-suite-689a`) |
| Baseline | develop `c20878922bca856fd014949adb7bdb9b585392a6` |
| Node / npm | v22.23.4 / 10.9.9, same as the baseline |

The git diff against develop is the Vitest suite from #133 plus nine fix commits. Against #133, each fix commit touches only that component and its test. No commit edits another bug's files.

## Per bug

| Bug | Fixed? | Test correct? | Notes |
| --- | --- | --- | --- |
| Avatar | Yes | Yes | FNV-1a pastel from `name.trim() \|\| email.trim()`, computed during render (no `Math.random`, no effect). Initials skip blank words (`"a  b"` → `ab`). Loading state keeps `className`. Ad-hoc check: two client mounts match, SSR markup contains `background-color:hsl(`, blank name matches the email string as a seed, `Math.random` is not called. |
| SelectDropdown | Yes | Yes | Space returns before list navigation, so `"a b"` stays. `rounded && "rounded"` is now a ternary, so squared edges no longer emit the class `false` (trigger and listbox). Option `mouseDown` calls `preventDefault` before select, and the test expects the combobox to keep focus. |
| TimePicker | Yes | Yes | Unparseable or out-of-range `h:m:s` (`0–23`, `0–59`, `0–59`) sets `valid: false` and the trigger shows the placeholder. The parse effect depends on `value` and `format`. The old `it.each` cases (`abc`, `14:xx`, `::`, `99:99`, `-3:15`, `24:00`, empty) now all expect `"Select time"`. Ad-hoc: `abc`, `25:99`, and `""` also show `"Select time"`. Format change re-parses `14:30` to `02:30 PM` and the open columns match. |
| DatePicker | Yes | Yes | A null `value` sets the viewed month and the time inputs from `new Date()`. Clear calls `onChange(null)` and `setOpen(false)` in both modes. With the suite clock (15 Mar 2026 14:30 UTC), clearing an open June panel lands on March, hour 14, minute 30. Ad-hoc repeated that reset. |
| DateRangePicker | Yes | Yes | `startMonthKey` (`year-month`) updates the left calendar when the month changes and does not reset a same-month day edit. Clear calls `setOpen(false)`. Tests expect August/September after a later `startDate`, and a closed panel after Clear. |
| MenuBar | Yes | Yes | Arrows, Home, and End move focus and wrap; they do not activate. Down/Up open a submenu and wrap inside it. Escape closes the submenu or More and restores focus. Enter/Space still activate. The old Tab test remains: Tab leaves the bar instead of wrapping. The suite's keyboard test passed on all three runs. |
| TimeLine | Yes | Yes | Empty `logs` sets steps to `[]` instead of reading `logs[-1]`. Status compare is trim + lower-case, so `success`, `FAILED`, and `finished` take the success/danger icons, and a terminal last status does not append Pending. The test that expected a throw now expects an empty `.timeline` node and no Pending. |
| Modal | Yes | Yes | One line: `aria-hidden` removed from the backdrop. The dialog is found with `getByRole("dialog", { name: "Confirm" })` without `hidden: true`. Escape still calls `onClear`. |
| Switch | Yes | Yes | `aria-labelledby` points at the label, `aria-describedby` at the description. The smoke test clicks `getByRole("switch", { name: "Alerts" })` and expects accessible description `"Email"`, instead of the old concatenated name `"AlertsEmail"`. |

## API, types, props, size

| Check | Result | Severity |
| --- | --- | --- |
| Public exports | 398 to 398, same names, kinds, and type text | none |
| `.d.ts` / `.d.mts` | Byte-identical. SHA-256 `109b30a1e12f9c3ac96a4c59a82f6ec08860293a84ae25fb4221695ed17169c1`, 43749 bytes, gzip 8342 | none |
| Prop names, types, defaults, refs, displayName | Identical for 53 components and 216 icons | none |
| `package.json` consumer fields | `main`, `module`, `types`, `exports`, `files`, `sideEffects`, `dependencies`, `peerDependencies` identical. No `engines` field on either side | none |
| Pack file list | Same 9 paths | none |
| CSS and tokens | `globals.css`, token JSON, token generator CSS, and docs-site CSS identical | none |
| `dist/index.mjs` | 488034 → 495664 bytes (**+7630, +1.56%**). Gzip 118305 → 120118 (**+1813, +1.53%**) | none-for-consumers of the API; expected JS behavior change |
| `dist/index.js` | 524650 → 532469 bytes (**+7819, +1.49%**). Gzip 121295 → 123246 (**+1951, +1.61%**) | same |
| Sourcemaps | `index.mjs.map` +2.05% raw / +2.38% gzip. `index.js.map` +2.04% raw / +2.36% gzip | none-for-consumers |

`npm test` is new, but it comes from #133, not from these nine commits. `package.json` dependencies and peerDependencies do not change between #133 and #135, and the lockfiles are identical. Versus develop, the lockfile and `npm audit` differ only because #133 added Vitest, Testing Library, and jsdom: audit **22 → 20** (high `nanoid` 3.3.11→3.3.20 and `source-map-js` 1.2.1→1.2.2 drop out). Critical `next` and the other 19 advisories are unchanged. That is not a #135 regression and it does not finish the vulnerability work.

## DOM and pixels

51 isolated HTML files differ. Library-page HTML (54 tabs × light/dark) and all 108 library screenshots match. No DOM or pixel diff is unexplained.

| Snapshots | Why |
| --- | --- |
| Avatar sizes, label positions, defaults | Swatch is `hsl(101, 71%, 83%)` instead of `transparent` (the old SSR state, before the random effect). Avatar fix. |
| Avatar `isLoading` | Loading wrapper now interpolates `className`. With the empty default that is only a trailing space. Avatar fix. Cosmetic. |
| AvatarGroup (all variants), NavBar (defaults, collapsed, loading, avatar types) | Those components render `Avatar`. Only the pastel changed. |
| MenuBar avatar-type and avatar-size variants | Same pastel change inside the bar's avatar. |
| MenuBar defaults, align, and variant | `role="menubar"`, `data-menubar-item`, and `tabindex`. MenuBar fix. Not visible: those screenshots match. |
| Modal, all sizes | Backdrop no longer has `aria-hidden="true"`. Modal fix. Pixels match. |
| SelectDropdown squared edges | The class token `false` is gone. SelectDropdown fix. Pixels match. |

Isolated pixels that differ: `Avatar.png` 2288 px (0.340%), `AvatarGroup.png` 679 px (0.101%), `NavBar.png` 2346 px (0.320%). All three are the new pastel. TimePicker, DatePicker, DateRangePicker, TimeLine, and Switch do not change the default-prop snapshot, because those bugs are in empty logs, invalid values, Clear, or a label the default fixture does not pass. The tests cover those states.

One implementation note, not an unexplained snapshot: MenuBar's roving id starts as `""` and is chosen in an effect. The server HTML therefore gives every item `tabindex="-1"` until hydration. After the effect, the active or first item is `0`. The tests run after effects and pass.

## Test file diff (#133 → #135)

Eight test files change. Net `it(` lines 153 → 152 because four Avatar colour tests became three. No test file outside these bugs is edited. No assertion was loosened.

| Removed or renamed | Replacement | Justified? |
| --- | --- | --- |
| Avatar: exact random pastel; same colour for different names; upper-end formula; SSR `transparent` | Stable name pastel; email when the name is blank; SSR `hsl()` equals a second server render | Yes. The fourth random case is covered by the stable-colour and SSR tests. |
| Avatar initials `"a  b"` expected `"a"` | Expects `"ab"` | Yes. |
| Avatar loading `className` must not contain `should-drop` | Must contain it | Yes. |
| SelectDropdown focus is `document.body` | Combobox keeps focus | Yes. |
| SelectDropdown search `"a b"` becomes `"ab"` | Value stays `"a b"` | Yes. |
| SelectDropdown squared edges contain class `false` | Must not contain `false`, including the open listbox | Yes. Stronger. |
| TimePicker `it.each` title "keeps today's rendering" and the `NaN` / `99:99` labels | Same inputs, all expect the placeholder `"Select time"` | Yes. Stronger, not a dropped case. |
| TimePicker format change stays `"14:30 AM"` | Becomes `"02:30 PM"` and the open columns show 02, 30, PM | Yes. |
| DatePicker clear-with-time leaves the panel open and the old month/time | Panel closes; month is March 2026; time is 14:30 | Yes. |
| DateRange clear leaves the panel open | Panel is closed, including after a null rerender | Yes. |
| DateRange keeps the mounted month | Follows the new start month (August / September) | Yes. |
| TimeLine lowercase `"success"` is neutral | `success`, `FAILED`, and `finished` use success/danger icons and do not append Pending | Yes. Stronger. |
| TimeLine empty `logs` throws `TypeError` | Renders an empty `.timeline` element and no Pending | Yes. This is the behavior change, not a deleted guard. |
| MenuBar "Enter and Space only" / arrows do nothing / Escape leaves menus open | Enter and Space still activate; arrows, Home, End wrap without activating; Escape closes submenu and More | Yes. |
| MenuBar test "does not wrap focus from the last item back to the first" | Kept. It asserts Tab and Shift+Tab leave the bar | Yes. Matches "Tab still leaves". |
| Modal dialog only found with `hidden: true` | Found as a normal dialog named Confirm | Yes. |
| Switch name `"AlertsEmail"` | Name `"Alerts"` and description `"Email"` | Yes. |

## Runs and CI

`npm test` on Node v22.23.4, three times: **195 passed / 195**, 9 files, exit 0 every time. No flake. `tsc --noEmit` exit 0. `npm run build:lib` exit 0. The capture's lint script still fails the pre-existing way (`next lint` is not a Next 16 command). ESLint still crashes while loading `eslint.config.mjs`. Those are unchanged from develop.

GitHub checks on PR 135, all success:

- `test` (Actions run 40712500553): 195 passed
- Vercel deployment
- Vercel Preview Comments

## What a consumer can notice

These are the changes worth a version decision. They are the fixes, not accidents.

- **Avatar colour (treat as breaking for existing screens).** Every initials/image-fallback swatch changes. Old behaviour was `transparent` on the server, then a new random pastel after mount. New behaviour is one stable pastel from the name, or from the email if the name is blank. Two people no longer share a colour by chance, and the same person no longer changes colour on refresh. Anyone who snapshot-tested or branded around the old swatch will see a different colour.
- **MenuBar keyboard and tab order.** Only one top-level item is in the tab order. Arrow, Home, and End move and wrap. Down opens a submenu. Escape closes it. Tab still leaves. Previously every button was tabbable and arrows did nothing. Keyboard users of a MenuBar will feel this immediately.
- **TimeLine empty list no longer throws.** `logs={[]}` used to throw `TypeError` in an effect. It now renders an empty wrapper. A caller that caught that throw will not see it anymore. Lowercase `success` / `failed` / `finished` also pick the coloured icon, and a lowercase finished last step no longer grows a Pending row.
- **TimePicker invalid values.** Strings such as `abc`, `25:99`, `99:99`, `24:00`, and `""` used to render labels like `NaN:00 AM` or `99:99`. They now show the placeholder. A controlled value that was previously displayed as garbage will look empty until it is valid. Changing `format` also rewrites the label (`14:30` in 24h becomes `02:30 PM` in 12h).
- **DatePicker / DateRangePicker Clear.** Clear now closes the panel. DatePicker also jumps the open calendar back to "now" when `value` becomes null, instead of leaving the previous month and clock.
- **SelectDropdown.** Search can contain spaces. Squared edges no longer include a literal `false` class (no visual change in the pixel compare). A mouse selection leaves focus on the combobox.
- **Modal.** The dialog is in the accessibility tree. Sighted layout is unchanged.
- **Switch.** The accessible name is only the label. The description is announced separately. Sighted layout is unchanged. Assistive tech that heard `"AlertsEmail"` will hear `"Alerts"` plus description `"Email"`.

## Not verified

- API Extractor and react-docgen were not installed. The compiler export report and the props extractor matched the baseline.
- Per-file ESLint, because ESLint 9 still crashes on config load, on this branch and on develop.
- Node 18. CI and these runs use Node 22.23.4, which is what #133 pins.
- A full manual pass of every MenuBar overflow width. The suite mocks layout and passed; an ad-hoc render without that mock correctly collapsed both items into More, so it did not exercise wrap. The suite test did.
