import React from 'react'
import { TransactionsList } from '../components/index'

export const TransactionPage = () => {

  return (
    <div className='container'>
      <h1>Операции 💰</h1>
      <TransactionsList/>
    </div>
  )
}
