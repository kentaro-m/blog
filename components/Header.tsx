import Link from 'next/link'
import {
  Image,
  Flex,
} from '@chakra-ui/react'

export const Header = () => (
  <Flex as='header' justifyContent='center' mt={10} mb={10}>
    <Link href='/'>
      <Image
        boxSize='50px'
        src='/avatar.jpeg'
        borderRadius='50%'
      />
    </Link>
  </Flex>
)
