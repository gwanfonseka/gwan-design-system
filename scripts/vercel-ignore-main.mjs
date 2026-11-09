// vercel.json ignoreCommand. Exit 0 skips the Vercel build. Exit 1 builds.
// Production (main) is served from the Contabo VPS. develop and PR previews
// still build. An unset ref builds, so a missing system env var cannot skip
// every deployment.
const ref = process.env.VERCEL_GIT_COMMIT_REF ?? "";

if (ref === "main") {
  console.log("Skipping Vercel build for main. Production deploys from GHCR to the VPS.");
  process.exit(0);
}

console.log(`Continuing Vercel build for ${ref || "an unset VERCEL_GIT_COMMIT_REF"}.`);
process.exit(1);
