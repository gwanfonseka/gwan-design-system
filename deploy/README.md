# gwan.dev production on the Contabo VPS

`main` is built into `ghcr.io/gwanfonseka/gwan-site` and run here. Vercel still builds `develop` and pull request previews. `vercel.json` turns main off in two places: `git.deploymentEnabled.main` is false, and `ignoreCommand` exits 0 when `VERCEL_GIT_COMMIT_REF` is `main` (exit 0 skips the build; any other ref, including an unset one, still builds).

The workflow that deploys is `.github/workflows/deploy-site.yml`. It runs on push to `main` and on a manual run of that workflow when the selected branch is `main`. It does not copy files to the server. The directory below has to exist first.

## One-time server setup

1. Create `/root/gwan/gwan-site/`.
2. Copy `deploy/docker-compose.yml` to `/root/gwan/gwan-site/docker-compose.yml`.
3. Copy `deploy/env.example` to `/root/gwan/gwan-site/.env` and set the variables below.
4. The external Docker network `gwan-print-worker_default` must already exist (it is the network the current Caddy container is on).
5. Log in to GHCR if the package is private (see below).
6. Add the Caddy site block and reload Caddy.

When `docker-compose.yml` changes in git, copy the new file into `/root/gwan/gwan-site/` before the next deploy. `.env` stays only on the server.

## Environment variables

| Name | Secret | Required | Where it is read |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | yes | yes | `src/app/actions/sendContactEmail.ts` (`new Resend(process.env.RESEND_API_KEY)`) |
| `RESEND_FROM_EMAIL` | no | no (default `noreply@gwan.dev`) | `src/app/actions/sendContactEmail.ts` |

The image sets `NODE_ENV=production`, `PORT=3000`, and `HOSTNAME=0.0.0.0`. Compose repeats `PORT` and `HOSTNAME`. Leave them as they are.

`NEXT_PUBLIC_APP_VERSION` is written at image build time from the latest git tag. No application code reads it, so it is not part of `.env`.

`VERCEL` is set by Vercel only. `src/app/vercel-telemetry.tsx` reads it to decide whether to render Analytics and Speed Insights. Do not set it on the VPS.

## GitHub Actions secrets

Create these on the repository. The workflow only reads them.

| Secret | Value |
| --- | --- |
| `CONTABO_HOST` | Server hostname or IP |
| `CONTABO_USER` | SSH user that can run Docker and read `/root/gwan/gwan-site` |
| `CONTABO_SSH_KEY` | Private key for that user. The public key belongs in `authorized_keys`. |

The image push uses the workflow `GITHUB_TOKEN` (`packages: write`). There is no registry password secret.

## GHCR

Image: `ghcr.io/gwanfonseka/gwan-site`

Tags pushed on each main deploy:

- `latest` — what `docker-compose.yml` runs
- `sha-<full git commit>` — kept for rollback

New GitHub Container Registry packages are **private** by default, including packages pushed from a public repository. A private package cannot be pulled by the server until it authenticates.

On the server, as the user that runs compose (root, given the path above):

```bash
docker login ghcr.io -u gwanfonseka
```

Use a personal access token with `read:packages` as the password. If the repository is private, the token also needs access to that repository. Docker saves the login in `/root/.docker/config.json`. Later `docker compose pull` from the workflow reuses it. The workflow does not log the server in.

Alternatively, open the package on GitHub (**Packages → gwan-site → Package settings**), connect it to `gwanfonseka/gwan-design-system`, and change the visibility to **Public**. Then the server can pull with no login. Public is appropriate if the image contains only the site and secrets stay in `.env` (they are not baked into the image).

The first push creates the package under the `gwanfonseka` account. If that push is rejected, open the package settings and grant this repository's Actions access to it.

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
2. Create the three repository secrets.
3. Finish the server setup above, including `.env`, the compose file, and the Caddy block. Reload Caddy.
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

The previous image tag is still on GHCR.

```bash
cd /root/gwan/gwan-site
# replace SHA with the previous full commit tagged sha-<commit>
docker pull ghcr.io/gwanfonseka/gwan-site:sha-SHA
```

Edit `docker-compose.yml` so `image` is `ghcr.io/gwanfonseka/gwan-site:sha-SHA`, then:

```bash
docker compose up -d
```

To put traffic back on Vercel immediately, point DNS for `gwan.dev` and `www.gwan.dev` back at Vercel. The last successful Vercel production deployment keeps serving. Shipping `main` there again means removing `git.deploymentEnabled` and the `ignoreCommand` from `vercel.json` and pushing.

Removing the Caddy site block and reloading Caddy stops this host from answering `gwan.dev` without deleting the container. `docker compose stop` in `/root/gwan/gwan-site` stops the site and leaves the image on disk.
