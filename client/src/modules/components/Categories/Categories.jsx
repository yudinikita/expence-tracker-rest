import React from 'react'
import { MyError } from '../MyError'
import { MyLoader } from '../UI'
import { CategoriesForm, CategoriesList } from './components'
import { useCategories } from './hooks'

export const Categories = () => {
  const { loading, error, data } = useCategories()

  if (loading) return <MyLoader />
  if (error) return <MyError error={error} />

  return (
    <div>
      <CategoriesForm />
      <CategoriesList categories={data?.getCategories} />
    </div>
  )
}
