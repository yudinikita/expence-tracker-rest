import React from 'react'
import PropTypes from 'prop-types'
import styles from './PageTitle.module.scss'

export const PageTitle = ({ title, iconPath }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>

      <div className={styles.icon}>
        <img src={iconPath} alt='Иконка' width='31' height='31' />
      </div>
    </div>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string,
  iconPath: PropTypes.string
}
