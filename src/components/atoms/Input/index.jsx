import React from 'react'
import { Input as MyInput, InputGroup, InputLabel } from './index'

const Input = ({
  name,
  label,
  placeholder,
  type = "text",
  onChange,
  value,
  error,
  width,
  className = ""
}) => {0

  return (
    <InputGroup className={className}>
      {label && <InputLabel htmlFor="name">{label}</InputLabel>}
      <MyInput
        name={name}
        id={name}
        placeholder={placeholder || ""}
        onChange={onChange}
        type={type}
        value={value}
        error={error}
        width={width}
      />
    </InputGroup>
  )
}

export default Input