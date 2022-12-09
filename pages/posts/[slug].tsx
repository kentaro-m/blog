import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import type PostType from '../../interfaces/post'
import { Layout } from '../../components/Layout'
import { CodeBlock } from '../../components/CodeBlock'
import { Slide } from '../../components/Slide'
import {
  Heading,
  Text,
  Link,
  UnorderedList,
  OrderedList,
  ListItem,
  Box,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { formatDate } from '../../lib/date'

const components = (slug: string) => {
  return {
    a: (props: any) => <Link {...props}>{props.children}</Link>,
    p: ({ children }: any) => <Text mb={8} lineHeight='1.75' >{children}</Text>,
    h2: ({ children }: any) => <Heading as='h2' fontSize='2xl' lineHeight='base' mt={16} mb={8} >{children}</Heading>,
    h3: ({ children }: any) => <Heading as='h3' fontSize='xl' lineHeight='base' mt={16} mb={8} >{children}</Heading>,
    h4: ({ children }: any) => <Heading as='h4' fontSize='lg' fontWeight='bold' lineHeight='base' mt={16} mb={8} >{children}</Heading>,
    ul: ({ children }: any) => <UnorderedList>{children}</UnorderedList>,
    ol: ({ children }: any) => <OrderedList>{children}</OrderedList>,
    li: ({ children }: any) => <ListItem mt={1} mb={1}>{children}</ListItem>,
    code: (props: any) => <CodeBlock {...props} />,
    inlineCode: (props: any) => <CodeBlock {...props} />,
    img: ({ src, ...otherProps }: any) => <Image
      src={require(`../../_posts/${slug}/${src}`).default}
      {...otherProps}
      mb={8}
    />
    ,
    table: (props: any) => <Table {...props} mb={8} size="sm" />,
    thead: (props: any) => <Thead {...props} />,
    tbody: (props: any) => <Tbody {...props} />,
    tr: (props: any) => <Tr {...props} />,
    th: (props: any) => <Th {...props} />,
    td: (props: any) => <Td {...props} />,
    Slide: (props: any) => <Slide {...props} />,
  }
}

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Box
        sx={{
          ':not(li) > ul': {
            mb: 8
          },
          ':not(li) > ol': {
            mb: 8
          },
          '.mdx-embed': {
            mb: 8
          },
          '.slide-embed': {
            mb: 8
          },
        }}
      >
        <Box as='article'>
          <Heading as='h1' textAlign='center' fontSize='2xl' lineHeight='base' mb={4} ml={[7, 10]} mr={[7, 10]}>
            {post.title}
          </Heading>
          <Text textAlign='center' mb={8} ml={[7, 10]} mr={[7, 10]}>
            {post.formattedDate}
          </Text>
        </Box>
        <Box bg='gray.700' p={[7, 10]} borderRadius={[0, 7]} __css={{
          '> ul': {
            mb: 8,
          },
          '> ol': {
            mb: 8,
            ml: 6,
          }
        }}>
          <MDXRemote {...post.content} components={components(post.slug)} />
        </Box>
      </Box>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ])
  const content = await serialize(post.content)
  return {
    props: {
      post: {
        ...post,
        content,
        /**
         * NOTE:
         * formatting for posting date on the server side
         * since using date-fns in a component will cause errors due to different results on the client and server side
         * @see https://github.com/vercel/next.js/discussions/39425
         * @see https://nextjs.org/docs/messages/react-hydration-error
         */
        formattedDate: formatDate(post.date)
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
