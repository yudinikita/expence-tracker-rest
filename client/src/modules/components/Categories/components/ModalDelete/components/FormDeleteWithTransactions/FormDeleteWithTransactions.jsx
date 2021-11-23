import React from 'react'
import { useFormDeleteWithTransactions } from './hooks'

export const FormDeleteWithTransactions = () => {
  const { clickDeleteWithTransactions } = useFormDeleteWithTransactions()

  return (
    <div>
      <p>Удалить категорию и все операции с ней</p>
      <button
        type='button'
        onClick={clickDeleteWithTransactions}
      >
        Удалить операции
      </button>
      <br /><br />
    </div>
  )
}
