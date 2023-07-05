'use client'

import { getDatabase } from '../lib/notion'
import { formatDate } from '../lib/date'
import IndexPage from './IndexPage'

type Post = {
  id: string
  title: string
  formattedDate: string
}

const databaseId = process.env.NOTION_DATABASE_ID

type Status = 'Draft' | 'Published'

const getPosts = async (): Promise<Post[]> => {
  const data = await getDatabase(databaseId);
  return data.map((post): Post | undefined => {
    // @ts-expect-error
    const status: Status = post.properties.Status.status.name;

    if (status === 'Draft') return undefined

    // @ts-expect-error
    const date = post.properties.Date.date?.start;

    return {
      id: post.id,
      // @ts-expect-error
      title: post.properties.Name.title[0].text.content,
      // @ts-expect-error
      formattedDate: formatDate(date || post.created_time)
    }
  })
  .filter((v): v is Exclude<typeof v, undefined> => v !== undefined)
  .sort((a, b) => a.formattedDate > b.formattedDate ? -1 : 1)
}

export default async function Index() {
  const posts = await getPosts()
  return (
    <IndexPage posts={posts} />
  )
}
