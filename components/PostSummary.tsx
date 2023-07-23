import Link from 'next/link';
import { Heading, Text, Box, Flex } from '@chakra-ui/react';

type Props = {
  post: {
    slug: string;
    title: string;
    formattedDate: string;
  };
};

export const PostSummary = ({ post }: Props) => (
  <Box>
    <Link
      style={{ boxShadow: `none` }}
      as={`/posts/${post.slug}`}
      href="/posts/[slug]"
    >
      <Flex
        _hover={{ opacity: '0.9' }}
        minHeight={150}
        bg="dark.800"
        ml={[5, 0]}
        mr={[5, 0]}
        mb={[5, 10]}
        alignItems="center"
        justifyContent="left"
        borderRadius={7}
        as="article"
      >
        <Box key={post.slug} p={8}>
          <Heading as="h2" fontSize={['md', 'lg']} lineHeight="base" mb={3}>
            {post.title}
          </Heading>
          <Text fontSize="xs">{post.formattedDate}</Text>
        </Box>
      </Flex>
    </Link>
  </Box>
);
