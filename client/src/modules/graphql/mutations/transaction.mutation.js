import { gql } from '@apollo/client'

export const ADD_TRANSACTION = gql`
  mutation createTransaction($transaction: TransactionInput) {
    createTransaction(transaction: $transaction) {
      _id
      user
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
