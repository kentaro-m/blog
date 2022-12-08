import React from 'react'
import Link from 'next/link'
import { Container } from '@chakra-ui/react'
import styled from '@emotion/styled'
import {
  Box,
  Image,
  Flex,
} from '@chakra-ui/react'
import { Footer } from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

const Divider = styled.div`
  &::before {
    content: '...';
    font-size: 50px;
    position: relative;
    top: -34px;
  }
`

export const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <Container maxW="container.md" p={0}>
      <Flex justifyContent='center' mt={10} mb={10}>
        <Link href='/'>
          <Image
            boxSize='50px'
            src='/avatar.jpeg'
            borderRadius='50%'
          />
        </Link>
      </Flex>
      {children}
      <Flex height='32px' justifyContent='center' mt={10} mb={10}>
        <Divider />
      </Flex>
      <Flex mb={10} justifyContent='center'>
        <Footer />
      </Flex>
    </Container>
  )
}
