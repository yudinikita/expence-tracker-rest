import React, { useContext } from 'react'
import { useFormDeleteReplace } from './hooks'
import { ModalDeleteContext } from '../../context'

export const FormDeleteReplace = () => {
  const { selectedCategory } = useContext(ModalDeleteContext)

  const {
    categories,
    onReplaceSelect,
    clickDeleteReplace
  } = useFormDeleteReplace()

  return (
    <div>
      <p>Удалить категорию и заменить на:</p>
      <select onChange={onReplaceSelect} defaultValue={''}>
        <option disabled value=''>Выберите категорию</option>
        {categories
          .filter(category => category?.title !== selectedCategory?.title)
          .map(category => (
            <option
              key={category._id}
              value={category?._id}
            >
              {category?.title}
            </option>
          ))}
      </select>
      <br /><br />
      <button
        type='button'
        onClick={clickDeleteReplace}
      >
        Заменить
      </button>
      <br /><br />
    </div>
  )
}
