import { ReactNode } from 'react'

export function Label({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg px-2 py-0.5 bg-gray-100 dark:bg-gray-500">
      <p className="font-normal text-base text-gray-500 dark:text-gray-100">
        {children}
      </p>
    </div>
  )
}
