import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ANALYTICS } from '../../../../graphql/query/analytics.query'

export const useAnalyticsBalance = (startDate, endDate) => {
  const defaultAnalytics = { amount: 0, percent: 0 }
  const [income, setIncome] = useState(defaultAnalytics)
  const [expense, setExpense] = useState(defaultAnalytics)
  const [remainder, setRemainder] = useState(defaultAnalytics)

  const { loading, error, data } = useQuery(GET_ANALYTICS, {
    variables: { startDate, endDate }
  })

  useEffect(() => {
    if (!loading && !error) {
      const response = data.getAnalyticsBalance

      const totalTransaction = Math.abs(response.income) + Math.abs(response.expense) || 0

      const incomePercentage = Math.abs(response.income / totalTransaction) * 100 || 0
      const expensePercentage = Math.abs(response.expense / totalTransaction * 100) || 0
      const remainderPercentage = Math.abs(response.remainder / totalTransaction * 100) || 0

      setIncome({
        amount: response.income,
        percent: incomePercentage
      })

      setExpense({
        amount: Math.abs(response.expense),
        percent: expensePercentage
      })

      setRemainder({
        amount: response.remainder,
        percent: remainderPercentage
      })
    }
  }, [data, loading, error])

  const AnalyticsItems = [
    { id: 0, title: 'Доход', amount: income.amount, percent: income.percent, color: '#009E0D' },
    { id: 1, title: 'Расход', amount: expense.amount, percent: expense.percent, color: '#FF3D00' },
    { id: 2, title: 'Остаток', amount: remainder.amount, percent: remainder.percent, color: '#FFCF26' }
  ]

  return { AnalyticsItems, loading, error }
}
