# gwan.dev production on the Contabo VPS

`main` is built into `ghcr.io/gwanfonseka/gwan-site` and run here. Vercel still builds `develop` and pull request previews. `vercel.json` turns main off in two places: `git.deploymentEnabled.main` is false, and `ignoreCommand` exits 0 when `VERCEL_GIT_COMMIT_REF` is `main` (exit 0 skips the build; any other ref, including an unset one, still builds).

The workflow that deploys is `.github/workflows/deploy-site.yml`. It runs on push to `main` and on a manual run of that workflow when the selected branch is `main`. Each run copies `deploy/docker-compose.yml` to `/root/gwan/gwan-site/docker-compose.yml`. It does not read or write `.env`.

## One-time server setup

1. Create `/root/gwan/gwan-site/`.
2. Copy `deploy/env.example` to `/root/gwan/gwan-site/.env` and set the variables below. Leave this file on the server. Deploys do not replace it.
3. The external Docker network `gwan-print-worker_default` must already exist (it is the network the current Caddy container is on).
4. Add the Caddy site block and reload Caddy.

`.env` has to be in place before the first deploy. `docker compose up` reads it and will fail if it is missing. The compose file is written by the workflow, so it does not need to be copied by hand.

## Environment variables

| Name | Secret | Required | Where it is read |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | yes | yes | `src/app/actions/sendContactEmail.ts` (`new Resend(process.env.RESEND_API_KEY)`) |
| `RESEND_FROM_EMAIL` | no | no (default `noreply@gwan.dev`) | `src/app/actions/sendContactEmail.ts` |

The image sets `NODE_ENV=production`, `PORT=3000`, and `HOSTNAME=0.0.0.0`. Compose repeats `PORT` and `HOSTNAME`. Leave them as they are.

`NEXT_PUBLIC_APP_VERSION` is written at image build time from the latest git tag. No application code reads it, so it is not part of `.env`.

`NEXT_PUBLIC_GA_ID` is a GitHub Actions repository variable, not a secret and not a key in this `.env`. The deploy workflow passes it as a Docker build-arg of the same name. Next.js inlines `NEXT_PUBLIC_*` during `next build`, so the value has to be present then. Putting it in `/root/gwan/gwan-site/.env` does not change the tag the browser loads. Leave the variable unset and the image still builds, with Google Analytics off. Changing the variable takes a new image: push to `main`, or run the workflow on `main`.

The value is a GA4 measurement ID: `G-` followed by letters and digits. `src/app/google-analytics.tsx` renders the tag only when that id is set and `VERCEL` is not `1`. Develop and pull request previews therefore never send hits, including when the same name is also set on the Vercel project. App Router client navigations count as page views because the Google tag records history changes. In the GA4 property, leave enhanced measurement on and leave "Page changes based on browser history events" checked. Both are the default on a new property. A second page-view call would double-count those navigations.

`VERCEL` is set by Vercel only. `src/app/vercel-telemetry.tsx` reads it to decide whether to render Analytics and Speed Insights. `src/app/google-analytics.tsx` reads it to keep Google Analytics off those builds. Do not set it on the VPS.

## GitHub Actions secrets

These repository secrets are set. The workflow only reads them.

| Secret | Value |
| --- | --- |
| `CONTABO_HOST` | Server hostname or IP |
| `CONTABO_USER` | SSH user that can run Docker and write `/root/gwan/gwan-site/docker-compose.yml` |
| `CONTABO_SSH_KEY` | Private key for that user. The public key belongs in `authorized_keys`. |

The job's permissions are `contents: read` and `packages: write`. Push and pull both use that job's `GITHUB_TOKEN`. There is no registry password secret and no personal access token.

## GitHub Actions variables

| Variable | Secret | Required | Where it is read |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_GA_ID` | no | no | Docker build-arg in `.github/workflows/deploy-site.yml`, then inlined by `next build` into `src/app/google-analytics.tsx` |

Set this in the repository's Actions variables, not in secrets. An empty value is valid. The workflow passes `vars.NEXT_PUBLIC_GA_ID` through even when the variable has not been created.

## GHCR

Image: `ghcr.io/gwanfonseka/gwan-site`

Tags pushed on each main deploy:

- `latest` — what `docker-compose.yml` runs
- `sha-<full git commit>` — the revision that was built

The package can stay private. Nothing in Package settings has to change, and the server does not need its own login.

On each deploy the job, still on the runner, pipes `GITHUB_TOKEN` into the SSH session's stdin:

```bash
docker login ghcr.io -u <github.actor> --password-stdin
```

The token is not passed as a command-line argument. The job then runs `docker compose pull && docker compose up -d` in `/root/gwan/gwan-site`. At the end of that step it runs `docker logout ghcr.io`, including when pull, start, or the container health check fails. The server does not keep GHCR credentials between deploys. A manual `docker pull` on the server will not work while it is logged out. The next workflow run logs in again, pulls, and logs out.

## Caddy

Add this site block to the Caddyfile the existing Caddy container loads, then reload Caddy. `www` redirects to the apex. The apex compresses responses and proxies to the site container on the shared network. Caddy's default `reverse_proxy` forwards the original `Host` header, which the contact form's Server Action check expects. Do not rewrite `Host` to the container name.

```caddy
www.gwan.dev {
	redir https://gwan.dev{uri} permanent
}

gwan.dev {
	encode gzip zstd
	reverse_proxy gwan-site:3000
}
```

## Cutover

Do this once, before the first production deploy (the first push of this workflow to `main`).

1. Merge the change through `develop` to `main` only after the steps below are in place. Until this workflow file is on `main`, pushes do not deploy.
2. The repository secrets `CONTABO_HOST`, `CONTABO_USER`, and `CONTABO_SSH_KEY` are already set.
3. Finish the server setup above (`.env` and the Caddy block). Reload Caddy. The workflow writes `docker-compose.yml` and does not touch `.env`.
4. Lower the DNS TTL for `gwan.dev` and `www.gwan.dev` ahead of the switch.
5. Let `main` build and start the container. The job fails if the container's `/api/health` is not OK, and it fails if `https://gwan.dev/` does not return 200. While DNS still points at Vercel, the public check can pass against the old site. The container check is the one that proves this deploy.
6. Point `gwan.dev` and `www.gwan.dev` at the VPS (the address Caddy already uses for 80/443).
7. Confirm the new process is the one serving traffic:

```bash
curl -fsS https://gwan.dev/api/health
```

Expect `{"ok":true}`. The previous Vercel deployment does not have this route.

Vercel will not deploy `main`. `develop` and pull request previews keep building. If a `main` deployment is created anyway (for example a dashboard redeploy) and `VERCEL_GIT_COMMIT_REF` is visible to the ignore step, the build is skipped. Skipped builds still count toward the Vercel deployment quota. System environment variables are exposed to that command by default; if a `main` build ever runs to completion, check that `VERCEL_GIT_COMMIT_REF` is available to the ignore step. The script refuses to skip when the variable is missing, so a hidden variable cannot cancel `develop` or previews.

## Rollback

The server is logged out of GHCR after every deploy, so it cannot pull an older tag on its own.

To roll the site back, revert `main` to the earlier commit and push. That run builds that revision, logs the server in with the job token, pulls it, and logs out.

To put traffic back on Vercel immediately, point DNS for `gwan.dev` and `www.gwan.dev` back at Vercel. The last successful Vercel production deployment keeps serving. Shipping `main` there again means removing `git.deploymentEnabled` and the `ignoreCommand` from `vercel.json` and pushing.

Removing the Caddy site block and reloading Caddy stops this host from answering `gwan.dev` without deleting the container. `docker compose stop` in `/root/gwan/gwan-site` stops the site and leaves the image on disk.
