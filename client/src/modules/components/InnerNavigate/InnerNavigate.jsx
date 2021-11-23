import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styles from './InnerNavigate.module.scss'
import SVG from 'react-inlinesvg'

export const InnerNavigate = ({
  title,
  linkPath,
  haveBtn = true,
  haveTitle = true
}) => {
  const history = useHistory()

  const handleClick = () => {
    if (linkPath) return history.push(linkPath)
    return history.goBack()
  }

  const GoButton = () => (
    <button onClick={handleClick} className={`${styles.button}`} title='Назад'>
      <SVG src='/images/icons/arrow-left.svg' loader='<' />
    </button>
  )

  return (
    <div className={styles.navigate}>
      {haveBtn && <GoButton />}
      {haveTitle && <h2>{title}</h2>}
    </div>
  )
}

InnerNavigate.propTypes = {
  title: PropTypes.string,
  linkPath: PropTypes.string,
  haveBtn: PropTypes.bool,
  haveTitle: PropTypes.bool
}
