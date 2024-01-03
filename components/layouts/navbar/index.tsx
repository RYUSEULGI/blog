import { useScrollTop } from '@/hooks/use-scroll-top'
import clsx from 'clsx'
import { ThemeButton } from './ThemeButton'
import { NavbarMenus } from './menus'

export function Navbar() {
  const scrolled = useScrollTop()

  return (
    <nav
      className={clsx(
        'z-50 fixed top-0 left-0 right-0 w-full h-16 bg-white dark:bg-[#1F1F1F]',
        scrolled && 'border-b shadow-sm',
      )}
    >
      <div className="h-full mx-auto max-w-3xl px-4 lg:max-w-6xl lg:px-6">
        <div className="h-full w-full flex items-center justify-between">
          <NavbarMenus />
          <ThemeButton />
        </div>
      </div>
    </nav>
  )
}
