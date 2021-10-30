import React from 'react'
import styles from './MyInput.module.scss'

export const MyInput = (props) => {
  const {
    label,
    required,
    type,
    register,
    registerLabel
  } = props

  if (type === 'number') {
    return (
      <div className={styles.group}>
        <input
          type={type}
          className={styles.input}
          placeholder={label}
          step='1'
          {...register(registerLabel, { required, setValueAs: (value) => parseInt(value) })}
        />
        <div className={styles.label}>
          {label}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.group}>
      <input
        type={type}
        className={styles.input}
        placeholder={label}
        {...register(registerLabel, { required })}
      />
      <div className={styles.label}>
        {label}
      </div>
    </div>
  )
}
