import React from 'react'
import { MyInput, MyLoader } from '../../UI'
import { TransactionsList, InnerNavigate, MyError } from '../..'
import { useTransactionsSearch } from './hooks/useTransactionsSearch'
import styles from './TransactionsSearch.module.scss'

export const TransactionsSearch = () => {
  const {
    loading,
    error,
    searchValue,
    filter,
    foundTransactions
  } = useTransactionsSearch()

  if (loading) return <MyLoader />
  if (error) return <MyError error={error} />

  return (
    <div>
      <InnerNavigate title='Поиск операций' />

      <MyInput
        type='search'
        label='Что вы помните?'
        title='Поиск работает по сумме, категории, комментарию и дате в формате (год-месяц-день), пример: 2021-11-05'
        value={searchValue}
        onChange={filter}
      />

      <div>
        {foundTransactions &&
        foundTransactions?.length > 0 &&
          <div>
            <p className={styles.found}>Найдено операций: <b>{foundTransactions.length}</b></p>
            <TransactionsList transactions={foundTransactions} />
          </div>}

        {!foundTransactions &&
        foundTransactions?.length === 0 &&
          <p className={styles.found}>Найдено операций: <b>0</b></p>}
      </div>
    </div>
  )
}
