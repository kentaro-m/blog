'use client';

import { PostContent } from '../../../components/PostContent';

export default function PostPage({ post }) {
  if (!post) {
    return <div />;
  }

  return (
    <>
      <PostContent
        post={{
          formattedDate: post.formattedDate,
          title: post.title,
          content: post.content,
        }}
      />
    </>
  );
}
