import React from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { MainNavigation } from '../components'
import { HomePage, LoginPage, RegistrationPage, TransactionPage, ActivatePage } from '../pages'
import { PrivateRoute, useIsAuthenticated } from 'react-auth-kit'
import { useAuthUser } from 'react-auth-kit'

export const RouteComponent = () => {
  const isAuthenticated = useIsAuthenticated()
  const auth = useAuthUser()

  if (auth()?.isActivated === false) {
    return (
      <Router>
        <Switch>
          <Route path='/activate' component={ActivatePage} exact/>
        </Switch>
        <Redirect to='/activate' />
      </Router>
    )
  }

  return (
    <Router>
      <MainNavigation/>
      <Switch>
        <Route path='/login' component={LoginPage} exact>
          {isAuthenticated() && <Redirect to='/'/>}
        </Route>
        <Route path='/registration' component={RegistrationPage} exact>
          {isAuthenticated() && <Redirect to='/'/>}
        </Route>
        <Route path='/activate' component={ActivatePage} exact>
          {!auth()?.isActivated && <Redirect to='/'/>}
        </Route>
        <Route path='/activate/:id' component={ActivatePage} exact>
          {auth()?.isActivated && <Redirect to='/login'/>}
        </Route>
        <PrivateRoute path='/' component={HomePage} loginPath={'/login'} exact/>
        <PrivateRoute path={'/transactions'} component={TransactionPage} loginPath={'/login'} exact/>
      </Switch>
    </Router>
  )
}

// <Route path='/transactions' component={TransactionPage} exact/>
