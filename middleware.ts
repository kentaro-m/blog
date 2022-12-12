import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * NOTE: redirect /:path -> /posts/:path
 */
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  return NextResponse.redirect(new URL(`/posts${request.nextUrl.pathname}`, request.url))
}

export const config = {
  matcher: '/((?!api|_next/static|favicon.ico|avatar.jpeg|posts).+)',
}
