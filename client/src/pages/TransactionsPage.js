import React, {useCallback, useContext, useEffect, useState} from 'react';
import {CreateTransaction} from '../components/CreateTransaction/CreateTransaction';
import {AuthContext} from '../context/AuthContext';
import axios from 'axios';
import {TransactionList} from '../components/TransactionList/TransactionList';

export const TransactionPage = () => {
  const [transactions, setTransactions] = useState([])
  const {token} = useContext(AuthContext)

  const loadTransactions = useCallback(async () => {
    try {
      const response = await axios.get('/api/v1/transactions', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setTransactions(response.data.data)
    } catch (e) {}
  }, [token])

  useEffect(() => {
    loadTransactions()
  }, [loadTransactions])

  return (
    <div>
      <h1>Страница Операций</h1>
      <CreateTransaction/>
      <br/>
      <>
        <h3>Список операций</h3>
        {<TransactionList transactions={transactions}/>}
      </>
    </div>
  )
}