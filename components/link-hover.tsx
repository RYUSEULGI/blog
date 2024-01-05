import clsx from 'clsx'
import Link from 'next/link'
import { ComponentProps } from 'react'

export default function LinkHover({
  ref,
  className,
  href,
  children,
  ...props
}: ComponentProps<'a'>) {
  return (
    <Link
      {...props}
      href={href ?? '/'}
      className={clsx(
        'flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700',
        className,
      )}
    >
      {children}
    </Link>
  )
}
