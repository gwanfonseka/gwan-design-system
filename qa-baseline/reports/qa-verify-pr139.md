# QA verify: PR 139 published blog snippets

**Recommendation: GO.**

Head `4f9a4fda9186f5c9916259fc1eb7315da1d91a67`, base `develop` @ `bafe606e814972618bf7a53fa5cded83e3db67f2`. Node v22.23.4, npm 10.9.9. Checked 1 Nov 2026. The PR branch was not pushed, commented on, reviewed, or merged. This report is the only commit, on `qa/baseline-develop`.

The Lead Researcher spec’s published-post findings are the five `error=` props on the react-hook-form post, and the WCAG AA sentence on the accessible-forms post. The `error=` props are gone. The WCAG sentence is still there and was explicitly left for Nimesh. The other API edits in this PR match the components. No blocker.

## 1. Diff and frontmatter

`git diff origin/develop...4f9a4fd` is only these six files (253 insertions, 107 deletions):

- `content/blog/building-accessible-forms.mdx`
- `content/blog/dark-mode-done-right.mdx`
- `content/blog/how-the-theme-system-works.mdx`
- `content/blog/react-hook-form-with-gwan.mdx`
- `content/blog/saas-dashboard-weekend-build.mdx`
- `content/blog/why-tailwind-v4.mdx`

Frontmatter title, date, description, tags, cover, and `draft: false` are unchanged on all six. Slugs are the filenames and did not change. No draft file changed.

`npm view` on 1 Nov 2026 returns exactly the pins: `react-hook-form` 7.91.0, `zod` 4.6.7, `@hookform/resolvers` 7.0.1, `next-themes` 0.4.6, `@axe-core/react` 4.14.0.

## 2. Fences

Library packed from current `develop` (`/tmp/gwan-design-system-1.0.8.tgz`). Scratch app: `next@16.4.3`, `react@19.2.1`, `react-dom@19.2.1`, the pins above, and that tarball. `tsc --noEmit --strict --noUnusedLocals` with `skipLibCheck` (the repo’s own tsconfig skips dependency declarations). No snippet type was widened or cast.

Path comments were saved at that path. The team row has no path comment; `content.tsx` imports `./team`, so it was saved as `src/templates/users/team.tsx`. Six accessible-forms JSX fragments are not modules. Each was wrapped in `export function Snippet()` with `useState` and, where the fragment names an options array, `ISelectDropdownOption[]` or `IMultiSelectOption[]`. The JSX text is unchanged. `isValidEmail` was completed as `(value: string) => value.includes("@")`.

| Fence | Result |
| --- | --- |
| react-hook-form sign-up, email field, `usePasswordForm` | pass |
| SaaS page, shell, metrics, team, table, content | pass |
| Tailwind v3 `module.exports` (`checkJs`) | pass |
| Theme `AppThemeProvider` | pass |
| Dark-mode provider, layout, toggle, cycle button | pass |
| Accessible-forms fragments (Input ×3, SelectDropdown, MultiSelect, radios), sign-up form, `useRef` lines, axe import | pass |
| `DeleteUserModal` | **fail** TS6133, function declared and never read |
| `FormErrorSummary` | **fail** TS6133, function declared and never read |

Those two are complete components. The only error is `noUnusedLocals` because the file does not export or call them. `export function` clears it. Nothing else in those files fails `strict`.

`UsersContent` takes `onAction` and does not call it. `noUnusedLocals` does not flag an unused parameter. The prose says invite and delete will call it.

jsdom + Testing Library rendered the react-hook-form sign-up (`vitest` 1 passed). Submit on an empty form shows “Name is required”, “Email is required”, “Please select a role”, and “You must agree to the terms” (`role="alert"` on the input errors and on the checkbox paragraph). Filling name, email, Designer, and the checkbox, then submitting, calls `console.log` with `{ name: "Nimesh Fonseka", email: "nimesh@example.com", role: "designer", agreed: true }` and clears the errors. jsdom needed `Element.prototype.scrollIntoView` because `SelectDropdown` calls it. That is the test environment, not the snippet.

Tailwind v4.1.17 (`@tailwindcss/postcss`) compiled the `@source` fence from `src/app/globals.css`. A marker class written only into `node_modules/gwan-design-system/dist/marker.js` (`bg-[#0bad0c]`) appears in the CSS when that `@source` line is present and does not appear when it is removed. The other CSS fences compile once `@import "tailwindcss"` is prepended where the fence is only a `:root` or `@theme` block. Two exceptions: the “Paste here / `...`” block is a placeholder and fails with `Unknown word` on `...`; `@plugin "@tailwindcss/typography"` compiles after that package is installed (this repo uses 0.5.19) and fails before that with `Can't resolve '@tailwindcss/typography'`.

## 3. Claims that were changed

Checked against `src/components` on this head (same components as `develop`) and the packed `.d.ts`.

| Claim | Evidence |
| --- | --- |
| Input needs `value`, is not `forwardRef`, so `register()` is not a valid spread | `IInput` extends `HTMLAttributes` and requires `value: string`. `const Input: FC<IInput>`. `HTMLAttributes` has no `name`. The sign-up fence uses `Controller` and `isError` / `errorMessage`. No `error=` remains in the six posts. |
| SelectDropdown uses `isError` / `errorMessage`; `onChange: (option: string) => void` | `ISelectDropdown` matches. |
| Checkbox has neither error prop; the message is a sibling `role="alert"` | `ICheckbox` is `label`, `checked`, `onChange`, plus optional class, disabled, size, edges. The rendered test shows that paragraph. |
| Zod 4 `z.email("Invalid email")` | `zod@4.6.7` exports `z.email`. `ZodString.email` is `@deprecated` with “Use `z.email()` instead.” The `usePasswordForm` fence type-checks with the generic left off. |
| Snackbar has no `onClose`; type is `SNACK_BAR_TYPE` | `ISnackBar` is `message`, `type?`, `icon?`, `className?`. Enum values are `DEFAULT`, `SUCCESS`, `DANGER`, `WARNING`, `INFO`. The shell stores that enum and unmounts after 4s. |
| Tailwind v4 `@source` replaces the content array | The fence compiles and is what makes classes inside `dist` visible. `package.json` `files` is `dist` and `README.md`. |
| Token count is 19 | `LIGHT_DEFAULTS` and `TOKEN_GROUPS` have 19 keys: 7 surfaces and text, 3 primary, 9 status. The post says 19 in the editor step and in the flow diagram. |
| Checkbox, RadioButton, and DatePicker use `--primary-default` / `--primary-default-fg`, not the numbered scale | Checkbox checked state, radio selected state, and the date-picker selected/today styles use those semantic classes. The three scale rows are gone from the table. |
| `generateCSS` does not emit the `--color-*` mappings | It writes `:root`, `.dark`, and a primary-scale `@theme` only. |
| `theme` from `useTheme()` is `string \| undefined` | `UseThemeProps.theme` in `next-themes@0.4.6`. The post no longer says the hook returns `undefined`. |
| Copy CSS | `src/templates/themes/css-output.tsx` renders “Copy CSS”. Both the theme post and the dark-mode post say **Copy CSS**. Dark-mode hex values in the post (48 pairs) match `src/app/globals.css`. |
| Accessible-forms modal, focus, error summary, and axe snippets | `Modal` is `title` + `onClear` (no `isOpen`). The modal source sets `role="dialog"`, `aria-modal`, `aria-labelledby`, moves focus in, traps Tab, closes on Escape, and restores focus. Axe’s default export is called as `(React, ReactDOM, 1000)`. |

Button scale row, left as written: primary uses 500 / 600 / 700 and disabled 200 / 500; secondary uses 100 / 200 / 300 and text `primary-800`; tertiary border and text use `primary-500` (`src/components/button/index.tsx`). The table lists the steps it lists. It does not mention 800 or the disabled pair. That is incomplete, and the author left it.

## 4. Left for Nimesh

| Claim, still in the published post | Verdict | Evidence |
| --- | --- | --- |
| “the default Gwan palette passes WCAG AA” | **false** for pairs the default components actually paint | Semantic pairs (foreground on background, muted on background, primary-fg on `--primary-default`, status fg on status bg) are above 4.5:1 in both themes. The default primary scale is not. `text-primary-default-fg` (`#f4f7f1`) on `bg-primary-500` (`#9ea593`) is **2.35:1**. The same foreground on `primary-600` is **3.30:1**. Disabled primary is `text-primary-500` on `bg-primary-200` (`#c8d5be`), **1.66:1**. Tertiary `text-primary-500` on white is **2.54:1**. Secondary text `primary-800` on `primary-100` passes (6.75). AA for normal text is 4.5:1. |
| “Every Gwan form component … creates a `<label>` with the correct `htmlFor`/`id` pair” | **partly true** | `htmlFor` matches the control id on `Input`, `TextArea`, `SelectDropdown`, `SearchInput`, `Checkbox`, and `RadioButton`. `MultiSelect` renders a `<label id>` and points the trigger at it with `aria-labelledby`; there is no `htmlFor`. `DatePicker` renders a `<label>` with no `htmlFor`; the trigger is a `<button type="button">` with no `id`. `ColorPicker` renders the label as a `<span>`. |
| “pressing `↓` opens the dropdown and highlights the first option” | **false** | `openMenu` sets `highlightedIndex` to `displayOptions.findIndex` of the current `value`. That is the matching option, or **-1** when nothing matches (empty value). It is not always index 0. A later ArrowDown while open does `min(i + 1, length - 1)`, so -1 then becomes 0. `aria-activedescendant` is set only when `highlightedIndex >= 0`. The roles in that paragraph (`combobox`, `aria-expanded`, `aria-haspopup="listbox"`) do match. |
| “Screen readers announce ‘Full name, required, edit text.’” | **partly true**, also left in the PR body | `Input` sets `required`, `aria-required`, and appends ` *` to the label. The exact phrase is the browser’s, not a string in the component. |

No other sentence in the six posts contradicted the source on props, enums, or the token list. `RadioButton` is a native `type="radio"` with `name`, so a shared `name` does give browser arrow-key grouping. `DatePicker`’s trigger is `type="button"`, so Enter activates `toggleOpen`.

## 5. `next build`, listings, links

`npm run build` exits 0 (Next.js 16.4.3). `next start` on `127.0.0.1:3470`:

| URL | Status |
| --- | ---: |
| `/blog/building-accessible-forms` | 200 |
| `/blog/how-the-theme-system-works` | 200 |
| `/blog/saas-dashboard-weekend-build` | 200 |
| `/blog/why-tailwind-v4` | 200 |
| `/blog/dark-mode-done-right` | 200 |
| `/blog/react-hook-form-with-gwan` | 200 |
| `/blog` | 200, all six slugs |
| `/sitemap.xml` | 200, all six as `https://gwan.dev/blog/<slug>` |
| `/docs`, `/themes` | 200 |

Links, all 200: `https://gwan.dev` (redirects to `/home`), `https://gwan.dev/themes`, `https://gwan.dev/docs`, `https://tailwindcss.com/docs/upgrade-guide`, `https://react-hook-form.com/`, `https://github.com/gwanfonseka/gwan-design-system`. Relative `/docs` and `/themes` are 200 on this server.

## 6. GitHub checks on `4f9a4fd`

| Check | Result |
| --- | --- |
| `test` (Actions run 41294917742, job 124813625331) | success, Node 22.23.4, **195** passed |
| Vercel | success |
| Vercel Preview Comments | success |

Preview `https://gwan-design-system-3du6o9p95-nimesh-fonsekas-projects.vercel.app/blog/react-hook-form-with-gwan` returns **302** to `vercel.com/sso-api`. It was not used as evidence.

## Findings

| Finding | Severity | Exact fix |
| --- | --- | --- |
| No blocker in the six diffs. The `error=` props, Snackbar `onClose`, token count, `--primary-default` rows, Copy CSS label, and `@source` path are fixed as claimed. | — | — |
| WCAG AA sentence is still published and is false for the default Button colours above. Explicitly left. | **major** | Delete the sentence, or replace it with the measured pairs. Do not say the default palette passes AA. `text-primary-default-fg` on `bg-primary-500` is 2.35:1; disabled primary text on `primary-200` is 1.66:1. |
| The `htmlFor` sentence is still absolute. Explicitly left. | **major** | Say `Input`, `TextArea`, `SelectDropdown`, `SearchInput`, `Checkbox`, and `RadioButton` use `htmlFor`/`id`. Say `MultiSelect` uses `aria-labelledby`, `DatePicker`’s label has no `htmlFor`, and `ColorPicker`’s label is a `<span>`. |
| “`↓` highlights the first option” is still published and is false. Explicitly left. | **major** | Say ArrowDown opens and highlights the option whose value matches, or highlights nothing when the value matches nothing (`highlightedIndex` -1). |
| `DeleteUserModal` and `FormErrorSummary` fail `noUnusedLocals` only because they are not exported. | **minor** | Change both to `export function`. |
| The “Paste here” CSS block uses `...` and is not compilable. | **none** | It is a placeholder under “paste the entire block”, not a snippet to run. |
