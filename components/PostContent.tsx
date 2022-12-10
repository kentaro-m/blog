import React from 'react'
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
import { MDXRemote } from 'next-mdx-remote'
import { Slide } from './Slide'
import { CodeBlock } from './CodeBlock'

type PostContentLayoutProps = {
  post: {
    title: string
    formattedDate: string
  }
  children: React.ReactNode
}

const PostContentLayout = ({ post, children }: PostContentLayoutProps) => (
  <Box
    as='article'
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
    <Box>
      <Heading as='h1' textAlign='center' fontSize='2xl' lineHeight='base' mb={4} ml={[7, 10]} mr={[7, 10]}>
        {post.title}
      </Heading>
      <Text textAlign='center' mb={8} ml={[7, 10]} mr={[7, 10]}>
        {post.formattedDate}
      </Text>
    </Box>
    <Box bg='dark.800' p={[7, 10]} borderRadius={[0, 7]} __css={{
      '> ul': {
        mb: 8,
      },
      '> ol': {
        mb: 8,
        ml: 6,
      }
    }}>
      {children}
    </Box>
  </Box>
)

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
    img: ({ src, ...otherProps }: any) => {
      const image = src.match(/https/) ? src : require(`../_posts/${slug}/${src}`).default
      return (<Image
        src={image}
        {...otherProps}
        mb={8}
      />)
    },
    table: (props: any) => <Table {...props} mb={8} size="sm" />,
    thead: (props: any) => <Thead {...props} />,
    tbody: (props: any) => <Tbody {...props} />,
    tr: (props: any) => <Tr {...props} />,
    th: (props: any) => <Th {...props} />,
    td: (props: any) => <Td {...props} />,
    Slide: (props: any) => <Slide {...props} />,
  }
}

type PostContentProps = {
  post: {
    title: string
    formattedDate: string
    slug: string
    content: any
  }
}

export const PostContent = ({ post }: PostContentProps) => (
  <PostContentLayout post={{ title: post.title, formattedDate: post.formattedDate }}>
    <MDXRemote {...post.content} components={components(post.slug)} />
  </PostContentLayout>
)

