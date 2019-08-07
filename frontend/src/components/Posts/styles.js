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

export const Posttext = styled.div`
  color: ${({ theme }) => theme.colors.mainBackground};
  font-size: 2em;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
  color: black;
  text-align: center;
`

export const Longtext = styled.textarea`
  padding: 0.5em;
  margin: 1em;
  color: black;
  background: #c0c0c0;
  width: 600px;
  height: 150px;
  border: black;
  border-radius: 3px;
  text-align: center;
  word-wrap: break-word;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: 1em;
`
