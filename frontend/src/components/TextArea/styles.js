import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Longtext = styled.div`
  padding: 0.5em;
  margin: 1em;
  color: black;
  background: #c0c0c0;
  width: 700px;
  height: 200px;
  border: black;
  border-radius: 3px;
  align-content: center;
  -webkit-appearance: textfield;
  appearance: textfield;
  word-wrap: break-word;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: 1em;
`

export const Title = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: 1em;
`
export const GifDesign = styled.div`
  align-content: center;
`
