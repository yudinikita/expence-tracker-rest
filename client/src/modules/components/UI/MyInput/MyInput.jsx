import React from 'react'
import styles from './MyInput.module.scss'

export const MyInput = (props) => {
  const noop = () => {}

  const {
    label = '',
    required = false,
    type = 'text',
    register = noop,
    registerLabel = '',
    value = '',
    title = '',
    onChange = noop
  } = props

  switch (type) {
    case 'number':
      return (
        <div className={styles.group}>
          <input
            type={type}
            className={styles.input}
            placeholder={label}
            step='1'
            required={required}
            {...register(registerLabel, { required, setValueAs: (value) => parseInt(value) })}
          />
          <div className={styles.label}>
            {label}
          </div>
        </div>
      )
    case 'datetime-local':
      return (
        <div className={styles.group}>
          <input
            type={type}
            className={styles.input}
            placeholder={label}
            title={title}
            required={required}
            onChange={onChange}
            {...register(registerLabel, { required })}
          />
          <div className={styles.label}>
            {label}
          </div>
        </div>
      )
    default:
      return (
        <div className={styles.group}>
          <input
            type={type}
            value={value}
            className={styles.input}
            placeholder={label}
            maxLength='256'
            title={title}
            onChange={onChange}
            {...register(registerLabel, { required })}
          />
          <div className={styles.label}>
            {label}
          </div>
        </div>
      )
  }
}
