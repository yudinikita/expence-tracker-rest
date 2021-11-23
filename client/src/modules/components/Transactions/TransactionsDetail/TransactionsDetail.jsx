import React from 'react'
import { MyButton, MyLoader } from '../../UI'
import { InnerNavigate, MyError } from '../../index'
import { TransactionDetailItem } from './components'
import { useTransactionsDetail } from './hooks/useTransactionsDetail'
import styles from './TransactionsDetail.module.scss'

export const TransactionsDetail = () => {
  const { loading, error, data } = useTransactionsDetail()

  return (
    <>
      <InnerNavigate title='Операция' />

      {loading && <MyLoader />}
      {error && <MyError error={error} />}

      {data &&
        <>
          <TransactionDetailItem data={data} />
          <MyButton className={styles.btnEdit} type='button' text='Изменить' />
          <MyButton type='button' myType='second' text='Удалить' />
        </>}
    </>
  )
}
