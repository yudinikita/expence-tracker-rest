import React, { useState } from 'react'
import { ModalSignOut, PageTitle, SettingsNavigate } from '../..'

export const SettingsMain = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <PageTitle title='Настройки' iconPath='/images/icons/emoji/settings.webp' />
      <button onClick={openModal} className='btn-reset linkSecond'>
        Выйти из аккаунта
      </button>

      <ModalSignOut isOpen={modalIsOpen} onRequestClose={closeModal} />

      <SettingsNavigate />
    </>
  )
}
