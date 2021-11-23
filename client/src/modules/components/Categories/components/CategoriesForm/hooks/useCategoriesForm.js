import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_CATEGORY } from '../../../../../graphql/mutations/category'
import { useValidationCategory } from '../../../hooks'

export const useCategoriesForm = () => {
  const [inputCategory, setInputCategory] = useState('')
  const { isValid, messageFailed } = useValidationCategory(inputCategory)

  const [createCategory, { error, loading }] = useMutation(CREATE_CATEGORY, {
    refetchQueries: ['getCategories']
  })

  const onSubmitForm = async e => {
    e.preventDefault()
    if (isValid) {
      try {
        await createCategory({
          variables: {
            category: {
              title: inputCategory
            }
          }
        })
      } catch (e) {
        console.log({ ...e })
      } finally {
        setInputCategory('')
      }
    } else {
      console.log(messageFailed)
    }
  }

  const onChangeInput = async e => {
    setInputCategory(e.target.value)
  }

  return {
    onSubmitForm,
    onChangeInput,
    error,
    loading,
    inputCategory
  }
}
