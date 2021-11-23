import React from 'react'
import PropTypes from 'prop-types'
import { useSignOut } from 'react-auth-kit'
import { MyModal } from '../..'
import { MyButton } from '../../UI'

export const ModalSignOut = ({
  isOpen,
  onRequestClose
}) => {
  const signOut = useSignOut()

  return (
    <MyModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div>
        <h2>Выход из аккаунта</h2>
        <p>Вы уверены, что хотите выйти из аккаунта?</p>
        <MyButton type='button' text='Выйти' onClick={signOut} />
        <br /><br />
        <MyButton type='button' myType='second' text='Отмена' onClick={onRequestClose} />
      </div>
    </MyModal>
  )
}

ModalSignOut.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func
}
