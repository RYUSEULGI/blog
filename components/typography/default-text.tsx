import clsx from 'clsx'
import { ComponentProps } from 'react'

export default function DefaultText({
  className,
  ...props
}: ComponentProps<'span'>) {
  return (
    <span {...props} className={clsx('text-base font-normal', className)} />
  )
}
