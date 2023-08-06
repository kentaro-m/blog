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
        alignItems="center"
        justifyContent="left"
        borderRadius={7}
        as="article"
      >
        <Box key={post.slug} p={8}>
          <Text fontSize="xs" mb={2}>
            {post.formattedDate}
          </Text>
          <Box minH="2lh">
            <Heading as="h2" fontSize={['md', 'lg']} lineHeight="base">
              {post.title}
            </Heading>
          </Box>
        </Box>
      </Flex>
    </Link>
  </Box>
);
