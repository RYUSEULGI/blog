import Link from 'next/link'
import { ComponentProps } from 'react'

export function LinkExternal({
  ref = '_',
  href,
  children,
  ...props
}: ComponentProps<'a'>) {
  return (
    <Link
      {...props}
      href={href ?? '/'}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  )
}
