import React from 'react'
import styles from '../MyCheckbox/MyCheckbox.module.scss'

export const MyCheckbox = (props) => {
  const {
    data,
    registerLabel
  } = props

  return (
    <div className={styles.group}>
      {data.map((input, index) => (
        <div key={input.value}>
          <input
            type="radio"
            id={input.value}
            name={registerLabel}
            value={input.value}
            defaultChecked={index === 0}
            className={styles.input}
          />
          <label
            htmlFor={input.value}
            className={styles.label}
          >{input.name}</label>
        </div>
      ))}
    </div>
  )
}
