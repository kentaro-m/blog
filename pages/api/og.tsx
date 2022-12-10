import { ImageResponse } from '@vercel/og'
import { Box } from '@chakra-ui/react'

export const config = {
  runtime: 'experimental-edge',
}

export default function () {
  return new ImageResponse(
    (
      <Box
        width='100%'
        height='100%'
        display='flex'
        textAlign='center'
        alignItems='center'
        justifyContent='center'
      >
        Hello world!
      </Box>
    ),
    {
      width: 1200,
      height: 600,
    },
  )
}
