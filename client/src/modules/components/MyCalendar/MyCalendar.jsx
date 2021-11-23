import React from 'react'
import PropTypes from 'prop-types'
import { Calendar } from 'react-calendar'
import SVG from 'react-inlinesvg'
import { calendarLabel } from '../../utils/date'

const PrevLabel = () => <SVG src='/images/icons/arrow-left.svg' />
const NextLabel = () => <SVG src='/images/icons/arrow-right.svg' />

export const MyCalendar = ({
  className,
  changeHandler
}) => {
  return (
    <Calendar
      allowPartialRange
      prevLabel={<PrevLabel />}
      nextLabel={<NextLabel />}
      prev2Label={null}
      next2Label={null}
      navigationLabel={calendarLabel}
      maxDetail='month'
      minDetail='month'
      onActiveStartDateChange={changeHandler}
      className={className}
    />
  )
}

MyCalendar.propTypes = {
  className: PropTypes.string,
  changeHandler: PropTypes.func
}
