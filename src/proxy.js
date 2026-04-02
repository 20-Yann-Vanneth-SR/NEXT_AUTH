import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function proxy(request) {
  const session = await auth();
  const { pathname } = new URL(request.url);

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathname !== "/login" && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: ["/products/:path*", "/category/:path*", "/"],
};
