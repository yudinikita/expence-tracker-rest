import { useSettings } from '../../../hooks'
import { useEffect, useState } from 'react'
import { getRandomItems } from '../../../utils/array'
import { homePhrases } from '../../../data'

export const useHomePhrase = () => {
  const { settings, saveSettings } = useSettings()
  const [phrase, setPhrase] = useState('Добро пожаловать!')

  // eslint-disable-next-line
  useEffect(() => setPhrase(getPhrase()), [])

  const getPhrase = () => {
    if (settings.homePhrase) return settings.homePhrase
    const getRandomPhrase = getRandomItems(homePhrases)
    saveSettings({ ...settings, homePhrase: getRandomPhrase })
    return getRandomPhrase
  }

  return { phrase }
}
