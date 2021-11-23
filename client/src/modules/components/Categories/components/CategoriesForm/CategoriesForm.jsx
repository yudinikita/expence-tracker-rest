import React from 'react'
import { useCategoriesForm } from './hooks/useCategoriesForm'
import styles from './CategoriesForm.module.scss'

export const CategoriesForm = () => {
  const {
    error,
    loading,
    inputCategory,
    onSubmitForm,
    onChangeInput
  } = useCategoriesForm()

  return (
    <form
      onSubmit={onSubmitForm}
      className={styles.container}
    >
      <input
        className={styles.input}
        onChange={onChangeInput}
        value={inputCategory}
        type='text'
        disabled={loading}
      />
      {error && <p>Ошибка!</p>}
      <button
        type='submit'
        disabled={loading}
      >
        Добавить
      </button>
    </form>
  )
}
