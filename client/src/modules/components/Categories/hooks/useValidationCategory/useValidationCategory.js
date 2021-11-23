import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from '../../../../graphql/query/category.query'
import { checkUnique, checkValidLength } from './utils/validations'

export const useValidationCategory = (verifiableTitle) => {
  const getCategories = useQuery(GET_CATEGORIES)
  const categories = getCategories?.data?.getCategories

  const isUnique = checkUnique(categories, verifiableTitle)
  const isValidLength = checkValidLength(verifiableTitle)

  if (!isUnique) {
    return {
      isValid: false,
      messageFailed: 'Такая категория уже существует'
    }
  }

  if (!isValidLength) {
    return {
      isValid: false,
      messageFailed: 'Некорректная длина категории'
    }
  }

  return {
    isValid: true,
    messageFailed: ''
  }
}
