import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #a51c30;
    text-align: center;
  }
`
export const Header = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: 5em;
`

export const Header2 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: 3em;
`
