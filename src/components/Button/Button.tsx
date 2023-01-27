import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'

export type IButtonTypes = 'primary' | 'danger' | 'succes'
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | JSX.Element | JSX.Element[]

  prefixElement?: JSX.Element
  suffixElement?: JSX.Element
  bType?: IButtonTypes
  loading?: boolean
}

const Button = forwardRef(
  (props: IButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      prefixElement,
      suffixElement,
      className,
      bType = 'primary',
      loading,
    } = props

    return (
      <button
        className={`btn ${className} ${bType} ${loading ? 'loading' : ''}`}
        ref={ref}
      >
        {prefixElement}
        {children}
        {suffixElement}
      </button>
    )
  }
)

export default Button
