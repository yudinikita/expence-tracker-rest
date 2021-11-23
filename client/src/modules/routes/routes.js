import React from 'react'
import { Switch, Route, HashRouter as Router, Redirect } from 'react-router-dom'
import { PrivateRoute, useIsAuthenticated, useAuthUser } from 'react-auth-kit'
import { LoginPage, RegistrationPage, ActivatePage, Page404 } from '../pages'
import { privateRoutes } from './privateRoutes'
import { SettingsProvider } from '../context/Settings'
import { LayoutMain } from '../layouts'

export const RouteComponent = () => {
  const isAuthenticated = useIsAuthenticated()
  const auth = useAuthUser()
  const loginPath = '/login'

  if (auth()?.isActivated === false) {
    return (
      <Router>
        <Switch>
          <Route path='/activate' component={ActivatePage} exact />

          <Route path='/404' component={Page404} exact />
          <Route><Redirect to='/404' /></Route>
        </Switch>
        <Redirect to='/activate' />
      </Router>
    )
  }

  return (
    <SettingsProvider>
      <Router>
        <LayoutMain>
          <Switch>
            <Route path='/login' component={LoginPage} exact>
              {isAuthenticated() && <Redirect to='/' />}
            </Route>
            <Route path='/registration' component={RegistrationPage} exact>
              {isAuthenticated() && <Redirect to='/' />}
            </Route>
            <Route path='/activate' component={ActivatePage} exact>
              {!auth()?.isActivated && <Redirect to='/' />}
            </Route>
            <Route path='/activate/:id' component={ActivatePage} exact>
              {auth()?.isActivated && <Redirect to='/login' />}
            </Route>

            {privateRoutes.map(route =>
              <PrivateRoute
                path={route.path}
                component={route.component}
                loginPath={loginPath}
                exact={route.exact}
                key={route.id}
              />)}

            <Route path='/404' component={Page404} exact />
            <Route><Redirect to='/404' /></Route>
          </Switch>
        </LayoutMain>
      </Router>
    </SettingsProvider>
  )
}
