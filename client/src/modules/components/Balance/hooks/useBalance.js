import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_BALANCE } from '../../../graphql/query/balance.query'

export const useBalance = () => {
  const defaultAllBalance = {
    balanceTotal: 0,
    balancePerDate: 0,
    balancePercentage: 0
  }
  const [balance, setBalance] = useState(defaultAllBalance)

  const startDate = new Date()
  startDate.setHours(0, 0, 0, 0)

  const endDate = new Date()
  endDate.setHours(23, 59, 59, 999)

  const { loading, error, data } = useQuery(GET_BALANCE, {
    variables: { startDate, endDate }
  })

  useEffect(() => {
    if (!loading && !error) {
      const balance = data?.getBalance?.totalAmount || 0
      const balancePerDate = data?.getBalancePerDate?.totalAmount || 0
      const percentage = balancePerDate / balance * 100
      const balancePercentage = Math.floor(percentage * 100) / 100

      setBalance({
        balanceTotal: balance,
        balancePerDate: balancePerDate,
        balancePercentage: balancePercentage
      })
    }
  }, [data, loading, error])

  return { balance, loading, error }
}
