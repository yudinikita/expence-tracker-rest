import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import {TransactionPage} from './pages/TransactionsPage';
import {AuthPage} from './pages/AuthPage';
import {DetailTransactionPage} from './pages/DetailTransactionPage';

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/" exact>
          <TransactionPage />
        </Route>
        <Route path="/transactions" exact>
          <TransactionPage />
        </Route>
        <Route path="/transactions/:id" exact>
          <DetailTransactionPage />
        </Route>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage/>
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}