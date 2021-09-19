import React, {useContext, useState} from 'react';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';

export const AuthPage = () => {
  const auth = useContext(AuthContext)

  const [form, setForm] = useState({
    email: '', password: ''
  })

  const [errorMessage, setErrorMessage] = useState('');

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value})
  }

  const registerHandler = async () => {
    try {
      const response = await axios.post('/api/v1/auth/register', {
        ...form
      })

      return await response
    } catch (e) {
      setErrorMessage(e.response.data.message)
    }
  }

  const loginHandler = async () => {
    try {
      const response = await axios.post('/api/v1/auth/login', {
        ...form
      })

      auth.login(response.data.token, response.data.userId)
    } catch (e) {
      setErrorMessage(e.response.data.message)
    }
  }

  return (
    <div>
      <h1>Страница Авторизации</h1>
      <h3>Авторизация</h3>
      <div>
        <input
          type="text"
          id="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={changeHandler}
        />
        <input
          type="password"
          id="password"
          placeholder="Пароль"
          name="password"
          value={form.password}
          onChange={changeHandler}
        />
        {errorMessage && <div className="error"> {errorMessage} </div>}
      </div>
      <br/>
      <button onClick={loginHandler}>Войти</button>
      <button onClick={registerHandler}>Зарегистрироваться</button>
    </div>
  )
}