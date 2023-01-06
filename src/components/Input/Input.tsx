import {
  InputHTMLAttributes,
  forwardRef,
  ForwardedRef,
  CSSProperties,
} from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefixElement?: JSX.Element
  suffixElement?: JSX.Element
}

const inputWrapperStyle: CSSProperties = {
  width: 'fit-content',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  border: '1px solid white',
  borderRadius: '10px',
}

const inputStyle: CSSProperties = {
  border: 'none',
  height: '25px',
  background: 'none',
  color: 'white',
  outline: 'none',
}

const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { prefixElement, suffixElement, ...rest } = props

    return (
      <div style={inputWrapperStyle} className="input-wrapper">
        {prefixElement}
        <input style={inputStyle} ref={ref} {...rest} />
        {suffixElement}
      </div>
    )
  }
)

export default Input
