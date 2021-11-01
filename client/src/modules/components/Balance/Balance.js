import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_BALANCE } from '../../graphql/query/balance.query'
import styles from './Balance.module.scss'

export const Balance = () => {
  const [balance, setBalance] = useState(0)
  const [balancePerDate, setBalancePerDate] = useState(0)
  const [balancePercentage, setBalancePercentage] = useState(0)

  const startDate = new Date()
  startDate.setHours(0, 0, 0, 0)

  const endDate = new Date()
  endDate.setHours(23, 59, 59, 999)

  const { loading, error, data } = useQuery(GET_BALANCE, {
    variables: { startDate, endDate }
  })

  useEffect(() => {
    if (!loading) {
      const balance = data?.getBalance?.totalAmount || 0
      const balancePerDate = data?.getBalancePerDate?.totalAmount || 0
      const percentage = balancePerDate / balance * 100
      const balancePercentage = percentage !== 0 ? percentage.toFixed(1) : 0

      setBalance(balance)
      setBalancePerDate(balancePerDate)
      setBalancePercentage(balancePercentage)
    }
  }, [data])

  if (loading) return 'Загрузка...'
  if (error) return `Ошибка! ${error.message}`

  const IndicatorBalance = () => {
    if (balancePerDate > 0) {
      return '🠕 '
    } else if (balancePerDate < 0) {
      return '🠗 '
    } else {
      return ''
    }
  }

  const styleBalancePerDate = () => {
    if (balancePerDate > 0) {
      return styles.plus
    } else if (balancePerDate < 0) {
      return styles.minus
    } else {
      return ''
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Ваш баланс</h3>
      <p className={styles.balance}>{balance} ₽</p>
      <div className={styles.balancePerDateGroup}>
        <p className={styles.balancePerDate}>
          <span className={styleBalancePerDate()}>
            <IndicatorBalance/>
            {balancePerDate} ₽
          </span>
        </p>
        <p className={styles.balancePercent}>
          {balancePercentage > 0 ? '+' : ''}
          {balancePercentage}%
        </p>
      </div>
    </div>
  )
}
