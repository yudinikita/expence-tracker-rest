import React from 'react'
import { MyCheckbox } from '../../UI'
import { AnalyticsTypes } from '../../../data'
import { MyCalendar } from '../..'
import { useCalendar } from '../../../hooks'
import { AnalyticsContainer } from './components/AnalyticsContainer'
import { useAnalyticsContainer } from './hooks/useAnalyticsContainer'
import styles from './AnalyticsMain.module.scss'

export const AnalyticsMain = () => {
  const { startDate, endDate, changeHandler } = useCalendar()
  const { typeAnalytic, handleCheckboxClick } = useAnalyticsContainer()

  return (
    <div>
      <div className={styles.tabs}>
        <MyCheckbox
          className={styles.tabsGroup}
          data={AnalyticsTypes}
          registerLabel='typeAnalytics'
          onChange={handleCheckboxClick}
        />
      </div>

      <MyCalendar className={styles.calendar} changeHandler={changeHandler} />

      <AnalyticsContainer typeAnalytic={typeAnalytic} startDate={startDate} endDate={endDate} />
    </div>
  )
}
