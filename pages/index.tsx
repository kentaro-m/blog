import { Layout } from '../components/Layout'
import { PostSummary } from '../components/PostSummary'
import { getDatabase } from '../lib/notion'
import { formatDate } from '../lib/date'
import type { GetStaticProps } from 'next'

type Post = {
  id: string
  title: string
  formattedDate: string
}

type Props = {
  posts: Post[]
}

export default function Index({ posts }: Props) {
  return (
    <Layout>
      {posts.map((post) => {
        return (
          <PostSummary
            post={{ slug: post.id, title: post.title, formattedDate: post.formattedDate }}
            key={post.id}
          />
        )
      })}
    </Layout>
  )
}

const databaseId = process.env.NOTION_DATABASE_ID

type Status = 'Draft' | 'Published'

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await getDatabase(databaseId);

  return {
    props: {
      posts: data.map(post => {
        // @ts-expect-error
        const status: Status = post.properties.Status.status.name;

        if (status === 'Draft') return

        // @ts-expect-error
        const date = post.properties.Date.date.start;

        return {
          id: post.id,
          // @ts-expect-error
          title: post.properties.Name.title[0].text.content,
          // @ts-expect-error
          formattedDate: formatDate(date || post.created_time)
        }
      })
      .filter(v => v)
      .sort((a, b) => a.formattedDate > b.formattedDate ? -1 : 1)
    },
    revalidate: 1,
  }
}
