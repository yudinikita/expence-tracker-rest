import React from 'react'
import Loader from 'react-loader-spinner'

const style = {
  display: 'flex',
  margin: '50px auto',
  justifyContent: 'center'
}

export const MyLoader = () => (
  <Loader
    type='Bars'
    color='#FFCF26'
    height={75}
    width={75}
    style={style}
  />
)
