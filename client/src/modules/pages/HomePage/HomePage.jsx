import React from 'react'
import { Balance, HomePhrase, PageTitle } from '../../components'

export const HomePage = () => {
  const style = {
    marginTop: '15px',
    marginBottom: '25px',
    color: '#666666'
  }

  return (
    <>
      <PageTitle title='Главная' iconPath='/images/icons/emoji/waving-hand.webp' />
      <HomePhrase style={style} />
      <Balance />
    </>
  )
}
