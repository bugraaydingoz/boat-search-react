import React from 'react'
import { useUrlQuery } from '../../hooks/urlQuery'

// Components
import { Icon } from '../shared'

// Styles
import { PaginationContainer, PaginationButton } from './styles'

function clamp(n, min, max) {
  if (n < min) {
    return min
  }
  if (n > max) {
    return max
  }
  return n
}

export function Pagination({ totalPages = 1, currentPage = 1 }) {
  const pages = new Array(totalPages || 1).fill(false)
  pages[currentPage - 1] = true

  const setUrlQuery = useUrlQuery()[1]

  function setPage(page) {
    setUrlQuery({ page: clamp(page, 1, totalPages) })
  }

  return (
    <PaginationContainer>
      <PaginationButton onClick={() => setPage(--currentPage)}>
        <Icon name="pagination-left" />
      </PaginationButton>
      {pages.map((p, i) => (
        <PaginationButton
          key={`pagination-${i}`}
          selected={p}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </PaginationButton>
      ))}
      <PaginationButton onClick={() => setPage(++currentPage)}>
        <Icon name="pagination-right" />
      </PaginationButton>
    </PaginationContainer>
  )
}
