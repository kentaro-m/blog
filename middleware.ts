import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * NOTE: redirect /:path -> /posts/:path
 */
export function middleware(request: NextRequest) {
  const postUrlList = [
    '/share-result-of-learning-deno',
    '/try-the-type-challenges',
    '/create-new-github-cli-extension',
    '/generate-ogp-images-using-cloudinary',
    '/we-have-held-kanazawa-js-remote-meetup-3',
    '/we-have-held-kanazawa-js-remote-meetup-2',
    '/joined-the-github-hackathon',
    '/create-gatsbyjs-plugin-to-dynamically-generate-og-images',
    '/we-have-held-kanazawa-js-meetup-1',
    '/how-to-build-the-portfolio-for-lazy-person',
    '/create-new-github-action'
  ]

  if (postUrlList.some(postUrl => request.nextUrl.pathname.includes(postUrl))) {
    return NextResponse.redirect(new URL(`/posts${request.nextUrl.pathname}`, request.url), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|favicon.ico|avatar.jpeg|posts).+)',
}
