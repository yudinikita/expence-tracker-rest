import React from 'react'
import styles from './MyButton.module.scss'

export const MyButton = (props) => {
  return (
    <input className={styles.button} type={props.type} value={props.text} onClick={props?.onClick}/>
  )
}
