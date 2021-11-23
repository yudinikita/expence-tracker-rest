import React from 'react'
import PropTypes from 'prop-types'
import { useSettings } from '../../hooks'
import styles from './Price.module.scss'

const styleAmount = (amount) => {
  if (amount > 0) return styles.plus
  if (amount < 0) return styles.minus
}

const Currency = ({ currency }) => <span>{currency || '₽'}</span>

export const Price = ({
  amount,
  haveColor,
  haveSign,
  className,
  signType,
  style
}) => {
  const { settings } = useSettings()

  const Sign = ({ haveSign, amount, signType }) => {
    if (!haveSign) return null
    switch (signType) {
      case 'arrow':
        if (amount > 0) return '🠕 '
        if (amount < 0) return '🠗 '
        return ''
      default:
        return amount > 0 ? '+' : ''
    }
  }

  return (
    <span
      className={`${haveColor && styleAmount(amount)} ${styles.amount} ${className}`}
      style={{ ...style }}
    >
      <Sign
        amount={amount}
        haveSign={haveSign}
        signType={signType}
      />{amount} <Currency currency={settings.currency} />
    </span>
  )
}

Currency.propTypes = {
  currency: PropTypes.string
}

Price.propTypes = {
  amount: PropTypes.number,
  haveColor: PropTypes.bool,
  haveSign: PropTypes.bool,
  className: PropTypes.string,
  signType: PropTypes.oneOf(['arrow']),
  style: PropTypes.object
}
