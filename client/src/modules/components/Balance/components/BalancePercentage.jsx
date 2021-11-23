import React from 'react'
import PropTypes from 'prop-types'
import styles from '../Balance.module.scss'

export const BalancePercentage = ({ amount }) => {
  return (
    <p className={styles.balancePercent} title='Процент суммы за день от баланса'>
      {amount > 0 ? '+' : ''}
      {amount}%
    </p>
  )
}

BalancePercentage.propTypes = {
  amount: PropTypes.number
}
