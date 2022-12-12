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
      <title>{post.title !== '' ? `${post.title} | ${SITE_TITLE}` : SITE_TITLE}</title>
      <meta property='og:type' content='article' />
      <meta property='og:site_name' content={SITE_TITLE} />
      <meta property='og:url' content={`${SITE_URL}${router.pathname}`} />
      <meta
        property='og:image'
        content={`${SITE_URL}/api/og?title=${encodeURIComponent(post.title !== '' ? post.title : SITE_TITLE)}`}
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@_kentaro_m' />
      <meta property='og:title' content={post.title !== '' ? post.title : SITE_TITLE} />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}
