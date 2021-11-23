import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_TRANSACTION_DETAIL } from '../../../../graphql/query/transaction.query'

export const useTransactionsDetail = () => {
  const transactionId = useParams().id

  const { loading, error, data } = useQuery(GET_TRANSACTION_DETAIL, {
    variables: { transactionId }
  })

  return { loading, error, data }
}
