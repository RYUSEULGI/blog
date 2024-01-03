import clsx from 'clsx'
import { ComponentProps } from 'react'

export default function BodyText({
  className,
  ...props
}: ComponentProps<'h4'>) {
  return (
    <h4
      {...props}
      className={clsx('text-base font-semibold lg:text-lg', className)}
    />
  )
}
