import React from 'react'
import { Content } from './components/Content'
import styles from './TransactionsNotFound.module.scss'

export const TransactionsNotFound = () => {
  return (
    <div>
      <Content />
      <p className={styles.text}>Здесь нет ни одной операции</p>
    </div>
  )
}
