import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/dracula'
import { Box, Code } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Pre = styled.pre`
  padding: 1.5rem 1.5rem 0;
  overflow: scroll;
`;

export const CodeBlock = ({ children, className }: any) => {
  const language = className?.replace(/language-/, '') || ''

  return (
    language ?
    (<Highlight {...defaultProps} code={children} theme={nightOwl} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box fontSize='sm' mb={8}>
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </Box>
      )}
    </Highlight>) : (
      <Code background='rgb(40, 42, 54)' color='gray.200'>
        {children}
      </Code>
    )
  )
}
