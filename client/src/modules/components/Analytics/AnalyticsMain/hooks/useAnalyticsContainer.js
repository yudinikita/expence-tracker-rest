import { useState } from 'react'

export const useAnalyticsContainer = () => {
  const [typeAnalytic, setTypeAnalytic] = useState('')

  const handleCheckboxClick = (e) => {
    setTypeAnalytic(e.target.value)
  }

  return { typeAnalytic, handleCheckboxClick }
}
