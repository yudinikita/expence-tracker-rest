import { useState } from 'react'
import { endDateByMonth, firstDateByMonth } from '../utils/date'

export const useCalendar = () => {
  const [calendarDate, setCalendarDate] = useState(new Date())

  const changeHandler = ({ activeStartDate }) => {
    const date = new Date(activeStartDate)
    setCalendarDate(date)
  }

  const startDate = firstDateByMonth(new Date(calendarDate))
  const endDate = endDateByMonth(new Date(calendarDate))

  return { calendarDate, changeHandler, startDate, endDate }
}
