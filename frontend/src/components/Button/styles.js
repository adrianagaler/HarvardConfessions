import styled from 'styled-components'

export const BasicButton = styled.button`
  color: ${props => (props.primary ? 'white' : '#a51c30')};
  background-color: ${props => (props.primary ? '#a51c30' : 'white')};
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-size: 1.5em;
  border-radius: 5px;
  width: 55%;
  height: 50px;
`
