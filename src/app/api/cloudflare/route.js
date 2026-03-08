import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const ip =
      req.headers.get("cf-connecting-ip") ||
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "127.0.0.1";

    const referer = req.headers.get("referer") || "Unknown";
    const userAgent = req.headers.get("user-agent") || "Unknown";

    // Nếu muốn theo dõi thì log thôi, KHÔNG DB
    console.log("[cloudflare]", { ip, referer, userAgent });

    return NextResponse.json({ ok: true, ip, referer });
  } catch (e) {
    console.error("api/cloudflare error:", e);
    return NextResponse.json(
      { ok: false, error: e?.message || "Internal error" },
      { status: 500 }
    );
  }
}
