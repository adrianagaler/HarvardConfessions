import React from 'react'
import { BasicButton } from './styles'

const Button = props => {
  console.log(props.style)
  return <BasicButton {...props}>{props.children}</BasicButton>
}

export default Button
