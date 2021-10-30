import React, { useContext, useState } from 'react'
import { RegistrationForm } from '../components/Auth/Registration/RegistrationForm'

export const RegistrationPage = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <RegistrationForm/>
    </div>
  )
}
