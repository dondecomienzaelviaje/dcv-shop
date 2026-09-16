import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Vercel inyecta este header con el país del visitante, detectado por IP.
  const country = request.headers.get("x-vercel-ip-country") || "CO";

  const response = NextResponse.next();
  response.cookies.set("country", country, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 días
  });

  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};