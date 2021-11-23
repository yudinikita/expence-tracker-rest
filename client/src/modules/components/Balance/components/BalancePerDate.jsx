import React from 'react'
import PropTypes from 'prop-types'
import { Price } from '../../'
import styles from '../Balance.module.scss'

export const BalancePerDate = ({ amount }) => {
  return (
    <p className={styles.balancePerDateContainer} title='Сумма операций за день'>
      <Price
        className={styles.balancePerDate}
        amount={amount}
        haveColor haveSign
        signType='arrow'
      />
    </p>
  )
}

BalancePerDate.propTypes = {
  amount: PropTypes.number
}
