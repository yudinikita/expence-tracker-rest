import React from 'react';
import {Link} from 'react-router-dom'

export const TransactionList = ({ transactions }) => {
  if (!transactions.length) {
    return (
      <p>
        Операций пока нет!
      </p>
    )
  }

  return (
      <table>
        <thead>
        <tr>
          <th>№</th>
          <th>Сумма</th>
          <th>Категория</th>
          <th>Дата</th>
          <th>Комментарий</th>
          <th>Управление</th>
        </tr>
        </thead>

        <tbody>
        {transactions.map((transaction, index) => {
          return (
            <tr key={transaction._id}>
              <td>{index + 1}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
              <td>{transaction.commentary}</td>
              <td>
                <Link to={`transactions/${transaction._id}`}>Открыть</Link>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
  )
}