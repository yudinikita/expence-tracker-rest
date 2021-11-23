import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Price } from '../..'
import styles from './TransactionsItem.module.scss'

const Commentary = ({ text }) => (
  <p className={styles.commentary}>
    {text.trim().slice(0, 65)}
    {text.length > 65 && '..'}
  </p>
)

export const TransactionsItem = ({ transaction }) => {
  const { _id, amount, commentary, category } = transaction

  return (
    <Link
      to={`/transactions/${_id}`}
      className={styles.link}
      title='Операция'
    >
      <article className={styles.container}>
        <div className={styles.containerTitleAmount}>
          <p className={styles.title}>{category?.title || 'Без категории'}</p>
          <Price className={styles.amount} amount={amount} haveColor haveSign />
        </div>
        {commentary && <Commentary text={commentary} />}
      </article>
    </Link>
  )
}

Commentary.propTypes = {
  text: PropTypes.string
}

TransactionsItem.propTypes = {
  transaction: PropTypes.exact({
    _id: PropTypes.string,
    amount: PropTypes.number,
    category: PropTypes.object,
    commentary: PropTypes.string,
    __typename: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  })
}
