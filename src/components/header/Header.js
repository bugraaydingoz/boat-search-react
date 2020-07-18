import React from 'react'

// Components
import { Search } from '../search'
import { Filter, FilterList } from '../filter'

// Styles
import { HeaderFrame, HeaderContainer, FilterFrame, Heading1 } from './styles'

export function Header() {
  return (
    <>
      <HeaderFrame>
        <HeaderContainer>
          <Heading1>Aye aye Captain!</Heading1>
          <Search />
        </HeaderContainer>
      </HeaderFrame>
      <FilterFrame>
        <FilterList>
          <Filter name="Length" handler={(e) => console.log(e.target.value)} />
          <Filter name="Year" handler={(e) => console.log(e.target.value)} />
        </FilterList>
      </FilterFrame>
    </>
  )
}
