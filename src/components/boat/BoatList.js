import React from 'react'

// Styles
import { BoatListContainer, Heading5 } from './styles'

export function BoatList({ children }) {
  return (
    <BoatListContainer>
      <Heading5>{children.length} boats found</Heading5>
      {children}
    </BoatListContainer>
  )
}
