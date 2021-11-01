import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAuthUser } from 'react-auth-kit'
import styles from './MainNavigation.module.scss'

export const MainNavigation = () => {
  const [pathname, setPathname] = useState('/')
  const location = useLocation()

  useEffect(() => {
    setPathname(location.pathname)
  }, [location])

  const auth = useAuthUser()

  if (auth()) {
    return (
      <div className={styles.mainNavigation}>
        <div className={styles.container}>
          <ul className={styles.list + ' list-reset'}>
            <li>
              <NavLink to="/" exact>
                {pathname === '/' ? (
                  <img
                    src="/images/icons/nav/home-fill.svg"
                    alt="Главная"
                  />
                ) : (
                  <img
                    src="/images/icons/nav/home-stroke.svg"
                    alt="Главная"
                    onMouseOver={e => (e.currentTarget.src = '/images/icons/nav/home-fill.svg')}
                    onMouseOut={e => (e.currentTarget.src = '/images/icons/nav/home-stroke.svg')}
                  />
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/transactions" exact>
                {pathname === '/transactions' ? (
                  <img
                    src="/images/icons/nav/transactions-fill.svg"
                    alt="Операции"
                  />
                ) : (
                  <img
                    src="/images/icons/nav/transactions-stroke.svg"
                    alt="Операции"
                    onMouseOver={e => (e.currentTarget.src = '/images/icons/nav/transactions-fill.svg')}
                    onMouseOut={e => (e.currentTarget.src = '/images/icons/nav/transactions-stroke.svg')}
                  />
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/analytics" exact>
                {pathname === '/analytics' ? (
                  <img
                    src="/images/icons/nav/analytics-fill.svg"
                    alt="Аналитика"
                  />
                ) : (
                  <img
                    src="/images/icons/nav/analytics-stroke.svg"
                    alt="Аналитика"
                    onMouseOver={e => (e.currentTarget.src = '/images/icons/nav/analytics-fill.svg')}
                    onMouseOut={e => (e.currentTarget.src = '/images/icons/nav/analytics-stroke.svg')}
                  />
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/settings" exact>
                {pathname === '/settings' ? (
                  <img
                    src="/images/icons/nav/settings-fill.svg"
                    alt="Настройки"
                  />
                ) : (
                  <img
                    src="/images/icons/nav/settings-stroke.svg"
                    alt="Настройки"
                    onMouseOver={e => (e.currentTarget.src = '/images/icons/nav/settings-fill.svg')}
                    onMouseOut={e => (e.currentTarget.src = '/images/icons/nav/settings-stroke.svg')}
                  />
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
