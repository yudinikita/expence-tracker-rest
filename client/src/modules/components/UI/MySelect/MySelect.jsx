import React from 'react'
import styles from './MySelect.module.scss'

export const MySelect = React.forwardRef(({
  onChange,
  onBlur,
  name,
  label,
  data,
  style
}, ref) => (
  <div
    className={styles.group}
    style={{ ...style }}
  >
    <select
      className={styles.select}
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
    >
      {data?.map(option =>
        <option
          key={option._id || option.title}
          value={option._id}
        >
          {option.title}
        </option>
      )}
    </select>
    <div className={styles.label}>{label}</div>
  </div>
))

// TODO [сервер]: сделать initDefaultUserSettings со стандартными категориями и валютами
// TODO [сервер]: добавить валюты в модель юзера и отдавать их по запросу
