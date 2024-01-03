import clsx from 'clsx'
import { ComponentProps } from 'react'

export default function Title({ className, ...props }: ComponentProps<'h1'>) {
  return (
    <h1
      {...props}
      className={clsx(
        'mt-10 mb-4 text-2xl font-bold md:text-3xl lg:text-4xl',
        className,
      )}
    />
  )
}
