import { gql } from '@apollo/client'

export const GET_TRANSACTIONS = gql`
  query {
    getTransactions {
      _id
      amount
      category {
        title
      }
      commentary
      createdAt
      updatedAt
    }
  }
`
