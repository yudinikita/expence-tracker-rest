import React from 'react'
import { useFormDeleteBase } from './hooks'

export const FormDeleteBase = () => {
  const { clickDeleteBase } = useFormDeleteBase()

  return (
    <div>
      <p>Вы&#160;уверены, что хотите удалить категорию? Операции получат статус &#171;Без категории&#187;</p>
      <button
        type='button'
        onClick={clickDeleteBase}
      >
        Удалить категорию
      </button>
      <br /><br />
    </div>
  )
}
