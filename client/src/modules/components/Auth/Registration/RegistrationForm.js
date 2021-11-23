import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignIn } from 'react-auth-kit'
import { useMutation } from '@apollo/client'
import { REGISTRATION_USER } from '../../../graphql/mutations/auth.mutation'

export const RegistrationForm = () => {
  const signIn = useSignIn()

  const [myError, setMyError] = useState('')

  const [formData, setFormData] = useState({ email: '', password: '', repeatPassword: '' })

  // eslint-disable-next-line
  const [registrationUser, { data, loading, error }] = useMutation(REGISTRATION_USER, {
    variables: {
      userInput: {
        email: formData.email,
        password: formData.password,
        repeatPassword: formData.repeatPassword
      }
    },
    errorPolicy: 'all'
  })

  if (loading) return 'Загрузка...'

  const submitHandler = async e => {
    e.preventDefault()
    try {
      const res = await registrationUser()
      const userData = res?.data?.registration
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
        setMyError('Ошибка при регистрации')
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
        <div>
          <input
            type='password'
            placeholder='Повторите пароль'
            onChange={(e) => setFormData({ ...formData, repeatPassword: e.target.value })}
          />
        </div>

        <button type='submit'>Зарегистрироваться</button>
      </form>
      {myError && <p>{myError}</p>}
      <br />
      <p>У вас уже есть аккаунт?</p>
      <Link to='/'>Войти</Link>
    </div>
  )
}
