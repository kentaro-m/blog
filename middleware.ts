import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * NOTE: redirect /:path -> /posts/:path
 */
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL(`/posts${request.nextUrl.pathname}`, request.url), 301)
}

export const config = {
  matcher: '/((?!api|_next/static|favicon.ico|avatar.jpeg|posts).+)',
}
