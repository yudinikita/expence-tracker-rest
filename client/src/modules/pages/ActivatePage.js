import React, { useState } from 'react'
import { useAuthUser } from 'react-auth-kit'
import { useParams } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { ACTIVATE_USER } from '../graphql/mutations/auth.mutation'
import { useSignOut } from 'react-auth-kit'

export const ActivatePage = () => {
  const activateId = useParams()?.id
  const signOut = useSignOut()


  const [myError, setMyError] = useState('')

  const [activateUser] = useMutation(ACTIVATE_USER, {
    variables: {
      activationLink: activateId
    }
  })

  const submitHandler = () => {
    try {
      activateUser().then()
    } catch (err) {
      setMyError({ ...err }?.networkError?.result?.errors[0]?.message)
    }
  }

  if(activateId) {
    submitHandler()
    signOut()
  }

  return (
    <div>
      <h1>Страница активации</h1>
      <p>Активируйте аккаунт. Перейдите на вашу почту и перейти по ссылке активации.</p>
      {myError && <p>{myError}</p>}
    </div>
  )
}
