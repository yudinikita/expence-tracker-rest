import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_BALANCE, GET_BALANCE_PER_DATE } from '../../graphql/query/balance.query'

export const Balance = () => {
  const startDate = new Date()
  startDate.setHours(0, 0, 0, 0)

  const endDate = new Date()
  endDate.setHours(23, 59, 59, 999)

  const { loading, error, data } = useQuery(GET_BALANCE, {
    variables: { startDate, endDate }
  })

  if (loading) return 'Загрузка...'
  if (error) return `Ошибка! ${error.message}`

  return (
    <div>
      <h3>Ваш баланс</h3>
      <p>{data.getBalance.totalAmount}</p>
      <p>{data.getBalancePerDate.totalAmount}</p>
    </div>
  )
}
