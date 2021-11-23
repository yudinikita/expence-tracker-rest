import { gql } from '@apollo/client'

export const GET_CATEGORIES = gql`
  query getCategories {
    getCategories {
      _id
      title
    }
  }
`
