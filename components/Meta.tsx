import Head from 'next/head'

type Props = {
  post: {
    title?: string
  }
}

const SITE_TITLE = 'kentarom\'s blog'

export const Meta = ({ post }: Props) => (
  <Head>
    <title>{post.title ? `${post.title} | ${SITE_TITLE}` : SITE_TITLE}</title>
  </Head>
)
