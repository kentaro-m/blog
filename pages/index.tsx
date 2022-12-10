import { Layout } from '../components/Layout'
import { PostSummary } from '../components/PostSummary'
import Post from '../interfaces/post'
import { getAllPosts } from '../lib/api'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      {allPosts.map((post) => {
        return (
          <PostSummary
            post={{ slug: post.slug, title: post.title, formattedDate: post.formattedDate }}
            key={post.slug}
          />
        )
      })}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
  ])

  return {
    props: { allPosts },
  }
}
