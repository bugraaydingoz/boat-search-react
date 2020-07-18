import React from 'react'

// Components
import { Button } from '../shared'

// Styles
import { SearchContainer, Input } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <Input type="text" placeholder="Search your dream boat" />
      <Button color="secondary">Search</Button>
    </SearchContainer>
  )
}
