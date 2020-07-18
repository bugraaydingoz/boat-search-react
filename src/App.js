import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_BOATS } from './graphql/boats'

import { Header } from './components/header'
import { Footer } from './components/footer'

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
      {/* <BoatList /> */}
      {loading && 'loading'}
      {error && 'error'}
      {!loading && boats.map((boat) => <div key={boat.id}>{boat.name}</div>)}
      <Footer />
    </>
  )
}

export default App
