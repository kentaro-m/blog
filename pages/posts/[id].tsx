import {
  getDatabase,
  getPage,
  getPostContent,
} from '../../lib/notion'
import { Layout } from '../../components/Layout'
import { PostContent } from '../../components/PostContent'
import { serialize } from 'next-mdx-remote/serialize'
import { formatDate } from '../../lib/date'

export default function Post({ post }) {
  if (!post) {
    return <div />
  }

  return (
    <Layout post={{ title: post.title.text.content, pathname: post.pathname }}>
      <PostContent post={{
        formattedDate: post.formattedDate,
        title: post.title,
        content: post.content,
      }} />
    </Layout>
  )
}


const databaseId = process.env.NOTION_DATABASE_ID

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId)
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const page = await getPage(id)
  const postContent = await getPostContent(id)
  const content = await serialize(postContent)
  // @ts-expect-error
  const date = page.properties.Date.date?.start || page.created_time;

  return {
    props: {
      page,
      post: {
        pathname: `/posts/${id}`,
        content,
        formattedDate: formatDate(date),
        // @ts-expect-error
        title: page.properties.Name.title[0],
      }
    },
    revalidate: 1,
  }
}