import { gql } from '@apollo/client'
export const GET_BOATS = gql`
  query getBoats($active: Boolean) {
    getBoats(input: { active: $active }) {
      id
      name
      type
      year
      reviews {
        total
        score
      }
      marina
      locality
      country
      skipper
      cabins
      guests
      length
      price
      imageUrl
    }
  }
`
