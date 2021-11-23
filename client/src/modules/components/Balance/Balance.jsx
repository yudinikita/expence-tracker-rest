import React from 'react'
import { MyLoader } from '../UI'
import { MyError, Price } from '..'
import { useBalance } from './hooks/useBalance'
import { BalancePercentage, BalancePerDate } from './components'
import styles from './Balance.module.scss'

export const Balance = () => {
  const { balance, loading, error } = useBalance()

  if (loading) return <MyLoader />
  if (error) return <MyError error={error} />

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Ваш баланс</h3>
      <Price className={styles.balance} amount={balance.balanceTotal} />
      <div className={styles.balancePerDateGroup}>
        <BalancePerDate amount={balance.balancePerDate} />
        <BalancePercentage amount={balance.balancePercentage} />
      </div>
    </div>
  )
}
