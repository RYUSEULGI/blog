import LinkHover from '@/components/link-hover'
import { ReactNode } from 'react'

export function NavbarMenus() {
  return (
    <ul className="flex items-center gap-3 cursor-pointer">
      <Menu href="/">Home</Menu>
      <Menu href="/posts">Posts</Menu>
      <Menu href="/tags">Tags</Menu>
    </ul>
  )
}

function Menu({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <LinkHover
        href={href}
        className="py-2 px-3 text-gray-700 dark:text-white"
      >
        {children}
      </LinkHover>
    </li>
  )
}
