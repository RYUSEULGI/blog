import clsx from 'clsx'
import { ComponentProps } from 'react'

export default function SubTitle({
  className,
  ...props
}: ComponentProps<'h3'>) {
  return (
    <h3
      {...props}
      className={clsx('text-xl font-medium md:text-2xl lg:text-3xl', className)}
    />
  )
}
