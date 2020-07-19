import React from 'react'

// Styles
import { BoatListContainer, Heading5 } from './styles'

export function BoatList({ children, loading, length }) {
  const text = loading ? 'Fetching our best offers' : `${length} boats found`

  return (
    <BoatListContainer>
      <Heading5>{text}</Heading5>
      {children}
    </BoatListContainer>
  )
}
