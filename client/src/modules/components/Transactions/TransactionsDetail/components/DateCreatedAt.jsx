import React from 'react'
import PropTypes from 'prop-types'
import { getMonthDay } from '../../../../utils/date'

export const DateCreatedAt = ({ createdAt }) => {
  const dateCreatedAt = new Date(createdAt)
  const date =
    dateCreatedAt.getDate() + ' ' +
    getMonthDay(dateCreatedAt) + ' ' +
    dateCreatedAt.getFullYear() + ' г. в ' +
    dateCreatedAt.toLocaleTimeString()
  return (
    <p>{date}</p>
  )
}

DateCreatedAt.propTypes = {
  createdAt: PropTypes.string
}
