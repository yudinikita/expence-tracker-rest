import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@apollo/client'
import { ADD_TRANSACTION } from '../../../graphql/mutations/transaction.mutation'
import { GET_CATEGORIES } from '../../../graphql/query/category.query'
import { MyButton, MyCheckbox, MyInput, MyLoader, MySelect } from '../../UI'
import { InnerNavigate, MyError } from '../..'
import styles from './TransactionsForm.module.scss'

const radios = [
  { value: 'expense', name: 'Расход' },
  { value: 'income', name: 'Доход' }
]

export const TransactionsForm = () => {
  const { register, handleSubmit } = useForm()

  const [createTransaction] = useMutation(ADD_TRANSACTION, {
    refetchQueries: ['getTransactions']
  })

  const { loading, error, data } = useQuery(GET_CATEGORIES)

  const history = useHistory()

  if (loading) return <MyLoader />
  if (error) return <MyError error={error} />

  if (data?.getCategories?.length === 0) {
    return (
      <p>
        Категорий не найдено!<Link to='/categories/create'>Создать</Link>
      </p>
    )
  }

  const onSubmit = async data => {
    try {
      await createTransaction({ variables: { transaction: data } })
      history.push('/transactions')
    } catch (e) {
      console.log({ ...e })
    }
  }

  return (
    <div className={styles.container}>
      <InnerNavigate title='Новая операция' />

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <MyCheckbox data={radios} registerLabel='type' />

        <MyInput label='Сумма' type='number' register={register} registerLabel='amount' required />

        <MySelect label='Категория' data={data?.getCategories} {...register('category')} />

        <MyInput label='Дата' type='datetime-local' register={register} registerLabel='createdAt' required />

        <MyInput label='Комментарий' type='text' register={register} registerLabel='commentary' />

        <MyButton type='submit' text='Добавить' />
      </form>
    </div>
  )
}
