import { gql } from '@apollo/client'

export const GET_TRANSACTIONS = gql`
  query getTransactions {
    getTransactions {
      _id
      amount
      category {
        _id
        title
      }
      commentary
      createdAt
      updatedAt
    }
  }
`

export const GET_TRANSACTION_DETAIL = gql`
  query getTransactionDetail ($transactionId: ID) {
    getTransactionDetail(transactionId: $transactionId) {
      _id
      amount
      category {
        _id
        title
      }
      commentary
      createdAt
      updatedAt
    }
  }
`
