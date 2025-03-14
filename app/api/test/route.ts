export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("API: GET /api/test called with URL:", request.url);

  return NextResponse.json({
    message: "API test route is working",
    timestamp: new Date().toISOString(),
    url: request.url,
  });
}
