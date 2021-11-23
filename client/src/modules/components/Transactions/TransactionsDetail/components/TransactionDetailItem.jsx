import React from 'react'
import PropTypes from 'prop-types'
import { Price } from '../../../Price'
import { DateCreatedAt } from './'
import styles from '../TransactionsDetail.module.scss'

export const TransactionDetailItem = ({ data }) => {
  return (
    <div className={styles.container}>
      <Price
        amount={data?.getTransactionDetail.amount}
        haveColor haveSign
        style={{
          fontWeight: '700',
          fontSize: '30px',
          lineHeight: '140%'
        }}
      />
      <h2 className={styles.category}>
        {data?.getTransactionDetail?.category?.title || 'Без категории'}
      </h2>
      <DateCreatedAt createdAt={data?.getTransactionDetail?.createdAt} />
      <p className={styles.commentary}>
        {data?.getTransactionDetail?.commentary}
      </p>
    </div>
  )
}

TransactionDetailItem.propTypes = {
  data: PropTypes.object
}
