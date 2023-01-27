import { ForwardedRef, forwardRef } from 'react'

export interface ILoaderHolder {
  width?: number
  height?: number
}

export interface ILoaderHolderItem {
  width?: number
  height?: number
}

const LoaderHolder = forwardRef(
  (props: ILoaderHolderItem, ref: ForwardedRef<HTMLDivElement>) => {
    const { height, width } = props

    return (
      <div
        style={{
          width: width ?? 100,
          height: height ?? 10,
          backgroundColor: 'red',
        }}
        ref={ref}
        className="loader__placeholder"
      ></div>
    )
  }
)

export const LoaderHolderItem = forwardRef(
  (props: ILoaderHolderItem, ref: ForwardedRef<HTMLDivElement>) => {
    const { height, width } = props

    return (
      <div
        style={{ width: width !== undefined ? '100%' : `${width}%` }}
        ref={ref}
        className="loader__placeholder__item"
      ></div>
    )
  }
)

export default LoaderHolder
