'use client';

import React from 'react';
import { Container } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Divider = styled.div`
  &::before {
    content: '...';
    font-size: 50px;
    position: relative;
    top: -34px;
  }
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Container maxW="container.md" p={0}>
        <Header />
        {children}
        <Flex height="32px" justifyContent="center" mt={10} mb={10}>
          <Divider />
        </Flex>
        <Flex mb={10} justifyContent="center">
          <Footer />
        </Flex>
      </Container>
    </>
  );
};
