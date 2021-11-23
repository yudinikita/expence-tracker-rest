import React from 'react'
import PropTypes from 'prop-types'
import { useAnalyticsBalance } from './hooks/useAnalyticsBalance'
import { MyLoaderList, AnalyticsBalanceList } from './components'
import { MyError } from '../..'

export const AnalyticsBalance = ({ startDate = new Date(), endDate = new Date() }) => {
  const { AnalyticsItems, loading, error } = useAnalyticsBalance(startDate, endDate)

  if (loading) return <MyLoaderList />
  if (error) return <MyError error={error} />

  return <AnalyticsBalanceList AnalyticsItems={AnalyticsItems} />
}

AnalyticsBalance.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date)
}
