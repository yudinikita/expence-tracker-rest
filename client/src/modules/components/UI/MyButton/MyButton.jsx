import React from 'react'
import styles from './MyButton.module.scss'

export const MyButton = ({
  myType,
  className,
  type,
  text,
  onClick
}) => {
  if (myType === 'second') {
    return (
      <input
        className={className + ' ' + styles.button + ' ' + styles.second}
        type={type}
        value={text}
        onClick={onClick}
      />
    )
  }

  return (
    <input
      className={className + ' ' + styles.button}
      type={type}
      value={text}
      onClick={onClick}
    />
  )
}
