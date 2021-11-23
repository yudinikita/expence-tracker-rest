import { useQuery } from '@apollo/client'
import { GET_TRANSACTIONS } from '../../../../graphql/query/transaction.query'
import { useState } from 'react'

export const useTransactionsSearch = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS)

  const [searchValue, setSearchValue] = useState('')
  const [foundTransactions, setFoundTransactions] = useState(data?.getTransactions)

  const filter = (e) => {
    const keyword = e.target.value

    if (keyword !== '' && data) {
      let results = data?.getTransactions
        .filter(transaction => String(transaction?.amount)
          .toLowerCase()
          .startsWith(keyword))

      if (results.length === 0) {
        results = data?.getTransactions
          .filter(transaction => String(transaction?.category?.title)
            .toLowerCase()
            .startsWith(keyword.toLowerCase()))
      }

      if (results.length === 0) {
        results = data?.getTransactions
          .filter(transaction => String(transaction?.commentary)
            .toLowerCase()
            .startsWith(keyword.toLowerCase()))
      }

      if (results.length === 0) {
        results = data?.getTransactions
          .filter(transaction => Date.parse(keyword)
            ? new Date(transaction?.createdAt).toLocaleDateString() === new Date(keyword).toLocaleDateString()
            : null
          )
      }

      setFoundTransactions(results)
    } else {
      setFoundTransactions(data?.getTransactions)
    }

    setSearchValue(keyword)
  }

  return {
    loading,
    error,
    filter,
    searchValue,
    foundTransactions
  }
}
