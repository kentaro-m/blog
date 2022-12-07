import { Layout } from '../components/layout'
import { Heading, Text, Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import Post from '../interfaces/post'
import { getAllPosts } from '../lib/api'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <Box>
        {allPosts.map((post) => {
          return (
            <Link style={{ boxShadow: `none` }} as={`/posts/${post.slug}`} href="/posts/[slug]">
              <Flex _hover={{ opacity: '0.9' }} height={175} bg='gray.700' ml={[5, 0]} mr={[5, 0]} mb={[5, 10]} alignItems='center' justifyContent='left' borderRadius={7}>
                <Box key={post.slug} p={8}>
                  <Heading as='h2' fontSize='lg' lineHeight='base' mb={2}>
                    {post.title}
                  </Heading>
                  <Text>
                    {post.date}
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
