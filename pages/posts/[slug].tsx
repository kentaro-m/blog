import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import type PostType from '../../interfaces/post'
import { Layout } from '../../components/Layout'
import { PostContent } from '../../components/PostContent'
import { serialize } from 'next-mdx-remote/serialize'
import { formatDate } from '../../lib/date'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout post={{ title: post.title }}>
      <PostContent post={{
        formattedDate: post.formattedDate,
        title: post.title,
        content: post.content,
        slug: post.slug,
      }} />
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ])
  const content = await serialize(post.content)
  return {
    props: {
      post: {
        ...post,
        content,
        /**
         * NOTE:
         * formatting for posting date on the server side
         * since using date-fns in a component will cause errors due to different results on the client and server side
         * @see https://github.com/vercel/next.js/discussions/39425
         * @see https://nextjs.org/docs/messages/react-hydration-error
         */
        formattedDate: formatDate(post.date)
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
