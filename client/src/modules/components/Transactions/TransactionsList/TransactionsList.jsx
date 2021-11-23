import React from 'react'
import PropTypes from 'prop-types'
import { getMonthDay, getWeekDay } from '../../../utils/date'
import { TransactionsItem, TransactionsNotFound } from '../../index'
import styles from './TransactionsList.module.scss'

const matchTransactionDate = (transactions, transaction, index) => {
  return new Date(transactions[transactions.length - index]?.createdAt).getDate() !==
    new Date(transaction.createdAt).getDate()
}

const TransactionDate = ({ createdAt }) => (
  <p className={styles.date}>
    {createdAt.getDate()}&nbsp;
    {getMonthDay(createdAt)},&nbsp;
    {getWeekDay(createdAt)}
  </p>
)

export const TransactionsList = ({ transactions = [] }) => {
  return (
    <div className={styles.container}>
      {transactions.length > 0 &&
        <ul className='list-reset'>
          {transactions.slice(0).reverse().map((transaction, index) => (
            <li key={transaction._id} className={styles.transactionsItem}>
              {matchTransactionDate(transactions, transaction, index) &&
                <TransactionDate createdAt={new Date(transaction?.createdAt)} />}
              <TransactionsItem transaction={transaction} />
            </li>
          ))}
        </ul>}

      {transactions.length === 0 && <TransactionsNotFound />}
    </div>
  )
}

TransactionDate.propTypes = {
  createdAt: PropTypes.object
}

TransactionsList.propTypes = {
  transactions: PropTypes.array
}
