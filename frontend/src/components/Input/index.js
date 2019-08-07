import React from 'react'
import { Inputtext, Title } from './styles'

const Input = props => {
  return (
    <div className="form-group">
      <Title>
        <label for={props.name} className="form-label">
          {props.title}
        </label>
      </Title>
      <Inputtext
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  )
}

export default Input
