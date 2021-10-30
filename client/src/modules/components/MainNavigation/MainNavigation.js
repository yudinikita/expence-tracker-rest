import React from 'react'
import { Link } from 'react-router-dom'
import { useSignOut } from 'react-auth-kit'
import { useAuthUser } from 'react-auth-kit'

export const MainNavigation = () => {

  const auth = useAuthUser()
  const signOut = useSignOut()

  if (auth()) {
    return (
      <>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/transactions">Операции</Link></li>
        <li><button onClick={() => signOut()}>Выйти из аккаунта</button></li>
        <li>Email: {auth().email}</li>
      </>
    )
  }

  return (
    <>
      <li><Link to="/login">Войти</Link></li>
      <li><Link to="/registration">Зарегистрироваться</Link></li>
    </>
  )
}
