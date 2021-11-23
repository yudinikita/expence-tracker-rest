import React, { forwardRef } from 'react'
import SVG from 'react-inlinesvg'

export const Logo = forwardRef((props, ref) => (
  <SVG innerRef={ref} title='Логотип Денежки' {...props} />
))
