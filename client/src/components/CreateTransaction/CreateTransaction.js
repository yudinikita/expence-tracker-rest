import React, {useContext, useState} from 'react';
import axios from 'axios';
import {AuthContext} from '../../context/AuthContext';
import {useHistory} from 'react-router-dom';

export const CreateTransaction = () => {
  const history = useHistory()

  const auth = useContext(AuthContext)

  const [form, setForm] = useState({
    amount: 0,
    category: {},
    createdAt: Date.now(),
    commentary: ''
  })

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value})
  }

  const categoryHandler = event => {
    setForm({ ...form, category: {_id: event.target.value}})
  }

  const createHandler = async () => {
    try {
      const response = await axios.post('/api/v1/transactions', {
        ...form
      }, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      })

      history.push(`/transactions/${response.data.data._id}`)

      return await response
    } catch (e) {
      if (e.response) {
        setErrorMessage(e.response.data.message)
      }
    }
  }

  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div>
      <h3>Создание операции</h3>
      <div style={{display: 'inline-grid'}}>
        <input
          placeholder="Сумма"
          id="amount"
          type="number"
          name="amount"
          value={form.amount}
          onChange={changeHandler}
        />

        <select
          id="category"
          name="category"
          value={form.category}
          onChange={categoryHandler}
        >
          <option>6145f2d739531e0b3eed0a5f</option>
          <option>6145f2d739531e0b3eed0a5f</option>
        </select>

        <input
          placeholder="Дата"
          id="createdAt"
          type="datetime-local"
          name="createdAt"
          value={form.createdAt}
          onChange={changeHandler}
        />

        <textarea
          placeholder="Комментарий"
          id="commentary"
          name="commentary"
          value={form.commentary}
          onChange={changeHandler}
        />

        {errorMessage && <div className="error"> {errorMessage} </div>}

        <button onClick={createHandler}>Добавить операцию</button>
      </div>
    </div>
  )
}