'use client'

import { Layout } from '../../../components/Layout'
import { PostContent } from '../../../components/PostContent'

export default function PostPage({ post }) {
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