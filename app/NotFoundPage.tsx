'use client';

import { Layout } from '../components/Layout';
import { Box, Heading, Center } from '@chakra-ui/react';

import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
      <Box>
        <Heading
          as="h1"
          textAlign="center"
          fontSize="2xl"
          lineHeight="base"
          mb={4}
          ml={[7, 10]}
          mr={[7, 10]}
        >
          お探しのページは見つかりませんでした。
        </Heading>
        <Center>
          <Link href="/">全ての記事をみる</Link>
        </Center>
      </Box>
    </Layout>
  );
}
