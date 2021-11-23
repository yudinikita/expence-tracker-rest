import { gql } from '@apollo/client'

export const CREATE_CATEGORY = gql`
  mutation createCategory($category: CategoryInput) {
    createCategory(category: $category) {
      _id
      title
    }
  }
`

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($id: ID, $category: CategoryInput) {
    updateCategory(id: $id, category: $category) {
      _id
      title
    }
  }
`

export const DELETE_CATEGORY = gql`
  mutation deleteCategory($id: ID) {
    deleteCategory(id: $id)
  }
`

export const DELETE_CATEGORY_REPLACE = gql`
  mutation deleteCategoryReplace($id: ID, $newId: ID) {
    deleteCategoryReplace(id: $id, newId: $newId)
  }
`

export const DELETE_CATEGORY_WITH_TRANSACTIONS = gql`
  mutation deleteCategoryWithTransactions($id: ID) {
    deleteCategoryWithTransactions(id: $id)
  }
`
