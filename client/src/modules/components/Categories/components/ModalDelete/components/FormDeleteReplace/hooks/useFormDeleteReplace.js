import { useContext, useState } from 'react'
import { ModalDeleteContext } from '../../../context'
import { useMutation, useQuery } from '@apollo/client'
import { GET_CATEGORIES } from '../../../../../../../graphql/query/category.query'
import { DELETE_CATEGORY_REPLACE } from '../../../../../../../graphql/mutations/category'

export const useFormDeleteReplace = () => {
  const { selectedCategory, onRequestClose } = useContext(ModalDeleteContext)

  const [selectReplaceId, setSelectReplaceId] = useState()

  const { data } = useQuery(GET_CATEGORIES)

  const onReplaceSelect = (e) => {
    setSelectReplaceId(e.target.value)
  }

  const [deleteCategoryReplace] = useMutation(
    DELETE_CATEGORY_REPLACE,
    {
      refetchQueries: ['getCategories', 'getTransactions'],
    })

  const clickDeleteReplace = async () => {
    if (selectReplaceId) {
      try {
        await deleteCategoryReplace({
          variables: {
            id: selectedCategory._id,
            newId: selectReplaceId
          }
        })
      } catch (e) {
        console.log({ ...e })
      } finally {
        onRequestClose()
      }
    } else {
      window.alert('Выберите категорию!')
    }
  }

  return {
    categories: data?.getCategories,
    onReplaceSelect,
    clickDeleteReplace
  }
}
