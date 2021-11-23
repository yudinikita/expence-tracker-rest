import React from 'react'
import { AuthProvider } from 'react-auth-kit'
import { RouteComponent } from './modules/routes/routes'
import './modules/styles/main.scss'

export const App = () => (
  <AuthProvider
    authType='localstorage'
    authName='_auth'
    refreshToken
  >
    <RouteComponent />
  </AuthProvider>
)
