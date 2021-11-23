import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignIn } from 'react-auth-kit'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../../graphql/mutations/auth.mutation'

export const LoginForm = () => {
  const signIn = useSignIn()

  const [myError, setMyError] = useState('')

  const [formData, setFormData] = useState({ email: '', password: '' })

  // eslint-disable-next-line
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER, {
    variables: {
      userInput: {
        email: formData.email,
        password: formData.password
      }
    },
    errorPolicy: 'all'
  })

  if (loading) return 'Загрузка...'

  const submitHandler = async e => {
    e.preventDefault()
    try {
      const res = await loginUser()
      const userData = res?.data?.login
      if (signIn({
        token: userData.accessToken,
        expiresIn: 30 * 24 * 60 * 60 * 1000,
        tokenType: 'Bearer',
        authState: {
          userId: userData.id,
          isActivated: userData.isActivated,
          email: userData.email
        },
        refreshToken: userData.refreshToken,
        refreshTokenExpireIn: 30 * 24 * 60 * 60 * 1000
        // eslint-disable-next-line no-empty
      })) {
      } else {
        setMyError('Ошибка авторизации')
      }
    } catch (err) {
      setMyError({ ...err }?.networkError?.result?.errors[0]?.message)
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type='text'
            placeholder='Email'
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Пароль'
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        <button type='submit'>Войти</button>
      </form>
      {myError && <p>{myError}</p>}
      <br />
      <p>У вас еще нет аккаунта?</p>
      <Link to='/registration'>Зарегистрироваться</Link>
    </div>
  )
}
