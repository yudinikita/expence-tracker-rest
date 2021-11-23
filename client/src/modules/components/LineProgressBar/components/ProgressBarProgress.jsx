import React from 'react'
import PropTypes from 'prop-types'
import styles from '../LineProgressBar.module.scss'

export const ProgressBarProgress = ({ color, progressOffset }) => (
  <div
    className={styles.progress}
    style={{
      backgroundColor: color,
      width: progressOffset
    }}
  />
)

ProgressBarProgress.propTypes = {
  color: PropTypes.string,
  progressOffset: PropTypes.number
}
