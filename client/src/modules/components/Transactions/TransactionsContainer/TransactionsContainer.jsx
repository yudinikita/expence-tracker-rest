import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { GET_TRANSACTIONS } from '../../../graphql/query/transaction.query'
import { MyLoaderList } from './components'
import { TransactionsList } from '../..'

export const TransactionsContainer = ({ calendarDate = new Date() }) => {
  const [transactions, setAllTransactions] = useState([])

  const { loading, error, data } = useQuery(GET_TRANSACTIONS)

  useEffect(() => {
    if (!loading && !error) {
      const response = data?.getTransactions || []

      const matchTransaction = (transactionDate) => {
        return transactionDate.getMonth() === calendarDate.getMonth() &&
          transactionDate.getFullYear() === calendarDate.getFullYear()
      }

      const matchingTransactions = response.filter(transaction => matchTransaction(new Date(transaction.createdAt)))
      setAllTransactions(matchingTransactions)
    }
  }, [data, calendarDate, loading, error])

  if (loading) return <MyLoaderList />
  if (error) return `Ошибка! ${error.message}`

  return <TransactionsList transactions={transactions} />
}

TransactionsContainer.propTypes = {
  calendarDate: PropTypes.instanceOf(Date)
}
