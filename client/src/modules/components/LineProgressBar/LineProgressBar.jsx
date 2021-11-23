import React from 'react'
import PropTypes from 'prop-types'
import { useLineProgressBar } from './hooks/useLineProgressBar'
import { ProgressBarContainer, ProgressBarPercent, ProgressBarProgress } from './components'

export const LineProgressBar = ({
  percent = 0,
  height,
  width,
  color
}) => {
  const { containerRef, progressOffset } = useLineProgressBar(width, percent)

  return (
    <ProgressBarContainer containerRef={containerRef} height={height}>
      <ProgressBarPercent percent={percent} />
      <ProgressBarProgress color={color} progressOffset={progressOffset} />
    </ProgressBarContainer>
  )
}

LineProgressBar.propTypes = {
  percent: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string
}
