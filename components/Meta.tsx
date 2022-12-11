import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  post: {
    title?: string
  }
}

const SITE_TITLE = 'kentarom\'s blog'
const SITE_URL = 'https://blog-kentarom.vercel.app'

export const Meta = ({ post }: Props) => {
  const router = useRouter()
  return (
    <Head>
      <title>{post.title ? `${post.title} | ${SITE_TITLE}` : SITE_TITLE}</title>
      <meta property='og:type' content='article' />
      <meta property='og:site_name' content={SITE_TITLE} />
      <meta property='og:url' content={`${SITE_URL}${router.pathname}`} />
      <meta
        property='og:image'
        content={`${SITE_URL}/api/og?title=${encodeURIComponent(post.title)}`}
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@_kentaro_m' />
      <meta property='og:title' content={post.title ?? SITE_TITLE} />
    </Head>
  )
}
