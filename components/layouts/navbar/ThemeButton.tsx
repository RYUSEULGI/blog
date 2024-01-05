import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export function ThemeButton() {
  const { systemTheme, theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(isDark ? Theme.LIGHT : Theme.DARK)
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === Theme.DARK

  return (
    <button onClick={handleClick}>
      <div className="flex items-center justify-center w-8 h-8 text-yellow-300 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700">
        {isDark ? (
          <MoonIcon className="w-5 h-5" />
        ) : (
          <SunIcon className="w-5 h-5" />
        )}
      </div>
    </button>
  )
}
