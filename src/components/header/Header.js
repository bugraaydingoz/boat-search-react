import React from 'react'
import { useUrlQuery } from '../../hooks/urlQuery'

// Components
import { Search } from '../search'
import { Filter, FilterList } from '../filter'

// Styles
import { HeaderFrame, HeaderContainer, FilterFrame, Heading1 } from './styles'

export function Header() {
  const [urlQuery, setUrlQuery] = useUrlQuery()

  function onLengthChange(values) {
    setUrlQuery({ minLength: values.min, maxLength: values.max })
  }

  function onYearChange(values) {
    setUrlQuery({ minYear: values.min, maxYear: values.max })
  }

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
          <Filter
            name="Length (m)"
            value={{ min: urlQuery.minLength, max: urlQuery.maxLength }}
            onChange={onLengthChange}
          />
          <Filter
            name="Year"
            value={{ min: urlQuery.minYear, max: urlQuery.maxYear }}
            onChange={onYearChange}
          />
        </FilterList>
      </FilterFrame>
    </>
  )
}
