import { ForwardedRef, forwardRef } from 'react'

export interface ButtonProps {
  children?: string | JSX.Element | JSX.Element[]

  prefix?: JSX.Element
  suffix?: JSX.Element
}

const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { children, prefix, suffix } = props

    return (
      <button ref={ref}>
        {prefix}
        {children}
        {suffix}
      </button>
    )
  }
)

export default Button
