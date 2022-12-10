import React from 'react'
import {
  Heading,
  Text,
  Box,
} from '@chakra-ui/react'

type Props = {
  post: {
    title: string
    formattedDate: string
  }
  children: React.ReactNode
}

export const PostContent = ({ post, children }: Props) => (
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
    <Box bg='gray.700' p={[7, 10]} borderRadius={[0, 7]} __css={{
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
