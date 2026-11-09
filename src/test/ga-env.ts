import { afterEach } from "vitest";

const originalId = process.env.NEXT_PUBLIC_GA_ID;
const originalVercel = process.env.VERCEL;

/** Point the analytics helper at a measurement id for one test. */
export function setGaEnv(id: string | undefined, vercel?: string) {
  if (id === undefined) delete process.env.NEXT_PUBLIC_GA_ID;
  else process.env.NEXT_PUBLIC_GA_ID = id;
  if (vercel === undefined) delete process.env.VERCEL;
  else process.env.VERCEL = vercel;
}

afterEach(() => {
  setGaEnv(originalId, originalVercel);
  delete window.gtag;
});
