import clsx from 'clsx'
import { ComponentProps } from 'react'

export function TextButton({
  className,
  children,
  ...props
}: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={clsx('text-neutral-400 hover:text-neutral-700', className)}
    >
      {children}
    </button>
  )
}
