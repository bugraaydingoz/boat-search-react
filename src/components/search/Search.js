import React, { useState } from 'react'
import { useUrlQuery } from '../../hooks/urlQuery'

// Components
import { Button } from '../shared'

// Styles
import { SearchContainer, Input } from './styles'

export function Search() {
  const [urlQuery, setUrlQuery] = useUrlQuery()
  const [search, setSearch] = useState(urlQuery.q)

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search your dream boat"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && setUrlQuery({ q: search })}
      />
      <Button color="secondary" onClick={() => setUrlQuery({ q: search })}>
        Search
      </Button>
    </SearchContainer>
  )
}
