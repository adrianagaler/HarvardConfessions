import React from 'react'
import { Selectoptions, Title } from './styles'

const Select = props => {
  return (
    <div className="form-group">
      <Title>
        <label for={props.name}> {props.title} </label>
      </Title>
      <Selectoptions
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-control"
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map(option => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          )
        })}
        />
      </Selectoptions>
    </div>
  )
}

export default Select
