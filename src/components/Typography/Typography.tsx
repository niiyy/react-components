import React, { forwardRef } from 'react'

export type TTypographyTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

export interface ITypographyProps {
  type: TTypographyTypes
}

const Typography = forwardRef((props, ref) => {
  return <div>Typography</div>
})

export default Typography
