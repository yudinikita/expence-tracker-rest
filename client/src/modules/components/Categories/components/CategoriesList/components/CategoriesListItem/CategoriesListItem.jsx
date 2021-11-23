import React, { useState } from 'react'
import PropTypes from 'prop-types'
import InlineSVG from 'react-inlinesvg'
import { useMutation } from '@apollo/client'
import { UPDATE_CATEGORY } from '../../../../../../graphql/mutations/category'
import { GET_CATEGORIES } from '../../../../../../graphql/query/category.query'
import { useValidationCategory } from '../../../../hooks'
import styles from './CategoriesListItem.module.scss'

export const CategoriesListItem = ({ category, openModalDelete, selectCategory }) => {
  const [isEditing, setEditing] = useState(false)
  const [editInput, setEditInput] = useState(category?.title)
  const { isValid, messageFailed } = useValidationCategory(editInput)

  const [updateCategory] = useMutation(UPDATE_CATEGORY, {
    refetchQueries: [
      GET_CATEGORIES,
      'getCategories'
    ]
  })

  const handleClickEdit = () => {
    setEditing(true)
  }

  const handleClickEditSave = async () => {
    if (isValid) {
      try {
        await updateCategory({
          variables: {
            id: category?._id,
            category: {
              title: editInput
            }
          }
        })
      } catch (e) {
        console.log({ ...e })
      } finally {
        setEditing(false)
      }
    } else {
      console.log(messageFailed)
    }
  }

  const handleClickEditCancel = () => {
    setEditInput(category?.title)
    setEditing(false)
  }

  const handleClickDelete = () => {
    selectCategory(category)
    openModalDelete()
  }

  const editingTemplate = (
    <div className={styles.item}>
      <div className={styles.titleContainer}>
        <input
          type='text'
          className={styles.titleInput}
          value={editInput}
          onChange={e => setEditInput(e.target.value)}
        />
      </div>
      <div className={styles.groupBtn + ' ' + styles.groupBtnEdit}>
        <button
          onClick={handleClickEditSave}
          className={`${styles.btn} ${styles.btnEditSave}`}
        >
          <InlineSVG src='/images/icons/tick.svg' />
        </button>
        <button
          onClick={handleClickEditCancel}
          className={`${styles.btn} ${styles.btnEditCancel}`}
        >
          <InlineSVG src='/images/icons/cross.svg' />
        </button>
      </div>
    </div>
  )

  const viewTemplate = (
    <div className={styles.item}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{editInput}</p>
      </div>
      <div className={styles.groupBtn}>
        <button
          onClick={handleClickEdit}
          className={`${styles.btn} ${styles.btnEdit}`}
        >
          <InlineSVG src='/images/icons/edit.svg' />
        </button>
        <button
          onClick={handleClickDelete}
          className={`${styles.btn} ${styles.btnDelete}`}
        >
          <InlineSVG src='/images/icons/bin.svg' />
        </button>
      </div>
    </div>
  )

  return isEditing ? editingTemplate : viewTemplate
}

CategoriesListItem.propTypes = {
  category: PropTypes.exact({
    _id: PropTypes.string,
    title: PropTypes.string,
    __typename: PropTypes.string,
  }),
  openModalDelete: PropTypes.func,
  selectCategory: PropTypes.func,
}
