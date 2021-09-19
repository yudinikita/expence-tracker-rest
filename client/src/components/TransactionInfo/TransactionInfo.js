import React from 'react';

export const TransactionInfo = ({transaction}) => {
  const info = transaction.data.data

  return (
    <div>
      <h3>Операция №{info._id || ''}</h3>

      <p>Сумма: <strong>{info.amount}</strong></p>
      <p>Категория: <strong>{info.category}</strong></p>
      <p>Дата создания: <strong>{new Date(info.createdAt).toLocaleDateString()}</strong></p>
      <p>Комментарий: <strong>{info.commentary}</strong></p>
    </div>
  )
}