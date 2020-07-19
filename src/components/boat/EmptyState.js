import React from 'react'

// Styles
import { EmptyStateContainer, Heading2, Heading3 } from './styles'
import { Boat } from './Boat'

export function EmptyState({ boats }) {
  return (
    <>
      <EmptyStateContainer>
        <Heading2>We are sorry :(</Heading2>
        <Heading3>We couldn't find any boats matching your criteria.</Heading3>
        <Heading3>You might be interested in these boats:</Heading3>
      </EmptyStateContainer>

      {boats.map((boat) => (
        <Boat key={boat.id} {...boat} />
      ))}
    </>
  )
}
