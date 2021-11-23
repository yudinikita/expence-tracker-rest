import React from 'react'
import { useSettings } from '../../../hooks'
import { MySelect } from '../../UI'
import { currencies } from '../../../data'

export const SettingsCurrency = () => {
  const { settings, saveSettings } = useSettings()

  const changeHandler = (e) => {
    saveSettings({ ...settings, currency: e.target.value })
  }

  return (
    <MySelect
      label='Знак валюты'
      data={currencies}
      onChange={changeHandler}
    />
  )
}
