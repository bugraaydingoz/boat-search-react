import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_BOATS } from './graphql/boats'

import { Header } from './components/header'
import { Footer } from './components/footer'
import { BoatList } from './components/boat/BoatList'
import { Boat } from './components/boat/Boat'
import { Pagination } from './components/pagination'

function App() {
  const { loading, error, data: { getBoats: boats } = [] } = useQuery(
    GET_BOATS,
    {
      variables: { active: true },
    }
  )

  return (
    <>
      <Header />
      <main>
        {/* {loading && 'loading'}
      {error && 'error'}
      {!loading && boats.map((boat) => <div key={boat.id}>{boat.name}</div>)} */}
        <BoatList>
          <Boat />
          <Boat />
          <Boat />
          <Boat />
        </BoatList>
        <Pagination totalPages={5} currentPage={1} />
      </main>
      <Footer />
    </>
  )
}

export default App
