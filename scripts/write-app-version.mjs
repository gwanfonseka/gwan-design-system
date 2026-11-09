// `npm run build` has always written NEXT_PUBLIC_APP_VERSION from the latest git
// tag into .env.local. A container build has no .git, so a missing repo must
// not fail the build. An already-set env value (the Docker build-arg) is kept.
// Nothing in the app reads this variable; the file is still produced so a
// normal git checkout builds the same way it does today.
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const fromEnv = process.env.NEXT_PUBLIC_APP_VERSION?.trim() ?? "";

let version = fromEnv;
if (!version) {
  try {
    version = execSync("git describe --tags --abbrev=0", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    version = "";
  }
}

writeFileSync(".env.local", version ? `NEXT_PUBLIC_APP_VERSION=${version}\n` : "");
