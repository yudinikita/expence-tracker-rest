import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthUser } from 'react-auth-kit'
import styles from './MainHeader.module.scss'

export const MainHeader = () => {

  const auth = useAuthUser()

  if (auth()) {
    return (
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <Link to='/'>
            <img
              src="/images/logo.svg"
              width='40'
              height='40'
              alt="Логотип"
            />
          </Link>
          <Link to='/transactions/create'>
          <span
            className={styles.btnAdd}
          >+</span>
          </Link>
        </div>
      </div>
    )
  }
}
