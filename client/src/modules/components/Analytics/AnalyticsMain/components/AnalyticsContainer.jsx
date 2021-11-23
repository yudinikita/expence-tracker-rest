import React from 'react'
import PropTypes from 'prop-types'
import { AnalyticsBalance, AnalyticsExpense, AnalyticsIncome } from '../../..'

export const AnalyticsContainer = ({
  typeAnalytic,
  startDate,
  endDate
}) => {
  switch (typeAnalytic) {
    case 'balance':
      return (<AnalyticsBalance startDate={startDate} endDate={endDate} />)
    case 'expense':
      return (<AnalyticsExpense startDate={startDate} endDate={endDate} />)
    case 'income':
      return (<AnalyticsIncome startDate={startDate} endDate={endDate} />)
    default:
      return (<AnalyticsBalance startDate={startDate} endDate={endDate} />)
  }
}

AnalyticsContainer.propTypes = {
  typeAnalytic: PropTypes.string,
  startDate: PropTypes.object,
  endDate: PropTypes.object
}
