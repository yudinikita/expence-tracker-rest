import React from 'react'
import { useHistory } from 'react-router-dom'
import { InnerNavigate } from '../../components/index'
import { Content404Page } from './Content404Page'
import { MyButton } from '../../components/UI'

export const Page404 = () => {
  const history = useHistory()

  const goHome = () => history.push('/')
  const goHelp = () => history.push('/help')

  return (
    <>
      <InnerNavigate title='Ошибка 404' linkPath='/' />

      <Content404Page />

      <p>Такой страницы больше нет или она никогда не&#160;существовала.</p>

      <MyButton onClick={goHome} type='button' text='На главную' />
      <br /><br />
      <MyButton onClick={goHelp} type='button' myType='second' text='Помощь' />
    </>
  )
}
