import Link from 'next/link';
import { Image, Flex, Box } from '@chakra-ui/react';
import { Source_Code_Pro } from 'next/font/google';

const font = Source_Code_Pro({ weight: ['400'], preload: false });

export const Header = () => (
  <Flex as="header" justifyContent="center" mt={10} mb={10}>
    <Link href="/">
      <Flex alignItems={'center'} gap={3}>
        <Box
          borderRadius="50%"
          width={'24px'}
          height={'24px'}
          background="linear-gradient(135deg, rgba(214,188,250,1) 0%, rgba(159,122,234,1) 50%, rgba(107,70,193,1) 100%)"
        ></Box>
        <Box
          fontWeight={'bold'}
          fontSize={'2xl'}
          fontFamily={font.style.fontFamily}
        >
          BACKYARD
        </Box>
      </Flex>
    </Link>
  </Flex>
);
