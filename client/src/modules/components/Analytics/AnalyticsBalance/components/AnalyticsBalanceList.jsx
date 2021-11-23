import React from 'react'
import PropTypes from 'prop-types'
import { AnalyticsItem } from '../../../index'

export const AnalyticsBalanceList = ({ AnalyticsItems }) => {
  return (
    <ul className='list-reset'>
      {AnalyticsItems.map(analyticsItem => (
        <li key={analyticsItem.id} style={{ marginBottom: '25px' }}>
          <AnalyticsItem
            title={analyticsItem.title}
            amount={analyticsItem.amount}
            percent={analyticsItem.percent}
            color={analyticsItem.color}
          />
        </li>
      ))}
    </ul>
  )
}

AnalyticsBalanceList.propTypes = {
  AnalyticsItems: PropTypes.array
}
