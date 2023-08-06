'use client';

import { PostSummary } from '../components/PostSummary';
import { Grid, GridItem } from '@chakra-ui/react';

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
    <Grid templateColumns={['1fr', 'repeat(2, 1fr)']} gap={5}>
      {posts.map((post) => {
        return (
          <GridItem key={post.id}>
            <PostSummary
              post={{
                slug: post.id,
                title: post.title,
                formattedDate: post.formattedDate,
              }}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
}
