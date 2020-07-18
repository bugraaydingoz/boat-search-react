import React from 'react'

// Components
import { Icon } from '../shared'

// Styles
import { PaginationContainer, PaginationButton } from './styles'

export function Pagination({ totalPages, currentPage }) {
  const pages = new Array(totalPages).fill(false)
  pages[currentPage - 1] = true
  return (
    <PaginationContainer>
      <PaginationButton>
        <Icon name="pagination-left" />
      </PaginationButton>
      {pages.map((p, i) => (
        <PaginationButton key={`pagination-${i}`} selected={p}>
          {i + 1}
        </PaginationButton>
      ))}
      <PaginationButton>
        <Icon name="pagination-right" />
      </PaginationButton>
    </PaginationContainer>
  )
}
