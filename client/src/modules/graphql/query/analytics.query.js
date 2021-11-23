import { gql } from '@apollo/client'

export const GET_ANALYTICS = gql`
  query ($startDate: String, $endDate: String) {
    getAnalyticsBalance(startDate: $startDate, endDate: $endDate) {
      income
      expense
      remainder
    }
  }
`
