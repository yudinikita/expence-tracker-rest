import React from 'react'

export const TransactionItem = (props) => {
  const {amount, commentary, createdAt} = props.transaction
  const {title} = props.transaction.category

  return (
    <div style={{border: '1px solid black', maxWidth: 'fit-content', marginTop: '5px'}}>
      <div style={{display: 'flex'}}>
        <h3>{title}</h3>
        <h3 style={{paddingLeft: '30px'}}>{amount}</h3>
      </div>
      <p>{commentary}</p>
    </div>
  )
}
