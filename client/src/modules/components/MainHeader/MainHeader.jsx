import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthUser } from 'react-auth-kit'
import { Logo } from '..'
import SVG from 'react-inlinesvg'
import styles from './MainHeader.module.scss'

export const MainHeader = () => {
  const auth = useAuthUser()

  if (auth()) {
    return (
      <div className={`${styles.mainHeader} contentContainer`}>
        <ul className={styles.container}>
          <li>
            <Link to='/' className={styles.logo} title='Денежки'>
              <Logo />
            </Link>
          </li>
          <li>
            <Link to='/transactions/create' className={styles.btnAdd} title='Добавить операцию'>
              <SVG
                src='/images/icons/plus.svg'
                title='Иконка плюс'
                width='24'
                height='24'
                loader={<p>+</p>}
              />
            </Link>
          </li>
        </ul>
      </div>
    )
  } else {
    return null
  }
}
