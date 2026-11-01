# QA verify: PR 137 draft blog leak

**Recommendation: GO.**

Head `76fa3e918b9f0444402aca5c80f476e40056c451`, base `develop` @ `bafe606e814972618bf7a53fa5cded83e3db67f2`. Node v22.23.4, npm 10.9.9. Checked 1 Nov 2026. The PR branch was not pushed, commented on, reviewed, or merged. This report is the only commit, on `qa/baseline-develop`.

Source of truth for which posts are drafts: the Lead Researcher spec (`blog-post-review-2026-11.md`), draft section. Disk frontmatter on this head matches that list exactly, and it matches `develop`.

Drafts (`draft: true`), 8:

| Slug | Title |
| --- | --- |
| `migrating-from-shadcn` | Migrating from shadcn/ui to Gwan |
| `filter-dropdown-deep-dive` | The FilterDropdown Component: Design Decisions and URL State |
| `tanstack-table-with-gwan` | Server-side Tables with TanStack Table and Gwan |
| `tanstack-query-with-gwan-states` | Async UI States with TanStack Query and Gwan |
| `zod-with-gwan-forms` | Schema-first Form Validation with Zod and Gwan |
| `nextauth-with-gwan-navbar` | Authenticated Navigation with NextAuth and Gwan NavBar |
| `framer-motion-with-gwan` | Custom Animations in Gwan Modal and Drawer with Framer Motion |
| `building-the-og-image-system` | Building the Gwan OG Image System with next/og |

Published (`draft: false`), 6, same slugs and titles as `develop`:

| Slug | Title |
| --- | --- |
| `building-accessible-forms` | Building Accessible Forms with Gwan |
| `how-the-theme-system-works` | How the Gwan Theme System Works |
| `saas-dashboard-weekend-build` | Build a SaaS Dashboard in a Weekend with Gwan |
| `why-tailwind-v4` | Why Gwan Moved to Tailwind CSS v4 |
| `dark-mode-done-right` | Dark Mode Done Right in Next.js |
| `react-hook-form-with-gwan` | Building Validated Forms with react-hook-form and Gwan |

The diff against `develop` is five files and nothing else: `src/lib/blog.ts`, `src/app/blog/[slug]/page.tsx`, `src/app/blog/[slug]/opengraph-image.tsx`, new `src/lib/blog.test.ts`, new `src/app/blog/draft-visibility.test.ts`. No `package.json`, lockfile, or component change. `getPostBySlug` is gone. `getPublishedPostBySlug` returns null when the file is missing or `draft: true`. `getAllPosts` and `getAllSlugs` are built only from that helper.

## 1. Other read paths

There is no top-level `app/` directory. Production reads of `content/blog` are only in `src/lib/blog.ts` (`readFileSync` / `readdirSync` / `gray-matter`). Call sites:

| Caller | Helper | Draft result |
| --- | --- | --- |
| `src/app/blog/[slug]/page.tsx` `generateStaticParams` | `getAllSlugs` | Drafts omitted. `dynamicParams = false`. |
| same file, `generateMetadata` and the page | `getPublishedPostBySlug` | `notFound()` when null. |
| `src/app/blog/[slug]/opengraph-image.tsx` | `getAllSlugs` / `getPublishedPostBySlug` | Same: `dynamicParams = false`, `notFound()`. |
| `src/app/blog/page.tsx` | `getAllPosts` | Published metas only. |
| `src/app/sitemap.ts` | `getAllPosts` | Published URLs only. Base `https://gwan.dev`. |

`src/index.ts` does not import the blog module, so the published package does not read posts.

Also searched `src/` for `content/blog`, `.mdx` imports, `getPostBySlug`, `getAllPosts`, feeds, `llms.txt`, and `fs` reads. The only other readers are the two new test files. No API route, no `route.ts`, no `twitter-image` route, no RSS/Atom/JSON feed, no search index, no `llms.txt`. `src/app/robots.ts` allows `/` and points at `https://gwan.dev/sitemap.xml`; it does not list posts. `next.config.ts` is empty (no MDX plugin, no content collection). Twitter card metadata sets `images` to `/blog/${slug}/opengraph-image`, the same route as Open Graph. `next-mdx-remote` renders only the `content` string the page passes in, and the page never receives a draft.

`getAllPosts` does open every `.mdx` file, including drafts, then drops `draft: true` before returning. That in-process read is not a second public path: the return value has no draft slug, title, or body, and nothing else reads the files.

## 2. Tests, lint, types, dist

`npm ci` then `npm test` three times: **202 / 202**, 11 files, exit 0, no flake. The 7 new tests are 3 in `src/lib/blog.test.ts` and 4 in `src/app/blog/draft-visibility.test.ts`. The visibility tests walk every on-disk draft (not only the two named fixtures) for listings, static params, `notFound()` on metadata and the page, and `notFound()` on the OG image. GitHub Actions run [41294640911](https://github.com/gwanfonseka/gwan-design-system/actions/runs/41294640911) also reports 202 passed on Node 22.23.4 from `.nvmrc`.

`npx eslint .` exits 0: **0 errors, 9 warnings**, all `@next/next/no-img-element`, same files as the #132 report (avatar, menuBar ×2, navBar ×2, state, post-card, post, founder). `npx tsc --noEmit` exits 0.

`npm run build:lib` then SHA-256 of `dist/` against a fresh `develop` build at `bafe606`. All six files match, including both declaration files at the claimed sha and size:

| File | Bytes | SHA-256 |
| --- | ---: | --- |
| `index.js` | 533519 | `31eaedf148a6a20f607ea19f4bf146527135953087367e24dd73168d6ac1d119` |
| `index.js.map` | 666487 | `0ca1598bfe2fa476430bb3c0a9e97fb564eac6f9b49aa3d04fc71a213a358ce9` |
| `index.mjs` | 496752 | `c4afe7b2bb6b528d2b788fda25004c3a2cda6c042a82777dd00fbbff886757bd` |
| `index.mjs.map` | 660768 | `22ca6e9b6f30bc44649e7486b68cb7ec4646e9f2c392ef7330981114826d3976` |
| `index.d.ts` | 43749 | `109b30a1e12f9c3ac96a4c59a82f6ec08860293a84ae25fb4221695ed17169c1` |
| `index.d.mts` | 43749 | `109b30a1e12f9c3ac96a4c59a82f6ec08860293a84ae25fb4221695ed17169c1` |

No extra files under `dist/`. The library output is unchanged.

## 3. `next build`, `next start`, curl

`npm run build` (Next.js 16.4.3) exits 0. The route table prerenders exactly the six published posts and their six `opengraph-image` routes. No draft slug is a route. `/blog`, `/sitemap.xml`, and `/robots.txt` are static. There is no feed route.

`next start` on `127.0.0.1:3456`. Every response below is `x-nextjs-cache: HIT`.

Draft page, `/opengraph-image`, and `/twitter-image` for all 8 drafts: **404**, `text/html`, 11870 bytes, the shared "This page could not be found." page. The body does not contain that draft's title, any other draft title, or the slug. An RSC request (`RSC: 1`) for `migrating-from-shadcn` and `nextauth-with-gwan-navbar` is also **404**, `text/x-component`, 6658 bytes, with neither title in the payload.

Unknown slug `this-slug-does-not-exist`, plus its `/opengraph-image` and `/twitter-image`: **404**, same 11870-byte HTML page.

Published pages: **200**, and each body contains its own title and no draft title. Published OG images: **200**, `content-type: image/png`, PNG magic bytes, no draft title in the file. There is no `twitter-image` route, so `/blog/<published>/twitter-image` is **404**. The published HTML does not need that route: `twitter:image` is `https://gwan.dev/blog/<slug>/opengraph-image`, same as `og:image`.

Required URLs:

| URL | Status |
| --- | ---: |
| `/blog/migrating-from-shadcn` | 404 |
| `/blog/nextauth-with-gwan-navbar` | 404 |
| `/blog/migrating-from-shadcn/opengraph-image` | 404 |
| `/blog/building-accessible-forms` | 200 |
| `/blog/building-accessible-forms/opengraph-image` | 200 |

`/blog` is **200**. It lists all 6 published slugs and none of the 8 draft slugs or titles.

`/sitemap.xml` is **200**. Locs are absolute and only these:

- `https://gwan.dev/home`
- `https://gwan.dev/docs`
- `https://gwan.dev/components-library`
- `https://gwan.dev/themes`
- `https://gwan.dev/blog`
- `https://gwan.dev/blog/building-accessible-forms`
- `https://gwan.dev/blog/how-the-theme-system-works`
- `https://gwan.dev/blog/saas-dashboard-weekend-build`
- `https://gwan.dev/blog/why-tailwind-v4`
- `https://gwan.dev/blog/dark-mode-done-right`
- `https://gwan.dev/blog/react-hook-form-with-gwan`

`/robots.txt` is **200** and is only `User-Agent: *`, `Allow: /`, `Sitemap: https://gwan.dev/sitemap.xml`.

These are **404** and contain no draft slug or title: `/feed`, `/feed.xml`, `/rss`, `/rss.xml`, `/atom.xml`, `/blog/feed`, `/blog/rss.xml`, `/blog/feed.xml`, `/llms.txt`, `/api/blog`, `/api/posts`, `/blog.json`.

`getAllPosts()` on this head and on `develop` returns the same 6 posts, same titles, same date order. No published post disappeared. Content files are not in the diff, and the frontmatter draft flags match.

## 4. Build output

Prerendered HTML and RSC exist only for `/blog` and the six published slugs. Grep of the whole `.next` tree:

- All 8 draft titles: **no hits**.
- A unique body phrase from each of the 8 drafts: **no hits**.
- Draft slugs: only in four file-trace manifests (`page.js.nft.json` for the post route, the index, the OG route, and `sitemap.xml/route.js.nft.json`). Each lists all 14 `content/blog/*.mdx` paths, because `blog.ts` reads the directory while filtering. The MDX files themselves are not copied into `.next` (no `.mdx` under `.next`). Those manifests are not HTTP responses. The 404 HTML does not echo the requested slug.

## 5. `npm audit`

Full audit: **15 moderate, 0 high, 0 critical**. `--omit=dev`: **0**. The only advisory is minimatch `<11.0.1` ReDoS ([GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249)). The other 14 names are the dev ESLint chain that depends on it (`eslint`, `eslint-config-next`, `typescript-eslint`, the `@typescript-eslint/*` packages, `@eslint/*`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`). No other finding. This PR does not change the lockfile. The 15 are the expected dev-only set called out for #136.

## 6. GitHub checks and the Vercel preview

On `76fa3e9`:

| Check | Result |
| --- | --- |
| `test` (Actions run 41294640911, job 124812797278) | success, Node 22.23.4, 202 passed |
| Vercel | success, deployment `7471349103` |
| Vercel Preview Comments | success |

Preview URL from the deployment status: `https://gwan-design-system-meo61zjef-nimesh-fonsekas-projects.vercel.app`. `curl -sI` of `/blog/building-accessible-forms` returned **302** to `https://vercel.com/sso-api?...` with `x-robots-tag: noindex`. The preview is SSO-protected, so the live curl set was not run against it. Local `next start` is the HTTP evidence above.

## Differences

| Difference | Severity |
| --- | --- |
| A draft URL, its OG route, and an unknown slug now 404 instead of rendering. Listings were already published-only on `develop`. | none-for-consumers. This is the fix. The npm package is unchanged (dist byte-identical). |
| `.nft.json` manifests name draft `.mdx` paths. Titles and bodies are not in HTML or RSC, and those manifests are not served. | none-for-consumers |
| ESLint still reports 9 `@next/next/no-img-element` warnings. The author's "0 errors" claim holds. | none. Pre-existing, not in this diff. |
| `npm audit` reports 15 moderate minimatch findings, all dev. Production audit is 0. | none. Expected, lockfile unchanged, tracked in #136. |
| `/blog/<slug>/twitter-image` is 404 for published posts too. | none. No such route. Twitter cards use the OG image, confirmed in the published HTML. |
| Vercel preview was not curl-checked. | none. SSO wall, not a product defect. Local production server covered the same paths. |

No blocker, major, or minor difference.
