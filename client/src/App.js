import React from 'react'
import { AuthProvider } from 'react-auth-kit'
import { RouteComponent } from './modules/routes/routes'
import './modules/styles/main.scss'
import styles from './App.module.scss'

export const App = () => (
  <AuthProvider authType={'localstorage'}
                authName={'_auth'}
                refreshToken>
    <div className={styles.container}>
      <RouteComponent/>
    </div>
  </AuthProvider>
)
