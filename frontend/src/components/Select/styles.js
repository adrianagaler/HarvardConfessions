import styled from 'styled-components'

export const Selectoptions = styled.select`
  padding: 0.5em;
  margin: 1em;
  color: black;
  background: #c0c0c0;
  border: black;
  border-radius: 3px;
  width: 40%;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: 1em;
`
export const Title = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: 1em;
`
