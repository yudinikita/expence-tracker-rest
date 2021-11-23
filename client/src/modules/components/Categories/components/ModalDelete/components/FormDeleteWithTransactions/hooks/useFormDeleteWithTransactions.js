import { useContext } from 'react'
import { ModalDeleteContext } from '../../../context'
import { useMutation } from '@apollo/client'
import { DELETE_CATEGORY_WITH_TRANSACTIONS } from '../../../../../../../graphql/mutations/category'

export const useFormDeleteWithTransactions = () => {
  const { selectedCategory, onRequestClose } = useContext(ModalDeleteContext)

  const [deleteCategoryWithTransactions] = useMutation(
    DELETE_CATEGORY_WITH_TRANSACTIONS,
    {
      refetchQueries: ['getCategories', 'getTransactions']
    })

  const clickDeleteWithTransactions = async () => {
    try {
      await deleteCategoryWithTransactions({
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

  return { clickDeleteWithTransactions }
}
