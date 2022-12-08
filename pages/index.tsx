import { Layout } from '../components/Layout'
import { Heading, Text, Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import Post from '../interfaces/post'
import { getAllPosts } from '../lib/api'
import { formatDate } from '../lib/date'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <Box>
        {allPosts.map((post) => {
          return (
            <Link style={{ boxShadow: `none` }} as={`/posts/${post.slug}`} href="/posts/[slug]" key={post.slug}>
              <Flex _hover={{ opacity: '0.9' }} minHeight={150} bg='gray.700' ml={[5, 0]} mr={[5, 0]} mb={[5, 10]} alignItems='center' justifyContent='left' borderRadius={7}>
                <Box key={post.slug} p={8}>
                  <Heading as='h2' fontSize={['md', 'lg']} lineHeight='base' mb={3}>
                    {post.title}
                  </Heading>
                  <Text fontSize='sm'>
                    {formatDate(post.date)}
                  </Text>
                </Box>
              </Flex>
            </Link>
          )
        })}
      </Box>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
  ])

  return {
    props: { allPosts },
  }
}
