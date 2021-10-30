import React from 'react'
import { TransactionForm, TransactionsList } from '../components/index'
import Modal from 'react-modal'

export const TransactionPage = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal () {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  return (
    <div>
      <h1>Операции 💰</h1>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={modalStyles}
      >
        <TransactionForm close={closeModal}/>
      </Modal>
      <button
        className='btn-reset'
        style={{ fontSize: '40px', fontWeight: 300 }}
        onClick={openModal}
      >+</button>
      <TransactionsList/>
    </div>
  )
}
