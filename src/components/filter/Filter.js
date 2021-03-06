import React, { useState, useEffect } from 'react'

// Styles
import {
  FilterContainer,
  Label,
  Input,
  InputContainer,
  Divider,
} from './styles'

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
      <Label data-testid="filter-label">{name}</Label>
      <InputContainer>
        <Input
          type="text"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          onBlur={() => onChange({ min, max })}
          onKeyPress={(e) => e.key === 'Enter' && onChange({ min, max })}
        />
        <Divider>-</Divider>
        <Input
          type="text"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          onBlur={() => onChange({ min, max })}
          onKeyPress={(e) => e.key === 'Enter' && onChange({ min, max })}
        />
      </InputContainer>
    </FilterContainer>
  )
}
