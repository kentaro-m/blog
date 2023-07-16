'use client'

import { Layout } from '../components/Layout'
import { Box, Heading, Center } from '@chakra-ui/react'
import Link from 'next/link'

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string }
}) {

  return (
    <Layout>
      <Box>
        <Heading as='h1' textAlign='center' fontSize='2xl' lineHeight='base' mb={4} ml={[7, 10]} mr={[7, 10]}>
          ページの表示で問題が発生しました。
        </Heading>
        <Center>
          <Link href="/">トップに戻る</Link>
        </Center>
      </Box>
    </Layout>
  )
}