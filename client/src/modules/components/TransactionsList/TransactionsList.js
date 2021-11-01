import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_TRANSACTIONS } from '../../graphql/query/transaction.query'
import { TransactionItem } from '../TransactionItem/TransactionItem'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './CalendarStyle.css'
import styles from './TransactionList.module.scss'

export const TransactionsList = () => {
  const [calendarValue, setCalendarValue] = useState(new Date().getMonth())
  const [calendarYearValue, setCalendarYearValue] = useState(new Date().getFullYear())

  const { loading, error, data } = useQuery(GET_TRANSACTIONS)

  if (loading) return 'Загрузка...'
  if (error) return `Ошибка! ${error.message}`

  const changeHandler = ({ activeStartDate }) => {
    setCalendarValue(new Date(activeStartDate).getMonth())
    setCalendarYearValue(new Date(activeStartDate).getFullYear())
  }

  const shouldBeTransaction = (transactionDate) => {
    return transactionDate.getMonth() === calendarValue
      && transactionDate.getFullYear() === calendarYearValue
  }

  const nowDateTransactions = []

  function getWeekDay (date) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
    return days[date.getDay()]
  }

  function getMonthDay (date) {
    const monthNames = ['января', 'Февраля', 'марта', 'апреля', 'Мая', 'Июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ]
    return monthNames[date.getMonth()]
  }

  const transactionListItem = (transaction) => {
    const transactionDateCreatedAt = new Date(transaction.createdAt)
    const $transactionDate = (
      <p style={{ marginTop: '15px' }}>
        {transactionDateCreatedAt.getDate()} {getMonthDay(transactionDateCreatedAt)}, {getWeekDay(transactionDateCreatedAt)}
      </p>
    )

    const shouldBeTransactionDate = () => {
      if (nowDateTransactions.pop() !== transactionDateCreatedAt.getDate()) {
        nowDateTransactions.push(transactionDateCreatedAt.getDate())
        return $transactionDate
      }
      nowDateTransactions.push(transactionDateCreatedAt.getDate())
    }

    return (
      <>
        {shouldBeTransaction(transactionDateCreatedAt)
        &&
        <>
          {shouldBeTransactionDate()}
          <TransactionItem key={transaction._id} transaction={transaction}/>
        </>}
      </>
    )
  }

  return (
    <div>
      <Calendar
        allowPartialRange={true}
        maxDetail='month'
        minDetail='month'
        onActiveStartDateChange={changeHandler}
        className={styles.calendar}
      />

      {data.getTransactions.slice(0).reverse().map(transaction => transactionListItem(transaction))}
    </div>
  )
}
