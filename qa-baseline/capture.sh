#!/usr/bin/env bash
# Capture a consumer-contract baseline of gwan-design-system.
# Does not upgrade dependencies and does not edit library source.
# Ad-hoc tools install under $QA_TOOLING_DIR (default: ~/.cache/gwan-qa-baseline-tools).
#
# Usage:
#   capture.sh --repo /path/to/checkout --out /path/to/capture-dir
#   capture.sh            # repo is cwd when package.json name is gwan-design-system
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
HELPERS="$SCRIPT_DIR/helpers"

REPO="${QA_REPO:-}"
OUT="${QA_OUT:-}"
SKIP_VISUAL=0
SKIP_SITE=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --repo) REPO="$2"; shift 2 ;;
    --out) OUT="$2"; shift 2 ;;
    --skip-visual) SKIP_VISUAL=1; shift ;;
    --skip-site) SKIP_SITE=1; shift ;;
    -h|--help)
      sed -n '2,12p' "$0"
      exit 0
      ;;
    *) echo "Unknown argument: $1" >&2; exit 2 ;;
  esac
done

if [[ -z "$REPO" ]]; then
  if [[ -f package.json ]] && grep -q '"name"[[:space:]]*:[[:space:]]*"gwan-design-system"' package.json; then
    REPO=$(pwd)
  else
    echo "Pass --repo pointing at the gwan-design-system checkout." >&2
    exit 2
  fi
fi
REPO=$(cd "$REPO" && pwd)

if [[ ! -f "$REPO/package.json" ]]; then
  echo "No package.json in $REPO" >&2
  exit 2
fi

SHA=$(git -C "$REPO" rev-parse HEAD)
SHORT=$(git -C "$REPO" rev-parse --short=12 HEAD)
BRANCH=$(git -C "$REPO" rev-parse --abbrev-ref HEAD)

if [[ -z "$OUT" ]]; then
  OUT="/tmp/gwan-qa-baseline/${SHORT}"
fi
OUT=$(mkdir -p "$OUT" && cd "$OUT" && pwd)
if [[ "$OUT" == "$REPO" ]]; then
  echo "Refusing to write the capture over the repository root." >&2
  exit 2
fi

if [[ -n "${QA_TOOLING_DIR:-}" ]]; then
  TOOLING_DIR="$QA_TOOLING_DIR"
elif [[ -d "$SCRIPT_DIR/tooling/node_modules/playwright" ]]; then
  TOOLING_DIR="$SCRIPT_DIR/tooling"
else
  TOOLING_DIR="$HOME/.cache/gwan-qa-baseline-tools"
fi
export QA_TOOLING_DIR="$TOOLING_DIR"
export QA_REPO="$REPO"
export NEXT_TELEMETRY_DISABLED=1

echo "capture repo=$REPO sha=$SHA branch=$BRANCH out=$OUT"

rm -rf "$OUT"
mkdir -p "$OUT/environment" "$OUT/tests" "$OUT/build" "$OUT/public-api" "$OUT/types" "$OUT/components" "$OUT/css-tokens" "$OUT/visual"

install_tooling() {
  mkdir -p "$TOOLING_DIR"
  cp "$SCRIPT_DIR/tooling/package.json" "$TOOLING_DIR/package.json"
  if [[ -f "$SCRIPT_DIR/tooling/package-lock.json" ]]; then
    cp "$SCRIPT_DIR/tooling/package-lock.json" "$TOOLING_DIR/package-lock.json"
    if [[ ! -d "$TOOLING_DIR/node_modules/playwright" ]]; then
      (cd "$TOOLING_DIR" && npm ci --no-audit --no-fund)
    fi
  elif [[ ! -d "$TOOLING_DIR/node_modules/playwright" ]]; then
    (cd "$TOOLING_DIR" && npm install --save-exact --no-audit --no-fund)
  fi
  if ! command -v google-chrome >/dev/null 2>&1 && ! find "$HOME/.cache/ms-playwright" -type f \( -name chrome -o -name chromium -o -name headless_shell \) 2>/dev/null | grep -q .; then
    (cd "$TOOLING_DIR" && npx playwright install chromium) || echo "playwright browser install failed; visual capture will record the error"
  fi
}

run_suite() {
  local name="$1"
  shift
  local log="$OUT/tests/${name}.log"
  echo "suite $name: $*"
  set +e
  (cd "$REPO" && "$@") >"$log" 2>&1
  local code=$?
  set -e
  echo "$code" > "$OUT/tests/${name}.exit"
  echo "suite $name exit $code"
}

node_helper() {
  local script="$1"
  shift
  node "$HELPERS/$script" --repo "$REPO" --out "$OUT" "$@"
}

tsx_helper() {
  (cd "$REPO" && QA_TOOLING_DIR="$TOOLING_DIR" QA_REPO="$REPO" TSX_TSCONFIG_PATH="$REPO/tsconfig.json" \
    "$TOOLING_DIR/node_modules/.bin/tsx" "$HELPERS/$1" --repo "$REPO" --out "$OUT")
}

# Snapshot the committed dist before npm ci's prepare script rebuilds it.
node_helper extract-build.mjs --snapshot "$OUT/build/committed-dist.json"

echo "installing library dependencies from the lockfile"
(cd "$REPO" && npm ci --no-audit --no-fund)

install_tooling

NODE_VERSION=$(node -v)
NPM_VERSION=$(npm -v)
PNPM_VERSION=$(pnpm -v 2>/dev/null || echo "not-installed")
YARN_VERSION=$(yarn -v 2>/dev/null || echo "not-installed")
LOCK_HASH=$(sha256sum "$REPO/package-lock.json" | awk '{print $1}')
LOCK_VERSION=$(node -p "require('$REPO/package-lock.json').lockfileVersion")
DESCRIBE=$(git -C "$REPO" describe --tags --abbrev=0 2>/dev/null || echo "unknown")
git -C "$REPO" status --porcelain > "$OUT/environment/git-status-before.txt" || true
git -C "$REPO" rev-parse HEAD > "$OUT/environment/HEAD"
cat > "$OUT/environment/versions.json" <<EOF
{
  "packageName": $(node -p "JSON.stringify(require('$REPO/package.json').name)"),
  "packageVersion": $(node -p "JSON.stringify(require('$REPO/package.json').version)"),
  "gitSha": "$SHA",
  "gitBranch": "$BRANCH",
  "gitDescribe": "$DESCRIBE",
  "capturedAt": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "node": "$NODE_VERSION",
  "npm": "$NPM_VERSION",
  "packageManager": "npm",
  "packageManagerReason": "package-lock.json is the lockfile; pnpm and yarn are not used by this repo",
  "pnpm": "$PNPM_VERSION",
  "yarn": "$YARN_VERSION",
  "ciNode": "18 (publish.yml and bump-version.yml; this capture does not switch Node)",
  "platform": "$(uname -srm)",
  "lockfile": "package-lock.json",
  "lockfileVersion": $LOCK_VERSION,
  "lockfileSha256": "$LOCK_HASH",
  "toolingDir": "$TOOLING_DIR"
}
EOF

echo "dependency tree and audit"
set +e
(cd "$REPO" && npm ls --all --json > "$OUT/environment/npm-ls.json" 2> "$OUT/environment/npm-ls.stderr")
echo $? > "$OUT/environment/npm-ls.exit"
(cd "$REPO" && npm ls --omit=dev --all --json > "$OUT/environment/npm-ls-prod.json" 2> "$OUT/environment/npm-ls-prod.stderr")
echo $? > "$OUT/environment/npm-ls-prod.exit"
(cd "$REPO" && npm audit --json > "$OUT/environment/npm-audit.json" 2> "$OUT/environment/npm-audit.stderr")
echo $? > "$OUT/environment/npm-audit.exit"
set -e
node "$HELPERS/normalize-env.mjs" --out "$OUT"

echo "library build"
run_suite build-lib npm run build:lib

echo "public API and types"
node_helper extract-api.mjs

echo "component props"
node_helper extract-props.mjs

echo "DOM snapshots"
tsx_helper render-dom.mjs

echo "pack file list"
set +e
(cd "$REPO" && npm pack --dry-run --json > "$OUT/build/npm-pack-dry-run.raw.json" 2> "$OUT/build/npm-pack-dry-run.stderr")
echo $? > "$OUT/build/npm-pack.exit"
(cd "$REPO" && npm publish --dry-run --json > "$OUT/build/npm-publish-dry-run.raw.json" 2> "$OUT/build/npm-publish-dry-run.stderr")
echo $? > "$OUT/build/npm-publish.exit"
set -e
node_helper extract-build.mjs

echo "lint, typecheck"
run_suite lint npm run lint
set +e
(cd "$REPO" && npx eslint . -f json -o "$OUT/tests/eslint-report.json" > "$OUT/tests/eslint.log" 2>&1)
echo $? > "$OUT/tests/eslint.exit"
set -e
run_suite typecheck npx tsc --noEmit --pretty false --incremental false

if [[ "$SKIP_SITE" -eq 0 ]]; then
  echo "docs site build (emits Tailwind CSS; not part of the library tarball)"
  run_suite site-build npm run build
else
  echo "0" > "$OUT/tests/site-build.exit"
  echo "skipped" > "$OUT/tests/site-build.log"
fi

echo "css and tokens"
tsx_helper extract-css.mjs

SERVER_PID=""
cleanup_server() {
  if [[ -n "${SERVER_PID}" ]] && kill -0 "$SERVER_PID" 2>/dev/null; then
    kill "$SERVER_PID" 2>/dev/null || true
    wait "$SERVER_PID" 2>/dev/null || true
  fi
}
trap cleanup_server EXIT

if [[ "$SKIP_VISUAL" -eq 0 && "$SKIP_SITE" -eq 0 && -d "$REPO/.next" ]]; then
  PORT="${QA_PORT:-4173}"
  echo "starting next start on 127.0.0.1:$PORT"
  (cd "$REPO" && npx next start -H 127.0.0.1 -p "$PORT") > "$OUT/visual/next-start.log" 2>&1 &
  SERVER_PID=$!
  READY=0
  for _ in $(seq 1 60); do
    if curl -sf -o /dev/null "http://127.0.0.1:${PORT}/components-library"; then
      READY=1
      break
    fi
    sleep 1
  done
  if [[ "$READY" -eq 1 ]]; then
    export QA_LIBRARY_URL="http://127.0.0.1:${PORT}"
    node_helper visual.mjs || echo "visual helper failed"
  else
    echo "Next server did not become ready; isolated screenshots only" | tee "$OUT/visual/server-ready.txt"
    unset QA_LIBRARY_URL || true
    node_helper visual.mjs || echo "visual helper failed"
  fi
  cleanup_server
  SERVER_PID=""
elif [[ "$SKIP_VISUAL" -eq 0 ]]; then
  echo "Site build unavailable. Capturing isolated screenshots only." > "$OUT/visual/NOTES.md"
  node_helper visual.mjs || echo "visual helper failed"
fi

cat > "$OUT/tests/suites.json" <<'EOF'
[
  {"name": "lint", "command": "npm run lint", "kind": "log", "note": "package.json script is next lint. Next 16 has no lint command, so the CLI treats lint as a project directory and exits 1. Pre-existing on develop."},
  {"name": "eslint", "command": "npx eslint . -f json -o eslint-report.json", "kind": "eslint-json", "note": "Direct ESLint run. Not invoked by CI. ESLint 9 crashes while loading eslint.config.mjs via FlatCompat (circular JSON in config validation), so there are no per-file results."},
  {"name": "typecheck", "command": "npx tsc --noEmit --pretty false --incremental false", "kind": "tsc", "note": "No typecheck script. tsconfig noEmit is already true."},
  {"name": "build-lib", "command": "npm run build:lib", "kind": "log", "note": "Library build used by CI before publish."},
  {"name": "site-build", "command": "npm run build", "kind": "log", "note": "Next.js docs site. Not run in CI. Required to emit Tailwind CSS for visual snapshots."},
  {"name": "unit", "command": null, "kind": "absent", "note": "No test script and no *.test.* or *.spec.* files."},
  {"name": "storybook", "command": null, "kind": "absent", "note": "No Storybook, no stories, no test-runner."}
]
EOF

# publish dry-run is already captured under build/. Record its exit as a suite too.
if [[ -f "$OUT/build/npm-publish.exit" ]]; then
  cp "$OUT/build/npm-publish.exit" "$OUT/tests/publish-dry-run.exit"
  {
    echo "npm publish --dry-run --json"
    cat "$OUT/build/npm-publish-dry-run.stderr" 2>/dev/null || true
  } > "$OUT/tests/publish-dry-run.log"
fi
node -e '
const fs = require("fs");
const file = process.argv[1];
const suites = JSON.parse(fs.readFileSync(file, "utf8"));
suites.push({name:"publish-dry-run", command:"npm publish --dry-run --json", kind:"log", note:"Same command CI uses before npm publish."});
fs.writeFileSync(file, JSON.stringify(suites, null, 2) + "\n");
' "$OUT/tests/suites.json"

node "$HELPERS/parse-tests.mjs" --out "$OUT"
node_helper summarize.mjs

git -C "$REPO" status --porcelain > "$OUT/environment/git-status-after.txt" || true
# Restore only the library build output the capture itself regenerated.
git -C "$REPO" checkout -- dist >/dev/null 2>&1 || true
git -C "$REPO" status --porcelain > "$OUT/environment/git-status-restored.txt" || true

echo "capture complete: $OUT"
echo "sha: $SHA"
