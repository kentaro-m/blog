'use client';

import { PostSummary } from '../components/PostSummary';

type Post = {
  id: string;
  title: string;
  formattedDate: string;
};

type Props = {
  posts: Post[];
};

export default function IndexPage({ posts }: Props) {
  return (
    <>
      {posts.map((post) => {
        return (
          <PostSummary
            post={{
              slug: post.id,
              title: post.title,
              formattedDate: post.formattedDate,
            }}
            key={post.id}
          />
        );
      })}
    </>
  );
}
