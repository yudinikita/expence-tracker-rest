import React from 'react'
import PropTypes from 'prop-types'
import styles from './LayoutMain.module.scss'
import { MainHeader, MainNavigation } from '../../components'

export const LayoutMain = ({ children }) => {
  return (
    <div className={styles.container}>
      <MainHeader />

      <div className='container'>
        {children}
      </div>

      <MainNavigation />
    </div>
  )
}

LayoutMain.propTypes = {
  children: PropTypes.node
}
