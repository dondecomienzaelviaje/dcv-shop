import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, request) => {
  // Vercel inyecta este header con el país del visitante, detectado por IP.
  const country = request.headers.get("x-vercel-ip-country") || "CO";

  const response = NextResponse.next();
  response.cookies.set("country", country, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 días
  });

  return response;
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)", "/(api|trpc)(.*)"],
};