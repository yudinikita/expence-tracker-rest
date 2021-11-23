import React from 'react'
import { MyCalendar, TransactionsContainer } from '../..'
import { useCalendar } from '../../../hooks'

export const TransactionsMain = () => {
  const { calendarDate, changeHandler } = useCalendar()

  return (
    <>
      <MyCalendar changeHandler={changeHandler} />
      <TransactionsContainer calendarDate={calendarDate} />
    </>
  )
}
