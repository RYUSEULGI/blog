import clsx from 'clsx'
import Link from 'next/link'
import { ComponentProps } from 'react'

export default function TextHover({
  className,
  children,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        'flex items-center justify-center rounded-lg hover:bg-gray-100',
        className,
      )}
    >
      {children}
    </div>
  )
}
