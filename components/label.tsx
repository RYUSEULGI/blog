import { ReactNode } from 'react'

export function Label({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg px-2 py-0.5 bg-orange-100">
      <p className="font-normal text-xs text-orange-500">{children}</p>
    </div>
  )
}
