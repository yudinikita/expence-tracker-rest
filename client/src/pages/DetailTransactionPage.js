import React, {useCallback, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';
import {useParams} from 'react-router-dom'
import {TransactionInfo} from '../components/TransactionInfo/TransactionInfo';

export const DetailTransactionPage = () => {
  const {token} = useContext(AuthContext)

  const [transaction, setTransaction] = useState(null)

  const transactionId = useParams().id

  const getTransaction = useCallback(async () => {
    try {
      const response = await axios.get(`/api/v1/transactions/${transactionId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setTransaction(response)
    } catch (e) {

    }
  }, [token, transactionId])

  useEffect(() => {
    getTransaction()
  }, [getTransaction])

  return (
    <div>
      <h1>Информация об операции</h1>
      <div>
        {transaction && <TransactionInfo transaction={transaction}/>}
      </div>
    </div>
  )
}