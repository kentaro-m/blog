import Link from 'next/link';
import { Image, Flex, Box } from '@chakra-ui/react';
import { Source_Code_Pro } from 'next/font/google';

const font = Source_Code_Pro({ weight: ['400'], preload: false });

export const Header = () => (
  <Flex
    as="header"
    justifyContent="center"
    mt={10}
    mb={10}
    fontWeight={'bold'}
    fontSize={'2xl'}
    fontFamily={font.style.fontFamily}
  >
    <Link href="/">kentarom&rsquo;s blog</Link>
  </Flex>
);
