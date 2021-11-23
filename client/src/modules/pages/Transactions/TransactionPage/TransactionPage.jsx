import React from 'react'
import { Link } from 'react-router-dom'
import { PageTitle, TransactionsMain } from '../../../components'

export const TransactionPage = () => {
  return (
    <>
      <PageTitle title='Операции' iconPath='/images/icons/emoji/money.webp' />
      <Link to='/transactions/search' className='linkSecond'>Поиск</Link>
      <TransactionsMain />
    </>
  )
}
