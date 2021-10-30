import React from 'react'
import styles from './MySelect.module.scss'

export const MySelect = React.forwardRef(({ onChange, onBlur, name, label, data }, ref) => (
  <div className={styles.group}>
    <select className={styles.select} name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      {data.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
    </select>
    <div className={styles.label}>{label}</div>
  </div>
))
