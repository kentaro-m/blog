import { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BIZ_UDPGothic } from '@next/font/google'

const font = BIZ_UDPGothic({ subsets: ['japanese', 'latin-ext', 'latin'], weight: ['400', '700'] })

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'gray.200',
        letterSpacing: '.05em',
      },
    }
  },
  components: {
    Link: {
      baseStyle: {
        color: 'purple.200',
      },
    },
  }
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={`${font.className}`}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  )
}
