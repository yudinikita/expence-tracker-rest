import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from '../../../../graphql/query/category.query'

export const useCategories = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES)
  return { loading, error, data }
}
