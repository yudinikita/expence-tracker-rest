import React from 'react'
import PropTypes from 'prop-types'
import styles from '../LineProgressBar.module.scss'

export const ProgressBarContainer = ({ containerRef, height, children }) => (
  <div
    ref={containerRef}
    className={styles.container}
    style={{ height }}
  >
    {children}
  </div>
)

ProgressBarContainer.propTypes = {
  containerRef: PropTypes.object,
  height: PropTypes.number,
  children: PropTypes.node
}
