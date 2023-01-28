import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const postUrlList = [
    { slug: '/create-new-github-cli-extension', id: 'b9e446f0-8297-44e8-8c76-a0a6fe2fb54e', }, 
    { slug: '/generate-ogp-images-using-cloudinary', id: '98c62e79-836b-447b-910f-181615d70758', },
    { slug: '/create-gatsbyjs-plugin-to-dynamically-generate-og-images',id: '3808c9d9-f89c-4d15-9848-005e784a8e09', },
    { slug: '/we-have-held-kanazawa-js-meetup-1', id: '8cab2ff4-cfac-4656-a0d2-93fc1169ed79', },
    { slug: '/how-to-build-the-portfolio-for-lazy-person', id: 'a2ef2022-cb4a-4531-9f02-29559719b9f2', },
    { slug: '/create-new-github-action', id: '2a8bbe5e-9ca3-4e56-ab29-0422f31bda16' },
    { slug: '/posts/create-new-github-cli-extension', id: 'b9e446f0-8297-44e8-8c76-a0a6fe2fb54e', }, 
    { slug: '/posts/generate-ogp-images-using-cloudinary', id: '98c62e79-836b-447b-910f-181615d70758', },
    { slug: '/posts/create-gatsbyjs-plugin-to-dynamically-generate-og-images',id: '3808c9d9-f89c-4d15-9848-005e784a8e09', },
    { slug: '/posts/we-have-held-kanazawa-js-meetup-1', id: '8cab2ff4-cfac-4656-a0d2-93fc1169ed79', },
    { slug: '/posts/how-to-build-the-portfolio-for-lazy-person', id: 'a2ef2022-cb4a-4531-9f02-29559719b9f2', },
    { slug: '/posts/create-new-github-action', id: '2a8bbe5e-9ca3-4e56-ab29-0422f31bda16' },
  ]
  
  const matchPath = postUrlList.find(postUrl => request.nextUrl.pathname.includes(postUrl.slug))
  if (matchPath) {
    return NextResponse.redirect(new URL(`/posts/${matchPath.id}`, request.url), 301)
  }

  return NextResponse.next()
}
