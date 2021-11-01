import React from 'react'
import { useForm } from 'react-hook-form'
import { MyCheckbox, MyInput, MySelect, MyButton } from '../UI/index'
import styles from './TransactionForm.module.scss'
import { useMutation } from '@apollo/client'
import { ADD_TRANSACTION } from '../../graphql/mutations/transaction.mutation'
import { useHistory } from 'react-router-dom'

export const TransactionForm = () => {
  const { register, handleSubmit } = useForm()
  const [createTransaction] = useMutation(ADD_TRANSACTION, {
    refetchQueries: 'active'
  })

  const history = useHistory()

  const onSubmit = async data => {
    await createTransaction({ variables: { transaction: data } })
    history.push(`/transactions`)
  }

  const categories = [
    { id: '6150eb7c4d556ef270866ba0', name: 'Квартира (дом)' },
    { id: '6150eb7c4d556ef270866ba0', name: 'Продукты' },
    { id: '6150eb7c4d556ef270866ba0', name: 'Образование' },
  ]

  const radios = [
    { value: 'expense', name: 'Расход' },
    { value: 'income', name: 'Доход' },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.navigate}>
        <button onClick={history.goBack} className={styles.navigate__link + ' btn-reset'}>
          <img src="/images/icons/arrow-left.svg" alt="Кнопка назад" width='21' height='21'/>
        </button>
        <h2 className={styles.title}>Новая операция</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <MyCheckbox data={radios} registerLabel='type'/>
        <MyInput label='Сумма' type='number' register={register} registerLabel='amount'/>
        <MySelect label='Категория' data={categories} {...register('category')}/>
        <MyInput label='Дата' type='date' register={register} registerLabel='createdAt'/>
        <MyInput label='Комментарий' type='text' register={register} registerLabel='commentary'/>
        <MyButton type='submit' text='Сохранить'/>
      </form>
    </div>
  )
}
