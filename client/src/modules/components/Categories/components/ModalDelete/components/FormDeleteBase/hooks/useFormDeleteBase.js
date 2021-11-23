import { useContext } from 'react'
import { ModalDeleteContext } from '../../../context'
import { useMutation } from '@apollo/client'
import { DELETE_CATEGORY } from '../../../../../../../graphql/mutations/category'
import { GET_CATEGORIES } from '../../../../../../../graphql/query/category.query'

export const useFormDeleteBase = () => {
  const { selectedCategory, onRequestClose } = useContext(ModalDeleteContext)

  const [deleteCategory] = useMutation(
    DELETE_CATEGORY,
    {
      refetchQueries: [
        GET_CATEGORIES,
        'getCategories'
      ],
    })

  const clickDeleteBase = async () => {
    try {
      await deleteCategory({
        variables: {
          id: selectedCategory._id
        }
      })
    } catch (e) {
      console.log({ ...e })
    } finally {
      onRequestClose()
    }
  }

  return { clickDeleteBase }
}
