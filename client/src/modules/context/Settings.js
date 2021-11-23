import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SettingsContext = React.createContext({})

const defaultSettings = {
  homePhrase: '',
  currency: '₽'
}

export const SettingsProvider = ({ children, settings }) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings
  )

  const saveSettings = (values) => {
    setCurrentSettings(values)
  }

  return (
    <SettingsContext.Provider value={{ settings: currentSettings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContext

SettingsProvider.propTypes = {
  children: PropTypes.node,
  settings: PropTypes.object
}
