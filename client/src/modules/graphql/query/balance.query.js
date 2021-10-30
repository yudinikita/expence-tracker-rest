import { gql } from '@apollo/client'

export const GET_BALANCE = gql`
  query ($startDate: String, $endDate: String) {
    getBalance {
      totalAmount
      count
    }

    getBalancePerDate(startDate: $startDate, endDate: $endDate) {
      totalAmount
      count
    }
  }
`
