import { LinkExternal } from '@/components/link-external'
import React from 'react'

export function Footer() {
  return (
    <footer className="pb-8 text-sm text-neutral-800 dark:text-neutral-400">
      <div className="flex flex-col space-y-1">
        <span>
          © 2024 skeyyy · Powered by{' '}
          <LinkExternal href="https://nextjs.org">Next JS.</LinkExternal>
        </span>
      </div>
    </footer>
  )
}
