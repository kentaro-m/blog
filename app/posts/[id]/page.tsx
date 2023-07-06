import {
  getDatabase,
  getPage,
  getPostContent,
} from '../../../lib/notion'
import { serialize } from 'next-mdx-remote/serialize'
import { formatDate } from '../../../lib/date'
import PostPage from './PostPage'

const databaseId = process.env.NOTION_DATABASE_ID

export const generateStaticParams = async () => {
  const database = await getDatabase(databaseId)
  return database.map((page) => ({ params: { id: page.id } }))
}

const getPost = async (id: string) => {
  const page = await getPage(id)
  const postContent = await getPostContent(id)
  const content = await serialize(postContent)
  // @ts-expect-error
  const date = page.properties.Date.date?.start || page.created_time;

  return {
    pathname: `/posts/${id}`,
    content,
    formattedDate: formatDate(date),
    // @ts-expect-error
    title: page.properties.Name.title[0],
  }
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(params.id)

  return (
    <PostPage post={post} />
  )
}