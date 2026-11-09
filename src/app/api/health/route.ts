import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** Liveness probe for the container healthcheck and the deploy workflow. */
export function GET() {
  return NextResponse.json({ ok: true });
}
