# QA verify: PR 138 NextAuth MenuBar draft

**Recommendation: NO-GO.**

Head `2646a61bcc7e4d079b98be7f5e36b6b94fc5e388`, base `develop` @ `bafe606e814972618bf7a53fa5cded83e3db67f2`. Node v22.23.4, npm 10.9.9. Checked 1 Nov 2026. The PR branch was not pushed, commented on, reviewed, or merged. This report is the only commit, on `qa/baseline-develop`.

The rewrite matches the Lead Researcher spec on MenuBar, the avatar, the button, Ellipsis, the #135 behaviour section, and the Next.js 16 `proxy` export. One install command is wrong, and that is the blocker. The post is still a draft, and #137 is not on `develop`, so a deploy of this head still serves the draft.

## 1. Diff and frontmatter

`git diff origin/develop...2646a61` is one file: `content/blog/nextauth-with-gwan-navbar.mdx` (210 insertions, 72 deletions). Frontmatter is still `draft: true`, date `2026-04-12`, author Nimesh Fonseka. There is no `coverImage`. The title is "An auth-aware, keyboard-friendly app bar with NextAuth and Gwan MenuBar".

## 2. Snippet type-check

Packed `develop` @ `bafe606` with `npm run build:lib` and `npm pack` (`/tmp/gwan-design-system-1.0.8.tgz`). The declaration file is still 398 exports, SHA-256 `109b30a1e12f9c3ac96a4c59a82f6ec08860293a84ae25fb4221695ed17169c1`, 43749 bytes. Scratch app `/tmp/menubar-snippet-check`: `next@16.4.3`, `react@19.2.1`, `react-dom@19.2.1`, `next-auth@5.0.0-beta.32`, that tarball, `typescript@^5`, `@types/react@^19`, `@types/react-dom@^19`, `@types/node@^24`.

Each `ts`/`tsx` fence was copied unchanged into the path in its `// src/...` comment. No type was widened, cast, or deleted. The bash fence was not type-checked. The tsconfig from the PR body (`strict`, `noEmit`, `moduleResolution: "bundler"`, `jsx: "preserve"`, `@/*` → `./src/*`, `next-env.d.ts`) cannot parse these files on its own, so these options were added and nothing else: `module: "esnext"`, `target: "ES2017"`, `lib: ["dom", "dom.iterable", "esnext"]`, `esModuleInterop: true`.

`npx tsc --noEmit --noUnusedLocals --strict` **without** `skipLibCheck` exits 2. All 29 errors are in `node_modules` (`next`, `next-auth`, `@auth/core`, `@types/mdx`). None are in `src/`.

The same command **with** `--skipLibCheck` (dependency declarations only; snippet types unchanged) exits 0. Adding `--noUnusedParameters` also exits 0.

| Fence | Alone | With the other fences |
| --- | --- | --- |
| `src/auth.ts` | pass | pass |
| `src/app/api/auth/[...nextauth]/route.ts` | pass | pass |
| `src/components/auth-provider.tsx` | pass | pass |
| `src/app/layout.tsx` | pass | pass |
| `src/components/app-menu-bar.tsx` | fail | pass |
| `src/proxy.ts` | pass | pass |

`app-menu-bar.tsx` fails alone with `Property 'role' does not exist on type 'User'`. That property comes from the `declare module "next-auth"` augmentation in the `auth.ts` fence. Compiling the two files together passes. Nothing was added to the fence. The one-line `export { auth as proxy } from "@/auth"` (quoted in prose, not a fence) also passes as `src/proxy-oneline.ts`.

## 3. Components, props, and #135

Checked against `src/components` on this head (same as `develop`) and the packed `.d.ts`. Every name the post uses is one of the 398 exports: `MenuBar`, `IMenuBar`, `IMenuItem`, `Button`, `BUTTON_VARIANTS`, `Ellipsis`, `IEllipsis`, `AVATAR_VARIANT`, `DashboardSVG`, `SettingsSVG`.

| Claim | Result |
| --- | --- |
| `IMenuItem` requires `title`, `route`, `isActive`, `isDivider` | Matches `src/components/navBar/index.tsx`. `icon`, `onClick`, `hasChildren` are optional. `children` is `{ title, route, isActive }[]`. The snippet uses only those fields, plus `icon`. |
| Avatar props and `AVATAR_VARIANT.IMAGE_WITH_FULL` | `isAvatarVisible: true` requires `avatarName`, `avatarEmail`, `avatarImage`, and `avatarType`. The enum value exists. `IMAGE_WITH_FULL` renders the photo when `image` is non-empty, otherwise the initials swatch, with name and email beside it (`src/components/avatar/index.tsx`). |
| Sign in / Sign out are `Button` in `rightSlot` | `rightSlot?: ReactNode`. `IButton` has `label?` and required `onClick`. No `isLoading` on `IButton`. |
| Session loading uses `MenuBar`'s `isLoading` | `isLoading?: boolean`, default `false`. When true, the items are replaced by `MenuBarShimmer`. The snippet also passes `rightSlot={null}` while `status === "loading"`. |
| Ellipsis | No Ellipsis element in the snippet. `IEllipsis` requires `label: string`. There is no `text` prop. |
| No `@gwan/core`, no WCAG, no RSC / "works in Server Components" | None of those strings are in the file. The consumer snippet and the provider file start with `"use client"`. |
| What's new is only #135 | The pastel paragraph matches the #135 table and `53ae217`: random pastel every mount, then FNV-1a of the name, email when the name is blank, saturation `60 + (hash % 21)` (60–80), lightness `75 + (floor(hash / 360) % 11)` (75–85), including server render. `MenuBar` passes `avatarName` and `avatarEmail` into `Avatar`. |
| Keyboard | Matches the #135 table and `19cb919`, and the tests `moves focus with arrows, Home, and End, wraps, and does not activate` and `opens, navigates, and closes a submenu and the More menu from the keyboard`. Left/Right move and wrap and do not activate. Up/Down open a submenu (or More) and wrap inside it; on a leaf they do nothing, which the post does not claim otherwise. Home/End move to the ends of the current menu (inside an open submenu they stay in that submenu; the test asserts that). Escape closes the submenu or More and returns focus. One top-level item has `tabindex=0`. Enter and Space still activate. Tab does not wrap inside the menu (`does not wrap focus from the last item back to the first` moves to the hamburger). Wording is "WAI-ARIA menubar pattern", not WCAG. "No public props, exports, or TypeScript types changed" is the #135 body, and the `.d.ts` sha above is still that build. |

`NavBar` is not used. It still has no `rightSlot`.

## 4. NextAuth and Next 16

`npm view next-auth@beta version` is `5.0.0-beta.32`. `npm view next-auth@latest version` is `4.24.15`. The install line `npm install next-auth@beta` is the command on the Auth.js installation page today.

Checked against `next-auth@5.0.0-beta.32` and Next `16.4.3` in the scratch app:

- `NextAuth({ providers: [GitHub] })` is the form in `next-auth/index.d.ts`. `GitHub` is passed uncalled; the same comment says `AUTH_GITHUB_ID` and `AUTH_GITHUB_SECRET` fill `clientId` and `clientSecret`, and that `AUTH_SECRET` is required in production.
- `export const { handlers, signIn, signOut, auth }` matches `NextAuthResult`. `export const { GET, POST } = handlers` matches `AppRouteHandlers`.
- Default `User` is `id?`, `name?`, `email?`, `image?`. No `role` until the augmentation. The post says name, email, and image, and that role is absent until added. It does not mention `id`.
- Client `signIn` / `signOut` from `next-auth/react` are what the menu imports. `SignOutParams.redirectTo` is current. `callbackUrl` is `@deprecated` on that type, and the snippet does not use it. Server `signIn` / `signOut` from `next-auth` are also exported and are the server-action forms; the menu does not call those.
- `export const proxy = auth((req) => …)` type-checks. `auth(middleware)` returns `NextMiddleware`, and Next 16 types `NextProxy` as that same type. The installed proxy doc says the file is `proxy.ts` next to `app` (or `src/proxy.ts`), the named export is `proxy` (a default export is also accepted), `middleware` is deprecated, and `export const config.matcher` is the path filter. The package's own long comment still shows `middleware.ts` / `export { auth as middleware }`. The Auth.js installation page now shows `export { auth as proxy } from "@/auth"`, which is what the prose quotes, and that line type-checks.
- `req.auth` and `Response.redirect` match the wrapper's `NextAuthRequest`.

## 5. Links, cover, GIF

Every link returned HTTP 200:

| URL | Status |
| --- | ---: |
| `https://gwan.dev/blog/saas-dashboard-weekend-build` | 200 |
| `https://authjs.dev/getting-started/typescript` | 200 |
| `https://authjs.dev/guides/role-based-access-control` | 200 |
| `https://authjs.dev/getting-started/session-management/protecting` | 200 |
| `https://github.com/gwanfonseka/gwan-design-system/pull/135` | 200 |
| commit `53ae21744a464870da799b3f0dbef53f8eb1e929` | 200 |
| commit `19cb9194cd2c319681b257e0979ba51e96443a80` | 200 |

The Auth.js installation page (also 200) still contains `npx auth secret`. There is no cover image and no keyboard GIF, and the MDX does not reference either. `PostTemplate` renders `<img src={post.coverImage}>` only when `coverImage` is set. The index card uses a gradient placeholder when it is missing. The served HTML for this slug has the new `<title>` and zero `<img>` tags, so nothing 404s as a broken image. The spec still requires both assets before `draft` is turned off.

## 6. `next build` and the draft URL

`npm run build` on this head exits 0 (Next.js 16.4.3). The route table prerenders the six published posts only. `nextauth-with-gwan-navbar` is not a static path.

#137 is not on `develop` or on this branch. `getPostBySlug` does not look at `draft`, and the page does not call `notFound()` for a draft. `dynamicParams` is unset. `next start` on `127.0.0.1:3468`:

| URL | Status |
| --- | ---: |
| `/blog/nextauth-with-gwan-navbar` | **200**, title is the new MenuBar title. The MDX compiled. |
| `/blog/nextauth-with-gwan-navbar/opengraph-image` | **200**, `image/png` |
| `/blog` | 200, slug and new title absent |
| `/sitemap.xml` | 200, slug absent |
| `/blog/building-accessible-forms` | 200 |

So the draft flag hides it from the index and the sitemap, and does not hide the URL.

## 7. GitHub checks on `2646a61`

| Check | Result |
| --- | --- |
| `test` (Actions run 41294735460, job 124813081281) | success, Node 22.23.4, **195** passed |
| Vercel | success, deployment `7471358921` |
| Vercel Preview Comments | success |

195 is the suite on this base. #137's seven tests are not here. Preview `https://gwan-design-system-kz4svwrsw-nimesh-fonsekas-projects.vercel.app/blog/nextauth-with-gwan-navbar` returns **302** to `vercel.com/sso-api`. It was not used as evidence.

## Findings

| Finding | Severity | Exact fix |
| --- | --- | --- |
| The bash fence runs `npx auth secret`. `next-auth@5.0.0-beta.32` and `@auth/core@0.41.3` have no `bin`. `npx auth` resolves to the npm package `auth@1.7.15`, "The CLI for Better Auth", not an Auth.js secret generator. The Auth.js installation page still prints that command. | **blocker** | Delete `npx auth secret`. Tell the reader to put a random `AUTH_SECRET` in `.env.local`, for example the output of `openssl rand -base64 32`. Say that `next-auth@5.0.0-beta.32` does not ship the `auth` executable the docs mention, so `npx auth` must not be run. |
| This head still serves the draft. `/blog/nextauth-with-gwan-navbar` and its OG image are 200. #137 is not on `develop`. | **major** | Merge #137 before this branch is deployed. `getPublishedPostBySlug` must return null for `draft: true`, and the page, metadata, and OG route must `notFound()` with `dynamicParams = false`. Keeping `draft: true` in the MDX is not enough on this base. |
| No `coverImage`, date still `2026-04-12`, `draft` still `true`, and there is no keyboard GIF. The spec requires all of these before the post goes out. The template does not render a broken image today. | **major** (publish gate, already disclosed for the cover and the GIF) | Add a `coverImage` under `public/` and set that path in frontmatter. Set `draft: false` and the release date only after #137 is on the branch that deploys. Record a 10–20 second GIF of Left/Right, Home/End, Escape, and Tab leaving the menubar, and embed it only once the file exists. |
| Prose says the bar "calls `onNavigate` with the item `route`". A parent with `hasChildren: true` returns before `onNavigate`. Leaf items call `onClick` then `onNavigate`. Submenu children call `onNavigate`. | **minor** | Say that a leaf and a submenu child call `onNavigate(route)`, and that `hasChildren` only toggles the submenu. |

No other prop, enum, import, or #135 keyboard claim was wrong.
