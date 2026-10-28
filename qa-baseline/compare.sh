#!/usr/bin/env bash
# Diff two capture directories produced by capture.sh.
# Usage: compare.sh <left-capture> <right-capture> [report-dir]
# Exit 0 when the captures match. Exit 1 when any category differs. Exit 2 on usage errors.
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
if [[ -n "${QA_TOOLING_DIR:-}" ]]; then
  export QA_TOOLING_DIR
elif [[ -d "$SCRIPT_DIR/tooling/node_modules/pngjs" ]]; then
  export QA_TOOLING_DIR="$SCRIPT_DIR/tooling"
else
  export QA_TOOLING_DIR="$HOME/.cache/gwan-qa-baseline-tools"
fi

if [[ ! -d "$QA_TOOLING_DIR/node_modules/pngjs" ]]; then
  mkdir -p "$QA_TOOLING_DIR"
  if [[ -f "$SCRIPT_DIR/tooling/package-lock.json" ]]; then
    cp "$SCRIPT_DIR/tooling/package.json" "$QA_TOOLING_DIR/package.json"
    cp "$SCRIPT_DIR/tooling/package-lock.json" "$QA_TOOLING_DIR/package-lock.json"
    (cd "$QA_TOOLING_DIR" && npm ci --no-audit --no-fund)
  else
    cp "$SCRIPT_DIR/tooling/package.json" "$QA_TOOLING_DIR/package.json"
    (cd "$QA_TOOLING_DIR" && npm install --save-exact --no-audit --no-fund)
  fi
fi

node "$SCRIPT_DIR/helpers/compare.mjs" "$@"
