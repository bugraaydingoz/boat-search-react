import React, { useState } from 'react'

// Styles
import { FilterContainer, Label, Input, InputContainer } from './styles'

export function Filter({ name, value, handler }) {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(1000)

  return (
    <FilterContainer>
      <Label>{name}</Label>
      <InputContainer>
        <Input
          type="text"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />{' '}
        -{' '}
        <Input
          type="text"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </InputContainer>
    </FilterContainer>
  )
}
