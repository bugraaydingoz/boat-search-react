import React, { useState, useEffect } from 'react'

// Styles
import { FilterContainer, Label, Input, InputContainer } from './styles'

export function Filter({ name, value, onChange }) {
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')

  useEffect(() => {
    if (!!value.min) {
      setMin(value.min)
    }
    if (!!value.min) {
      setMax(value.max)
    }
  }, [value])

  return (
    <FilterContainer>
      <Label>{name}</Label>
      <InputContainer>
        <Input
          type="text"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          onBlur={() => onChange({ min, max })}
        />{' '}
        -{' '}
        <Input
          type="text"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          onBlur={() => onChange({ min, max })}
        />
      </InputContainer>
    </FilterContainer>
  )
}
