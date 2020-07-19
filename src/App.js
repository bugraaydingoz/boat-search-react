import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { GET_BOATS } from './graphql/boats'
import { useUrlQuery } from './hooks/urlQuery'
import { useFilter } from './hooks/filter'

// Components
import { Header } from './components/header'
import { Footer } from './components/footer'
import { BoatList } from './components/boat/BoatList'
import { Boat } from './components/boat/Boat'
import { Pagination } from './components/pagination'
import { LoadingBoat } from './components/boat'
import { EmptyState } from './components/boat/EmptyState'

function App() {
  const { loading, error, data } = useQuery(GET_BOATS, {
    variables: { active: true },
  })
  if (error) {
    console.error("Error: Boats couldn't be fetched.")
  }

  const [urlQuery, setUrlQuery] = useUrlQuery()
  const boats = data?.getBoats ?? []

  useEffect(() => {
    if (!boats.length) {
      return
    }

    const lengths = boats.map((boat) => boat.length)
    const years = boats.map((boat) => boat.year)

    // Set default filters
    setUrlQuery({
      minLength: Math.min(...lengths),
      maxLength: Math.max(...lengths),
      minYear: Math.min(...years),
      maxYear: Math.max(...years),
      page: 1,
    })
  }, [boats])

  const { length, totalPages, paginatedBoats } = useFilter(boats, urlQuery)
  const isEmpty = !loading && !boats.length && !paginatedBoats.length
  const randomBoat = () => Math.floor(Math.random() * boats.length)

  console.log(1)
  return (
    <>
      <Header />
      <main>
        <BoatList loading={loading} length={length}>
          {/* Loading indicator */}
          {loading &&
            new Array(3).fill(0).map((el, i) => <LoadingBoat key={i} />)}

          {/* Filtered and paginated boats */}
          {!loading &&
            paginatedBoats.map((boat) => <Boat key={boat.id} {...boat} />)}

          {/* Empty state */}
          {isEmpty && (
            <EmptyState boats={[boats[randomBoat()], boats[randomBoat()]]} />
          )}
        </BoatList>
        <Pagination totalPages={totalPages} currentPage={urlQuery.page} />
      </main>
      <Footer />
    </>
  )
}

export default App
