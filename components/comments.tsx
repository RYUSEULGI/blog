'use client'

import { useTheme } from 'next-themes'
import { Theme } from './layouts/navbar/theme-button'

export function Comments() {
  const { systemTheme, theme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === Theme.DARK

  return (
    <section
      style={{ width: '100%' }}
      ref={(element) => {
        if (!element) {
          return
        }

        const scriptElement = document.createElement('script')

        scriptElement.setAttribute('src', 'https://utteranc.es/client.js')
        scriptElement.setAttribute('repo', 'RYUSEULGL/blog')
        scriptElement.setAttribute('issue-term', 'pathname')
        scriptElement.setAttribute(
          'theme',
          isDark ? 'github-dark' : 'github-light',
        )
        scriptElement.setAttribute('crossorigin', 'anonymous')
        scriptElement.setAttribute('async', 'true')
        element.replaceChildren(scriptElement)
      }}
    />
  )
}
