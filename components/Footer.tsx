import { Icon, Wrap, WrapItem, Link } from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaUser } from 'react-icons/fa'

export const Footer = () => (
  <Wrap spacing={6}>
    <WrapItem>
      <Link href='https://twitter.com/_kentaro_m' color='gray.200'>
        <Icon as={FaTwitter} boxSize={5} />
      </Link>
    </WrapItem>
    <WrapItem>
      <Link href='https://github.com/kentaro-m' color='gray.200'>
        <Icon as={FaGithub} boxSize={5} />
      </Link>
    </WrapItem>
    <WrapItem>
      <Link href='https://read.cv/kentarom' color='gray.200'>
        <Icon as={FaUser} boxSize={5} />
      </Link>
    </WrapItem>
  </Wrap>
)
